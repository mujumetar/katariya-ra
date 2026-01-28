export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Katariya Research Analyst (“we”, “our”, “us”) respects your privacy and
          is committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your data when you
          use our website or services.
        </p>

        {/* Section 1 */}
        <h3 className="font-semibold mt-8 mb-2 text-lg text-gray-900">
          1. Information We Collect
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We may collect the following information when you interact with our
          services:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment reference IDs and transaction details</li>
        </ul>

        {/* Section 2 */}
        <h3 className="font-semibold mt-8 mb-2 text-lg text-gray-900">
          2. Payment Security
        </h3>
        <p className="text-gray-700 leading-relaxed">
          All payments are securely processed through <b>Razorpay</b>. We do not
          store or have access to sensitive payment information such as card
          numbers, CVV, or UPI credentials.
        </p>

        {/* Section 3 */}
        <h3 className="font-semibold mt-8 mb-2 text-lg text-gray-900">
          3. Use of Information
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Your information is used solely for:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Providing trading consultancy and research services</li>
          <li>Customer support and communication</li>
          <li>Legal, accounting, and compliance purposes</li>
        </ul>

        {/* Section 4 */}
        <h3 className="font-semibold mt-8 mb-2 text-lg text-gray-900">
          4. Cookies & Analytics
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We may use cookies and analytics tools to understand website usage and
          improve user experience. Cookies do not collect personally
          identifiable information.
        </p>

        {/* Section 5 */}
        <h3 className="font-semibold mt-8 mb-2 text-lg text-gray-900">
          5. Data Protection
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We implement reasonable technical and organizational measures to
          protect your data. However, no method of online transmission is 100%
          secure.
        </p>

        {/* Section 6 */}
        <h3 className="font-semibold mt-8 mb-2 text-lg text-gray-900">
          6. Third-Party Disclosure
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We do not sell or rent your personal data. Information may be shared
          only with trusted third parties such as Razorpay for payment processing
          and legal compliance.
        </p>

        {/* Section 7 */}
        <h3 className="font-semibold mt-8 mb-2 text-lg text-gray-900">
          7. Policy Updates
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be reflected on this page.
        </p>

        {/* Contact */}
        <h3 className="font-semibold mt-8 mb-2 text-lg text-gray-900">
          8. Contact Information
        </h3>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions regarding this Privacy Policy, you may
          contact us at:
        </p>

        <p className="mt-2 text-gray-800">
          <b>Email:</b> contact@katariyaresearchanalyst.com
        </p>

        {/* Footer note */}
        <p className="mt-10 text-sm text-gray-500 border-t pt-4">
          Trading & investment related services are subject to market risks.
          Past performance does not guarantee future results.
        </p>
      </div>
    </div>
  )
}
