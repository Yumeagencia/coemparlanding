export const PIXEL_ID = '1777866856427035';

declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      data?: Record<string, unknown>
    ) => void;
  }
}

export const trackInitiateCheckout = (value?: number, currency = 'PYG', plan?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value || 299000,
      currency: currency,
      content_name: plan || 'Curso Digital',
    });
  }
};

export const trackPurchase = (value?: number, currency = 'PYG') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value || 299000,
      currency: currency,
      content_name: 'Curso Digital',
    });
  }
};
