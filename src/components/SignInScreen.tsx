import React, { useState } from 'react'

interface SignInScreenProps {
  onSignIn: () => void
}

const SignInScreen: React.FC<SignInScreenProps> = ({ onSignIn }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    onSignIn()
  }

  return (
    <div className="mobile-container bg-white">
      {/* Status Bar */}
      <div className="status-bar">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          {/* ...status indicators same as before... */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-8 py-16">
        {/* Logo */}
        <div className="mb-12">
          <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center mb-4">
            <span className="text-[#4F9DE8] text-xl font-extrabold">α</span>
          </div>
        </div>

        {/* Sign In Form */}
        <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome</h1>
            <p className="text-gray-500">Sign in to your account</p>
          </div>

          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Phone or Email"
              value={phoneOrEmail}
              onChange={(e) => setPhoneOrEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F9DE8] focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Password or OTP"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F9DE8] focus:border-transparent"
            />
          </div>

          <button
            onClick={handleSignIn}
            className="w-full bg-[#4F9DE8] text-white font-medium py-3 rounded-xl mb-6 hover:bg-blue-500 transition-colors"
          >
            Sign In
          </button>

          {/* Continue with Email */}
          <button className="w-full flex items-center justify-center py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors mb-6">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            Continue with Email
          </button>
        </div>

        {/* Policies */}
        <div className="mt-12 flex space-x-6 text-gray-400 text-sm">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Help</span>
        </div>

        {/* Footer Branding */}
        <div className="mt-4 flex items-center text-sm">
          <span className="text-gray-400">From</span>
          <span className="ml-2 text-[#4F9DE8] font-bold">El-Aenon Company</span>
        </div>
      </div>
    </div>
  )
}

export default SignInScreen
