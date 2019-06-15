import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
