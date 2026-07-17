import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowLeft,
  CreditCard,
  FileCheck,
  Mail,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    icon: FileCheck,
    title: "1. Acceptance of Terms",
    body: "By downloading, accessing, or using BillBro, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
  },
  {
    icon: ShieldCheck,
    title: "2. Use of Service",
    body: "BillBro is intended for personal use to manage and split expenses. You agree not to misuse the app in any unlawful way.",
  },
  {
    icon: CreditCard,
    title: "3. Payments",
    body: "Premium unlocks via monthly, quarterly, or yearly auto-renewing subscriptions purchased through the App Store. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period, and payment is charged to your Apple ID account.",
  },
  {
    icon: AlertTriangle,
    title: "4. Limitation of Liability",
    body: "BillBro is provided “as is” without warranties of any kind. We are not responsible for financial disputes arising from its use.",
  },
  {
    icon: RefreshCw,
    title: "5. Changes",
    body: "We reserve the right to update these Terms at any time. Updates will be posted here.",
  },
];

export default function TermsAndConditionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/billbro-logo.png"
              alt="BillBro Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="inline-block font-bold text-xl">BillBro</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full overflow-hidden py-16 md:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background"
          />
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-500/10"
          />
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm backdrop-blur dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                <FileCheck className="h-3.5 w-3.5" />
                Please read carefully
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
                Terms and Conditions
              </h1>
              <p className="mt-4 text-muted-foreground md:text-lg">
                These are the Terms and Conditions for using BillBro. By using
                our application, you agree to comply with these terms.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Last updated: July 18, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="w-full pb-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-3xl gap-4">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="flex gap-4 rounded-xl border bg-card p-6 shadow-sm transition-colors hover:border-blue-300 dark:hover:border-blue-700"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md shadow-blue-500/30">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">{section.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-4 flex flex-col items-center gap-3 rounded-xl border bg-gradient-to-br from-blue-50 to-white p-6 text-center dark:from-blue-950 dark:to-background">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-50" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Have questions about these terms?
                </p>
                <Link
                  href="mailto:bilbrofficial@gmail.com"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  bilbrofficial@gmail.com
                </Link>
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
