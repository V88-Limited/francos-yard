import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import About from '../components/About'
import Gallery from '../components/Gallery'
import FindUs from '../components/FindUs'
import Book from '../components/Book'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import { usePageMeta } from '../lib/usePageMeta'

export default function FrancosPage() {
  usePageMeta(
    "Franco's Yard — Brunch in Westbourne, Bournemouth",
    "Franco's Yard is a neighbourhood brunch café in Westbourne, Bournemouth. Seasonal brunch, great coffee and natural wine — Thursday to Sunday, 9am–3pm. Book a table.",
  )

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <FindUs />
        <Book />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
