/**
 * Mounts Agentation in the same document as the page content.
 * Use this on the demo page so selection works (no iframe).
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";

const el = document.getElementById("agentation-root");
if (el) {
  createRoot(el).render(
    <StrictMode>
      <Agentation />
    </StrictMode>
  );
}
