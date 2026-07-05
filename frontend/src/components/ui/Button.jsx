const variants = {
  primary: 'bg-navy text-white hover:bg-navy/90 disabled:opacity-60',
  outline: 'border border-border text-neutral-dark hover:bg-neutral-light',
}

function Button({ variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

export default Button
