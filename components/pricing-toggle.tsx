"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type Plan = "monthly" | "quarterly" | "yearly";
type Currency = "USD" | "IDR";

const MONTHS_IN_PLAN: Record<Plan, number> = {
  monthly: 1,
  quarterly: 3,
  yearly: 12,
};

const PLAN_LABEL: Record<Plan, string> = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  yearly: "Yearly",
};

const BILLED_AS: Record<Plan, string> = {
  monthly: "Billed monthly",
  quarterly: "Billed every 3 months",
  yearly: "Billed every year",
};

const PRICES: Record<Currency, Record<Plan, number>> = {
  USD: { monthly: 5.99, quarterly: 12.99, yearly: 29.99 },
  IDR: { monthly: 39000, quarterly: 99000, yearly: 199000 },
};

function formatPrice(currency: Currency, amount: number) {
  if (currency === "USD") {
    return `$${amount.toFixed(2)}`;
  }
  return `Rp${Math.round(amount).toLocaleString("id-ID")}`;
}

function savingsPercent(currency: Currency, plan: Plan) {
  if (plan === "monthly") return null;
  const monthlyBaseline = PRICES[currency].monthly;
  const perMonth = PRICES[currency][plan] / MONTHS_IN_PLAN[plan];
  const pct = Math.round((1 - perMonth / monthlyBaseline) * 100);
  return pct > 0 ? pct : null;
}

const PREMIUM_FEATURES = [
  "Unlimited OCR scans",
  "Unlimited bills",
  "Unlimited trip members",
  "Unlimited BillBro AI chats",
  "Advanced splitting options",
  "Priority support",
];

export function PricingToggle() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [plan, setPlan] = useState<Plan>("yearly");

  const price = PRICES[currency][plan];
  const perMonth = price / MONTHS_IN_PLAN[plan];
  const savings = savingsPercent(currency, plan);

  return (
    <Card className="relative flex h-full flex-col border-blue-600 shadow-xl shadow-blue-600/10 dark:border-blue-400">
      <div className="pointer-events-none absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
        Recommended
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Premium</CardTitle>
          <div className="relative z-20 flex gap-1 rounded-full bg-muted p-0.5 text-xs">
            {(["USD", "IDR"] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`rounded-full px-2.5 py-1 font-medium transition-all ${
                  currency === c
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <CardDescription>Unlock all features, your way</CardDescription>

        <div className="relative z-20 mt-4 grid grid-cols-3 gap-2 rounded-lg bg-muted p-1">
          {(Object.keys(PLAN_LABEL) as Plan[]).map((key) => {
            const keySavings = savingsPercent(currency, key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => setPlan(key)}
                className={`relative rounded-md px-2 py-1.5 text-sm font-medium transition-all ${
                  plan === key
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {PLAN_LABEL[key]}
                {keySavings && (
                  <span className="pointer-events-none absolute -top-2 -right-1 rounded-full bg-green-500 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white">
                    {keySavings}%
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-4xl font-bold">
            {formatPrice(currency, price)}
          </span>
          <span className="text-sm text-muted-foreground">
            ({formatPrice(currency, perMonth)}/mo)
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {BILLED_AS[plan]}
          {savings && (
            <span className="ml-2 font-medium text-green-600 dark:text-green-400">
              Save {savings}%
            </span>
          )}
        </p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="grid gap-3">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span>Everything in Free</span>
          </li>
          {PREMIUM_FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-blue-600 shadow-md shadow-blue-600/25 hover:bg-blue-700">
          <Link
            href="https://apps.apple.com/us/app/billbro-split-bills-for-trips/id6737456189"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Premium
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
