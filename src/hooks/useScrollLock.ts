"use client"

import { useEffect } from "react"

export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      // Get the current scroll position
      const scrollY = window.scrollY

      // Apply scroll lock
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${scrollY}px`

      // Only add padding-right on desktop to prevent layout shift
      if (window.innerWidth > 768) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }

      return () => {
        // Restore original styles
        document.body.style.position = ""
        document.body.style.width = ""
        document.body.style.top = ""
        document.body.style.paddingRight = ""

        // Restore scroll position
        window.scrollTo(0, scrollY)
      }
    }
  }, [lock])
}

