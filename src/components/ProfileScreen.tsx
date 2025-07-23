import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Share2, UserPlus, Users, VolumeX, Settings, Shield, Bell, Moon, HelpCircle, LogOut, Camera, QrCode, Key, Database, Globe, Heart, Info } from 'lucide-react'

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate()

  // WhatsApp style profile sections
  const profileActions = [
    { 
      icon: Share2, 
      label: 'Share Profile', 
      action: () => {
        const confirmed = window.confirm('Share your profile with others?')
        if (confirmed) {
          // Share profile logic
        }
      }
    },
    { 
      icon: QrCode, 
      label: 'QR Code', 
      action: () => {
        const confirmed = window.confirm('Add this contact to your chat?')
        if (confirmed) {
          // QR code logic - add contact
        }
      }
    },
  ]

  // Instagram style settings
  const accountSettings = [
    { icon: Settings, label: 'Account', subtitle: 'Security, privacy, personal details', action: () => {} },
    { icon: Bell, label: 'Notifications', subtitle: 'Messages, group & call tones', action: () => {} },
    { icon: Shield, label: 'Privacy', subtitle: 'Block contacts, disappearing messages', action: () => {} },
    { icon: Database, label: 'Storage and Data', subtitle: 'Network usage, auto-download', action: () => {} },
  ]

  const supportSettings = [
    { icon: HelpCircle, label: 'Help', subtitle: 'Help center, contact us, privacy policy', action: () => {} },
    { icon: Heart, label: 'Tell a Friend', subtitle: 'Share Alpha Chat with friends', action: () => {} },
    { icon: Info, label: 'About', subtitle: 'Terms, privacy policy, app info', action: () => {} },
  ]

  return (
    <div className="mobile-container">
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

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <button onClick={() => navigate('/')} className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-medium text-gray-900">Profile</h1>
        <div className="w-8"></div>
      </div>

      {/* Profile Info */}
      <div className="px-6 py-6 text-center bg-gray-50">
        <div className="relative inline-block mb-4">
          <button className="relative">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-2 right-2 w-10 h-10 bg-ocean-blue rounded-full flex items-center justify-center border-3 border-white">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Rosie Anderson</h2>
        <p className="text-gray-600 mb-1">+1 234 567 8900</p>
        <p className="text-sm text-ocean-blue font-medium">Available</p>
      </div>

      {/* Profile Options */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            {profileActions.map((action, index) => (
              <button key={index} onClick={action.action} className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
                <action.icon className="w-7 h-7 text-ocean-blue mb-2" />
                <span className="text-sm font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="px-6 space-y-6">
        {/* Account Settings */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Account</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {accountSettings.map((option, index) => (
              <button key={index} onClick={option.action} className="flex items-center w-full py-4 px-4 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <option.icon className="w-6 h-6 text-ocean-blue" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-medium text-gray-900">{option.label}</h4>
                  <p className="text-sm text-gray-500">{option.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Support Settings */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Support</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {supportSettings.map((option, index) => (
              <button key={index} onClick={option.action} className="flex items-center w-full py-4 px-4 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <option.icon className="w-6 h-6 text-ocean-blue" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-medium text-gray-900">{option.label}</h4>
                  <p className="text-sm text-gray-500">{option.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="flex items-center w-full py-4 px-4 hover:bg-red-50 transition-colors">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <LogOut className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-base font-medium text-red-600">Log Out</h4>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen