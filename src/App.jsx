import { Route, Routes } from "react-router-dom";
import Life from "./pages/Life";

function App() {


  return (
    <>
     <Routes>
<Route path="/life" element={<Life />} />
     </Routes>
      
    </>
  )
}

export default App
