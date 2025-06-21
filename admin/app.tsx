// src/app/page.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./src/app/login/page"
import Dashboard from "./src/app/dashboard/page";
import Clinics from './src/app/clinics/page'
import DoctorList from "./src/app/doctors/page";
import NeedApproval from "./src/app/needApproval/page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/doctors" element={<DoctorList />} />
        {/* Assuming NeedApproval is a component that handles doctors needing approval */}
        <Route path="/doctors/needApproval" element={<NeedApproval />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;