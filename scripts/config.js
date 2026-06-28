/**
 * Tessera Site Configuration
 * Single source of truth for domain names and URLs.
 * Update these when moving between environments.
 */
const TesseraConfig = {
    // Main site domain
    siteDomain: 'tessera.locoensayo.org',
    siteUrl: 'https://tessera.locoensayo.org',

    // AnythingLLM chat server
    chatDomain: 'chat.eduserver.au',
    chatApiUrl: 'https://chat.eduserver.au/api/embed',
    chatWidgetSrc: 'https://chat.eduserver.au/embed/anythingllm-chat-widget.min.js',

    // Booking API server
    bookingDomain: 'booking-api.eduserver.au',
    bookingApiUrl: 'https://booking-api.eduserver.au/api',
    bookingApiLocalUrl: 'http://localhost:8080/api',

    // Brand image URL (used in chatbot embeds)
    brandImageUrl: 'https://tessera.locoensayo.org/assets/tessera.png'
};
