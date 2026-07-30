// --- DISABLED: EmailJS + Drive delivery config (kept for reference) ---
// Part of the /thank-you + EmailJS delivery flow, disabled along with it
// while Dodo Payments is in use. TODO: decide whether Dodo's own dashboard
// handles file delivery/redirect, or re-enable this + src/pages/ThankYouPage.tsx
// wired to Dodo's success redirect + webhook instead of Razorpay/PayPal.
//
// function buildDriveDownloadUrl(fileId: string): string {
//   if (!fileId) return '';
//   return `https://drive.google.com/uc?export=download&id=${fileId}`;
// }
//
// const driveFileId = import.meta.env.VITE_DRIVE_FILE_ID || '';
//
// /**
//  * Single config module for the EmailJS delivery send and the Google Drive
//  * download link. downloadUrl is always derived from driveFileId in the
//  * correct direct-download format - never paste a Drive "view" URL into
//  * VITE_DRIVE_FILE_ID, only the file ID itself.
//  */
// export const emailConfig = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
//   publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
//   driveFileId,
//   downloadUrl: buildDriveDownloadUrl(driveFileId),
// };
// --- END DISABLED: EmailJS + Drive delivery config ---
