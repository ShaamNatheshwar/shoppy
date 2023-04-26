
import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home.component";

import Navigation from "./components/routes/navigation/navigation.component";

const Shop = () =>{
  return(
    <div>This is a shop component</div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;