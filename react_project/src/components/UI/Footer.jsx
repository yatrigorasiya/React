import footerdata from '../../API/footerdata.json';
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
export const Footer = ()=>{
    const icondata={
        MdPlace:<MdPlace />,
        IoCallSharp:<IoCallSharp />,
        TbMailPlus:<TbMailPlus />


        
    }
    return(<>
   <footer className="footer-section">
    <div className="grid grid-three-cols container">
        {
            footerdata.map((currdata,index)=>{
                const{icon,title,details}=currdata;
                return(
                <div className='footer-contact' key={index}>
                    <div className='icon'>{icondata[icon]}</div>
                    <div className='footer-contact-text'>
                        <p>{title}</p>
                        <p>{details}</p>
                    </div>

                </div>
                )
            })
        }

    </div>

    <div className='copyright-area'>
        <div className='container'>
            <div className='grid grid-two-cols'>

                <div className='copyright-text'>
                    <p> 
                         Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://thapatechnical.shop/" target="_blank">
                  ThapaTechnical
                </NavLink></p>
                </div>

                <div className='footer-menu'>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/country">country</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Source Code</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>


   </footer>
    </>)
}