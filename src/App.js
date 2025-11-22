import { AllRoutes } from './routes/AllRoutes';
import { Header , Footer } from './components';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
