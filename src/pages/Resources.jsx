import PageBackground from "../components/PageBackground";
import LogoBanner from "../components/LogoBanner";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";
import InstallApp from "../components/InstallApp";
import { IMAGES } from "../lib/images";
import { ExternalLink, Heart } from "lucide-react";

const RESOURCES = [
  { title: "Main Ministry Site", desc: "The home of Kingdom Mandate Ministry — equipping believers worldwide.", url: "https://kingdommandateministry.com" },
  { title: "The Bible Companion", desc: "Your comprehensive companion for studying and exploring God's Word.", url: "https://thebiblecompanion.online" },
  { title: "Kingdom Prayer Wall", desc: "A living wall of prayer — submit, pray, and stand in intercession together.", url: "https://prayer.kingdommandateministry.com" },
  { title: "Kingdom Fire Companion", desc: "A Spirit-led companion to ignite revival fire in your walk with God.", url: "https://fire.kingdommandateministry.com" },
  { title: "Kingdom Pathway", desc: "A daily devotional companion for your spiritual growth journey.", url: "https://pathway.kingdommandateministry.com" },
  { title: "Kingdom Declarations", desc: "Powerful daily declarations to activate faith and Kingdom authority.", url: "https://declarations.kingdommandateministry.com" },
  { title: "Kingdom Healing Room", desc: "Healing Scriptures, prayers, and declarations for body, soul, and spirit.", url: "https://healing.kingdommandateministry.com" },
  { title: "Kingdom Purpose Finder", desc: "Discover your God-given calling and walk in Kingdom assignment.", url: "https://purpose.kingdommandateministry.com" },
  { title: "Kingdom Identity", desc: "Discover who you are in Christ and walk in the fullness of your identity.", url: "https://identity.kingdommandateministry.com" },
  { title: "Kingdom Gift Finder", desc: "Discover and deploy the spiritual gifts God placed inside you.", url: "https://gifts.kingdommandateministry.com" },
  { title: "Kingdom Battle Plan", desc: "Spiritual warfare strategies, prayers, and decrees for Kingdom warriors.", url: "https://battle.kingdommandateministry.com" },
  { title: "Kingdom Grace Vault", desc: "Unlock the depths of God's grace — transforming, empowering, sustaining.", url: "https://grace.kingdommandateministry.com" },
  { title: "Kingdom Revival Fire", desc: "Prophetic declarations, prayers, and encounters to ignite personal revival.", url: "https://revival.kingdommandateministry.com" },
  { title: "Kingdom Family Altar", desc: "Build a godly home — family devotions, prayers, and legacy resources.", url: "https://family.kingdommandateministry.com" },
  { title: "Kingdom Marketplace Mandate", desc: "Kingdom influence in business, finance, technology, and every sector.", url: "https://marketplace.kingdommandateministry.com" },
  { title: "Kingdom Freedom", desc: "Breakthrough prayers and declarations to walk in complete freedom.", url: "https://freedom.kingdommandateministry.com" },
  { title: "YouTube Channel", desc: "Kingdom teachings, worship, and prophetic content on YouTube.", url: "https://www.youtube.com/@KingdomMandateMinistry" },
];

export default function Resources() {
  return (
    <PageBackground webImage={IMAGES.resources.web} mobileImage={IMAGES.resources.mobile}>
      <div className="max-w-5xl mx-auto px-4 pb-24 md:pb-8">
        <LogoBanner />
        <h1 className="font-heading text-3xl md:text-4xl text-yellow-300 text-center font-bold mb-2" style={{ textShadow: "0 3px 8px rgba(0,0,0,0.95)" }}
          Kingdom Resources
        </h1>
       
  <p
  className="font-body text-white text-center text-base md:text-lg font-semibold max-w-2xl mx-auto mb-8 px-4 py-2 rounded-xl bg-black/40"
  style={{ textShadow: "0 2px 6px rgba(0,0,0,1)" }}
>
  Explore the full Kingdom Mandate Ministry ecosystem
</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {RESOURCES.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="block group">
              <GlassCard className="h-full hover:border-yellow-500/60 transition-all duration-300 group-hover:bg-red-950/50">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-yellow-300 text-sm font-bold mb-1.5 group-hover:text-yellow-200 transition-colors leading-snug">{r.title}</h3>
                    <p className="font-body text-yellow-100 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-yellow-500/70 group-hover:text-yellow-400 transition-colors flex-shrink-0 mt-0.5" />
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        {/* Partner / Sow */}
        <GlassCard className="mb-6 text-center">
          <Heart className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="font-heading text-yellow-300 text-xl font-bold mb-2">Partner / Sow Into the Kingdom</h3>
          <p className="font-body text-yellow-100 text-sm mb-4">Your generosity fuels Kingdom resources reaching the nations. Every gift matters.</p>
          <a
            href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl font-heading text-sm font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-lg shadow-yellow-900/30"
          >
            Partner / Sow Now
          </a>
        </GlassCard>

        {/* Contact */}
        <GlassCard className="mb-8 text-center">
          <p className="font-body text-yellow-100 text-sm mb-2">Questions or collaborations? Reach out:</p>
          <a href="mailto:kingdommm.chris@gmail.com" className="font-heading text-yellow-300 text-sm font-bold hover:text-yellow-200 transition-colors">
            kingdommm.chris@gmail.com
          </a>
        </GlassCard>

        {/* Install App */}
        <InstallApp />
      </div>
      <Footer />
    </PageBackground>
  );
}
