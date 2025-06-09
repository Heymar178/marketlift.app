import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * MarketLift Privacy Policy — React page
 * Last updated: June 8, 2025
 */

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <article className="prose prose-lg max-w-none mx-auto text-gray-800">
          {/* TL;DR */}
          <p><strong>TL;DR —</strong> We collect only the information we need to run MarketLift, never sell your data, and honor the privacy rights granted by U.S. and Canadian law.</p>

          {/* 1. Who We Are & Scope */}
          <h2>1 · Who We Are &amp; Scope</h2>
          <p><strong>MarketLift, LLC</strong> ("<strong>MarketLift</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") builds and operates white‑label grocery‑commerce software that lets independent grocers and small chains in the United&nbsp;States and Canada offer online ordering, curbside pick‑up, inventory synchronization, and integrated payments. This Privacy Policy describes how we collect, use, disclose, and safeguard <em>Personal Information</em> when you:</p>
          <ul>
            <li>visit or interact with our website <a href="https://marketlift.app">marketlift.app</a> (the “<strong>Website</strong>”);</li>
            <li>use a merchant‑branded mobile or web application powered by the MarketLift platform (a “<strong>Merchant App</strong>”); or</li>
            <li>communicate with us in any other way related to our products and services (collectively, the “<strong>Services</strong>”).</li>
          </ul>
          <p><strong>Geographic scope —</strong> We market, host, and support the Services solely for merchants located in the United States and Canada, and for end users living in those countries. We do <em>not</em> intentionally solicit or serve residents of other regions.</p>

          {/* 2. Key Definitions */}
          <h2>2 · Key Definitions</h2>
          <ul>
            <li><strong>Personal Information</strong> — any information that identifies or could reasonably be linked to an identifiable individual.</li>
            <li><strong>Processing</strong> — any operation performed on Personal Information (collection, storage, use, disclosure, deletion).</li>
            <li><strong>Merchant</strong> — a grocery retailer or similar business that subscribes to the MarketLift platform.</li>
            <li><strong>End User</strong> — a shopper, store employee, or contractor who interacts with a Merchant App.</li>
            <li><strong>Service Provider / Processor</strong> — a third party that processes data on our behalf under a written contract.</li>
          </ul>

          {/* 3. Information We Collect */}
          <h2>3 · Information We Collect</h2>
          <h3>3.1 Information You Provide</h3>
          <ul>
            <li><strong>Account Details</strong> — name, business name, mailing address, email, phone, tax ID, username, and password.</li>
            <li><strong>KYC / Verification</strong> — limited ID documents when required by payment processors (Stripe or Square).</li>
            <li><strong>Order &amp; Transaction Data</strong> — basket contents, delivery/pick‑up instructions, promo codes, tokenized payment method, receipts.</li>
            <li><strong>Communications</strong> — questions, feedback, survey responses, or support tickets.</li>
            <li><strong>Job Applications</strong> — résumé/CV, cover letter, employment history, references.</li>
          </ul>

          <h3>3.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Device &amp; Usage Data</strong> — IP address, browser type, OS, referral URLs, session timestamps, click path, crash reports.</li>
            <li><strong>Approximate Location</strong> (city/region) derived from IP for fraud prevention and localization.</li>
            <li><strong>Cookie or Mobile IDs</strong> to remember preferences and secure your session.</li>
          </ul>

          <h3>3.3 Information from Third Parties</h3>
          <ul>
            <li><strong>Payment Processors</strong> (Stripe, Square) — payment tokens, card brand &amp; last four, fraud/risk signals.</li>
            <li><strong>Address &amp; Identity Validation</strong> — standardized addresses, carrier lookup, fraud‑scoring.</li>
          </ul>
          <p>We do <em>not</em> intentionally collect sensitive data (e.g., health, race) or information from children under <strong>13</strong>. Parents who believe we have such data should contact us for deletion.</p>

          {/* 4. How We Use Your Information */}
          <h2>4 · How We Use Your Information</h2>
          <ul>
            <li><strong>Provide &amp; Operate</strong>  — set up accounts, authenticate users, process and fulfill orders, facilitate payments.</li>
            <li><strong>Customer Support</strong>  — respond to inquiries, troubleshoot, send service notices.</li>
            <li><strong>Product Improvement</strong>  — analyze aggregated usage, improve performance, develop features.</li>
            <li><strong>Marketing &amp; Promotions</strong>  — send newsletters or promotional emails (opt‑out anytime).</li>
            <li><strong>Fraud &amp; Security</strong>  — detect suspicious activity, mitigate chargebacks, enforce Terms.</li>
            <li><strong>Legal &amp; Compliance</strong>  — meet U.S. and Canadian legal obligations.</li>
          </ul>

          {/* 5. Cookies */}
          <h2>5 · Cookies &amp; Similar Technologies</h2>
          <p>We use cookies and mobile SDKs to authenticate users, remember preferences, measure performance (privacy‑enhanced analytics only), and track email‑open rates for our own campaigns. You can manage cookies via your browser or device settings; disabling them may affect functionality.</p>

          {/* 6. Sharing & Disclosure */}
          <h2>6 · Sharing &amp; Disclosure</h2>
          <p>We do <strong>not</strong> sell your Personal Information. We disclose it only to:</p>
          <ul>
            <li><strong>Service Providers</strong> — Supabase (database), Stripe &amp; Square (payments), Resend/Postmark (email), Sentry (error monitoring).</li>
            <li><strong>Merchants</strong> — for order fulfillment if you are an End User.</li>
            <li><strong>Legal Authorities</strong> — when required by law or to protect rights and safety.</li>
            <li><strong>Business Transfers</strong> — as part of a merger, acquisition, or asset sale, subject to confidentiality.</li>
          </ul>

          {/* 7. Data Transfers */}
          <h2>7 · Cross‑Border Data Transfers</h2>
          <p>Our infrastructure is in the United States. Data related to Canadian merchants or users may move between the U.S. and Canada. We do not transfer data outside North America.</p>

          {/* 8. Data Retention */}
          <h2>8 · Data Retention</h2>
          <p>We retain merchant records for <strong>7 years</strong>, end‑user order history for <strong>5 years</strong> by default, payment tokens while a merchant account is active, marketing lists until you unsubscribe, and error logs for <strong>24 months</strong>. We delete or de‑identify data within 30 days of a valid deletion request, unless a longer period is required by law.</p>

          {/* 9. Security */}
          <h2>9 · Security</h2>
          <p>We use TLS 1.2/1.3 encryption in transit, AES‑256 at rest, role‑based access controls, MFA for internal tools, regular vulnerability scans, and 24/7 monitoring. No system is 100 % secure, but these safeguards help protect your data.</p>

          {/* 10. Your Rights */}
          <h2>10 · Your Privacy Rights</h2>
          <p><strong>U.S. residents</strong> (e.g., California, Virginia) can access, delete, or correct their Personal Information and opt out of certain uses. <strong>Canadian residents</strong> may request access or correction under PIPEDA. Email <a href="mailto:marketlift@outlook.com">marketlift@outlook.com</a> or call 504‑315‑6707 to submit requests; we will verify your identity before responding.</p>

          {/* 11. Children */}
          <h2>11 · Children’s Privacy</h2>
          <p>The Services are not directed to children under 13. If you believe we have collected such information, contact us for deletion.</p>

          {/* 12. Contact */}
          <h2>12 · Contact Us</h2>
          <p>Questions about this policy? Email <a href="mailto:marketlift@outlook.com">marketlift@outlook.com</a> or call 504‑315‑6707.</p>

          {/* 13. Changes */}
          <h2>13 · Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify merchants by email or in‑app message and post the updated policy with a new “Last updated” date. Continued use of the Services after the effective date constitutes acceptance.</p>

          <p className="text-center text-sm mt-12">© 2025 MarketLift, LLC. All rights reserved.</p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
    