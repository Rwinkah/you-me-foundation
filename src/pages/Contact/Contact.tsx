import cont1 from '../../assets/youmeContactIcon1.svg'
import cont2 from '../../assets/youmeContactIcon2.svg'
import cont3 from '../../assets/youmeContactIcon3.svg'
import cont4 from '../../assets/youmeContactImg.svg'


export default function Contact() {
    return(
        <section id="youme__contact" className='flex flex-col items-center max-w-[1900px] gap-20'>
            <div id="youme__contact__header" className='w-[595px] gap-1 items-center justify-center flex flex-col'>
                <h1 className='text-xs text-[#1A1A1A80]'>CONTACT US</h1>
                <h3  className='font-semiibold text-[#1a1a1a] text-[36px] text-center'>Reach out to us learn more or support</h3>
                <p className='text-[#262626] font-poppins text-center'>Fill out the contact form and one of our team members will get back to you as soon as possible.
                     Alternatively you can reach out to us via our email or phone number as provided.
                </p>
            </div>

            <div id="youme__contact__options" className="flex max-w-[1400px]   w-full gap-12 items-center justify-center    ">
                <div className="bg-[#FAFAFA] flex  ">
                    <img src={cont3} />
                    <div className="flex flex-col gap-1 p-2">
                        <h2 className="text-[#1A1A1A80] text-xs">Email</h2>
                        <h4 className="text-sm">youmefoundation@gmail.com</h4>
                    </div>
                </div>
                <div className="bg-[#FAFAFA] flex  gap-1 p-2">
                <img src={cont2} />
                <div className="flex flex-col gap-2 p-2">
                        <h2 className="text-[#1A1A1A80] text-xs">Phone number</h2>
                        <h4 className="text-sm">08033346567</h4>
                    </div>

                </div>
                <div className="bg-[#FAFAFA] flex  gap-1 p-2">
                <img src={cont1} />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#1A1A1A80] text-xs">Address</h2>
                        <h4 className="text-sm">123 Okoro Street, Benin City, Edo State, Nigeria</h4>
                    </div>

                </div>
            </div>

            <div className='flex justify-between gap-[7rem]'>

                <form className='flex flex-col w-[500px]'>
                    <div className='flex flex-col gap-2 mb-2'>
                        <label>Name</label>
                        <input className='h-[45px] p-2 bg-[#F5F5F5]'  required placeholder='your full name'/> 
                    </div>
                    <div className='flex flex-col gap-2 mb-2'>
                        <label>Email</label>
                        <input className='h-[45px] p-2 bg-[#F5F5F5]' required placeholder='your email address'/> 
                    </div>

                    <div className='flex flex-col gap-2 mb-2'>
                        <label>Phone number</label>
                        <input className='h-[45px] p-2 bg-[#F5F5F5]' required placeholder='your phone number'/>
                    </div>

                    <div className='flex flex-col gap-2 mb-2'>
                        <label>Messaage</label>
                        <textarea className='h-[175px] p-2 bg-[#F5F5F5]' placeholder='Message' required/> 
                    </div>

                    <button className='bg-primaryColor p-2 text-white w-[145px] h-[45px] ' type='submit'>Send message</button>
    
                </form>

                <img src={cont4} />
            </div>

        </section>
    )
}