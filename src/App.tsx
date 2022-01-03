import './App.css';
import { GlobalStyles } from './styles/global';
import { Routes } from './Routes';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Routes />
    </HelmetProvider>
  );
}

export default App;
