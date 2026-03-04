/**
 * Replace this with your actual app root (e.g. router, main layout).
 * Redirects to the demo page so Agentation runs in the same document (selection works).
 */
export function YourApp() {
  if (typeof window !== "undefined") {
    window.location.replace("/widgets-demo.html");
    return null;
  }
  return null;
}
