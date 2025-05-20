import { AllRoutes } from './routes/AllRoutes';
import { Header , Footer } from './components';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
