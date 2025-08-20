import ToastifyNotifications from '@/src/components/main/ToastifyNotifications'
import React, { ReactNode } from 'react'

export default function AnimesLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <div>
      AnimesLayout
      {children}
    </div>
  )
}
