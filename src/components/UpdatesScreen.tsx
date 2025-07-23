import React from 'react'
import { Search, MoreVertical, Sparkles, Shield, Plus, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from './BottomNavigation'

const UpdatesScreen: React.FC = () => {
  const navigate = useNavigate()

  const stories = [
    {
      id: 1,
      name: 'You',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      hasStory: true,
      isOwn: true
    },
    {
      id: 2,
      name: 'Adam',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      hasStory: true
    },
    {
      id: 3,
      name: 'William',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      hasStory: true
    },
    {
      id: 4,
      name: 'Peter',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      hasStory: true
    },
    {
      id: 5,
      name: 'Julie',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      hasStory: true
    }
  ]

  const updates = [
    {
      id: 1,
      name: 'Pedro',
      action: 'liked your wave',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Brian',
      action: 'comment your wave',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Luis',
      action: 'audio call message sennd',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      hasAction: true,
      actionText: 'Play',
      actionColor: 'text-blue-500'
    },
    {
      id: 4,
      name: 'Matthew',
      action: 'add in your chat',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      hasAction: true,
      actionText: 'add',
      actionColor: 'text-blue-500',
      hasSecondAction: true,
      secondActionText: 'no add',
      secondActionColor: 'text-red-500'
    },
    {
      id: 5,
      name: 'Ryan',
      action: 'you add family group',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
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
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Wave</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/search')}>
            <Search className="w-6 h-6 text-gray-600" />
          </button>
          <div className="relative">
            <button 
              onClick={(e) => {
                e.stopPropagation()
                const menu = document.getElementById('updates-menu')
                menu?.classList.toggle('hidden')
              }}
            >
              <MoreVertical className="w-6 h-6 text-gray-600" />
            </button>
            <div className="absolute top-8 right-0 bg-white rounded-lg shadow-lg border py-2 w-48 z-50 hidden" id="updates-menu">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <span>Wave Privacy</span>
                </div>
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">
                <div className="flex items-center space-x-3">
                  <Plus className="w-4 h-4 text-gray-500" />
                  <span>Add Wave</span>
                </div>
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">
                <div className="flex items-center space-x-3">
                  <Settings className="w-4 h-4 text-gray-500" />
                  <span>Wave Settings</span>
                </div>
              </button>
              <button onClick={() => navigate('/profile')} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Settings</button>
            </div>
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="px-6 mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center space-y-2 flex-shrink-0">
              <div className={`relative ${story.hasStory ? 'p-1 bg-gradient-to-r from-alpha-light-blue to-alpha-light-blue rounded-full' : ''}`}>
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
                {story.isOwn && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-alpha-light-blue rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-600 text-center">{story.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Updates Section */}
      <div className="px-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Update</h2>
        <div className="space-y-4 overflow-y-auto hide-scrollbar">
          {updates.map((update) => (
            <div key={update.id} className="flex items-center space-x-4">
              <div className="relative">
              <img
                src={update.avatar}
                alt={update.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              </div>
              <div className="flex-1">
                <p className="text-gray-800">
                  <span className="font-medium">{update.name}</span>
                  <span className="text-gray-600 ml-1">{update.action}</span>
                </p>
              </div>
              {update.hasAction && (
                <div className="flex space-x-2">
                  <button className={`px-3 py-1 text-sm font-medium text-alpha-light-blue`}>
                    {update.actionText}
                  </button>
                  {update.hasSecondAction && (
                    <button className={`px-3 py-1 text-sm font-medium ${update.secondActionColor}`}>
                      {update.secondActionText}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation activeTab="updates" />
    </div>
  )
}

export default UpdatesScreen