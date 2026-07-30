import { Route, Routes } from 'react-router-dom';
import { MobileMenuProvider } from './context/MobileMenuContext';
import { LandingPage } from './pages/LandingPage';
import { PolicyPage } from './pages/PolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <MobileMenuProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<PolicyPage slug="terms" />} />
        <Route path="/privacy" element={<PolicyPage slug="privacy" />} />
        <Route path="/license" element={<PolicyPage slug="license" />} />
        <Route path="/disclaimer" element={<PolicyPage slug="disclaimer" />} />
        <Route path="/refund-policy" element={<PolicyPage slug="refund-policy" />} />
        <Route path="/delivery-policy" element={<PolicyPage slug="delivery-policy" />} />
        <Route path="/contact" element={<PolicyPage slug="contact" />} />
        <Route path="/download-help" element={<PolicyPage slug="download-help" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MobileMenuProvider>
  );
}
