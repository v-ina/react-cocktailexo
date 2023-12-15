import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoworkingsPage from './pages/CoworkingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/coworkings' element={<CoworkingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
