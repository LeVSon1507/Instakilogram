import './App.css';
import GroupChat from './components/chat/GroupChat';
import HomePage from './components/layouts/HomePage';
import AuthPage from './components/login/AuthPage';
import Homes from './components/home/Homes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/homes" element={<Homes/>} />
        <Route path="/groupchat/:id" element={<GroupChat />} />
        <Route path="/groupchat" element={<GroupChat />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
