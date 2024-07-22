// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'

function App() {
  const { isLoading } = useGlobalContext()
  if (isLoading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: '7rem' }}></div>
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
