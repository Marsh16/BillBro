import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 prose dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>
        BillBro respects your privacy and is committed to protecting your
        personal data. This policy explains how we handle your information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect basic information such as your name, email, and trip details
        to provide app functionality.
      </p>

      <h2>2. How We Use Your Data</h2>
      <p>
        Your data is used only to support app features like syncing trips,
        splitting bills, and expense tracking. We do not sell your data.
      </p>

      <h2>3. Data Security</h2>
      <p>
        All sensitive information is encrypted and stored securely. We take
        reasonable steps to protect your data from unauthorized access.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        Payments and subscriptions are handled by the App Store. We do not store
        your payment information.
      </p>

      <h2>5. Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. Updates will be
        posted here.
      </p>

      <p className="mt-8">
        For questions, contact us at{" "}
        <Link href="mailto:bilbrofficial@gmail.com" className="text-blue-600">
          bilbrofficial@gmail.com
        </Link>
      </p>
    </div>
  );
}
