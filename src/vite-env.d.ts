/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAZORPAY_PAYMENT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
