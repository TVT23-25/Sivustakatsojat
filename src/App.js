import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar'
import Notifications from './components/notifications'
import Header from './components/header'
import Content from './components/content'
// import Footer from './components/footer'
import MoviePage from './pages/MoviePage'
import GroupPage from './pages/GroupPage'
import InformationPage from './pages/InformationPage'


function App() {
  return (
    <>
      <Navbar />
      <Notifications />
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/grouppage" element={<GroupPage />} />
          <Route path="/informatonpage" element={<InformationPage />} />
        </Routes>

      </div>
    </>
  )
}

export default App;