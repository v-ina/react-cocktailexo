import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CocktailDetailPage from './pages/CocktailDetailPage'
import EveryCocktailPage from './pages/EveryCocktailPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/everycocktail' element={<EveryCocktailPage />}/>
        <Route path='/cocktail/:id/detail' element={<CocktailDetailPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
