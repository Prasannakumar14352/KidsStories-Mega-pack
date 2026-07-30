import { Route, Routes } from 'react-router-dom';
import { MobileMenuProvider } from './context/MobileMenuContext';
import { LandingPage } from './pages/LandingPage';
import { PolicyPage } from './pages/PolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// --- DISABLED: /thank-you page (kept for reference) ---
// Part of the Razorpay/PayPal + EmailJS delivery flow, disabled while Dodo
// Payments is in use. Also commented out: src/pages/ThankYouPage.tsx,
// src/config/emailConfig.ts, src/lib/sendDeliveryEmail.ts.
// TODO: decide whether Dodo's dashboard handles delivery/redirect on its
// own, or re-enable this route wired to Dodo's success redirect + webhook.
//
// import { Suspense, lazy } from 'react';
// // Lazy-loaded so the post-payment download URL never sits in the main
// // bundle every visitor downloads before paying - see src/config/emailConfig.ts.
// const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
// --- END DISABLED: /thank-you page ---

export default function App() {
  return (
    <MobileMenuProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* --- DISABLED: /thank-you route (kept for reference) ---
        <Route
          path="/thank-you"
          element={
            <Suspense fallback={null}>
              <ThankYouPage />
            </Suspense>
          }
        />
        --- END DISABLED: /thank-you route --- */}
        <Route path="/terms" element={<PolicyPage slug="terms" />} />
        <Route path="/privacy" element={<PolicyPage slug="privacy" />} />
        <Route path="/license" element={<PolicyPage slug="license" />} />
        <Route path="/disclaimer" element={<PolicyPage slug="disclaimer" />} />
        <Route path="/refund-policy" element={<PolicyPage slug="refund-policy" />} />
        <Route path="/delivery-policy" element={<PolicyPage slug="delivery-policy" />} />
        <Route path="/contact" element={<PolicyPage slug="contact" />} />
        <Route path="/download-help" element={<PolicyPage slug="download-help" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MobileMenuProvider>
  );
}
