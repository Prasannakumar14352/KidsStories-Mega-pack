// --- DISABLED: /thank-you page (Razorpay/PayPal + EmailJS delivery) — kept for reference ---
// Disabled while Dodo Payments is in use (see src/config/dodo.ts and
// src/components/Checkout.tsx). Also commented out: src/config/emailConfig.ts,
// src/lib/sendDeliveryEmail.ts, and the /thank-you route in src/App.tsx.
//
// TODO: decide the delivery approach before re-enabling anything here -
// either (a) let Dodo's own dashboard handle file delivery / a post-payment
// redirect on its own, or (b) re-enable this page wired to Dodo's success
// redirect + webhook instead of the old Razorpay query-param / PayPal
// router-state email resolution below. Do not wire EmailJS to Dodo without
// making that decision first.
//
// import { useEffect, useRef, useState } from 'react';
// import type { FormEvent } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { CheckCircle2, Download, Mail } from 'lucide-react';
// import { product } from '../config/product';
// import { emailConfig } from '../config/emailConfig';
// import { sendDeliveryEmail } from '../lib/sendDeliveryEmail';
// import { SEO } from '../components/SEO';
// import { Container } from '../components/ui/Container';
// import { Button } from '../components/ui/Button';
//
// interface ThankYouLocationState {
//   email?: string | null;
//   orderId?: string | null;
//   paid?: boolean;
// }
//
// type EmailStatus = 'idle' | 'sending' | 'sent' | 'error';
// type EmailSource = 'url' | 'router-state' | 'manual';
//
// const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//
// function isValidEmail(value: string): boolean {
//   return EMAIL_PATTERN.test(value.trim());
// }
//
// function resolveEmailFromEntry(
//   searchParams: URLSearchParams,
//   state: ThankYouLocationState | null,
// ): { email: string | null; source: EmailSource | null } {
//   const urlEmail = searchParams.get('email');
//   if (urlEmail) return { email: urlEmail, source: 'url' };
//   if (state?.email) return { email: state.email, source: 'router-state' };
//   return { email: null, source: null };
// }
//
// function resolveDedupeKey(searchParams: URLSearchParams, state: ThankYouLocationState | null): string | null {
//   const paymentId = searchParams.get('razorpay_payment_id') || state?.orderId || null;
//   return paymentId ? `emailjs-sent:${paymentId}` : null;
// }
//
// // SECURITY: This page and the Drive link are client-side and NOT
// // tamper-proof: anyone reaching /thank-you can download and trigger a send.
// // Acceptable only for this low-value (₹499) honor-system product.
// // TODO(security): to secure this later, replace the download reveal and the
// // EmailJS send below with a call to a serverless function that verifies the
// // Razorpay/PayPal payment and returns a short-lived signed download URL.
// //
// // Rely on EmailJS dashboard allowed-origins + rate limits to protect the
// // public key exposed in this bundle.
// export default function ThankYouPage() {
//   const location = useLocation();
//   const state = (location.state ?? null) as ThankYouLocationState | null;
//   const searchParams = new URLSearchParams(location.search);
//
//   const [entryEmail] = useState(() => resolveEmailFromEntry(searchParams, state));
//   const dedupeKeyRef = useRef(resolveDedupeKey(searchParams, state));
//
//   const [activeEmail, setActiveEmail] = useState<string | null>(entryEmail.email);
//   const [status, setStatus] = useState<EmailStatus>('idle');
//   const [manualEmail, setManualEmail] = useState('');
//   const sendingRef = useRef(false);
//
//   const attemptSend = (email: string, source: EmailSource) => {
//     if (!isValidEmail(email)) {
//       setStatus('error');
//       return;
//     }
//     if (sendingRef.current) return;
//
//     if (import.meta.env.DEV) {
//       console.log('[ThankYouPage] resolved email source:', source);
//     }
//
//     const dedupeKey = dedupeKeyRef.current;
//     if (dedupeKey && sessionStorage.getItem(dedupeKey) === 'true') {
//       setStatus('sent');
//       return;
//     }
//
//     sendingRef.current = true;
//     setActiveEmail(email);
//     setStatus('sending');
//
//     sendDeliveryEmail(email)
//       .then(() => {
//         if (dedupeKey) sessionStorage.setItem(dedupeKey, 'true');
//         setStatus('sent');
//       })
//       .catch((error) => {
//         console.error('Failed to send delivery email.', error);
//         sendingRef.current = false;
//         setStatus('error');
//       });
//   };
//
//   useEffect(() => {
//     if (entryEmail.email && entryEmail.source) {
//       attemptSend(entryEmail.email, entryEmail.source);
//     }
//     // Runs once on mount for whichever email the visitor arrived with.
//   }, []);
//
//   const handleManualSend = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!manualEmail) return;
//     attemptSend(manualEmail, 'manual');
//   };
//
//   const handleResend = () => {
//     if (!activeEmail) return;
//     sendingRef.current = false;
//     attemptSend(activeEmail, entryEmail.source ?? 'manual');
//   };
//
//   const showManualForm = !entryEmail.email;
//
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16 text-center">
//       <SEO
//         title="Thank You | PRODXSTORE"
//         description="Your purchase is confirmed. Download your product here."
//         path="/thank-you"
//         noIndex
//       />
//       <Container className="flex max-w-lg flex-col items-center">
//         <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/15">
//           <CheckCircle2 className="h-7 w-7 text-brand-orange-light" aria-hidden="true" />
//         </div>
//         <h1 className="mt-6 font-display text-3xl font-bold text-text-primary">Thank You For Your Purchase</h1>
//         <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
//           Your payment for {product.name} is confirmed. Use the button below to download your files.
//         </p>
//
//         {emailConfig.downloadUrl ? (
//           <a href={emailConfig.downloadUrl} className="mt-8">
//             <Button variant="primary" size="lg">
//               <Download className="h-5 w-5" aria-hidden="true" />
//               Download Your Bundle
//             </Button>
//           </a>
//         ) : (
//           <p className="mt-8 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-muted">
//             Your download link is being finalised. If this message persists, contact{' '}
//             <a href={`mailto:${product.supportEmail}`} className="text-brand-orange-light">
//               {product.supportEmail}
//             </a>
//             .
//           </p>
//         )}
//
//         {entryEmail.email && (
//           <div className="mt-4" role="status">
//             <p className="text-xs text-text-muted">
//               {status === 'sending' && `Sending your download link to ${entryEmail.email}…`}
//               {status === 'sent' && `A copy of your download link has been emailed to ${entryEmail.email}.`}
//               {status === 'error' &&
//                 'Could not email your download link automatically. Your file is still available above.'}
//             </p>
//             {status === 'error' && (
//               <Button variant="secondary" size="md" className="mt-3" onClick={handleResend}>
//                 <Mail className="h-4 w-4" aria-hidden="true" />
//                 Resend Email
//               </Button>
//             )}
//           </div>
//         )}
//
//         {showManualForm && (
//           <form onSubmit={handleManualSend} className="mt-6 flex w-full max-w-xs flex-col gap-2">
//             <label htmlFor="thank-you-email" className="text-xs font-medium text-text-secondary">
//               Enter your email to get the link
//             </label>
//             <div className="flex gap-2">
//               <input
//                 id="thank-you-email"
//                 type="email"
//                 required
//                 value={manualEmail}
//                 onChange={(event) => setManualEmail(event.target.value)}
//                 placeholder="you@example.com"
//                 className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-text-primary outline-none focus-visible:border-brand-orange"
//               />
//               <Button type="submit" variant="secondary" size="md" disabled={status === 'sending'}>
//                 {status === 'sending' ? (
//                   'Sending…'
//                 ) : (
//                   <>
//                     <Mail className="h-4 w-4" aria-hidden="true" />
//                     Send
//                   </>
//                 )}
//               </Button>
//             </div>
//             {status === 'sent' && <p className="text-xs text-brand-orange-light">Sent! Check your inbox.</p>}
//             {status === 'error' && (
//               <p className="text-xs text-text-muted">Could not send - please use the download button above.</p>
//             )}
//           </form>
//         )}
//
//         <Link
//           to="/"
//           className="mt-8 text-sm font-medium text-brand-orange-light hover:text-brand-orange-light/80"
//         >
//           Back to the product page
//         </Link>
//       </Container>
//     </div>
//   );
// }
// --- END DISABLED: /thank-you page ---
