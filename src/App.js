import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/guest/HomePage';
import CoworkingsPage from './pages/guest/CoworkingsPage';
import CoworkingDetailsPage from './pages/guest/CoworkingDetailsPage';
import DashboardPage from './pages/admin/DashboardPage';
import LoginPage from './pages/guest/LoginPage';
import AdminCoworkingsPage from './pages/admin/AdminCoworkingsPage';
import AdminCoworkingCreate from './pages/admin/AdminCoworkingsCreate';
import AdminCowokringsUpdate from './pages/admin/AdminCowokringsUpdate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/coworkings' element={<CoworkingsPage />} />
        <Route path='/coworking/details/:id' element={<CoworkingDetailsPage />} />
        <Route path='/admin' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin/coworkings' element={<AdminCoworkingsPage />} />

        <Route path='/admin/createcoworkings' element={<AdminCoworkingCreate />} />
        <Route path='/admin/updatecoworkings/:id' element={<AdminCowokringsUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
