import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import GlassCard from "./GlassCard";

export default function InstallApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") setInstalled(true);
      setDeferredPrompt(null);
    }
  };

  return (
    <GlassCard id="install-section">
      <div className="flex items-center gap-3 mb-4">
        <Download className="w-7 h-7 text-yellow-400 flex-shrink-0" />
        <h2 className="font-heading text-yellow-300 text-xl md:text-2xl font-bold" style={{ textShadow: "0 0 15px rgba(212,175,55,0.5)" }}>
          Install This Free Kingdom App
        </h2>
      </div>
      <p className="font-body text-yellow-100 text-sm leading-relaxed mb-5">
        You can install Kingdom Purpose Finder on your phone, tablet, or computer — without using an app store.
      </p>

      {deferredPrompt && !installed ? (
        <button
          onClick={handleInstall}
          className="mb-5 flex items-center gap-2 px-6 py-3 rounded-xl font-heading text-sm font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-lg"
        >
          <Download className="w-4 h-4" />
          Install / Add to Home Screen
        </button>
      ) : installed ? (
        <p className="font-body text-yellow-300 text-sm font-semibold mb-5">✓ App installed! You can now open it from your home screen.</p>
      ) : null}

      <div className="space-y-3">
        <p className="font-heading text-yellow-400 text-xs font-bold tracking-wider uppercase mb-2">How to Install Manually</p>
        {[
          "Open this app in your browser (Chrome, Safari, Edge).",
          "Tap your browser menu (three dots ••• or the share icon).",
          "Choose \"Add to Home Screen\" or \"Install App.\"",
          "Tap Add or Install to confirm.",
          "Open it anytime from your home screen like a normal app.",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600/30 border border-yellow-500/40 text-yellow-300 text-xs font-heading font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <p className="font-body text-yellow-100 text-sm leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}