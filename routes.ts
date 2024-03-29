/**
 * array routes that are accessible to the public
 * 
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
];

/**
 * array routes for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/sign-in",
  "/sign-up",
];

/**
 * API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";


/**
 * The Contract Address for the nft Minting collection
 * @type {string}
 */
export const contractAddress = "0x1b9Ce8865115892C0BC1aAffCd7f18E137aCc45A"