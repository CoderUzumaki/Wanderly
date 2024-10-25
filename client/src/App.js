// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Error404 from './pages/404Error';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';

// function App() {
//   return (
//     <Router>
//       <Routes>

//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="*" element={<Error404 />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/404Error';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  callAPI() {
    fetch("http://localhost:5000/api")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          
        </Routes>
      </Router>
    );
  }
}

export default App;
