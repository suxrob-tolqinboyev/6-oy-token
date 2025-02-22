import React from "react";
import Router from "./router";
// import { NameProvider } from "./components/context";

// import "./i18n"

const App = () => (
  <div className="m-auto">
    {/* <NameProvider> */}
      <Router />
    {/* </NameProvider> */}
  </div>
);

export default App;
