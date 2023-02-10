
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Home from './container/Home'
import About from './container/About/index';
import TotalAmount from './container/TotalAmount/index';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/totalamount' element={<TotalAmount/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
