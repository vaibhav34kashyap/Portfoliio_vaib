import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import PerformanceMonitor from './components/PerformanceMonitor'

export const metadata = {
  title: 'Mohit Singh Rawat - Frontend Developer',
  description: 'Portfolio of Mohit Singh Rawat, a passionate frontend developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'frontend developer, react, nextjs, portfolio, web development',
  authors: [{ name: 'Mohit Singh Rawat' }],
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
          <div style={{ overflowX: 'hidden', width: '100%' }}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}