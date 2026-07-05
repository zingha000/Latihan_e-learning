const tones = {
  success: 'bg-success/10 text-success',
  action: 'bg-orange/10 text-orange',
  neutral: 'bg-gray-100 text-gray-600',
}

function Badge({ tone = 'neutral', children }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}

export default Badge
