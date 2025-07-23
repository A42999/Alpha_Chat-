import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Sparkles, Phone } from 'lucide-react'

interface BottomNavigationProps {
  activeTab: 'chats' | 'updates' | 'calls'
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
  const navigate = useNavigate()

  const tabs = [
    {
      id: 'chats',
      label: 'Chats',
      icon: MessageCircle,
      path: '/'
    },
    {
      id: 'updates',
      label: 'Updates',
      icon: Sparkles,
      path: '/updates'
    },
    {
      id: 'calls',
      label: 'Calls',
      icon: Phone,
      path: '/calls'
    }
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100">
      <div className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`flex-1 flex flex-col items-center py-3 ${
                isActive ? 'text-alpha-light-blue' : 'text-gray-400'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default BottomNavigation