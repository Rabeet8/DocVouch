import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Proof from "./components/Proof";
import PoeText from "./components/PoeText";
import TabsDemo from "./components/TabsDemo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <PoeText />
              <TabsDemo />
              <Footer />
            </>
          }
        />
        <Route path="/proof" element={<Proof />} />{" "}
        {/* Route for Proof component */}
      </Routes>
    </Router>
  );
}
