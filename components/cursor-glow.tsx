"use client";

import { useEffect, useRef } from "react";

type TrailPoint = { x: number; y: number; t: number };

type FlyingItem = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
  emoji: string;
  radius: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
};

type Bubble = {
  x: number;
  y: number;
  vy: number;
  text: string;
  life: number;
  maxLife: number;
};

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

const TRAIL_MS = 220;
const CORE_COLOR = "rgba(240, 250, 255, 0.95)";
const GLOW_COLOR = "rgba(59, 79, 224, 0.9)";
const GLOW_COLOR_SOFT = "rgba(34, 211, 238, 0.55)";
const GRAVITY = 1100;
const EMOJIS = ["💵", "🧾", "💰", "🪙", "💳"];
const MAX_ITEMS = 10;
const PARTICLE_COLORS = ["#3B4FE0", "#22D3EE", "#FFD86B", "#5560E0"];
const SLICE_PHRASES = [
  "Hiya!",
  "Cha-ching!",
  "Sliced!",
  "Nice cut!",
  "Whoosh!",
  "Split!",
  "Yummy!",
  "Boom!",
  "Rupiah!",
  "Ka-ching!",
  "Pertalite!",
  "Zing!",
  "Slice!",
  "Boom-shaka-laka!",
  "Bam!",
  "Zap!",
  "Pow!",
  "MBG!",
  "+1",
];

function distToSegment(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number
) {
  const dx = bx - ax;
  const dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  let t = lenSq === 0 ? 0 : ((px - ax) * dx + (py - ay) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + t * dx;
  const cy = ay + t * dy;
  return Math.hypot(px - cx, py - cy);
}

export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<TrailPoint[]>([]);
  const items = useRef<FlyingItem[]>([]);
  const particles = useRef<Particle[]>([]);
  const bubbles = useRef<Bubble[]>([]);
  const meteors = useRef<Meteor[]>([]);
  const raf = useRef<number>(0);
  const lastTime = useRef<number>(performance.now());
  const nextSpawnIn = useRef<number>(1200);
  const nextMeteorIn = useRef<number>(2500);
  const audioCtx = useRef<AudioContext | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getAudioCtx = () => {
      if (!audioCtx.current) {
        const Ctor =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        audioCtx.current = new Ctor();
      }
      if (audioCtx.current.state === "suspended") {
        audioCtx.current.resume();
      }
      return audioCtx.current;
    };

    const unlockAudio = () => getAudioCtx();
    const handleVisibility = () => {
      if (document.visibilityState === "visible") unlockAudio();
    };
    window.addEventListener("pointerdown", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
    document.addEventListener("visibilitychange", handleVisibility);

    const playSliceSound = () => {
      const ac = getAudioCtx();
      const now = ac.currentTime;

      const whoosh = ac.createOscillator();
      const whooshGain = ac.createGain();
      whoosh.type = "sine";
      whoosh.frequency.setValueAtTime(900, now);
      whoosh.frequency.exponentialRampToValueAtTime(120, now + 0.15);
      whooshGain.gain.setValueAtTime(0.18, now);
      whooshGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      whoosh.connect(whooshGain).connect(ac.destination);
      whoosh.start(now);
      whoosh.stop(now + 0.17);

      const ding = ac.createOscillator();
      const dingGain = ac.createGain();
      ding.type = "triangle";
      ding.frequency.setValueAtTime(1400 + Math.random() * 400, now + 0.04);
      dingGain.gain.setValueAtTime(0.0001, now + 0.04);
      dingGain.gain.exponentialRampToValueAtTime(0.15, now + 0.06);
      dingGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);
      ding.connect(dingGain).connect(ac.destination);
      ding.start(now + 0.04);
      ding.stop(now + 0.34);
    };

    const playMeteorSound = () => {
      const ac = getAudioCtx();
      const now = ac.currentTime;

      const osc = ac.createOscillator();
      const gain = ac.createGain();
      const filter = ac.createBiquadFilter();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(1600, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.9);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2200, now);
      filter.frequency.exponentialRampToValueAtTime(400, now + 0.9);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
      osc.connect(filter).connect(gain).connect(ac.destination);
      osc.start(now);
      osc.stop(now + 0.92);
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMove = (e: MouseEvent) => {
      points.current.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    };
    window.addEventListener("mousemove", handleMove);

    const spawnItem = () => {
      if (items.current.length >= MAX_ITEMS) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = w * 0.15 + Math.random() * w * 0.7;
      const vy = -(h * 0.85 + Math.random() * h * 0.4);
      items.current.push({
        x,
        y: h + 60,
        vx: (Math.random() - 0.5) * 260,
        vy,
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 6,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        radius: 56,
      });
    };

    const spawnMeteor = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const fromLeft = Math.random() > 0.5;
      const speed = 1000 + Math.random() * 600;
      const angleDeg = 20 + Math.random() * 25;
      const rad = (angleDeg * Math.PI) / 180;
      const dir = fromLeft ? 1 : -1;
      meteors.current.push({
        x: fromLeft ? -80 : w + 80,
        y: -80 + Math.random() * h * 0.35,
        vx: dir * speed * Math.cos(rad),
        vy: speed * Math.sin(rad),
        life: 0,
        maxLife: 3,
      });
      playMeteorSound();
    };

    const spawnParticles = (x: number, y: number) => {
      const count = 16;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const speed = 120 + Math.random() * 180;
        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 100,
          life: 0,
          maxLife: 0.5 + Math.random() * 0.3,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
          size: 40 + Math.random() * 50,
        });
      }
    };

    const spawnBubble = (x: number, y: number) => {
      bubbles.current.push({
        x,
        y,
        vy: -55,
        text: SLICE_PHRASES[Math.floor(Math.random() * SLICE_PHRASES.length)],
        life: 0,
        maxLife: 0.9,
      });
    };

    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - lastTime.current) / 1000);
      lastTime.current = now;

      points.current = points.current.filter((p) => now - p.t < TRAIL_MS);

      nextSpawnIn.current -= dt * 1000;
      if (nextSpawnIn.current <= 0) {
        spawnItem();
        nextSpawnIn.current = 700 + Math.random() * 700;
      }

      nextMeteorIn.current -= dt * 1000;
      if (nextMeteorIn.current <= 0) {
        spawnMeteor();
        nextMeteorIn.current = 2500 + Math.random() * 5000;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;

      for (let i = items.current.length - 1; i >= 0; i--) {
        const item = items.current[i];
        item.vy += GRAVITY * dt;
        item.x += item.vx * dt;
        item.y += item.vy * dt;
        item.rotation += item.vr * dt;

        let sliced = false;
        const pts = points.current;
        for (let j = 1; j < pts.length && !sliced; j++) {
          const a = pts[j - 1];
          const b = pts[j];
          if (distToSegment(item.x, item.y, a.x, a.y, b.x, b.y) < item.radius) {
            sliced = true;
          }
        }

        if (sliced) {
          spawnParticles(item.x, item.y);
          spawnBubble(item.x, item.y);
          playSliceSound();
          items.current.splice(i, 1);
        } else if (item.y > h + 60 || item.x < -60 || item.x > w + 60) {
          items.current.splice(i, 1);
        }
      }

      for (let i = bubbles.current.length - 1; i >= 0; i--) {
        const b = bubbles.current[i];
        b.life += dt;
        if (b.life >= b.maxLife) {
          bubbles.current.splice(i, 1);
          continue;
        }
        b.y += b.vy * dt;
      }

      for (let i = meteors.current.length - 1; i >= 0; i--) {
        const m = meteors.current[i];
        m.life += dt;
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        if (
          m.life >= m.maxLife ||
          m.x < -200 ||
          m.x > w + 200 ||
          m.y > h + 200
        ) {
          meteors.current.splice(i, 1);
        }
      }

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          particles.current.splice(i, 1);
          continue;
        }
        p.vy += GRAVITY * 0.6 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
      }

      ctx.clearRect(0, 0, w, h);

      for (const m of meteors.current) {
        const angle = Math.atan2(m.vy, m.vx);
        const tailLen = 160;
        const tailX = m.x - Math.cos(angle) * tailLen;
        const tailY = m.y - Math.sin(angle) * tailLen;
        const fadeIn = Math.min(1, m.life / 0.15);

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${0.95 * fadeIn})`);
        grad.addColorStop(0.35, `rgba(180,200,255,${0.5 * fadeIn})`);
        grad.addColorStop(1, "rgba(180,200,255,0)");

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(180,200,255,0.9)";
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(255,255,255,${fadeIn})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      for (const item of items.current) {
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);
        ctx.font = "88px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowColor = "rgba(0,0,0,0.25)";
        ctx.shadowBlur = 8;
        ctx.fillText(item.emoji, 0, 0);
        ctx.restore();
      }

      for (const p of particles.current) {
        const alpha = Math.max(0, 1 - p.life / p.maxLife);
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      const pts = points.current;
      if (pts.length > 1) {
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1];
          const b = pts[i];
          const age = (now - b.t) / TRAIL_MS;
          const alpha = Math.max(0, 1 - age);
          const width = Math.max(1, 11 * alpha);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.lineCap = "round";

          ctx.strokeStyle = GLOW_COLOR_SOFT;
          ctx.globalAlpha = alpha * 0.5;
          ctx.lineWidth = width * 3;
          ctx.shadowColor = GLOW_COLOR;
          ctx.shadowBlur = 18;
          ctx.stroke();

          ctx.strokeStyle = GLOW_COLOR;
          ctx.globalAlpha = alpha * 0.9;
          ctx.lineWidth = width;
          ctx.shadowBlur = 10;
          ctx.stroke();

          ctx.strokeStyle = CORE_COLOR;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = Math.max(1, width * 0.35);
          ctx.shadowBlur = 4;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      for (const b of bubbles.current) {
        const t = b.life / b.maxLife;
        const alpha = t < 0.15 ? t / 0.15 : Math.max(0, 1 - (t - 0.15) / 0.85);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = "bold 22px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const textWidth = ctx.measureText(b.text).width;
        const boxW = textWidth + 28;
        const boxH = 40;
        const bx = b.x - boxW / 2;
        const by = b.y - boxH / 2;
        ctx.fillStyle = "rgba(20, 26, 71, 0.9)";
        ctx.shadowColor = "rgba(59, 79, 224, 0.6)";
        ctx.shadowBlur = 14;
        ctx.beginPath();
        if (typeof ctx.roundRect === "function") {
          ctx.roundRect(bx, by, boxW, boxH, 20);
        } else {
          ctx.rect(bx, by, boxW, boxH);
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#FFD86B";
        ctx.fillText(b.text, b.x, b.y + 1);
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
    />
  );
}
