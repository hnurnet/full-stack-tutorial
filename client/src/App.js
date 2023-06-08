import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Update from "./pages/Update";
import Create from "./pages/Create";
import Read from "./pages/Read";


function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/edit/:id" element={<Update />}/>
  <Route path="/add" element={<Create />}/>
  <Route path="/read/:id" element={<Read />}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
