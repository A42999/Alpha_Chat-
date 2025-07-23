import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MoreVertical, Plus } from 'lucide-react'
import BottomNavigation from './BottomNavigation'

const ChatListScreen: React.FC = () => {
  const navigate = useNavigate()

  const chats = [
    {
      id: 1,
      name: 'Daniel Johnson',
      message: 'what are you doing n',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: true,
      unread: true
    },
    {
      id: 2,
      name: 'Dania Amelia',
      message: 'Hello Rosie!',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: true,
      unread: true
    },
    {
      id: 3,
      name: 'Daniel Dickens',
      message: 'Hello ns',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: false,
      unread: false
    },
    {
      id: 4,
      name: 'jenny!',
      message: 'Hello Rosie!',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: true,
      unread: true
    },
    {
      id: 5,
      name: 'Sally Rooney',
      message: 'Hello Rosie!',
      time: '2 mins ago',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: true,
      unread: false
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
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded-full flex items-center justify-center">
            <span className="text-alpha-light-blue text-sm font-bold">α</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Alpha Chat</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/search')}>
            <Search className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={() => navigate('/profile')}>
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </button>
          <div className="relative">
            <button 
              onClick={(e) => {
                e.stopPropagation()
                const menu = document.getElementById('main-menu')
                menu?.classList.toggle('hidden')
              }}
            >
              <MoreVertical className="w-6 h-6 text-gray-600" />
            </button>
            <div className="absolute top-8 right-0 bg-white rounded-lg shadow-lg border py-2 w-48 z-50 hidden" id="main-menu">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">New Group</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">New Broadcast</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Linked Devices</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Starred Messages</button>
              <button onClick={() => navigate('/profile')} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Settings</button>
            </div>
            </div>
          </div>
        </div>

      {/* Chat List */}
      <div className="flex-1 px-6">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => navigate(`/chat/${chat.id}`)}
            className="flex items-center space-x-4 py-4 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full p-1 bg-gradient-to-r from-alpha-light-blue to-alpha-light-blue">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{chat.time}</span>
                  {chat.unread && (
                    <div className="w-2 h-2 bg-alpha-light-blue rounded-full"></div>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500 truncate mt-1">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation activeTab="chats" />
    </div>
  )
}

export default ChatListScreen