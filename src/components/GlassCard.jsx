export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`bg-red-950/50 backdrop-blur-md border border-yellow-600/50 rounded-xl p-5 md:p-6 shadow-xl shadow-black/30 ${className}`}>
      {children}
    </div>
  );
}