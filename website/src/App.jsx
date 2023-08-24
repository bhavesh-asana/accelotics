
import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import ProductEngineering from "./pages/ProductEngineering.jsx";
import AboutUs from "./pages/AboutUs.jsx";
// import Header from "./components/Header.jsx";

function App() {

  return (
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'/product-engineering'} element={<ProductEngineering/>}/>
              <Route path={'/about-us'} element={<AboutUs/>}/>
          </Route>

      </Routes>

  )
}

export default App
