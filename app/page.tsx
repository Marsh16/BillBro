import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CreditCard,
  MessageSquare,
  Receipt,
  Smartphone,
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/billbro-logo.png"
                alt="BillBro Logo"
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="inline-block font-bold text-xl">BillBro</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                FAQ
              </Link>
              <Link
                href="#support"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Support
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://apps.apple.com/us/app/billbro-split-bills-for-trips/id6737456189"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Now
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Split Bills Effortlessly on Your Trips
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    BillBro helps you split expenses, keep track of debts, and
                    get reminders so you can enjoy the trip without the
                    financial stress.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Link
                      href="https://apps.apple.com/us/app/billbro-split-bills-for-trips/id6737456189"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download on App Store
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[600px] w-[300px] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image
                    src="/images/app-screenshot.png"
                    alt="BillBro App Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Split Bills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BillBro makes it easy to manage expenses during your trips
                  with friends and family.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 rounded-full bg-blue-100 p-2 dark:bg-blue-800">
                  <Receipt className="h-4 w-4 text-blue-600 dark:text-blue-50" />
                </div>
                <CardHeader>
                  <CardTitle>OCR Scan</CardTitle>
                  <CardDescription>
                    Scan receipts and automatically extract expense details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Simply take a photo of your receipt and BillBro will extract
                    the total amount and other details automatically.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 rounded-full bg-blue-100 p-2 dark:bg-blue-800">
                  <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-50" />
                </div>
                <CardHeader>
                  <CardTitle>Speech to Text</CardTitle>
                  <CardDescription>
                    Add expenses by simply speaking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    No need to type - just speak the expense details and BillBro
                    will record it for you.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 rounded-full bg-blue-100 p-2 dark:bg-blue-800">
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-50" />
                </div>
                <CardHeader>
                  <CardTitle>Unlimited Members</CardTitle>
                  <CardDescription>
                    Add as many people as you need to your trips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Whether it's a small getaway or a large group vacation,
                    BillBro can handle all your trip members.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 rounded-full bg-blue-100 p-2 dark:bg-blue-800">
                  <Wand2 className="h-4 w-4 text-blue-600 dark:text-blue-50" />
                </div>
                <CardHeader>
                  <CardTitle>Smart Splitting</CardTitle>
                  <CardDescription>
                    Split bills fairly based on who participated
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Easily select who was part of each expense and BillBro will
                    calculate the fair split automatically.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 rounded-full bg-blue-100 p-2 dark:bg-blue-800">
                  <CreditCard className="h-4 w-4 text-blue-600 dark:text-blue-50" />
                </div>
                <CardHeader>
                  <CardTitle>Debt Tracking</CardTitle>
                  <CardDescription>Keep track of who owes what</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    BillBro automatically calculates and tracks debts between
                    trip members, making settlement easy.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 rounded-full bg-blue-100 p-2 dark:bg-blue-800">
                  <Smartphone className="h-4 w-4 text-blue-600 dark:text-blue-50" />
                </div>
                <CardHeader>
                  <CardTitle>Reminders</CardTitle>
                  <CardDescription>
                    Send friendly payment reminders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Gently remind friends to settle up with built-in
                    notification features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-blue-950"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>
                    Get started with basic features
                  </CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                </CardHeader>
                <CardContent>
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
              <Card className="border-blue-600 dark:border-blue-400">
                <CardHeader>
                  <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-800 dark:text-blue-50 w-fit mx-auto mb-2">
                    Recommended
                  </div>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Unlock all features forever</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$49.99</div>
                  <p className="text-sm text-muted-foreground">
                    One-time payment
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Unlimited OCR scans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Unlimited speech to text</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Unlimited members per trip</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
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
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">
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
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="space-y-4 mt-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">What is BillBro?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      BillBro is an iOS app designed to help you split bills and
                      track expenses during trips with friends and family. It
                      makes it easy to keep track of who paid for what and who
                      owes whom.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">
                      Do I need to create an account?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes, you'll need to create a simple account to use
                      BillBro. This allows us to sync your data across devices
                      and ensure your trip information is saved securely.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Is my data secure?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes, we take data security seriously. All your financial
                      information is encrypted and stored securely. We do not
                      share your personal data with third parties.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="space-y-4 mt-4">
                  <div className="rounded-lg border p-4">
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
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">
                      Can I split bills unevenly?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes! BillBro allows for various splitting options. You can
                      split bills equally, by percentage, by specific amounts,
                      or based on who participated in the expense.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
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
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">
                      Is BillBro really free to use?
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes, BillBro offers a free version with basic features.
                      For unlimited access to all features, there's a one-time
                      premium purchase of $49.99.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
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
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
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
              <Card>
                <CardHeader>
                  <CardTitle>Help Center</CardTitle>
                  <CardDescription>Browse our knowledge base</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Find answers to common questions and learn how to use
                    BillBro effectively.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Link
                      href="https://www.instagram.com/billbro.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit our IG
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Simplify Trip Expenses?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download BillBro today and make your next trip stress-free.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link
                    href="https://apps.apple.com/us/app/billbro-split-bills-for-trips/id6737456189"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download on App Store
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#features">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
