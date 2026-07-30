export type CtaLocation =
  | 'announcement_bar'
  | 'header'
  | 'hero'
  | 'bonuses'
  | 'value_stack'
  | 'pricing'
  | 'final_cta'
  | 'mobile_sticky_bar';

interface DataLayerWindow extends Window {
  dataLayer?: unknown[];
}

/**
 * Pushes events to window.dataLayer only if a tag-management / analytics
 * script has already defined it elsewhere in the project. This deliberately
 * does not load or configure any analytics provider itself - it is a no-op
 * until the project wires one up.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  const w = window as DataLayerWindow;
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...params });
  }
}

export function trackPurchaseCta(location: CtaLocation): void {
  trackEvent('purchase_cta_click', { cta_location: location });
}

export function trackBeginCheckout(location: CtaLocation): void {
  trackEvent('begin_checkout', { cta_location: location });
}

export function trackFaqOpen(question: string): void {
  trackEvent('faq_open', { question });
}

export function trackSelectItem(itemName: string): void {
  trackEvent('select_item', { item_name: itemName });
}

export function trackViewItemList(listName: string): void {
  trackEvent('view_item_list', { item_list_name: listName });
}
