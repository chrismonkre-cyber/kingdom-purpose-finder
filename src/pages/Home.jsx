import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import LogoBanner from "../components/LogoBanner";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";
import { IMAGES } from "../lib/images";
import { Sparkles, Shield, Footprints } from "lucide-react";

const FEATURES = [
  { icon: Sparkles, title: "Created on Purpose", desc: "God made you with design, value, and assignment." },
  { icon: Shield, title: "Awaken the Lion Within", desc: "Rise in boldness, courage, and Spirit-led confidence." },
  { icon: Footprints, title: "Walk in Kingdom Assignment", desc: "Take practical next steps into what God has called you to do." },
];

export default function Home() {
  return (
    <PageBackground webImage={IMAGES.home.web} mobileImage={IMAGES.home.mobile}>
      <div className="fixed inset-0 bg-black/35 pointer-events-none z-0" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-24 md:pb-8">
        <LogoBanner />

        {/* Hero */}
        <div className="text-center py-8 md:py-16">
          <h1
            className="font-heading text-4xl md:text-6xl font-bold text-yellow-300 mb-4 tracking-wide"
            style={{ textShadow: "0 0 30px rgba(212,175,55,0.6), 0 2px 4px rgba(0,0,0,0.3)" }}
          >
            Kingdom Purpose Finder
          </h1>
          <p className="font-heading text-lg md:text-xl text-white font-semibold mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>
            Discover your calling. Walk in purpose. Advance the Kingdom.
          </p>
          <p className="font-body text-white max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>
            A Spirit-filled companion to help you discover your God-given calling, strengthen your identity in Christ, and take practical steps into your Kingdom assignment.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link to="/daily" className="px-6 py-3 rounded-xl font-heading text-sm font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-lg shadow-yellow-900/30">
              Start Today's Step
            </Link>
            <Link to="/purpose" className="px-6 py-3 rounded-xl font-heading text-sm font-bold border-2 border-yellow-500/50 text-yellow-300 hover:bg-yellow-600/20 transition-all">
              Discover Your Calling
            </Link>
            <Link to="/journal" className="px-6 py-3 rounded-xl font-heading text-sm font-bold border-2 border-yellow-500/50 text-yellow-300 hover:bg-yellow-600/20 transition-all">
              Purpose Journal
            </Link>
            <a
              href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-heading text-sm font-bold bg-gradient-to-r from-red-900 to-red-800 text-yellow-200 hover:from-red-800 hover:to-red-700 transition-all border border-yellow-600/30"
            >
              Partner / Sow
            </a>
          </div>
        </div>

        {/* Why Purpose Matters */}
        <div className="py-8 md:py-12">
          <h2 className="font-heading text-2xl md:text-3xl text-yellow-300 text-center font-bold mb-4" style={{ textShadow: "0 0 20px rgba(212,175,55,0.5)" }}>
            Why Purpose Matters
          </h2>
          <p className="font-body text-yellow-100 text-center max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
            You were not created by accident. God formed you with intention, calling, gifts, and assignment. Purpose is not merely what you do — it is who God made you to be and how you walk that out for His glory.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {FEATURES.map((f) => (
              <GlassCard key={f.title} className="text-center">
                <f.icon className="w-10 h-10 text-yellow-400 mx-auto mb-3 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                <h3 className="font-heading text-yellow-300 text-lg font-bold mb-2">{f.title}</h3>
                <p className="font-body text-yellow-100 text-sm">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}
