import RArrow from '../../assets/arrow-right.svg'
import hero from '../../assets/youmeHero.svg'
import heroAbout from '../../assets/youmeHeroAbout.svg'
import focus1 from '../../assets/youmeHomeFocus1.svg'
import focus2 from '../../assets/youmeHomeFocus2.svg'
import focus3 from '../../assets/youmeHomeFocus3.svg'
import focus4 from '../../assets/youmeHomeFocus4.svg'
import impact1 from '../../assets/youmeHomeImpact1.svg'
import impact2 from '../../assets/youmeHomeImpact2.svg'
import impact3 from '../../assets/youmeHomeImpact3.svg'
// import impact4 from '../../assets/youmeHomeImpact4.svg'
import bottom from '../../assets/youmeHomeBottom.svg'
import sponsor1 from '../../assets/youmeHomeSponsor1.svg'
import sponsor2 from '../../assets/youmeHomeSponsor2.svg'
import sponsor3 from '../../assets/youmeHomeSponsor3.svg'
import sponsor4 from '../../assets/youmeHomeSponsor4.svg'


export default function Home() {
    return (
        <div id='home-page' className='w-full max-w-[1900px]'>
            <div id="home-page__A" className=" pl-[120px] pr-[120px] flex flex-col gap-4 items-center w-full ">
                <div id='home-page-A__header-text ' className="w-fit flex flex-col items-center gap-8">
                    <h1 className="font-sans text-[#1A1A1A80]">YOUME DEVELOPMENT FOUNDATION</h1>
                    <h3 className="font-semibold text-[44px] text-center w-[508px]">Building Sustainable Communities</h3>
                    <p className="w-[593px] text-center">At YOUME Development Foundation, we are dedicated to the relentless pursuit of
                        positive change and the empowerment of communities across Nigeria.
                    </p>

                    <span id='home-page-A__header-text__cta-buttons' className="flex gap-4 h-[45px] w-[306px] justify-between">
                        <button className="text-white text-sm bg-primaryColor w-[45%]">Join our cause</button>
                        <button className="w-[45%] text-primaryColor text-sm  flex items-center align-middle gap-2 "> Learn more <img src={RArrow} alt='arrow'/></button>
                    </span>
                </div>
                <div id='home-page-A__hero-img' className=' w-full mt-[4rem] flex flex-col'>
                    <img src={hero}  alt='hero-img'/>
                    <div id='home-page-A__hero-img__metrics' className=' flex mt-[4rem] self-center  gap-4 w-4/5 justify-between'>
                        <div className='flex gap-4 align-middle'>
                            <div className='self-center bg-primaryColor rounded-full w-8 h-8'/>
                            <div className='flex-col flex gap-2'>
                                <h4>Over 10,000+</h4>
                                <h6>Lives impacted</h6>
                            </div>
                        </div>
                        <div className='flex gap-4 align-middle'>
                            <div className='self-center bg-primaryColor rounded-full w-8 h-8'/>
                            <div className='flex-col flex gap-2'>
                                <h4>Over 10,000+</h4>
                                <h6>Lives impacted</h6>
                            </div>
                        </div>
                        <div className='flex gap-4 align-middle'>
                            <div className='self-center bg-primaryColor rounded-full w-8 h-8'/>
                            <div className='flex-col flex gap-2'>
                                <h4>Over 10,000+</h4>
                                <h6>Lives impacted</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='home-page-A__about' className='mt-[129px] w-full bg-black h-[473px] flex mb-[100px] justify-between'>
                    <div id='home-page-A__about__left' className='max-w-1/2  pl-[100px] pr-[100px] flex flex-col text-white justify-center h-full'>
                        <div id='home-page-A__about__left__header-text' className='max-w-[301px]'>
                            <h2 className='text-[15px] text-[#FFFFFF80]'>OUR VISION & VALUES</h2>
                            <h4 className='text-[36px] font-semibold'>Who we are & what we do</h4>
                        </div>
                        <p className=' mt-6 max-w-[390px] text-[#ffffffd4] font-poppins leading-[25.2px]'>Established in 2010, our foundation is committed to creating a world where opportunities, 
                            prosperity, and hope flourish</p>

                        <button className='flex text-sm w-fit font-poppins p-3 pr-12 mt-8 text-primaryColor border border-primaryColor'>More about us <img src={RArrow}/></button>

                    </div>
                    <img src={heroAbout} />
                </div>
                <div id='home-page-A__support' className='mt-[155px] flex flex-col items-center'>
                    <div id='home-page-A__support__header-text' className='max-w-[590px]'>
                        <h2 className='font-semibold text-[15px] text-[#1A1A1A80] text-center'>GET INVOLVED</h2>
                        {/* <h3>Support our mission:</h3>
                        <h4>Ways you can make a difference</h4> */}
                        <p className='text-[36px] text-center font-semibold leading-[50.4px]'>Support our mission: <br /> ways you can make a difference</p>
                    </div>

                    <div id='home-page-A__support__grid'>
                        <div className='grid grid-cols-3 gap-10 mt-12'>
                                                    <SupportCard image={RArrow} title='Donate' 
                            description='Make a difference by contributing financially to our development projects'
                            />
                                                    <SupportCard image={RArrow} title='Offer grants' 
                            description='Explore opportunities to provide grants and funding to further our impact in rural communities'
                            />
                                                    <SupportCard image={RArrow} title='Volunteer' 
                            description='Join our team of passionate volunteers and directly participate in our projects
                            '
                            />
                                                    <SupportCard image={RArrow} title='In-Kind Donations' 
                            description='Donate technology and mobile devices to help bridge the digital divide in rural areas'
                            />
                                                    <SupportCard image={RArrow} title='Free-Consultancy' 
                            description='Share your expertise and knowledge by offering free consultancy services to advance our mission'
                            />
                                                    <SupportCard image={RArrow} title='Other ways to help' 
                            description='Contact us for additional ways you can contribute to our mission
                            '
                            />
    '
                        </div>
                    </div>
                </div>
            </div>
            <div id='home-page__B' className=' pl-[120px] pr-[120px] pt-[90px] bg-[#FAFAFA] h-[100vh]  w-full'>
                    <div id='home-page__B__header'>
                        <h1 className='text-[#1A1A1A80] opacity-50 text-[15px] tracking-[.14em]'>OUR FOCUS AREAS</h1>
                        <h3 className='font-semibold leading-[50x4px] text-[36px]'>Creating Lasting Change</h3>
                        <p className='font-poppins text-sm leading-[25.3px] mt-6 max-w-[483px] text-[#1A1A1AD9]'>We strive to address some of the most pressing challenges facing communities globally.
                             Our initiatives aim to make a tangible difference in all aspects of people's lives.</p>
                    </div>
                    <div id='home-page__B__cards' className='flex mt-11 w-full'>
                    <FocusCard title='Education' description='We support initiatives that improve access to quality education,
                     from early childhood through higher education.' image={focus1}/>
                    <FocusCard title='Healthcare' description='We invest in healthcare programs that provide access to quality healthcare services,
                     promote disease prevention and improve overall well-being.' image={focus2}/>
                    <FocusCard title='Economic development' description=' We empower individuals and communities to create sustainable livelihoods,
                     fostering economic growth and reducing poverty.' image={focus3}/>
                    <FocusCard title='Education' description='We are committed to environmental conservation and sustainable resource management
                    , ensuring a healthier planet for future generations.' image={focus4}/>
                </div>
            </div>
            <div id='home-page__C' className='pl-[120px] pr-[120px] w-full pt-[190px]'>
                <div id='home-page__C__top' className='w-full flex justify-between'>
                    <div id='home-page__C__top__left' className='min-w-[600px]'>
                        <div id='home-page__C__top__left__1' className='flex justify-between'>
                            <img src={impact1}/>
                            <img src={impact2}/>
                        </div>
                        <div id='home-page__C__top__left__2' className='flex w-full justify-center'>
                            <img src={impact3}/>
                        </div>
                    </div>
                    <div id='home-page__C__top__right' className='max-w-[406px]'>
                        <div id='home-page__C__top__right__header-text' className=' max-w-[323px] flex flex-col'>
                            <h1 className='text-xs text-[#1A1A1A80] opacity-50 leading-[21.6px]'>YOUME DEVELOPMENT FOUNDATION</h1>
                            <h2 className='text-[36px] font-semibold leading-[46.67px] text-[#1A1A1A] mb-8'> Our Impact over the years</h2>
                        </div>
                        <div id='home-page__C__top__right__header-body'>
                        <p className='text-[#333333] text-sm font-poppins leading-[25.3px]'>We've built schools, provided medical care, supported small businesses, and preserved natural habitats. <br/> <br/>
                                Our commitment to empowering communities has led to increased self-sufficiency, better living conditions,
                                 and a brighter future for those we serve.
                            </p>
                            <h6 className='text-primaryColor flex gap-2 font-poppins font-semibold text-sm leading-[25.2px] mt-8'>view our gallery <img src={RArrow}/></h6>
                        </div>
                    </div>
                <div id='home-page__C__bottom'>

                </div>



                </div>
                <div
                    id='home-page__C__bottom'
                    className='mb-[10rem]'>
                    
                    <div 
                        id='home-page__C__bottom__info' 
                        className='w-full flex flex-col gap-6 mt-[10rem] h-[292px] items-center justify-center mb-[10rem]'   
                        style={{backgroundImage: `url(${bottom  })`}}>

                        <h2 className='text-white font-semibold text-[36px] leading-[50.4px] text-center max-w-[700px]'>Together we can achieve more. Join us and be a part of a brighter future for all</h2>
                        <button className='bg-primaryColor text-sm font-poppins font-semibold leading-[25.2px] w-fit h-fit p-[10px] text-white'>Join our course</button>
                    </div>
                    <div id='home-page__C__bottom__sponsors'>
                        <div id='home-page__C__bottom__sponsors__header-text'>
                            <h2 className='text-[15px] text-[#00000080] opacity-50'>WORKING TOGETHER FOR DEVELOPMENT</h2>
                            <h3 className='text-4xl font-semibold leading-[45px] text-[#191919]'>Our partners & collaborators</h3>
                        </div>
                        <div id='home-page__C__bottom__sponsors__header-text' className='flex gap-4 jjustify-center mt-[31px]'>
                            <img src={sponsor1}/>
                            <img src={sponsor4}/>
                            <img src={sponsor3}/>
                            <img src={sponsor2}/>
                            
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}


export interface CardType {
    image: string
    title: string
    description: string
    className?: string
} 


export function SupportCard({image, title, description, className}:CardType) {
    return (
        <div className={`bg-[#FAFAFA] p-6 flex flex-col gap-6 ${className? className: ''}
       `}>
            <img src={image}  className='w-9 h-9'/>
            <h3 className={`font-poppins font-semibold `}>{title}</h3>
            <h5 className='w-[275px] text-sm font-poppins leading-[25.2px] text-[#1A1A1ABF]'>{description}</h5>
        </div>
    )
}

function FocusCard({image, title, description, className}:CardType) {
    return (
        <div className={`bg-[#FAFAFA] p-6 pl-0 flex flex-col gap-6 w-3/4  ${className? className: ''}`}>
            <img src={image}  className='w-fit h-fit' alt='focus area image'/>
            <h3 className={`font-poppins font-semibold `}>{title}</h3>
            <h5 className='w-[275px] text-sm font-poppins leading-[25.2px] text-[#1A1A1ABF]'>{description}</h5>
        </div>
    )
}