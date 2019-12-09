import React, { Component } from "react";
import Navbar from "./pages/partials/_navbar";
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';
import TopPage from "./pages/toppage/TopPage";


ReactDOM.render(<DatePicker />, mountNode);

class App extends Component {
  render() {
    return (
    <div>
      <Navbar/>
      <TopPage/>
    </div>

    );
  };
};

export default App;