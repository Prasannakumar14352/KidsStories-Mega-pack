/**
 * Shared scroll target for every purchase CTA outside the pricing card
 * itself. Only the pricing card's own button opens Razorpay directly - every
 * other Buy Now / Get Access button funnels here first.
 */
export const scrollToPricing = () => {
  document.getElementById('pricing')?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};
