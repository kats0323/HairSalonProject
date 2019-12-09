import React, { Component } from "react";
<<<<<<< HEAD
import Navbar from "./pages/partials/_navbar";
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';
import TopPage from "./pages/toppage/TopPage";

=======
import Overall from "./pages/partials/_overall" // Maybe give it a different name instead of navbar
import Admin from "./admin/pages/partials/_admin"
>>>>>>> 2f42887a04b0575cf892a0a3f3e135292cb31726

ReactDOM.render(<DatePicker />, mountNode);

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
    <div>
      <Navbar/>
      <TopPage/>
    </div>

=======
        <div>
            <Overall />
            <Admin />
        </div>
>>>>>>> 2f42887a04b0575cf892a0a3f3e135292cb31726
    );
  };
};

export default App;