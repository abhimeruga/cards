import React from 'react';
import './App.css';
import Card from "./Components/Card/Card.component";
import CardDashboard from "./Components/Card-Dasboard/CardDashboard.component";
import CardList from "./Components/Card-List/CardList.component";
import {Route} from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./Components/Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        < Route path="/" exact component={CardDashboard}  />
        < Route path="/card" exact component={Card}  />
      </Provider>
    </div>
  );
}

export default App;
