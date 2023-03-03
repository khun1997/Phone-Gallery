import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home/index";
import ProductDetail from "./container/ProductDetail/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={`/product/:id`} element={<ProductDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
