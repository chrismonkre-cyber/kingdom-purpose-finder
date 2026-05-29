import { Link, useLocation } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a59a047ec_newlogo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily" },
  { to: "/purpose", label: "Purpose" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="relative z-50 flex items-center justify-between px-4 md:px-8 py-3 bg-black/50 backdrop-blur-md border-b border-yellow-600/40">
      <Link to="/" className="flex items-center gap-3">
        <img src={LOGO} alt="Kingdom Mandate Ministry" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <span className="font-heading text-yellow-300 text-sm md:text-base font-bold tracking-wide hidden sm:block" style={{ textShadow: "0 0 12px rgba(212,175,55,0.5)" }}>
          Kingdom Purpose Finder
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-3 py-2 rounded-lg text-sm font-heading tracking-wide transition-all duration-200 ${
              location.pathname === link.to
                ? "text-yellow-200 bg-yellow-600/25 border border-yellow-400/50 font-bold drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]"
                : "text-yellow-100 hover:text-yellow-200 hover:bg-yellow-600/15 font-medium"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-4 py-2 rounded-lg text-sm font-heading bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold hover:from-yellow-500 hover:to-yellow-400 transition-all"
        >
          Partner / Sow
        </a>
      </nav>
    </header>
  );
}