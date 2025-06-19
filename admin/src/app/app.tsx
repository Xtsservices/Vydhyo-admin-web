// src/app/page.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./login/page"
import Dashboard from "./dashboard/page";
import Clinics from './clinics/page'
import DoctorList from "./doctors/page";
import NeedApproval from "./needApproval/page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/doctors/needApproval" element={<NeedApproval />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;