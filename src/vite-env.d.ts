/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DODO_PAYMENT_LINK?: string;
  // --- DISABLED: kept for reference (Razorpay + PayPal + EmailJS/Drive delivery) ---
  // readonly VITE_RAZORPAY_PAYMENT_PAGE_URL?: string;
  // readonly VITE_PAYPAL_CLIENT_ID?: string;
  // readonly VITE_DRIVE_FILE_ID?: string;
  // readonly VITE_EMAILJS_SERVICE_ID?: string;
  // readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  // readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  // --- END DISABLED ---
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
