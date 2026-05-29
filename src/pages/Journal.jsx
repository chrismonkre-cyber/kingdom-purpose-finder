import { useState, useEffect } from "react";
import PageBackground from "../components/PageBackground";
import LogoBanner from "../components/LogoBanner";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";
import { IMAGES } from "../lib/images";
import { Save, Trash2, BookOpen } from "lucide-react";

const PROMPTS = [
  "What is God saying to me right now?",
  "What burden or calling keeps returning to my heart?",
  "What gifts has God placed in me?",
  "What step of obedience do I need to take next?",
  "What fears do I need to surrender?",
  "What Kingdom area am I called to influence?"
];

const STORAGE_KEY = "kingdom-purpose-journal";

function getEntries() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export default function Journal() {
  const [entries, setEntries] = useState(getEntries);
  const [text, setText] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const saveEntry = () => {
    if (!text.trim()) return;
    const entry = {
      id: Date.now(),
      prompt: selectedPrompt,
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    };
    setEntries([entry, ...entries]);
    setText("");
    setSelectedPrompt("");
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <PageBackground webImage={IMAGES.journal.web} mobileImage={IMAGES.journal.mobile}>
      <div className="max-w-3xl mx-auto px-4 pb-24 md:pb-8">
        <LogoBanner />
        <h1 className="font-heading text-3xl md:text-4xl text-yellow-300 text-center font-bold mb-2" style={{ textShadow: "0 0 25px rgba(212,175,55,0.5)" }}>
          Purpose Journal
        </h1>
        <p className="font-body text-yellow-200 text-center text-sm mb-8">Record what God is speaking to your heart</p>

        {/* Toggle */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setShowSaved(false)}
            className={`px-5 py-2 rounded-lg font-heading text-sm font-bold transition-all ${!showSaved ? "bg-yellow-600/30 text-yellow-300 border border-yellow-500/40" : "text-yellow-100/60 hover:text-yellow-300"}`}
          >
            New Entry
          </button>
          <button
            onClick={() => setShowSaved(true)}
            className={`px-5 py-2 rounded-lg font-heading text-sm font-bold transition-all flex items-center gap-2 ${showSaved ? "bg-yellow-600/30 text-yellow-300 border border-yellow-500/40" : "text-yellow-100/60 hover:text-yellow-300"}`}
          >
            <BookOpen className="w-4 h-4" /> Saved ({entries.length})
          </button>
        </div>

        {!showSaved ? (
          <div className="space-y-4">
            {/* Prompts */}
            <GlassCard>
              <h3 className="font-heading text-yellow-400 text-sm font-bold mb-3 tracking-wider uppercase">Journal Prompts</h3>
              <div className="flex flex-wrap gap-2">
                {PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPrompt(p)}
                    className={`text-left px-3 py-2 rounded-lg text-xs font-body transition-all ${
                      selectedPrompt === p
                        ? "bg-yellow-600/30 text-yellow-300 border border-yellow-500/40"
                        : "bg-black/20 text-yellow-100/70 hover:bg-yellow-600/20 hover:text-yellow-200 border border-transparent"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Text area */}
            <GlassCard>
              {selectedPrompt && (
                <p className="font-body text-yellow-300 text-sm italic mb-3">{selectedPrompt}</p>
              )}
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write what God is putting on your heart..."
                className="w-full h-40 bg-black/20 border border-yellow-600/20 rounded-lg p-4 text-yellow-100 font-body text-sm placeholder-yellow-100/40 focus:outline-none focus:border-yellow-500/50 resize-none"
              />
              <button
                onClick={saveEntry}
                disabled={!text.trim()}
                className="mt-3 flex items-center gap-2 px-6 py-2.5 rounded-lg font-heading text-sm font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Save className="w-4 h-4" /> Save Entry
              </button>
            </GlassCard>
          </div>
        ) : (
          <div className="space-y-3">
            {entries.length === 0 ? (
              <GlassCard className="text-center">
                <p className="font-body text-yellow-100 text-sm">No journal entries yet. Start writing to capture what God is speaking.</p>
              </GlassCard>
            ) : (
              entries.map((entry) => (
                <GlassCard key={entry.id}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-body text-yellow-300 text-xs">{entry.date}</span>
                    <button onClick={() => deleteEntry(entry.id)} className="text-red-400/60 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  {entry.prompt && <p className="font-body text-yellow-300 text-xs italic mb-2">{entry.prompt}</p>}
                  <p className="font-body text-yellow-100 text-sm leading-relaxed whitespace-pre-wrap">{entry.text}</p>
                </GlassCard>
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </PageBackground>
  );
}