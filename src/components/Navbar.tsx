import logo from '../assets/youmeLogo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Navbar() {
    const [active, setActive] = useState<string>('home')

    return (
        <nav id="navbar" className=' h-fit shado-lg flex justify-between w-full items-center pl-[120px] pr-[120px] align-middle text-sm opacity-75'> 
            <Link to='/'                     onClick={()=>{setActive('home')} }>
                <img src={logo} /></Link>
            <ul className="flex gap-8  ">
                <Link 
                    to="/" 
                    className={active === 'home'  ? 'border-b-primaryColor border-b-[2px] font-semibold text-[#1a1a1a] opacity-100': ''}
                    onClick={()=>{setActive('home')} }>
                    Home
                </Link>
                <Link 
                    to="/about" 
                    className={active === 'about'  ? 'border-b-primaryColor border-b-[2px] font-semibold': ''}
                    onClick={()=>{setActive('about')} }>
                    About
                </Link>  
                <Link 
                    to="/involved" 
                    className={active === 'involved'  ? 'border-b-primaryColor border-b-[2px] font-semibold': ''}
                    onClick={()=>{setActive('involved')} }>
                    Get involved
                </Link>      
                <Link 
                    to="/impact" 
                    className={active === 'impact'  ? 'border-b-primaryColor border-b-[2px] font-semibold': ''}
                    onClick={()=>{setActive('impact')} }>
                    Our impact
                </Link>  
                <Link 
                    to="/contact" 
                    className={active === 'contact'  ? 'border-b-primaryColor border-b-[2px] font-semibold': ''}
                    onClick={()=>{setActive('contact')} }>
                    Contact us
                </Link>           
            </ul>

        </nav>
    )
}