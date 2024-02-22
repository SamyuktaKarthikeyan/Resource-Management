import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
const App = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
    </Routes>
    </>
  )
}

export default App