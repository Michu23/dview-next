
import { Inter } from 'next/font/google'
import './globals.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { StateProvider } from '../context/StateContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dview Technologies',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>

        {children}

        </StateProvider>
        </body>
    </html>
  )
}
