
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './container/Home/index'
import ProductDetail from './container/ProductDetail/index';
// import About from './container/About/index';
// import TotalAmount from './container/TotalAmount/index';
// import ProjectDetail from './container/ProjectDetail/index';


function App(product) {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path={`/product/:id`} element={<ProductDetail/>}></Route>
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
