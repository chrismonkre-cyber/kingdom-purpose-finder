import PageBackground from "../components/PageBackground";
import LogoBanner from "../components/LogoBanner";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";
import { IMAGES } from "../lib/images";

export default function About() {
  return (
    <PageBackground webImage={IMAGES.resources.web} mobileImage={IMAGES.resources.mobile}>
      <div className="max-w-3xl mx-auto px-4 pb-24 md:pb-8">
        <LogoBanner />
        <h1 className="font-heading text-3xl md:text-4xl text-yellow-300 text-center font-bold mb-8" style={{ textShadow: "0 0 25px rgba(212,175,55,0.5)" }}>
          About Kingdom Purpose Finder
        </h1>

        <GlassCard className="mb-6">
          <p className="font-body text-yellow-100/85 text-sm md:text-base leading-relaxed">
            Kingdom Purpose Finder exists to help believers discover their identity, gifts, calling, and Kingdom assignment through Scripture, prayer, reflection, and bold faith. This app is part of the Kingdom Mandate Ministry ecosystem, created to awaken the lion within and equip people to walk in Spirit-filled purpose.
          </p>
        </GlassCard>

        <h2 className="font-heading text-2xl md:text-3xl text-yellow-300 text-center font-bold mb-4" style={{ textShadow: "0 0 20px rgba(212,175,55,0.4)" }}>
          Our Mission
        </h2>
        <GlassCard className="mb-8">
          <p className="font-body text-yellow-100/85 text-sm md:text-base leading-relaxed">
            To help people move from uncertainty to clarity, from hesitation to obedience, and from hidden potential to Kingdom impact.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://kingdommandateministry.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-heading text-sm font-bold border-2 border-yellow-500/50 text-yellow-300 hover:bg-yellow-600/20 transition-all"
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
            className="px-6 py-3 rounded-xl font-heading text-sm font-bold border-2 border-yellow-500/50 text-yellow-300 hover:bg-yellow-600/20 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}