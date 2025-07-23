import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Phone, Video, MoreVertical, Smile, Camera, Send } from 'lucide-react'

const ChatScreen: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [message, setMessage] = useState('')

  // Get user data based on chat ID
  const getUserData = (chatId: string) => {
    const users = {
      '1': { name: 'Daniel Johnson', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' },
      '2': { name: 'Dania Amelia', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100' },
      '3': { name: 'Daniel Dickens', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
      '4': { name: 'jenny!', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
      '5': { name: 'Sally Rooney', avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100' }
    }
    return users[chatId as keyof typeof users] || users['1']
  }

  const currentUser = getUserData(id || '1')

  const messages = [
    {
      id: 1,
      text: 'Thanks!',
      time: '2:30 am',
      sent: false,
      showAlpha: true
    },
    {
      id: 2,
      text: 'Hello! How are you doing today?',
      time: '2:30 am',
      sent: false,
      hasEmoji: true,
      showAlpha: false
    },
    {
      id: 3,
      text: 'I am doing great, thanks for asking!',
      time: '2:30 am',
      sent: true,
      hasEmoji: true
    },
    {
      id: 4,
      text: 'That sounds wonderful!',
      time: '2:30 am',
      sent: false,
      showAlpha: false
    }
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('')
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

      {/* Chat Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <button onClick={() => navigate('/')} className="p-1">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={() => navigate(`/user-profile/${id}`)} className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full p-1 bg-gradient-to-r from-alpha-light-blue to-alpha-light-blue">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>
            </div>
            <div>
              <h2 className="font-medium text-gray-900">{currentUser.name}</h2>
              <p className="text-sm text-alpha-light-blue">now</p>
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(`/call/${id}/voice`)}>
            <Phone className="w-6 h-6 text-alpha-light-blue" />
          </button>
          <button onClick={() => navigate(`/call/${id}/video`)}>
            <Video className="w-6 h-6 text-alpha-light-blue" />
          </button>
          <div className="relative">
            <button onClick={() => {
              const menu = document.getElementById('chat-menu')
              menu?.classList.toggle('hidden')
            }}>
              <MoreVertical className="w-6 h-6 text-gray-600" />
            </button>
            <div className="absolute top-8 right-0 bg-white rounded-xl shadow-xl border py-2 w-56 z-50 hidden" id="chat-menu">
              <button onClick={() => navigate(`/user-profile/${id}`)} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">View Contact</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Media, Links, Docs</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Search</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Mute Notifications</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Disappearing Messages</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Wallpaper</button>
              <div className="border-t border-gray-100 mt-2 pt-2">
                <button 
                  onClick={() => {
                    const confirmed = window.confirm('Clear all messages in this chat?\n\nThis action cannot be undone.')
                    if (confirmed) {
                      // Clear chat logic
                    }
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-500"
                >
                  Clear Chat
                </button>
                <button 
                  onClick={() => {
                    const confirmed = window.confirm('Delete this chat?\n\nThis action cannot be undone.')
                    if (confirmed) {
                      navigate('/')
                    }
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-500"
                >
                  Delete Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Date Separator */}
      <div className="flex justify-center py-4">
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today</span>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 pb-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
            <div className="flex items-end space-x-2 max-w-xs">
              {!msg.sent && msg.showAlpha && (
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-alpha-light-blue text-xs font-bold">α</span>
                </div>
              )}
              <div className={`relative chat-bubble ${msg.sent ? 'chat-bubble-sent' : 'chat-bubble-received'}`}>
                <p className="text-sm">{msg.text}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-xs ${msg.sent ? 'text-blue-200' : 'text-gray-400'}`}>
                    {msg.time}
                  </span>
                  {msg.hasEmoji && (
                    <span className="text-sm ml-2">😊</span>
                  )}
                </div>
                {/* Message tail */}
                {msg.sent ? (
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-l-8 border-l-alpha-light-blue border-t-8 border-t-transparent transform translate-x-1"></div>
                ) : (
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-r-8 border-r-gray-100 border-t-8 border-t-transparent transform -translate-x-1"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <button className="p-2">
            <Camera className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-alpha-light-blue"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Smile className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <button onClick={handleSendMessage} className="p-2">
            <Send className="w-6 h-6 text-alpha-light-blue" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatScreen