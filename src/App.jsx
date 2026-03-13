import { BrowserRouter,Routes, Route } from "react-router-dom"
import {Home} from "./Pages/Home"
import {CoinDetails} from "./Pages/CoinDetails"

function App() {


  return (
    <>
      <BrowserRouter><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes></BrowserRouter>
    </>
  )
}

export default App
