function ProgressRing({ percent, size = 64 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0"
      style={{ width: size, height: size, background: `conic-gradient(#2E3192 ${percent * 3.6}deg, #E0E0E0 0deg)` }}
    >
      <div className="rounded-full bg-white flex items-center justify-center text-xs font-semibold text-neutral-dark" style={{ width: size - 12, height: size - 12 }}>
        {percent}%
      </div>
    </div>
  )
}

export default ProgressRing
