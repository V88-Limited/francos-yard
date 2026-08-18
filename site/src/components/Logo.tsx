// Recreation of the Franco's Yard wordmark (Photos/Logo.jpeg):
// heavy caps "FRANCO'S" with a script "yard" tucked under the right end.
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-block leading-none ${className}`}>
      <span className="font-display tracking-tight">FRANCO&rsquo;S</span>
      <span className="font-script absolute right-[-0.18em] bottom-[-0.62em] rotate-[-6deg] text-[0.72em]">
        yard
      </span>
    </span>
  )
}
