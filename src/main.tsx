import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { getRouter } from './router'
import { Preloader } from './components/Preloader'

const router = getRouter()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setReady(true)} router={router} />
      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <RouterProvider router={router} />
        </motion.div>
      )}
    </>
  )
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
