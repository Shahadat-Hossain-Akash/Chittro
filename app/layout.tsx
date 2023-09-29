import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'


export const metadata: Metadata = {
  title: 'Chittro',
  description: 'Photo album',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body >
      <Header/>
      <div style={{display: 'flex'}}>
        <Sidebar/>
        {children}
      </div>
        </body>
    </html>
  )
}
