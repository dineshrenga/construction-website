"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface QuoteContextType {
  isModalOpen: boolean
  showToast: boolean
  openModal: () => void
  closeModal: () => void
  triggerSuccess: () => void
  hideToast: () => void
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined)

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const triggerSuccess = () => setShowToast(true)
  const hideToast = () => setShowToast(false)

  // Auto-hide toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  return (
    <QuoteContext.Provider value={{ 
      isModalOpen, 
      showToast, 
      openModal, 
      closeModal, 
      triggerSuccess,
      hideToast
    }}>
      {children}
    </QuoteContext.Provider>
  )
}

export function useQuote() {
  const context = useContext(QuoteContext)
  if (context === undefined) {
    throw new Error("useQuote must be used within a QuoteProvider")
  }
  return context
}
