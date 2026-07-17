import Link from "next/link";
import Image from "next/image";
import {
  Check,
  CreditCard,
  InstagramIcon,
  LinkedinIcon,
  MessageSquare,
  Receipt,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PricingToggle } from "@/components/pricing-toggle";

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.365 1.43c0 1.14-.417 2.06-1.25 2.9-.98.99-2.17 1.56-3.42 1.46-.14-1.11.4-2.22 1.24-3.06.94-.93 2.36-1.55 3.43-1.3zM20.6 17.3c-.55 1.28-.81 1.85-1.51 2.98-.98 1.58-2.36 3.55-4.07 3.57-1.52.02-1.91-.99-3.98-.98-2.06.01-2.5.99-4.02.98-1.71-.02-3.02-1.79-4-3.37C.4 16.62-.5 12.14 1 9.15c1.06-2.11 2.86-3.35 4.55-3.35 1.7 0 2.77 1 4.18 1 1.36 0 2.2-1 4.18-1 1.32 0 2.99.62 4.03 1.7-3.54 1.94-2.96 6.98.66 9.8z" />
    </svg>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.6 2.7c-.4.3-.6.8-.6 1.4v15.8c0 .6.2 1.1.6 1.4l.1.1L13 12l-9.3-9.3z" />
      <path d="M16.2 15.2 13 12l3.2-3.2 3.9 2.2c.9.5.9 1.4 0 1.9l-3.9 2.3z" />
      <path d="M13 12l-9.3 9.3c.4.3 1 .3 1.7 0l10.8-6.1-3.2-3.2z" />
      <path d="M16.2 8.8 5.4 2.7c-.7-.4-1.3-.4-1.7 0L13 12l3.2-3.2z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82c-.94-.9-1.46-2.14-1.46-3.42h-3.06v14.28c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.28 0 .55.04.8.12V10.7a5.85 5.85 0 0 0-.8-.06 5.78 5.78 0 1 0 5.78 5.78V9.4a7.16 7.16 0 0 0 4.24 1.37V7.7a3.98 3.98 0 0 1-2.78-1.88z" />
    </svg>
  );
}

function ThreadsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2.5c4.7 0 7.3 3 7.3 7.6 0 3.3-1.4 5.3-3.9 6.2-2.1.75-4.1.35-4.85-1.1-.65-1.25 0-2.65 1.6-3.15 1.75-.55 3.6.2 4.2 2 .55 1.6 0 3.7-1.6 5.2-1.5 1.4-3.6 2.1-5.85 2.1-4.3 0-7.4-3.1-7.4-8.85S6.15 2.5 12 2.5" />
    </svg>
  );
}

function WaveDivider({
  flip,
  className,
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
    >
      <path
        d={
          flip
            ? "M0,0 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,100 L0,100 Z"
            : "M0,100 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col [zoom:1.2]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/90">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/billbro-logo.png"
                alt="BillBro Logo"
                width={36}
                height={36}
                className="rounded-md shadow-sm"
              />
              <span className="inline-block font-bold text-xl">BillBro</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#how"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
              >
                How it works
              </Link>
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
              >
                FAQ
              </Link>
              <Link
                href="#support"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
              >
                Support
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button
              size="sm"
              asChild
              className="rounded-full bg-blue-600 shadow-sm shadow-blue-600/20 hover:bg-blue-700"
            >
              <Link
                href="https://apps.apple.com/us/app/billbro-split-bills-for-trips/id6737456189"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the app
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full overflow-hidden py-10 md:py-16 lg:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950 dark:via-background dark:to-background"
          />
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-[70%] rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-500/10"
          />
          <div
            aria-hidden
            className="absolute -top-10 right-0 -z-10 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/10"
          />
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 py-1 pl-2.5 pr-1 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  BillBot reads the receipt for you
                  <span className="rounded-full bg-blue-900 px-1.5 py-0.5 text-[10px] font-extrabold tracking-wide text-white dark:bg-blue-950">
                    BETA
                  </span>
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Split bills.
                    <br />
                    Not{" "}
                    <span className="font-serif italic text-blue-600 dark:text-blue-400">
                      friendships.
                    </span>
                  </h1>
                  <p className="max-w-[520px] text-muted-foreground md:text-xl">
                    Snap a photo of any receipt — BillBot itemizes it, splits
                    it fairly by person, and tells everyone exactly what they
                    owe. No spreadsheets, no group-chat math.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-foreground text-background shadow-lg hover:bg-foreground/90"
                  >
                    <Link
                      href="https://apps.apple.com/us/app/billbro-split-bills-for-trips/id6737456189"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppleIcon className="h-4 w-4" />
                      <span className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] font-normal opacity-75">
                          Download on the
                        </span>
                        <span className="text-sm font-bold">App Store</span>
                      </span>
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    disabled
                    className="rounded-full cursor-not-allowed opacity-70"
                  >
                    <PlayIcon className="h-4 w-4" />
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] font-normal opacity-75">
                        Coming soon on
                      </span>
                      <span className="text-sm font-bold">Google Play</span>
                    </span>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="rounded-full">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-blue-500 text-blue-500"
                      />
                    ))}
                  </div>
                  <span>Loved by travelers splitting bills together</span>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative w-[260px] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-900/30 sm:w-[300px]">
                  <Image
                    src="/images/app-screenshot.png"
                    alt="BillBro add bills screen"
                    width={1242}
                    height={2688}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                <div className="absolute -left-4 top-16 hidden items-center gap-2 rounded-xl border bg-background/90 px-4 py-3 shadow-lg backdrop-blur sm:flex">
                  <div className="rounded-full bg-green-100 p-1.5 dark:bg-green-900">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-300" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold leading-none">Settled up</p>
                    <p className="text-xs text-muted-foreground">
                      Dinner split with 4 friends
                    </p>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-24 hidden items-center gap-2 rounded-xl border bg-background/90 px-4 py-3 shadow-lg backdrop-blur sm:flex">
                  <div className="rounded-full bg-blue-100 p-1.5 dark:bg-blue-900">
                    <Receipt className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold leading-none">Receipt scanned</p>
                    <p className="text-xs text-muted-foreground">$84.20 detected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="w-full">
          {/* Step 1 — Snap the receipt */}
          <div className="bg-blue-100 py-14 dark:bg-blue-950 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-300">
                    Step 1
                  </div>
                  <h2 className="mt-3 font-serif text-4xl italic text-blue-900 dark:text-blue-50 md:text-5xl">
                    Snap the receipt.
                  </h2>
                  <p className="mt-4 max-w-md text-blue-900/70 dark:text-blue-100/80 md:text-lg">
                    Take a photo of any bill, tab, or invoice — restaurant,
                    groceries, group trip, doesn&apos;t matter.
                  </p>
                  <Link
                    href="#features"
                    className="mt-6 inline-flex items-center gap-1 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-950 dark:bg-white dark:text-blue-900 dark:hover:bg-blue-50"
                  >
                    Read more
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/70 shadow-inner dark:bg-white/10">
                    <Receipt className="h-16 w-16 text-blue-600 dark:text-blue-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-blue-100 dark:bg-blue-950">
            <WaveDivider flip className="h-14 w-full text-blue-900 md:h-20" />
            <span
              aria-hidden
              className="animate-surf absolute left-[18%] top-0 text-6xl md:top-1 md:text-8xl"
            >
              🏄
            </span>
          </div>

          {/* Step 2 — BillBot splits it */}
          <div className="bg-blue-900 py-14 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
                <div className="order-2 flex items-center justify-center md:order-1">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">
                    <Wand2 className="h-16 w-16 text-sunshine" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-sunshine">
                    Step 2
                  </div>
                  <h2 className="mt-3 font-serif text-4xl italic text-white md:text-5xl">
                    BillBot splits it.
                  </h2>
                  <p className="mt-4 max-w-md text-blue-100/80 md:text-lg">
                    Our AI reads every line item, tax, and tip, then splits it
                    evenly or exactly by what each person ordered.
                  </p>
                  <Link
                    href="#features"
                    className="mt-6 inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-900">
            <WaveDivider flip className="h-14 w-full text-background md:h-20" />
          </div>

          {/* Step 3 — See it in action */}
          <div className="py-14 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="mx-auto flex max-w-2xl flex-col items-center space-y-3 text-center">
                <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Step 3
                </div>
                <h2 className="font-serif text-4xl italic tracking-tight md:text-5xl">
                  Everyone settles up.
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Send a link, track who&apos;s paid, and nudge friends
                  automatically when someone&apos;s slow to pay you back.
                </p>
              </div>
              <div className="mx-auto mt-10 flex max-w-md justify-center">
                <div className="relative w-[240px] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-900/30">
                  <Image
                    src="/images/net-balances.png"
                    alt="BillBro net balance screen"
                    width={1242}
                    height={2688}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-10 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="rounded-[32px] bg-blue-900 px-6 py-14 text-white sm:px-10 md:px-14 md:py-16">
              <div className="max-w-xl">
                <div className="text-xs font-extrabold uppercase tracking-widest text-sunshine">
                  Features
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Built for the group chat that always owes someone money.
                </h2>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Receipt,
                    title: "OCR Scan",
                    body: "Point your camera at any receipt — BillBot reads every item, no manual entry.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Speech to Text",
                    body: "No need to type - just speak the expense details and BillBro will record it for you.",
                  },
                  {
                    icon: Users,
                    title: "Unlimited Members",
                    body: "Whether it's a small getaway or a large group vacation, BillBro can handle all your trip members.",
                  },
                  {
                    icon: Wand2,
                    title: "Smart Splitting",
                    body: "Charge people for exactly what they ordered, or split the whole bill fairly in one tap.",
                  },
                  {
                    icon: CreditCard,
                    title: "Debt Tracking",
                    body: "See a running ledger of every IOU so nobody has to be the one to ask.",
                  },
                  {
                    icon: Smartphone,
                    title: "Reminders",
                    body: "Gently remind friends to settle up with built-in notification features.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 bg-blue-900 p-8"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <feature.icon className="h-5 w-5 text-sunshine" />
                    </div>
                    <div>
                      <h3 className="font-bold">{feature.title}</h3>
                      <p className="mt-1.5 text-sm text-blue-200">
                        {feature.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-10 md:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-blue-950"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-800 dark:text-blue-50">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 py-8 md:grid-cols-2">
              <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>
                    Get started with basic features
                  </CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                  <p className="text-sm text-muted-foreground">Forever free</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Basic expense tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Up to 10 members per trip</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Basic bill splitting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Limited OCR scans (5/day)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link
                      href="https://apps.apple.com/us/app/billbro-split-bills-for-trips/id6737456189"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Free
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <PricingToggle />
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-10 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-800 dark:text-blue-50">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about BillBro.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-8">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="space-y-4 mt-4">
                  <div className="rounded-lg border p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                    <h3 className="font-semibold">What is BillBro?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      BillBro is an iOS app designed to help you split bills and
                      track expenses during trips with friends and family. It
                      makes it easy to keep track of who paid for what and who
                      owes whom.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                    <h3 className="font-semibold">
                      Do I need to create an account?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      No account needed. BillBro stores everything locally on
                      your device, so you can start splitting bills right
                      away.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                    <h3 className="font-semibold">Is my data secure?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes. Your data stays local on your device and is never
                      synced to a server, so it's not shared with third
                      parties.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="space-y-4 mt-4">
                  <div className="rounded-lg border p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                    <h3 className="font-semibold">
                      How does the OCR receipt scanning work?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Simply take a photo of your receipt within the app, and
                      our OCR technology will automatically extract the total
                      amount and other relevant details. You can then assign the
                      expense to specific trip members.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                    <h3 className="font-semibold">
                      Can I split bills unevenly?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes! BillBro allows for various splitting options. You can
                      split bills equally, by percentage, by specific amounts,
                      or based on who participated in the expense.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                    <h3 className="font-semibold">
                      How do I use the speech-to-text feature?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      When adding a new expense, tap the microphone icon and
                      speak clearly. Say the expense details like "Dinner at
                      Luigi's, $120, paid by me, split with John and Sarah."
                      BillBro will process this information automatically.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="billing" className="space-y-4 mt-4">
                  <div className="rounded-lg border p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                    <h3 className="font-semibold">
                      Is BillBro really free to use?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes, BillBro offers a free version with basic features.
                      For unlimited access to all features, Premium starts at
                      $5.99/month, with quarterly and yearly plans available
                      at a discount (yearly saves up to 58%).
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                    <h3 className="font-semibold">
                      What's included in the Premium version?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Premium includes unlimited OCR scans, unlimited trips, unlimited members per
                      trip, advanced splitting options, and priority support.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section
          id="support"
          className="w-full py-10 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-800 dark:text-blue-50">
                  Support
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Need Help?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to assist you with any questions or issues.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2">
              <Card className="transition-shadow duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Get help via email</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                  <p className="mt-4 font-medium">bilbrofficial@gmail.com</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="mailto:bilbrofficial@gmail.com">Send Email</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-shadow duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>
                    Tips, updates, and behind the scenes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Follow BillBro on social media for the latest features and
                    trip-splitting inspiration.
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Link
                      href="https://www.instagram.com/billbro.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Link
                      href="https://www.linkedin.com/company/billbro-split-bills-for-trip/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Link
                      href="https://www.tiktok.com/@billbrosplitbill"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Link
                      href="https://www.threads.com/@billbro.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Threads"
                    >
                      <ThreadsIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="get-app" className="w-full py-10 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-6 py-16 text-center shadow-2xl shadow-blue-900/30 sm:px-12 md:py-24">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(currentColor_1.5px,transparent_1.5px)] [background-size:22px_22px] text-white"
              />
              <div
                aria-hidden
                className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-sunshine/30 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"
              />
              <div className="relative">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-sunshine" />
                  Free to start
                </div>
                <h2 className="mt-5 text-3xl font-bold tracking-tighter text-white md:text-5xl/tight">
                  Ready to stop chasing
                  <br className="hidden sm:block" />{" "}
                  <span className="font-serif italic text-sunshine">
                    people for money?
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-blue-100 md:text-lg">
                  Download BillBro and let BillBot handle the awkward part.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-blue-900 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    <Link
                      href="https://apps.apple.com/us/app/billbro-split-bills-for-trips/id6737456189"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppleIcon className="h-4 w-4" />
                      <span className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] font-normal opacity-75">
                          Download on the
                        </span>
                        <span className="text-sm font-bold">App Store</span>
                      </span>
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    disabled
                    className="cursor-not-allowed rounded-full border border-white/30 bg-white/10 text-white opacity-80 hover:bg-white/10"
                  >
                    <PlayIcon className="h-4 w-4" />
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] font-normal opacity-75">
                        Coming soon on
                      </span>
                      <span className="text-sm font-bold">Google Play</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image
              src="/images/billbro-logo.png"
              alt="BillBro Logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 BillBro. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/terms-and-condition"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
