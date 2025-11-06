import './App.css';
import { useState } from 'react';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Modal from './Components/Common/Modal/Modal';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/theme.scss';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header onLoginClick={handleLoginClick} />
        <main className="main-content">
          <Home />
        </main>
        <Footer />
        <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal}>
          <Login onClose={handleCloseModal} />
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
