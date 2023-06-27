import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
  // <div>
  //   <h1>Hello React!</h1>
  //   <p>JS</p>
  // </div>
  // Može više elemenata da se ubaci ali mora da bude u okviru nekog div ili sl.
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"))
