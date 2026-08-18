import { Route, Routes } from 'react-router-dom'
import FrancosPage from './pages/FrancosPage'
import OuncePage from './pages/OuncePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FrancosPage />} />
      <Route path="/ounce" element={<OuncePage />} />
    </Routes>
  )
}
