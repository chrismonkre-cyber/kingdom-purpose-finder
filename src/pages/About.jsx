import PageBackground from "../components/PageBackground";
import LogoBanner from "../components/LogoBanner";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";
import InstallApp from "../components/InstallApp";
import { IMAGES } from "../lib/images";
import { ExternalLink } from "lucide-react";

const ECOSYSTEM = [
  { label: "Main Ministry Site", url: "https://kingdommandateministry.com" },
  { label: "The Bible Companion", url: "https://thebiblecompanion.online" },
  { label: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
  { label: "Kingdom Fire", url: "https://fire.kingdommandateministry.com" },
  { label: "Kingdom Pathway", url: "https://pathway.kingdommandateministry.com" },
  { label: "Kingdom Declarations", url: "https://declarations.kingdommandateministry.com" },
  { label: "Kingdom Healing Room", url: "https://healing.kingdommandateministry.com" },
  { label: "Kingdom Identity", url: "https://identity.kingdommandateministry.com" },
  { label: "Kingdom Gift Finder", url: "https://gifts.kingdommandateministry.com" },
  { label: "Kingdom Battle Plan", url: "https://battle.kingdommandateministry.com" },
  { label: "Kingdom Grace Vault", url: "https://grace.kingdommandateministry.com" },
  { label: "Kingdom Revival Fire", url: "https://revival.kingdommandateministry.com" },
  { label: "Kingdom Family Altar", url: "https://family.kingdommandateministry.com" },
  { label: "Kingdom Marketplace Mandate", url: "https://marketplace.kingdommandateministry.com" },
  { label: "Kingdom Freedom", url: "https://freedom.kingdommandateministry.com" },
  { label: "YouTube Channel", url: "https://www.youtube.com/@KingdomMandateMinistry" },
];

export default function About() {
  return (
    <PageBackground webImage={IMAGES.resources.web} mobileImage={IMAGES.resources.mobile}>
      <div className="max-w-3xl mx-auto px-4 pb-24 md:pb-8">
        <LogoBanner />
        <h1 className="font-heading text-3xl md:text-4xl text-yellow-300 text-center font-bold mb-6" style={{ textShadow: "0 3px 8px rgba(0,0,0,0.95)" }}>
          About Kingdom Purpose Finder
        </h1>

        <GlassCard className="mb-6">
          <p className="font-body text-white text-base md:text-lg leading-relaxed">
            Kingdom Purpose Finder exists to help believers discover their identity, gifts, calling, and Kingdom assignment through Scripture, prayer, reflection, and bold faith. This app is part of the Kingdom Mandate Ministry ecosystem — created to awaken the lion within and equip people to walk in Spirit-filled purpose.
          </p>
        </GlassCard>

        <GlassCard className="mb-6">
          <h2 className="font-heading text-yellow-300 text-xl font-bold mb-3" style={{ textShadow: "0 0 15px rgba(212,175,55,0.4)" }}>
            Our Mission
          </h2>
          <p className="font-body text-white text-base md:text-lg leading-relaxed">
            To help people move from uncertainty to clarity, from hesitation to obedience, and from hidden potential to Kingdom impact.
          </p>
        </GlassCard>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://kingdommandateministry.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-heading text-sm font-bold border-2 border-yellow-500/60 text-yellow-300 hover:bg-yellow-600/20 transition-all"
          >
            Visit Kingdom Mandate Ministry
          </a>
          <a
            href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-heading text-sm font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 transition-all"
          >
            Partner / Sow
          </a>
          <a
            href="mailto:kingdommm.chris@gmail.com"
            className="px-6 py-3 rounded-xl font-heading text-sm font-bold border-2 border-yellow-500/60 text-yellow-300 hover:bg-yellow-600/20 transition-all"
          >
            Contact Us
          </a>
        </div>

        {/* Ecosystem */}
        <GlassCard className="mb-6">
          <h3 className="font-heading text-yellow-300 text-base font-bold mb-4">Kingdom Mandate Ministry Ecosystem</h3>
          <div className="flex flex-wrap gap-2">
            {ECOSYSTEM.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black/20 border border-yellow-600/20 text-yellow-200 text-xs font-body hover:border-yellow-500/50 hover:text-yellow-300 transition-all"
              >
                {item.label}
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </GlassCard>

        {/* Install */}
        <InstallApp />
      </div>
      <Footer />
    </PageBackground>
  );
}
