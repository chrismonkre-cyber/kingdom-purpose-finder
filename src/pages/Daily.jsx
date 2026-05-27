import { useState } from "react";
import PageBackground from "../components/PageBackground";
import LogoBanner from "../components/LogoBanner";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";
import { IMAGES } from "../lib/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = [
  {
    title: "Identity in Christ",
    scripture: "\"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.\" — Ephesians 2:10",
    encouragement: "You are not defined by your past, your failures, or the world's opinion. You are defined by what God says about you. He calls you chosen, royal, holy, and His own. Let this truth anchor your heart today.",
    prayer: "Father, reveal to me who I truly am in You. Strip away every false identity and clothe me in the truth of Your Word. I receive my identity as Your child, Your ambassador, and Your vessel of purpose. In Jesus' name, Amen.",
    declaration: "I am who God says I am. I am chosen, loved, redeemed, and called. My identity is rooted in Christ alone, and no weapon formed against my purpose shall prosper.",
    action: "Write down 5 things God says about you from Scripture. Speak them aloud three times today.",
    reflection: "What lies about my identity have I been believing? What truth from God's Word will I replace them with?"
  },
  {
    title: "Calling",
    scripture: "\"Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\" — Jeremiah 1:5",
    encouragement: "God knew you before you took your first breath. He didn't create you randomly — He designed you with specific purpose. Your calling isn't something you have to manufacture; it's something you discover as you draw closer to Him.",
    prayer: "Lord, open my spiritual eyes to see the calling You placed on my life before I was born. Give me ears to hear Your voice and courage to follow where You lead. I surrender my plans for Your purpose. In Jesus' name, Amen.",
    declaration: "I was called before I was formed. God's purpose for my life is certain, irrevocable, and unstoppable. I walk in divine calling today.",
    action: "Spend 10 minutes in silence asking God: 'What have You called me to do?' Write down whatever comes to your heart.",
    reflection: "What keeps returning to my heart when I think about my purpose? What burden do I carry for others?"
  },
  {
    title: "Obedience",
    scripture: "\"If you love me, keep my commands.\" — John 14:15",
    encouragement: "Obedience is not a burden — it's the pathway to blessing. Every step of obedience unlocks a new dimension of purpose. God doesn't ask you to understand everything first — He asks you to trust and move.",
    prayer: "Father, give me a heart that obeys quickly and completely. Remove every hesitation, every excuse, and every fear that holds me back from full obedience. I choose Your way today. In Jesus' name, Amen.",
    declaration: "I am a person of radical obedience. I do not delay when God speaks. My obedience activates my purpose, opens doors, and releases Kingdom power.",
    action: "Identify one thing God has been asking you to do that you've been delaying. Take the first step today.",
    reflection: "Where have I been hesitating in obedience? What is the cost of continued delay?"
  },
  {
    title: "Courage",
    scripture: "\"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.\" — Joshua 1:9",
    encouragement: "Fear is the enemy of purpose. But courage doesn't mean the absence of fear — it means moving forward in faith despite it. The Lion of Judah goes before you. You are never alone in your assignment.",
    prayer: "Lord, fill me with supernatural courage. Let boldness rise in my spirit. Where fear has held me captive, let Your presence set me free. I will not shrink back from my calling. In Jesus' name, Amen.",
    declaration: "I am bold as a lion. The Spirit of God lives in me — not a spirit of fear, but of power, love, and a sound mind. I advance with courage into my Kingdom assignment.",
    action: "Do one thing today that stretches your faith. Speak up, step out, or take an action you've been afraid to take.",
    reflection: "What fears have been blocking my purpose? How would I live differently if I truly believed God was with me?"
  },
  {
    title: "Spiritual Gifts",
    scripture: "\"Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms.\" — 1 Peter 4:10",
    encouragement: "God has placed gifts inside you that the world needs. Your gifts are not for decoration — they are tools for Kingdom service. When you use your gifts, you glorify God and transform lives.",
    prayer: "Holy Spirit, reveal to me the gifts You've placed in me. Help me to develop, sharpen, and deploy my gifts for Kingdom impact. Let nothing be wasted. In Jesus' name, Amen.",
    declaration: "I am gifted by God for Kingdom service. My gifts are powerful, needed, and ready to be released. I will not bury what God has given me.",
    action: "List your top 3 spiritual gifts. Ask someone who knows you well to confirm or add to the list.",
    reflection: "What gifts do people often recognize in me? How am I currently using them for God's glory?"
  },
  {
    title: "Service",
    scripture: "\"For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.\" — Mark 10:45",
    encouragement: "True greatness in the Kingdom is measured by service. Purpose isn't about platforms and positions — it's about faithfully serving wherever God places you. The greatest among you is the servant of all.",
    prayer: "Father, give me a servant's heart. Help me to see every opportunity to serve as an opportunity to fulfill my purpose. Let humility and love drive my actions. In Jesus' name, Amen.",
    declaration: "I am a Kingdom servant. I serve with joy, excellence, and faithfulness. My service is my worship, and my worship activates my purpose.",
    action: "Find one specific way to serve someone today without expecting anything in return.",
    reflection: "Am I serving where God has placed me with a willing heart? What area of service is God calling me into next?"
  },
  {
    title: "Kingdom Influence",
    scripture: "\"You are the light of the world. A town built on a hill cannot be hidden.\" — Matthew 5:14",
    encouragement: "You were designed to influence. Whether in your home, workplace, community, or nation — God has placed you strategically to bring Kingdom light into darkness. Don't shrink. Shine.",
    prayer: "Lord, expand my influence for Your Kingdom. Let my life be a testimony that draws others to You. Open doors of influence I could never open myself. Let Your light shine through me. In Jesus' name, Amen.",
    declaration: "I am a Kingdom influencer. My life carries divine authority. I bring light, truth, and transformation everywhere I go. Nations will be impacted through my obedience.",
    action: "Identify your primary sphere of influence (family, work, community, online). Take one intentional step to bring Kingdom values into that sphere today.",
    reflection: "Where has God positioned me for influence? Am I using that position for Kingdom advancement?"
  }
];

export default function Daily() {
  const dayIndex = new Date().getDay();
  const [current, setCurrent] = useState(dayIndex);
  const day = DAYS[current];

  const prev = () => setCurrent((c) => (c === 0 ? 6 : c - 1));
  const next = () => setCurrent((c) => (c === 6 ? 0 : c + 1));

  return (
    <PageBackground webImage={IMAGES.daily.web} mobileImage={IMAGES.daily.mobile}>
      <div className="max-w-3xl mx-auto px-4 pb-24 md:pb-8">
        <LogoBanner />
        <h1 className="font-heading text-3xl md:text-4xl text-yellow-300 text-center font-bold mb-2" style={{ textShadow: "0 0 25px rgba(212,175,55,0.5)" }}>
          Daily Purpose Step
        </h1>
        <p className="font-body text-yellow-100/70 text-center text-sm mb-8">Day {current + 1} of 7</p>

        <div className="flex items-center justify-between mb-6">
          <button onClick={prev} className="p-2 rounded-full bg-black/30 text-yellow-300 hover:bg-black/50 transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="font-heading text-xl md:text-2xl text-yellow-300 font-bold" style={{ textShadow: "0 0 15px rgba(212,175,55,0.4)" }}>
            {day.title}
          </h2>
          <button onClick={next} className="p-2 rounded-full bg-black/30 text-yellow-300 hover:bg-black/50 transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <GlassCard>
            <h3 className="font-heading text-yellow-400 text-sm font-bold mb-2 tracking-wider uppercase">Scripture</h3>
            <p className="font-body text-yellow-100/90 text-sm italic leading-relaxed">{day.scripture}</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-heading text-yellow-400 text-sm font-bold mb-2 tracking-wider uppercase">Encouragement</h3>
            <p className="font-body text-yellow-100/85 text-sm leading-relaxed">{day.encouragement}</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-heading text-yellow-400 text-sm font-bold mb-2 tracking-wider uppercase">Prayer</h3>
            <p className="font-body text-yellow-100/85 text-sm leading-relaxed">{day.prayer}</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-heading text-yellow-400 text-sm font-bold mb-2 tracking-wider uppercase">Declaration</h3>
            <p className="font-body text-yellow-200 text-sm font-semibold leading-relaxed">{day.declaration}</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-heading text-yellow-400 text-sm font-bold mb-2 tracking-wider uppercase">Action Step</h3>
            <p className="font-body text-yellow-100/85 text-sm leading-relaxed">{day.action}</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-heading text-yellow-400 text-sm font-bold mb-2 tracking-wider uppercase">Reflection / Journal Prompt</h3>
            <p className="font-body text-yellow-100/85 text-sm leading-relaxed italic">{day.reflection}</p>
          </GlassCard>
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}