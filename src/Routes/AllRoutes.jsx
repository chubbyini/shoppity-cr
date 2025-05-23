import { Routes,Route } from "react-router-dom"
import { Home,Card } from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route  path="Cart" element={<Card />}></Route>

        </Routes>
    </>
  )
}
