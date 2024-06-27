import logo from '../assets/youmeLogo.svg'
import social1 from '../assets/youmeSocial1.svg'
import social2 from '../assets/youmeSocial2.svg'
import social3 from '../assets/youmeSocial3.svg'
import social4 from '../assets/youmeSocial4.svg'


export default function Footer(){
    return (
        <section className="h-[50vh] flex flex-col justify-center items-center w-full">
            <div id='footer-top' className="flex bg-[#000000] h-[90%] w-full items-center justify-center pl-[120px] pr-[120px]">
                <div id='footer-top__logo' className='w-[275px] text-center flex flex-col  items-center'>
                    <img src={logo} className='w-[200px]'/>
                    <h2 className='text-[#FFFFFFBF] opacity-75'>"Empowering Communities, Creating Futures"</h2>
                </div>
            </div>
            <div id="footer-bottom" className='bg-[#0D0D0D] h-[10%] w-full pl-[120px] pr-[120px] flex justify-between text-white gap-[4rem] items-center' >
                <div id='footer-bottom__links' className='flex gap-3'>  
                    <h6 className='flex gap-3 items-center font-poppins text-xs text-[#ffffffa8]'>About us <span className='bg-white rounded-full w-1 h-1'/></h6>
                    <h6 className='flex gap-3 items-center font-poppins text-xs text-[#ffffffa8]'>Get involved <span className='bg-white rounded-full w-1 h-1'/></h6>
                    <h6 className='flex gap-3 items-center font-poppins text-xs text-[#ffffffa8]'>Our Gallery <span className='bg-white rounded-full w-1 h-1'/></h6>
                    <h6 className='flex gap-3 items-center font-poppins text-xs text-[#ffffffa8]'>Contact us <span className='bg-white rounded-full w-1 h-1'/></h6>

                </div>
                <div id='footer-bottom__socials' className='flex gap-4 self-center'>
                    <img src={social1}/>
                    <img src={social2}/>
                    <img src={social3}/>
                    <img src={social4}/>



                </div>
                <h6 className='font-poppins text-xs self-center'>Copyright © 2024 YouMe Foundation Nigeria. </h6>
                

            </div>
        </section>
    )
}