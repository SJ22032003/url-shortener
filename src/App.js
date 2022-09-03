import React from "react";
import "./index.css";
import MyRoutes from "./components/routes";
import Navbar from "./components/layout/Navbar/index";

function App() {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>
        <MyRoutes />
      </section>
    </main>
  );
}

export default App;
