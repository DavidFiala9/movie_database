import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
