function Card({ className = '', children }) {
  return (
    <div className={`bg-white rounded-xl border border-border p-5 ${className}`}>
      {children}
    </div>
  )
}

export default Card
