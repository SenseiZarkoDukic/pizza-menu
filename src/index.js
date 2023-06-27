import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

function Pizza() {
  return <h2>Pizza</h2>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div>
      <React.StrictMode>
        <Pizza></Pizza>
      </React.StrictMode>
    </div>
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"))
