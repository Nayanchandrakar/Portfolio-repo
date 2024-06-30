import Header from '@components/Header/Header'
import type { Metadata } from 'next'
import Provider from '@provider/Provider'
import font from "next/font/local"
import { cn } from '@lib/utils'

import '../style/globals.css'




// primary font
const acorn = font({
  src: "../public/fonts/acorn.woff",
  variable: "--font-acorn",
  weight: "900",
})

// secondary font
const gt = font({
  src: "../public/fonts/gt.woff",
  weight: "500",
})


export const metadata: Metadata = {
  title: 'Nayan chandrakar | Full stack developer',
  description: 'Next JS Web App Developer. Passionate about staying up-to-date with the latest web development technologies and best practices. Lets talk soon!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={cn(gt.className ,acorn.variable)}>
        <Provider>
          <Header />
          <main className='relative top-[72px]'>
          {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
