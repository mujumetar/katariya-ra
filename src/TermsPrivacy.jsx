import { useState } from "react";

export default function TermsPrivacy() {
  const [active, setActive] = useState("terms");

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Legal, Trading & Payment Policies</h1>
        <p style={styles.subtitle}>
          Please read these Terms & Conditions and Privacy Policy carefully before
          using our services.
        </p>

        <div style={styles.tabs}>
          <button
            onClick={() => setActive("terms")}
            style={{ ...styles.tab, ...(active === "terms" && styles.activeTab) }}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setActive("privacy")}
            style={{ ...styles.tab, ...(active === "privacy" && styles.activeTab) }}
          >
            Privacy Policy
          </button>
        </div>

        <div style={styles.content}>
          {active === "terms" ? <Terms /> : <Privacy />}
        </div>
      </div>
    </div>
  );
}

/* ================= TERMS ================= */

function Terms() {
  return (
    <>
      <h2>Terms & Conditions</h2>

      <p>
        This platform is operated by <b>Katariya Research Analytics</b>, a trading
        consultancy and market research service provider with over <b>8+ years of
        experience</b> in financial markets.
      </p>

      <h3>1. Nature of Services</h3>
      <p>
        We provide <b>trading consultancy, market research, and analytical insights</b>
        for educational and informational purposes only.  
        We are <b>not providing guaranteed returns</b> or assured profit schemes.
      </p>

      <h3>2. No Investment Advice Disclaimer</h3>
      <p>
        All information shared via calls, messages, reports, dashboards, or
        digital platforms is based on market research and personal analysis.
        <b> Trading involves substantial risk</b>, and past performance does not
        guarantee future results.
      </p>

      <h3>3. User Responsibility</h3>
      <p>
        You acknowledge that all trading decisions are made at your own risk.
        We shall not be responsible for any financial loss arising from market
        volatility, technical issues, or user decisions.
      </p>

      <h3>4. Payments</h3>
      <p>
        All payments are processed securely via <b>Razorpay</b>.
        We do not store or process sensitive payment details such as card numbers
        or UPI credentials.
      </p>

      <h3>5. Pricing & Subscription</h3>
      <p>
        Consultancy fees, research plans, or subscriptions are clearly mentioned
        on our platform. Prices may change without prior notice.
      </p>

      <h3>6. Refund & Cancellation Policy</h3>
      <p>
        Due to the nature of digital consultancy and research services,
        <b> fees are generally non-refundable</b>.
        Refunds (if applicable) are subject to approval and must be requested
        within <b>7 days</b> of purchase.
      </p>

      <h3>7. Prohibited Use</h3>
      <p>
        You agree not to misuse our services, redistribute research content,
        or use it for unlawful activities.
      </p>

      <h3>8. Limitation of Liability</h3>
      <p>
        We shall not be liable for any direct or indirect losses, including
        capital loss, opportunity loss, or system delays.
      </p>

      <h3>9. Governing Law</h3>
      <p>
        These terms shall be governed by the laws of India.
      </p>

      <h3>10. Contact Details</h3>
      <p>
        <b>Email:</b> support@katariyara.com  
        <br />
        <b>Business Address:</b>  Rajkot, India
      </p>
    </>
  );
}

/* ================= PRIVACY ================= */

function Privacy() {
  return (
    <>
      <h2>Privacy Policy</h2>

      <p>
        We respect your privacy and are committed to protecting your personal
        information.
      </p>

      <h3>1. Information We Collect</h3>
      <p>
        We may collect your name, email, phone number, and payment reference IDs
        for service delivery and communication purposes.
      </p>

      <h3>2. Payment Security</h3>
      <p>
        Payments are securely handled by <b>Razorpay</b>.
        We do not store card, CVV, or UPI details on our servers.
      </p>

      <h3>3. Use of Information</h3>
      <ul>
        <li>Service delivery & communication</li>
        <li>Customer support</li>
        <li>Legal and accounting compliance</li>
      </ul>

      <h3>4. Data Protection</h3>
      <p>
        We use reasonable security measures to protect user data, but no online
        transmission is completely secure.
      </p>

      <h3>5. Third-Party Disclosure</h3>
      <p>
        Data may be shared with trusted third parties such as Razorpay only for
        payment processing and regulatory compliance.
      </p>

      <h3>6. Cookies</h3>
      <p>
        Cookies may be used to improve website performance and analytics.
      </p>

      <h3>7. Policy Updates</h3>
      <p>
        This policy may be updated periodically. Changes will be posted on this page.
      </p>

      <h3>8. Contact</h3>
      <p>
        <b>Email:</b> contact@katariya.com
      </p>
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "40px 16px",
  },
  container: {
    maxWidth: "900px",
    margin: "auto",
    background: "#fff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "28px",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#555",
    marginBottom: "24px",
  },
  tabs: {
    display: "flex",
    gap: "12px",
    marginBottom: "24px",
  },
  tab: {
    padding: "10px 18px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#f9fafb",
  },
  activeTab: {
    background: "#2563eb",
    color: "#fff",
    borderColor: "#2563eb",
  },
  content: {
    lineHeight: "1.7",
    color: "#333",
  },
};
