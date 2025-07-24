import React from 'react'
import {
  Search, MoreVertical, Shield, Plus, Settings,
  Play, Save, UserPlus
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from './BottomNavigation'

const UpdatesScreen: React.FC = () => {
  const navigate = useNavigate()

  const handleWaveClick = (name: string) => {
    alert(`${name}'s Wave opened`)
  }

  const openCamera = () => {
    alert('Camera opened to create a new Wave')
  }

  const handleMenuClick = (action: string) => {
    switch (action) {
      case 'privacy': alert('Wave Privacy opened'); break
      case 'add': openCamera(); break
      case 'wave-settings': navigate('/wave-settings'); break
      case 'profile': navigate('/profile'); break
    }
  }

  const handlePlayAudio = (name: string) => alert(`Playing audio message from ${name}`)
  const handleSaveAudio = (name: string) => alert(`Saving audio message from ${name}`)

  const handleAddContact = (name: string) => {
    const confirmed = window.confirm(`Add ${name} to contacts?\n\nChoose 'OK' to Add or 'Cancel' to skip.`)
    if (confirmed) alert(`${name} added ✅`)
    else alert(`Contact not added ❌`)
  }

  const stories = [
    { id: 1, name: 'You', avatar: '...', hasStory: true, isOwn: true },
    { id: 2, name: 'Adam', avatar: '...', hasStory: true },
    { id: 3, name: 'William', avatar: '...', hasStory: true },
    { id: 4, name: 'Peter', avatar: '...', hasStory: true },
    { id: 5, name: 'Julie', avatar: '...', hasStory: true }
  ]

  const updates = [
    { id: 1, name: 'Pedro', action: 'liked your wave', avatar: '...' },
    { id: 2, name: 'Brian', action: 'commented on your wave', avatar: '...' },
    { id: 3, name: 'Luis', action: 'audio call message', avatar: '...', isAudio: true },
    { id: 4, name: 'Matthew', action: 'wants to connect', avatar: '...', isAdd: true },
    { id: 5, name: 'Ryan', action: 'added you in family group', avatar: '...' }
  ]

  return (
    <div className="mobile-container bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Wave</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => alert('Search by name or number')}>
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
            <div
              id="updates-menu"
              className="absolute top-8 right-0 bg-white rounded-lg shadow-lg border py-2 w-48 z-50 hidden"
            >
              <button onClick={() => handleMenuClick('privacy')} className="w-full text-left px-4 py-2 hover:bg-gray-50">
                <Shield className="inline w-4 h-4 mr-2 text-gray-500" /> Wave Privacy
              </button>
              <button onClick={() => handleMenuClick('add')} className="w-full text-left px-4 py-2 hover:bg-gray-50">
                <Plus className="inline w-4 h-4 mr-2 text-gray-500" /> Add Wave
              </button>
              <button onClick={() => handleMenuClick('wave-settings')} className="w-full text-left px-4 py-2 hover:bg-gray-50">
                <Settings className="inline w-4 h-4 mr-2 text-gray-500" /> Wave Settings
              </button>
              <button onClick={() => handleMenuClick('profile')} className="w-full text-left px-4 py-2 hover:bg-gray-50">Settings</button>
            </div>
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="px-6 mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer" onClick={() => handleWaveClick(story.name)}>
              <div className={`relative ${story.hasStory ? 'p-1 bg-gradient-to-r from-[#4F9DE8] to-[#4F9DE8] rounded-full' : ''}`}>
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
                {story.isOwn && (
                  <button onClick={openCamera} className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#4F9DE8] rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-xs font-bold">+</span>
                  </button>
                )}
              </div>
              <span className="text-xs text-gray-600 text-center">{story.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Updates */}
      <div className="px-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Updates</h2>
        <div className="space-y-4 overflow-y-auto hide-scrollbar">
          {updates.map((update) => (
            <div key={update.id} className="flex items-center space-x-4">
              <img
                src={update.avatar}
                alt={update.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-gray-800">
                  <span className="font-medium">{update.name}</span>
                  <span className="text-gray-600 ml-1">{update.action}</span>
                </p>
              </div>
              {update.isAudio && (
                <div className="flex space-x-2">
                  <button onClick={() => handlePlayAudio(update.name)}><Play className="w-5 h-5 text-blue-500" /></button>
                  <button onClick={() => handleSaveAudio(update.name)}><Save className="w-5 h-5 text-green-500" /></button>
                </div>
              )}
              {update.isAdd && (
                <div className="flex space-x-2">
                  <button onClick={() => handleAddContact(update.name)} className="px-3 py-1 text-sm font-medium text-blue-500">Add</button>
                  <button onClick={() => alert(`Cancelled contact add for ${update.name}`)} className="px-3 py-1 text-sm font-medium text-red-500">No Add</button>
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
