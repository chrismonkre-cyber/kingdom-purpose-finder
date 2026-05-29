import { useState } from "react";
import PageBackground from "../components/PageBackground";
import LogoBanner from "../components/LogoBanner";
import Footer from "../components/Footer";
import { IMAGES } from "../lib/images";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  {
    title: "Identity in Christ",
    scripture: "\"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!\" — 2 Corinthians 5:17",
    encouragement: "Your identity is the foundation of your purpose. Before God calls you to do anything, He first establishes who you are. You are His child, His masterpiece, His ambassador. Everything flows from this truth.",
    declaration: "I am a new creation in Christ. I am not defined by my past. I am defined by my Father. I walk in the fullness of my identity today.",
    nextStep: "Read Ephesians 1-2 and underline every phrase that describes who you are in Christ. Write them on a card and review them daily."
  },
  {
    title: "Calling & Assignment",
    scripture: "\"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.\" — Ephesians 2:10",
    encouragement: "God prepared your assignment before you were born. Your calling is not random — it's divine. As you seek Him, He will reveal step by step the specific work He designed for you.",
    declaration: "I have a divine assignment. God called me before I was formed, and He will complete what He started in me. I step boldly into my calling.",
    nextStep: "Spend 15 minutes in prayer asking God to reveal one area of assignment. Write down what you sense and share it with a trusted mentor."
  },
  {
    title: "Spiritual Gifts",
    scripture: "\"There are different kinds of gifts, but the same Spirit distributes them.\" — 1 Corinthians 12:4",
    encouragement: "The Holy Spirit has equipped you with unique gifts designed for Kingdom impact. Your gifts are not optional extras — they are essential tools for your assignment. Discover them, develop them, deploy them.",
    declaration: "I am equipped with powerful spiritual gifts. I will not bury them. I will steward them faithfully and use them for the glory of God and the building of His Kingdom.",
    nextStep: "Take a spiritual gifts assessment this week. Ask 3 people close to you what gifts they see in your life."
  },
  {
    title: "Leadership",
    scripture: "\"But whoever would be great among you must be your servant.\" — Matthew 20:26",
    encouragement: "Kingdom leadership is servant leadership. God raises leaders who are humble, faithful, and Spirit-led. Your willingness to serve positions you for greater responsibility in the Kingdom.",
    declaration: "I am called to lead with humility, wisdom, and the power of the Holy Spirit. I lead by serving, and I serve by leading. God's anointing rests on my leadership.",
    nextStep: "Identify one area where God is calling you to lead. Begin by serving there faithfully and asking God for wisdom."
  },
  {
    title: "Business & Marketplace",
    scripture: "\"The Lord your God will bless you in all the work of your hands.\" — Deuteronomy 15:10",
    encouragement: "The marketplace is a mission field. God places Kingdom people in business, finance, technology, arts, and every sector to bring His influence and provision. Your work is worship when done for His glory.",
    declaration: "I am a Kingdom marketplace leader. My business, my work, and my finances are tools for Kingdom advancement. God blesses the work of my hands.",
    nextStep: "Ask God how He wants you to use your professional skills and influence for Kingdom impact. Write a vision statement for your work life."
  },
  {
    title: "Ministry & Service",
    scripture: "\"Each of you should use whatever gift you have received to serve others.\" — 1 Peter 4:10",
    encouragement: "Ministry is not reserved for pastors and missionaries. Every believer is called to minister — to serve, to encourage, to bring healing, and to point others to Jesus. Your life is a ministry.",
    declaration: "I am a minister of the Gospel. Whether in the church, the home, or the marketplace — I carry God's presence and serve with excellence and love.",
    nextStep: "Volunteer for one ministry opportunity this week. Serve with excellence and watch God open doors."
  },
  {
    title: "Family & Legacy",
    scripture: "\"Train up a child in the way he should go; even when he is old he will not depart from it.\" — Proverbs 22:6",
    encouragement: "Your family is your first ministry. The legacy you build starts at home. God wants to use your family as a living testimony of His faithfulness, love, and purpose across generations.",
    declaration: "I build a godly legacy. My family walks in purpose, my children know their identity, and my home is a house of prayer, love, and Kingdom influence.",
    nextStep: "Have a purposeful conversation with a family member about their gifts and calling. Pray together over your family's legacy."
  },
  {
    title: "Courage & Obedience",
    scripture: "\"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.\" — Joshua 1:9",
    encouragement: "Purpose requires courage. Every step of obedience demands that you push past fear, comfort, and the opinions of others. The Lion of Judah goes before you — be bold.",
    declaration: "I am courageous and obedient. I do not shrink back from God's call. I face every giant with faith and every obstacle with the power of the Holy Spirit.",
    nextStep: "Identify your greatest fear related to your calling. Write it down, pray over it, and take one courageous step this week."
  }
];

export default function Purpose() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <PageBackground webImage={IMAGES.purpose.web} mobileImage={IMAGES.purpose.mobile}>
      <div className="max-w-3xl mx-auto px-4 pb-24 md:pb-8">
        <LogoBanner />
        <h1 className="font-heading text-3xl md:text-4xl text-yellow-300 text-center font-bold mb-2" style={{ textShadow: "0 0 25px rgba(212,175,55,0.5)" }}>
          Purpose Categories
        </h1>
        <p className="font-body text-yellow-200 text-center text-sm mb-8">Explore each area of Kingdom purpose</p>

        <div className="space-y-3">
          {CATEGORIES.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-xl overflow-hidden border border-yellow-600/50 bg-red-950/55 backdrop-blur-md shadow-xl shadow-black/40">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-yellow-600/10 transition-all"
                >
                  <span className="font-heading text-yellow-200 text-base md:text-lg font-bold" style={{ textShadow: '0 0 12px rgba(212,175,55,0.5)' }}>{cat.title}</span>
                  <ChevronDown className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 space-y-4 animate-in fade-in duration-300">
                    <div>
                      <h4 className="font-heading text-yellow-300 text-xs font-bold tracking-wider uppercase mb-1" style={{ textShadow: '0 0 8px rgba(212,175,55,0.6)' }}>Scripture</h4>
                      <p className="font-body text-white text-sm italic" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{cat.scripture}</p>
                    </div>
                    <div>
                      <h4 className="font-heading text-yellow-300 text-xs font-bold tracking-wider uppercase mb-1" style={{ textShadow: '0 0 8px rgba(212,175,55,0.6)' }}>Encouragement</h4>
                      <p className="font-body text-white text-sm leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{cat.encouragement}</p>
                    </div>
                    <div>
                      <h4 className="font-heading text-yellow-300 text-xs font-bold tracking-wider uppercase mb-1" style={{ textShadow: '0 0 8px rgba(212,175,55,0.6)' }}>Declaration</h4>
                      <p className="font-body text-yellow-200 text-sm font-semibold" style={{ textShadow: '0 0 10px rgba(212,175,55,0.4), 0 1px 3px rgba(0,0,0,0.8)' }}>{cat.declaration}</p>
                    </div>
                    <div>
                      <h4 className="font-heading text-yellow-300 text-xs font-bold tracking-wider uppercase mb-1" style={{ textShadow: '0 0 8px rgba(212,175,55,0.6)' }}>Next Step</h4>
                      <p className="font-body text-white text-sm" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{cat.nextStep}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}