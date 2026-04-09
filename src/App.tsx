import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PayPage } from './pages/PayPage';
import { ZionWatermarkButton } from './components/ZionWatermarkButton';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zhifu" element={<PayPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ZionWatermarkButton />
    </BrowserRouter>
  );
}
