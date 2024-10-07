import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Aboutus from './components/aboutus/aboutus';
import EntryHome from './components/entryHome/enteryHome';
import Dashboard from './components/dashboard/dashboard';
import Service from './components/services/service';
import './index.css';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import VerifyOtp from './components/ForgotPassword/VerifyOtp';
import ResetPassword from './components/ForgotPassword/ResetPassword';
import MainForgotPasswordPage from './components/ForgotPassword/mainForgotPasswordPage';
import MainResetPasswordPage from './components/ForgotPassword/mainRestPasswordPage';


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/service" element={<Service />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgotPassword" element={<MainForgotPasswordPage/>} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/resetPassword" element={<MainResetPasswordPage />} />

      <Route path="/*" element={<EntryHome />} />
    </Routes>
  );
}

export default App;
