import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TripPage from "./pages/Trip";
import ErrorPage from './pages/Error';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TripPage />}/>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}