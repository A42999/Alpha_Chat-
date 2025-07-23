import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogoScreen from './components/LogoScreen'
import SignInScreen from './components/SignInScreen'
import ChatListScreen from './components/ChatListScreen'
import ChatScreen from './components/ChatScreen'
import CallScreen from './components/CallScreen'
import UpdatesScreen from './components/UpdatesScreen'
import CallsScreen from './components/CallsScreen'
import ProfileScreen from './components/ProfileScreen'
import SearchScreen from './components/SearchScreen'
import UserProfileScreen from './components/UserProfileScreen'

function App() {
  const [showLogo, setShowLogo] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)

  if (showLogo) {
    return <LogoScreen onComplete={() => setShowLogo(false)} />
  }

  if (!isSignedIn) {
    return <SignInScreen onSignIn={() => setIsSignedIn(true)} />
  }

  return (
    <Router>
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<ChatListScreen />} />
          <Route path="/chat/:id" element={<ChatScreen />} />
          <Route path="/call/:id/:type" element={<CallScreen />} />
          <Route path="/updates" element={<UpdatesScreen />} />
          <Route path="/calls" element={<CallsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/user-profile/:id" element={<UserProfileScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
