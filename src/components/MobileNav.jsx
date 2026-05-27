import { Link, useLocation } from "react-router-dom";
import { Home, Sun, Compass, BookOpen, Library, Info } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/daily", label: "Daily", icon: Sun },
  { to: "/purpose", label: "Purpose", icon: Compass },
  { to: "/journal", label: "Journal", icon: BookOpen },
  { to: "/resources", label: "Resources", icon: Library },
  { to: "/about", label: "About", icon: Info },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/60 backdrop-blur-xl border-t border-yellow-600/30">
      <div className="flex justify-around items-center py-2 px-1">
        {NAV_ITEMS.map((item) => {
          const active = location.pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all ${
                active
                  ? "text-yellow-300"
                  : "text-yellow-100/60 hover:text-yellow-200"
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? "drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]" : ""}`} />
              <span className="text-[10px] font-heading tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}