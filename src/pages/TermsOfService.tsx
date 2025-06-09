import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * MarketLift – Terms of Service page
 * Last updated: June 8, 2025
 */

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>

        <article className="prose prose-lg max-w-none mx-auto text-gray-800">
          {/* 1. Acceptance of Terms */}
          <h2>1 · Acceptance of Terms</h2>
          <p>
            By accessing or using the MarketLift website (<a href="https://marketlift.app">marketlift.app</a>), merchant‑branded applications powered by MarketLift, or any related services (collectively, the “<strong>Services</strong>”), you agree to be bound by these Terms of Service (these “<strong>Terms</strong>”). If you do not agree, do not access or use the Services.
          </p>

          {/* 2. Eligibility and Registration */}
          <h2>2 · Eligibility &amp; Registration</h2>
          <p>
            You must be at least 18 years old and able to form a binding contract to use the Services. To access certain features, you must create an account, provide accurate information, and maintain its accuracy. You are responsible for activities under your account and must keep login credentials confidential.
          </p>

          {/* 3. Scope of Services */}
          <h2>3 · Scope of Services</h2>
          <p>
            MarketLift provides white‑label e‑commerce software enabling merchants in the United States and Canada to offer online grocery ordering, curbside pickup, inventory synchronization, and integrated payments.
          </p>

          {/* 4. Subscription, Fees, and Payment */}
          <h2>4 · Subscription, Fees &amp; Payment</h2>
          <ol>
            <li><strong>Subscription Plan —</strong> Services are offered on a subscription basis. Plan details, pricing, and billing cycle are specified in your order form or Merchant Dashboard.</li>
            <li><strong>Payment Processors —</strong> Payments are processed by third‑party providers (e.g., Stripe, Square). You authorize automatic charges each billing cycle.</li>
            <li><strong>Late Payments —</strong> Overdue balances may incur interest at the lesser of 1.5 % per month or the maximum allowed by law and may result in suspension of Services.</li>
            <li><strong>Taxes —</strong> Prices exclude applicable taxes; you are responsible for all sales, use, or similar taxes.</li>
          </ol>

          {/* 5. Merchant Responsibilities */}
          <h2>5 · Merchant Responsibilities</h2>
          <ul>
            <li>Provide accurate product, pricing, and inventory data.</li>
            <li>Fulfill customer orders in a timely manner.</li>
            <li>Maintain compliance with all applicable laws (food safety, taxation, privacy, consumer protection).</li>
            <li>Secure any required licenses or permits.</li>
            <li>Use the Services only for lawful purposes.</li>
          </ul>

          {/* 6. Prohibited Activities */}
          <h2>6 · Prohibited Activities</h2>
          <p>You may <strong>not</strong>:</p>
          <ul>
            <li>reverse‑engineer, decompile, or attempt to extract source code;</li>
            <li>copy, modify, or create derivative works except as expressly permitted;</li>
            <li>use the Services for fraudulent, harmful, or illegal activities;</li>
            <li>transmit spam, malware, or infringing content;</li>
            <li>interfere with the security or performance of the Services.</li>
          </ul>

          {/* 7. Intellectual Property */}
          <h2>7 · Intellectual Property</h2>
          <p>
            MarketLift retains all rights, title, and interest in the Services, software, and related intellectual property. Merchants receive a non‑exclusive, non‑transferable license to use the platform during the subscription term. All Merchant trademarks, logos, and content remain Merchant property.
          </p>

          {/* 8. Data and Privacy */}
          <h2>8 · Data &amp; Privacy</h2>
          <p>
            Use of personal information is governed by the <a href="/privacy-policy">MarketLift Privacy Policy</a>. You represent that you have all rights and consents required to provide customer data to MarketLift.
          </p>

          {/* 9. Support and Maintenance */}
          <h2>9 · Support &amp; Maintenance</h2>
          <p>
            MarketLift will use commercially reasonable efforts to provide platform availability of 99.5 % uptime per calendar month, excluding scheduled maintenance windows notified at least 24 hours in advance. Standard support is available via email at <a href="mailto:marketlift@outlook.com">marketlift@outlook.com</a> or by phone at 504‑315‑6707 (9 a.m.–5 p.m. CT, Monday–Friday).
          </p>

          {/* 10. Warranties and Disclaimers */}
          <h2>10 · Warranties &amp; Disclaimers</h2>
          <p>
            THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” MARKETLIFT DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON‑INFRINGEMENT. MARKETLIFT DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR‑FREE, OR SECURE.
          </p>

          {/* 11. Limitation of Liability */}
          <h2>11 · Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MARKETLIFT’S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE FEES PAID BY MERCHANT TO MARKETLIFT DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY. IN NO EVENT SHALL MARKETLIFT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, OR DATA.
          </p>

          {/* 12. Indemnification */}
          <h2>12 · Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless MarketLift, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys’ fees) arising from or related to (a) your use of the Services; (b) your violation of these Terms; or (c) your violation of any applicable law or rights of a third party.
          </p>

          {/* 13. Term and Termination */}
          <h2>13 · Term &amp; Termination</h2>
          <p>
            These Terms remain in effect until terminated. Either party may terminate for convenience with 30 days’ written notice. MarketLift may suspend or terminate the Services immediately if you materially breach these Terms. Upon termination, all licenses end, and you must cease using the Services. Sections 7, 10–14 survive termination.
          </p>

          {/* 14. Governing Law and Dispute Resolution */}
          <h2>14 · Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State of Louisiana, U.S.A., without regard to conflict‑of‑law principles. Any dispute arising under these Terms will be resolved through binding arbitration administered by the American Arbitration Association in New Orleans, Louisiana, unless otherwise mutually agreed. The parties waive class‑action rights.
          </p>

          {/* 15. Changes to Terms */}
          <h2>15 · Changes to Terms</h2>
          <p>
            We may modify these Terms from time to time. Material changes will be posted on the Website with a new “Last updated” date and, where required, notice will be provided via email. Continued use of the Services after changes are effective constitutes acceptance.
          </p>

          {/* 16. Contact Information */}
          <h2>16 · Contact Information</h2>
          <address>
            MarketLift, LLC<br />
            Email: <a href="mailto:marketlift@outlook.com">marketlift@outlook.com</a><br />
            Phone: 504‑315‑6707<br />
            Address: [Company Address]
          </address>

          <p className="text-center text-sm mt-12">© 2025 MarketLift, LLC. All rights reserved.</p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
