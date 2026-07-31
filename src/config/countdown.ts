export type ExpireBehavior = 'freeze' | 'hide';

/** Change the launch-offer countdown length here - nowhere else. */
export const OFFER_DURATION_HOURS = 2;

/**
 * 'freeze' - keep showing the timer pinned at 00h 00m 00s after it expires.
 * 'hide'   - stop rendering the timer entirely once expired.
 * Either way, price and checkout stay fully functional - this only controls
 * the visual countdown display.
 */
export const EXPIRE_BEHAVIOR: ExpireBehavior = 'freeze';

/**
 * Versioned so a future change to the offer (e.g. a new duration or promo)
 * can bump the suffix to give every visitor a fresh countdown instead of
 * inheriting whatever is already stored in their browser.
 */
export const OFFER_END_STORAGE_KEY = 'kidsstories_offer_end_v1';
