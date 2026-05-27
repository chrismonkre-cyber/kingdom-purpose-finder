import PageBackground from "../components/PageBackground";
import LogoBanner from "../components/LogoBanner";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";
import { IMAGES } from "../lib/images";
import { ExternalLink } from "lucide-react";

const RESOURCES = [
  { title: "Kingdom Mandate Ministry", desc: "The home of Kingdom Mandate Ministry — equipping believers worldwide.", url: "https://kingdommandateministry.com" },
  { title: "Kingdom Pathway", desc: "A daily devotional companion for your spiritual growth journey.", url: "https://pathway.kingdommandateministry.com" },
  { title: "Kingdom Healing Room", desc: "Healing Scriptures, prayers, and declarations for body, soul, and spirit.", url: "https://healing.kingdommandateministry.com" },
  { title: "Kingdom Declarations", desc: "Powerful daily declarations to activate faith and Kingdom authority.", url: "https://declarations.kingdommandateministry.com" },
  { title: "The Bible Companion", desc: "Your comprehensive companion for studying and exploring God's Word.", url: "https://thebiblecompanion.online" },
  { title: "YouTube Channel", desc: "Kingdom teachings, worship, and prophetic content on YouTube.", url: "https://www.youtube.com/@KingdomMandateMinistry" },
];

export default function Resources() {
  return (
    <PageBackground webImage={IMAGES.resources.web} mobileImage={IMAGES.resources.mobile}>
      <div className="max-w-4xl mx-auto px-4 pb-24 md:pb-8">
        <LogoBanner />
        <h1 className="font-heading text-3xl md:text-4xl text-yellow-300 text-center font-bold mb-2" style={{ textShadow: "0 0 25px rgba(212,175,55,0.5)" }}>
          Kingdom Resources
        </h1>
        <p className="font-body text-yellow-100/70 text-center text-sm mb-8">Explore the Kingdom Mandate Ministry ecosystem</p>

        <div className="grid md:grid-cols-2 gap-4">
          {RESOURCES.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="block group">
              <GlassCard className="h-full hover:bg-red-950/40 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-yellow-300 text-base font-bold mb-2 group-hover:text-yellow-200 transition-colors">{r.title}</h3>
                    <p className="font-body text-yellow-100/75 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-yellow-500/50 group-hover:text-yellow-400 transition-colors flex-shrink-0 mt-1" />
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <GlassCard className="inline-block">
            <p className="font-body text-yellow-100/70 text-sm mb-2">Contact us:</p>
            <a href="mailto:kingdommm.chris@gmail.com" className="font-body text-yellow-300 text-sm hover:text-yellow-200 transition-colors">
              kingdommm.chris@gmail.com
            </a>
          </GlassCard>
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}