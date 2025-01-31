import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Country } from './pages/Country';
import { Contact } from './pages/Contact';
import { Applayout } from './components/layout/Applayout';
import { Errorpage } from './pages/Errorpage';
import { Countrydetails } from './components/layout/Countrydetails';
const App = ()=>{


  const router = createBrowserRouter([

    {
      path:'/',
      element:<Applayout/>,
      errorElement:<Errorpage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'country',
          element:<Country/>
        },
        {
          path:'country/:id',
          element:<Countrydetails/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
      

      ]
    },
    
  ]);
  return(<>
 <RouterProvider router={router}></RouterProvider>
  </>)
}

export default App;