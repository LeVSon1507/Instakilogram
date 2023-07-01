import './App.css';
import GroupChat from './components/chat/GroupChat';
import HomePage from './components/layouts/HomePage';
import AuthPage from './components/login/AuthPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/groupchat/:id" element={<GroupChat />} />
        <Route path="/groupchat" element={<GroupChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
