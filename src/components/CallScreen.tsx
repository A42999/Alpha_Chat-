import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, PhoneOff, Mic, MicOff, Video, VideoOff, Speaker, MessageCircle } from 'lucide-react'

const CallScreen: React.FC = () => {
  const { id, type } = useParams()
  const navigate = useNavigate()
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(type === 'video')
  const [isSpeakerOn, setIsSpeakerOn] = useState(false)

  const getUserData = (chatId: string) => {
    const users = {
      '1': { 
        name: 'Daniel Johnson', 
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      '2': { 
        name: 'Dania Amelia', 
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      '3': { 
        name: 'Daniel Dickens', 
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      '4': { 
        name: 'jenny!', 
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      '5': { 
        name: 'Sally Rooney', 
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    }
    return users[chatId as keyof typeof users] || users['1']
  }

  const currentUser = getUserData(id || '1')

  return (
    <div className="mobile-container bg-gray-900 text-white">
      {/* Status Bar */}
      <div className="status-bar text-white">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.415 5 5 0 017.07 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <div className="w-6 h-3 bg-white rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={() => navigate(`/chat/${id}`)} className="p-1">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-center">
          <h2 className="text-lg font-medium">{currentUser.name}</h2>
          <p className="text-sm text-gray-300">Calling...</p>
        </div>
        <div className="w-8"></div>
      </div>

      {/* User Avatar */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full mb-6 overflow-hidden">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">{currentUser.name}</h3>
          <p className="text-gray-300">Ringing...</p>
        </div>
      </div>

      {/* Call Controls */}
      <div className="px-8 pb-12">
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 ${
              isMuted ? 'bg-red-500' : 'bg-gray-700'
            }`}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>

          <button
            onClick={() => navigate(`/chat/${id}`)}
            className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <PhoneOff className="w-6 h-6" />
          </button>

          <button
            onClick={() => setIsSpeakerOn(!isSpeakerOn)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 ${
              isSpeakerOn ? 'bg-alpha-light-blue' : 'bg-gray-700'
            }`}
          >
            <Speaker className="w-6 h-6" />
          </button>
        </div>

        {type === 'video' && (
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                isVideoOn ? 'bg-alpha-light-blue' : 'bg-red-500'
              }`}
            >
              {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
            </button>

            <button className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CallScreen