import './App.css';
import {Route, Routes} from "react-router-dom";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" exact element={<Products/>}></Route>
      <Route path="/:product_id" exact element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
