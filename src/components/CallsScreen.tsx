import React from 'react'
import { Search, MoreVertical, Phone, Video } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from './BottomNavigation'

const CallsScreen: React.FC = () => {
  const navigate = useNavigate()
  const callTabs = ['All', 'Voice', 'video', 'missed']
  const [activeTab, setActiveTab] = React.useState('All')

  const calls = [
    {
      id: 1,
      name: 'jenny !',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      type: 'outgoing',
      callType: 'voice'
    },
    {
      id: 2,
      name: 'Daniel Dickens',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      type: 'incoming',
      callType: 'voice'
    },
    {
      id: 3,
      name: 'Daniel Johnson',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      type: 'outgoing',
      callType: 'video'
    },
    {
      id: 4,
      name: 'jenny !',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      type: 'missed',
      callType: 'voice'
    },
    {
      id: 5,
      name: 'Daniel Dickens',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      type: 'incoming',
      callType: 'voice'
    },
    {
      id: 6,
      name: 'Daniel Johnson',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      type: 'outgoing',
      callType: 'voice'
    }
  ]

  const getCallIcon = (type: string) => {
    switch (type) {
      case 'outgoing':
        return <div className="w-4 h-4 text-green-500 transform rotate-45">↗</div>
      case 'incoming':
        return <div className="w-4 h-4 text-blue-500 transform -rotate-45">↙</div>
      case 'missed':
        return <div className="w-4 h-4 text-red-500">✕</div>
      default:
        return null
    }
  }

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
        <h1 className="text-2xl font-bold text-gray-800">Call</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/search')}>
            <Search className="w-6 h-6 text-gray-600" />
          </button>
          <div className="relative">
            <button onClick={() => {
              const menu = document.getElementById('calls-menu')
              menu?.classList.toggle('hidden')
            }}>
              <MoreVertical className="w-6 h-6 text-gray-600" />
            </button>
            <div className="absolute top-8 right-0 bg-white rounded-lg shadow-lg border py-2 w-48 hidden" id="calls-menu">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Clear Call Log</button>
              <button onClick={() => navigate('/profile')} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Settings</button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-4">
        <div className="flex space-x-6">
          {callTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab
                  ? 'text-alpha-light-blue border-b-2 border-alpha-light-blue'
                  : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Call List */}
      <div className="flex-1 px-6">
        {calls.map((call) => (
          <div key={call.id} className="flex items-center space-x-4 py-3">
            <div className="relative">
              <img
                src={call.avatar}
                alt={call.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {call.type === 'missed' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                {getCallIcon(call.type)}
                <h3 className="font-medium text-gray-900 truncate">{call.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mt-1">{call.time}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2">
                <Phone className="w-5 h-5 text-green-500" />
              </button>
              <button className="p-2">
                <Video className="w-5 h-5 text-alpha-light-blue" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation activeTab="calls" />
    </div>
  )
}

export default CallsScreen