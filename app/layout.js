import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import PerformanceMonitor from './components/PerformanceMonitor'
import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Vaibhav Kashyap - Frontend UI Developer',
  description: 'Portfolio of Vaibhav Kashyap, a passionate frontend UI developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'frontend developer, react, nextjs, portfolio, web development',
  authors: [{ name: 'Vaibhav Kashyap' }],
  icons: {
    icon: '/assets/images/Fav.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <PerformanceMonitor />
          <Sidebar />
          <div style={{ overflowX: 'hidden', width: '100%' }}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}