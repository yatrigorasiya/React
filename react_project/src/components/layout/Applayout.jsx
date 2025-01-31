import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"
import { Outlet } from "react-router-dom"


export const Applayout = ()=>{
    return(<>
   <Header/>
   <Outlet/>
   <Footer/>
    </>)
}