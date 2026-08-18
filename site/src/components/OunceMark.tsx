// Miniature of the Ounce wordmark (white lowercase serif on black) so links
// to /ounce read like clicking their logo.
export default function OunceMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-block rounded-lg bg-onyx px-3.5 py-1.5 font-serif lowercase leading-none text-white ${className}`}
    >
      ounce.
    </span>
  )
}
