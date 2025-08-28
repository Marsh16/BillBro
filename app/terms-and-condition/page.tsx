import Link from "next/link";

export default function TermsAndConditionPage() {
  return (
    <div className="container mx-auto px-4 py-12 prose dark:prose-invert">
      <h1>Terms and Conditions</h1>
      <p>
        These are the Terms and Conditions for using BillBro. By using our
        application, you agree to comply with these terms.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, accessing, or using BillBro, you agree to be bound by
        these Terms and Conditions and our Privacy Policy.
      </p>

      <h2>2. Use of Service</h2>
      <p>
        BillBro is intended for personal use to manage and split expenses. You
        agree not to misuse the app in any unlawful way.
      </p>

      <h2>3. Payments</h2>
      <p>
        Premium features are available as a one-time purchase. All payments are
        handled securely via the App Store.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        BillBro is provided “as is” without warranties of any kind. We are not
        responsible for financial disputes arising from its use.
      </p>

      <h2>5. Changes</h2>
      <p>
        We reserve the right to update these Terms at any time. Updates will be
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
