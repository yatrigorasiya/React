import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Herosection = ()=>{
    return(
        <main className="hero-section main">
    <div className="container grid grid-two-cols">
        <div className="hero-content">
            <h1 className="heading-xl"> Explore the World, One Country at a Time.</h1>
            <p className="paragraph"> Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.</p>
            <NavLink to="/country">  <button>Start Exploring <FaArrowRight /></button></NavLink>
          
        </div>
        
        <div className="hero-image">
            <img src="/images/world.png" alt="image" className="banner-image"/>
        </div>
    </div>
   </main>
    )
}