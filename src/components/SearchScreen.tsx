import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Search, UserPlus, Users } from 'lucide-react'

const SearchScreen: React.FC = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)

  const searchResults = [
    {
      id: 1,
      name: 'John Smith',
      phone: '+1 234 567 8901',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      isContact: false
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      phone: '+1 234 567 8902',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      isContact: true
    },
    {
      id: 3,
      name: 'Mike Johnson',
      phone: '+1 234 567 8903',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      isContact: false
    }
  ]

  const quickActions = [
    { icon: UserPlus, label: 'Add Contact', color: 'bg-alpha-light-blue' },
    { icon: Users, label: 'Create Group', color: 'bg-alpha-light-blue' }
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
      <div className="flex items-center px-4 py-3 border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-1 mr-3">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setShowResults(e.target.value.length > 0)
            }}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-alpha-light-blue focus:bg-white"
            autoFocus
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-4">
        <div className="flex space-x-4">
          {quickActions.map((action, index) => (
            <button key={index} className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full">
              <div className={`w-8 h-8 ${action.color} rounded-full flex items-center justify-center`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 px-6">
        {showResults ? (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Results for "{searchQuery}"
            </h3>
            <div className="space-y-3">
              {searchResults
                .filter(contact => 
                  contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  contact.phone.includes(searchQuery)
                )
                .map((contact) => (
                <div key={contact.id} className="flex items-center space-x-4 py-2">
                  <div className="relative">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{contact.name}</h4>
                    <p className="text-sm text-gray-500">{contact.phone}</p>
                  </div>
                  <button className={`px-4 py-2 rounded-full text-sm font-medium ${
                    contact.isContact 
                      ? 'bg-gray-100 text-gray-600' 
                      : 'bg-alpha-light-blue text-white'
                  }`}>
                    {contact.isContact ? 'Message' : 'Add'}
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Suggested Contacts
            </h3>
            <div className="space-y-3">
              {searchResults.map((contact) => (
                <div key={contact.id} className="flex items-center space-x-4 py-2">
                  <div className="relative">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {contact.isContact && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{contact.name}</h4>
                    <p className="text-sm text-gray-500">{contact.phone}</p>
                  </div>
                  <button className={`px-4 py-2 rounded-full text-sm font-medium ${
                    contact.isContact 
                      ? 'bg-gray-100 text-gray-600' 
                      : 'bg-alpha-light-blue text-white'
                  }`}>
                    {contact.isContact ? 'Message' : 'Add'}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SearchScreen