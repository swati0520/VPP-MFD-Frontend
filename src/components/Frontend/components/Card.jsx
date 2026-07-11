export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-800/60 p-4 shadow-soft ${className}`}>
      {children}
    </div>
  );
}
