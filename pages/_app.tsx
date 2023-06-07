import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PropsWithChildren, useEffect, useState } from 'react'

function isOnClientSite(): boolean {
  return typeof window !== 'undefined'
}

function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {isOnClientSite() ? children : null}
    </div>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <SafeHydrate><Component {...pageProps} /></SafeHydrate>
}
