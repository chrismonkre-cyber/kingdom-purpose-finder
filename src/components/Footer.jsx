export default function Footer() {
  const links = [
    { label: "Main Site", href: "https://kingdommandateministry.com" },
    { label: "Pathway", href: "https://pathway.kingdommandateministry.com" },
    { label: "Healing Room", href: "https://healing.kingdommandateministry.com" },
    { label: "Declarations", href: "https://declarations.kingdommandateministry.com" },
    { label: "Bible Companion", href: "https://thebiblecompanion.online" },
    { label: "YouTube", href: "https://www.youtube.com/@KingdomMandateMinistry" },
    { label: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
    { label: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
  ];

  return (
    <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-yellow-600/20 py-8 px-4 pb-24 md:pb-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-200/70 hover:text-yellow-300 text-xs md:text-sm font-body transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-yellow-200/50 text-xs font-body">
          © 2026 Kingdom Mandate Ministry | Built by the Glory of GOD, for the Grace of GOD
        </p>
      </div>
    </footer>
  );
}