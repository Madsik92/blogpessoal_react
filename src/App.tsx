import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <div className="min-h-[auto]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </div>


        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
