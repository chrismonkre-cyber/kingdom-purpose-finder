import { useState, useEffect } from "react";

export default function PageBackground({ webImage, mobileImage, children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const bgImage = isMobile ? mobileImage : webImage;

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/20" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}