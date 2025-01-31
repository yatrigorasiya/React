import { useRouteError } from "react-router-dom"
import { NavLink } from "react-router-dom";
export const Errorpage = ()=>{

  const error =   useRouteError();
  
  console.log(error);
  
    return(<>
    <h1>Oops!An error occurred.</h1>
    {error && <p>{error.data}</p>}
    <NavLink to='/'>
    <button>Go Home</button></NavLink>
    </>)
}