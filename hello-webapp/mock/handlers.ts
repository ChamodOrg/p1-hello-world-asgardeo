import type { RequestHandler } from "msw";

// No API dependency: the app calls nothing, so there is nothing to mock.
// Page-scope state resets on every full page load (msw runs in the page).
export const handlers: RequestHandler[] = [];
