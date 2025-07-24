
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const Clerk_Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!Clerk_Key) throw  new Error("Clerk Key Required")

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ClerkProvider publishableKey={Clerk_Key}>
    <App />
    </ClerkProvider>
  </BrowserRouter>
)
