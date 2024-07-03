import RArrow from '../../assets/arrow-right.svg'
import abHero from '../../assets/aboutHero.svg'
import { CardType} from '../Home/Home'
import { SupportCard } from '../Home/Home'
import staff1 from '../../assets/youmeStaff1.svg'
import staff2 from '../../assets/youmeStaff2.svg'
import staff3 from '../../assets/youmeStaff3.svg'
import staff4 from '../../assets/youmeStaff4.svg'
import staff5 from '../../assets/youmeStaff5.svg'
import bottom from '../../assets/youmeHomeBottom.svg'



const StaffData = [
    {
        name: 'Wade Warren',
        title: 'Founder',
        img: staff1
    },
    {
        name: 'Amanda Black',
        title: 'Meical Assistant',
        img: staff2
    },
    {
        name: 'Kathryn Murphy',
        title: 'CTO',
        img: staff3
    },
    {
        name: 'Therese Webb',
        title: 'Marketing Coordinator',
        img: staff4
    },
    {
        name: 'Jenny Wilson',
        title: 'Project Manager',
        img: staff5
    },
]


function StaffCard({image, title, description, className}:CardType) {
    return (
        <div className={`bg-[] p-6 pl-0 flex flex-col gap-6 w-3/4   ${className? className: ''}`}>
            <img src={image}  className='w-fit h-fit' alt='focus area image'/>
            <h3 className={`font-poppins font-semibold `}>{title}</h3>
            <h5 className='w-[275px] text-sm font-poppins leading-[25.2px] text-[#1A1A1ABF]'>{description}</h5>
        </div>
    )
}

export default function About () {
    return (
        <section id="about-page" className="w-full  flex flex-col items-center mt-[41px] max-w-[1900px]">
            <div id="about-page__intro" className=" pl-[120px] pr-[120px] max-w-[794px] flex flex-col mb-[66px] ">
                <div id="about-page__intro__header-text">
                    <h2 className="text-xs text-[#1A1A1A80] opacity-50 leading-[22px]">WHO WE ARE AND WHAT WE DO</h2>
                    <h4 className="font-semibold text-[36px] leading-[49px] text-[#1A1A1A]">Discover Youme foundation: <br/> Our Story, Mission and Values.</h4>
                </div>
                <div id="about-page__intro__details" className='gap-10 flex flex-col'>
                    <p className="font-poppins text-sm text-[#333] leading-[25.2px] mt-12">  
                        At YOUME Development Foundation, we are dedicated to the relentless pursuit of positive change and the empowerment of communities across Nigeria.
                        We believe that sustainable development is the key to a brighter future, and we work tirelessly to make this vision a reality. Established in 2010,
                        our foundation is committed to creating a world where opportunities, prosperity, and hope flourish. <br/> <br/>
                        <span className="font-extrabold">Our mission</span> is to catalyze social, economic, and environmental development by providing innovative solutions and resources to communities in need. 
                        We strive to foster a sense of dignity, self-reliance, and inclusivity among all those we serve. 
                        We are driven by the belief that development should be sustainable, people-centric, and leave no one behind.
                    </p>
                    <span className='text-primaryColor flex gap-2 font-semibold'> See our impact <img src={RArrow}/></span>
                </div>
            </div>
            <img id='about-page__hero-img' className='mb-[83px]' src={abHero}/>
            <div id='about-page__principles' className='w-full bg-[#fafafa] pl-[120px] lg:pl-[420px] pr-[120px] pt-[84px] flex flex-col '>
                <div id='about-page__principles__header-text'>
                    <h2 className='text-xs leading-[22px] text-[#1a1a1a] opacity-50'>GUIDING PRINCIPLES</h2>
                    <h4 className='font-semibold text-2xl text-[#1a1a1a] leading-[32px]'>Our Core Values</h4>
                </div>
                <div id='about-page__principles__body' className='flex gap-8   items-center w-full'>
                    <div className='flex  flex-wrap w-full max-w-[1200px] gap-12'>
                        <SupportCard className='pl-0'  image={RArrow} description='We maintain the highest levels of transparency and accountability,
                         both in our operations and in the way we utilize resources' title='Transparency'/>
                        <SupportCard className='pl-0' image={RArrow} description='We are deeply committed to sustainable development that protects our environment,
                         ensures economic stability, and creates long-lasting change.' title='Sustainability'/>
                        <SupportCard className='pl-0' image={RArrow} description='We embrace innovation and seek creative solutions to complex challenges
                         always striving to stay at the cutting edge of development work.' title='Innovation'/>
                        <SupportCard className='pl-0' image={RArrow} description='We are committed to ensuring that all members of society, regardless of age, gender,
                         background, or ability, have access to the benefits of development.' title='Inclusivity'/>
                        <SupportCard className='pl-0' image={RArrow} description='We believe in empowering individuals and communities to take control of their destinies by providing them with the tools,
                         knowledge, and opportunities they need to thrive.' title='Empowerment'/>
                    </div>
                </div>



            </div>
            <div id='about-page__staff' className='flex flex-col w-full items-center justify-center' >
                    <div id='about-page__staff__header' className='mt-[4rem]  mb-[4rem] w-full items-center  text-[#1A1A1A80]'>
                        <h2 className='text-xs leading-[21px] text-center'>MEET OUR TEAM</h2>
                        <h4 className='font-semibold text-[32px] text-[#1A1A1A] text-center'>Dedicated Individuals at Youme Foundation</h4>
                        <h4 className='font-semibold text-[32px] text-[#1A1A1A] text-center'>at Youme Foundation</h4>

                    </div>

                    <div id='about-page__staff__body' className='flex  items-center justify-center '>
                        {StaffData.map((staff, index) => (
                            // <div key={index}>
                            //     <img src={staff.img}/>
                            //     <h3>{staff.name}</h3>
                            //     <p>{staff.title}</p>
                            // </div>
                            <StaffCard className='pl-6' key={index} image={staff.img} title={staff.name} description={staff.title}/>
                        ))}
                    </div>
                </div>
                <div 
                        id='home-page__C__bottom__info' 
                        className='w-4/5 flex flex-col gap-6 mt-[10rem] h-[292px] items-center justify-center mb-[10rem]'   
                        style={{backgroundImage: `url(${bottom  })`}}>

                        <h2 className='text-white font-semibold text-[36px] leading-[50.4px] text-center max-w-[700px]'>Together we can achieve more. Join us and be a part of a brighter future for all</h2>
                        <button className='bg-primaryColor text-sm font-poppins font-semibold leading-[25.2px] w-fit h-fit p-[10px] text-white'>Join our course</button>
                    </div>


        </section>
    )
}