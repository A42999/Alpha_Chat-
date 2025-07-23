import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Share2, UserPlus, Users, VolumeX, Settings, Shield, Bell, Moon, HelpCircle, LogOut } from 'lucide-react'

const UserProfileScreen: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  // Get user data based on chat ID
  const getUserData = (chatId: string) => {
    const users = {
      '1': { 
        name: 'Daniel Johnson', 
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 234 567 8901',
        status: 'Available'
      },
      '2': { 
        name: 'Dania Amelia', 
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 234 567 8902',
        status: 'Busy'
      },
      '3': { 
        name: 'Daniel Dickens', 
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 234 567 8903',
        status: 'Away'
      },
      '4': { 
        name: 'jenny!', 
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 234 567 8904',
        status: 'Available'
      },
      '5': { 
        name: 'Sally Rooney', 
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 234 567 8905',
        status: 'Available'
      }
    }
    return users[chatId as keyof typeof users] || users['1']
  }

  const currentUser = getUserData(id || '1')

  const profileOptions = [
    { icon: Bell, label: 'Mute', action: () => {} },
    { icon: Share2, label: 'Custom Wallpaper', action: () => {} },
    { icon: Users, label: 'View in Address Book', action: () => {} },
    { icon: Shield, label: 'Verify Security Code', action: () => {} },
  ]

  const dangerOptions = [
    { 
      icon: UserPlus, 
      label: 'Add to Group', 
      action: () => {
        const confirmed = window.confirm('Add this contact to your chat?')
        if (confirmed) {
          // Add to group logic
        }
      }
    },
    { 
      icon: Shield, 
      label: 'Block', 
      color: 'text-red-500', 
      action: () => {
        const confirmed = window.confirm('Block this contact? They won\'t be able to call or message you.')
        if (confirmed) {
          // Block logic
        }
      }
    },
    { 
      icon: LogOut, 
      label: 'Report Contact', 
      color: 'text-red-500', 
      action: () => {
        const confirmed = window.confirm('Report this contact for spam or inappropriate behavior?')
        if (confirmed) {
          // Report logic
        }
      }
    },
    { 
      icon: VolumeX, 
      label: 'Delete Chat', 
      color: 'text-red-500', 
      action: () => {
        const confirmed = window.confirm('Delete this chat? This action cannot be undone.')
        if (confirmed) {
          // Delete chat logic
        }
      }
    },
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
        <button onClick={() => navigate(`/chat/${id}`)} className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-medium text-gray-900">Profile</h1>
        <div className="w-8"></div>
      </div>

      {/* Profile Info */}
      <div className="px-6 py-8 text-center">
        <div className="relative inline-block mb-4">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-alpha-light-blue to-alpha-light-blue">
            <img
              src={currentUser.avatar}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{currentUser.name}</h2>
        <p className="text-gray-500 mb-2">{currentUser.phone}</p>
        <p className="text-sm text-gray-400">{currentUser.status}</p>
      </div>

      {/* Profile Options */}
      <div className="px-6 mb-6">
        <div className="mb-6">
          <h3 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">Media, Links and Docs</h3>
          <div className="flex space-x-4">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-2"></div>
              <span className="text-xs text-gray-500">142</span>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-2"></div>
              <span className="text-xs text-gray-500">12</span>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-2"></div>
              <span className="text-xs text-gray-500">3</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          {profileOptions.map((option, index) => (
            <button key={index} onClick={option.action} className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <option.icon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-900 font-medium">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 space-y-2">
          {dangerOptions.map((option, index) => (
            <button key={index} onClick={option.action} className="flex items-center space-x-3 w-full py-3 px-4 rounded-lg hover:bg-gray-50">
              <option.icon className={`w-5 h-5 ${option.color || 'text-gray-600'}`} />
              <span className={`font-medium ${option.color || 'text-gray-900'}`}>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserProfileScreen