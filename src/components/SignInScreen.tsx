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
    <div className="mobile-container bg-gray-50">
      {/* Status Bar */}
      <div className="status-bar">
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

      <div className="flex flex-col items-center justify-center px-8 py-16">
        {/* Logo */}
        <div className="mb-16">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span className="text-alpha-light-blue text-6xl font-bold">α</span>
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
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-alpha-light-blue focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Password or OTP"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-alpha-light-blue focus:border-transparent"
            />
          </div>

          <button
            onClick={handleSignIn}
            className="w-full bg-alpha-light-blue text-gray-700 font-medium py-3 rounded-xl mb-6 hover:bg-blue-400 transition-colors"
          >
            Sign In
          </button>

          <div className="text-center mb-6">
            <div className="flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Continue with Email
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Don't have an account?{' '}
              <span className="text-alpha-light-blue cursor-pointer">Sign up</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex space-x-6 text-gray-400 text-sm">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Help</span>
        </div>

        <div className="mt-4 flex items-center text-gray-400 text-sm">
          <span>Made with</span>
          <span className="ml-2 text-alpha-light-blue font-semibold">Visily</span>
        </div>
      </div>
    </div>
  )
}

export default SignInScreen