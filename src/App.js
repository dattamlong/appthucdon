import SimpleSidebar from "./components/sidebar/sidebar";
import Page from "./pages";
import BuildMenu from "./pages/buildMenu/BuildMenu";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import AllDishes from "./pages/allDishes/AllDishes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Page />}>
            <Route path="buildMenu" element={<BuildMenu />} />
          </Route>
          <Route element={<Page />}>
            <Route path="allDishes" element={<AllDishes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
