import React from "react";
import ReactDOM from "react-dom/client";
import VoiceBot from "./components/VoiceBot";

class VoiceBotWebComponent extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const root = document.createElement("div");
    shadow.appendChild(root);

    const id = this.getAttribute("id") || "";

    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <VoiceBot id={id} />
      </React.StrictMode>
    );
  }
}

customElements.define("zapline-voice-bot", VoiceBotWebComponent);
