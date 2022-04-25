import React from 'react';
import './App.css';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import configureStore from "./configureStore";
import {Provider} from "react-redux";
import {initAxios} from "./api";

const initialState = {};
const store = configureStore(initialState);
document.getElementById('app');
initAxios();
function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <StudentDashboard />
          </div>
      </Provider>

  );
}

export default App;
