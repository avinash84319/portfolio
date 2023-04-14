import React from "react";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Terminal from "./components/terminal.js";
function App() {
  return <div className="body">
    <Navbar />
    <Terminal />
    <Footer />
  </div>
}

export default App;
