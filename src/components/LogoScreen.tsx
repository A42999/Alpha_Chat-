import React, { useEffect } from 'react'

interface LogoScreenProps {
  onComplete: () => void
}

const LogoScreen: React.FC<LogoScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="mobile-container bg-white flex items-center justify-center">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 status-bar">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.415 5 5 0 017.07 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <div className="w-6 h-3 bg-black rounded-sm"></div>
        </div>
      </div>

      {/* Logo Animation */}
      <div className="text-center animate-pulse">
        <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-alpha-light-blue text-8xl font-bold">α</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Alpha Chat</h1>
        <p className="text-gray-500">Connecting...</p>
      </div>
    </div>
  )
}

export default LogoScreen