/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAZORPAY_PAYMENT_PAGE_URL?: string;
  readonly VITE_PAYPAL_CLIENT_ID?: string;
  readonly VITE_DRIVE_FILE_ID?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  // --- DISABLED: Dodo Payments (kept for reference) ---
  // readonly VITE_DODO_PAYMENT_LINK?: string;
  // --- END DISABLED ---
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
