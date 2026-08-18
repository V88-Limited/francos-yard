import { useEffect } from 'react'
import OunceNav from '../components/ounce/OunceNav'
import OunceHero from '../components/ounce/OunceHero'
import OunceAbout from '../components/ounce/OunceAbout'
import OunceMenu from '../components/ounce/OunceMenu'
import OunceFindUs from '../components/ounce/OunceFindUs'
import OunceFooter from '../components/ounce/OunceFooter'
import { usePageMeta } from '../lib/usePageMeta'

export default function OuncePage() {
  usePageMeta(
    'Ounce Coffee — Specialty coffee in Westbourne, Bournemouth',
    'Ounce is an independent specialty coffee shop in Westbourne, Bournemouth. Expertly sourced beans, precision brewing, açai bowls — takeaway only. Open daily from 7am (8am weekends).',
  )

  // The page owns the dark theme; body stays cream for Franco's routes.
  useEffect(() => {
    document.documentElement.classList.add('ounce')
    return () => document.documentElement.classList.remove('ounce')
  }, [])

  return (
    <div className="bg-onyx font-sans text-white">
      <OunceNav />
      <main>
        <OunceHero />
        <OunceAbout />
        <OunceMenu />
        <OunceFindUs />
      </main>
      <OunceFooter />
    </div>
  )
}
