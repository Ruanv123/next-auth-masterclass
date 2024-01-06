/*
 * An array of routes that are public
 *  These routes not required authentication
 * * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/*
 * An array of routes that use to authentication
 *  These routes not required authentication
 * * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/*
 * An array of routes that use to authentication
 *  These routes not required authentication
 * * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/*
 * An array of routes that use to authentication
 * * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
