const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

const URL_CONFIG = {
    SHARED_CONTEXT: isLocalhost ? "http://localhost:3001/remoteEntry.js" : "https://yadav-angad.github.io/mfe-shell-book-store/shared/remoteEntry.js",
    MFE_HEADER: isLocalhost ? "http://localhost:3002/remoteEntry.js" : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-header/remoteEntry.js",
    MFE_CHECKOUT: isLocalhost ? "http://localhost:3003/remoteEntry.js" : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-checkout/remoteEntry.js",
    MFE_BOOK_GENRES: isLocalhost ? "http://localhost:3004/remoteEntry.js" : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-book-genres/remoteEntry.js",
    MFE_BOOK_LIST: isLocalhost ? "http://localhost:3005/remoteEntry.js" : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-book-list/remoteEntry.js",
    MFE_USER: isLocalhost ? "http://localhost:3006/remoteEntry.js" : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-user/remoteEntry.js",
    HOST: isLocalhost ? "http://localhost:3000/remoteEntry.js" : "https://yadav-angad.github.io/mfe-shell-book-store/host/remoteEntry.js",
};
