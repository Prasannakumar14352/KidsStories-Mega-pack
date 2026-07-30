import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import { product } from '../config/product';

let initialized = false;

function ensureInitialized(): void {
  if (initialized || !emailConfig.publicKey) return;
  emailjs.init({ publicKey: emailConfig.publicKey });
  initialized = true;
}

/**
 * Sends the download link to the given email via EmailJS. Deliberately
 * restricted to exactly the params the delivery template expects -
 * to_email, download_url, product_name - so this helper can't be repurposed
 * to send arbitrary EmailJS content from elsewhere in the app.
 */
export async function sendDeliveryEmail(toEmail: string): Promise<void> {
  if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
    throw new Error('EmailJS is not configured (missing service ID, template ID, or public key).');
  }

  ensureInitialized();

  await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
    to_email: toEmail,
    download_url: emailConfig.downloadUrl,
    product_name: product.name,
  });
}
