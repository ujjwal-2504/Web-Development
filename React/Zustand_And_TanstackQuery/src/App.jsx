import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Zustand from "./Zustand";
import ReactHookForms from "./ReactHookForms";
import ZodForm from "./ZodForm";

const Navbar = () => {
  const navlinks = ["home", "zustand", "react-hook-forms", "zod-form"];

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <ul className="flex justify-center gap-6">
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <Link
              to={`${navlink}`}
              className="hover:text-blue-400 transition-colors text-xl border border-white rounded-xl p-2">
              {navlink}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<div className="text-center text-4xl">Home</div>}
        />
        <Route path="/zustand" element={<Zustand />} />
        <Route path="/react-hook-forms" element={<ReactHookForms />} />
        <Route path="/zod-form" element={<ZodForm />} />
      </Routes>
    </Router>
  );
};

export default App;
