import contribute1 from '../../assets/youmeContribute1.svg'
import contribute2 from '../../assets/youmeContribute2.svg'
import contribute3 from '../../assets/youmeContribute3.svg'
import contribute4 from '../../assets/youmeContribute4.svg'
import contribute5 from '../../assets/youmeContribute5.svg'
import contribute6 from '../../assets/youmeContribute6.svg'
import arrow from '../../assets/arrow-right.svg'
import bottom from '../../assets/youmeHomeBottom.svg'







export default function Contribute() {

    const ContributeData = [
        {
            id: '01',
            title: 'Make a Donation',
            text: 'Your generosity enables us to provide essential services and support community development projects. To make a donation and help us further our impact, please contact us for more information',
            img: contribute1
        },
        {
            id: '02',
            title: 'Offer Grants',
            text: 'Grant funding is essential for sustaining and expanding our programs and projects. We welcome partnerships with organizations, foundations, and individuals interested in providing grants to support our work.',
            img: contribute2
        },
        {
            id: '03',
            title: 'Become a Volunteer',
            text: 'Our volunteers are the backbone of our organization, contributing their time, skills, and passion to support our mission. Whether you\'re interested in event planning, fundraising, program implementation, or administrative tasks, there are many ways to get involved as a volunteer.',
            img: contribute3
        },
        {
            id: '04',
            title: 'In-Kind Dontations',
            text: 'we also welcome in-kind contributions of goods and services. Your in-kind donations help us reduce operating costs and allocate more resources to our programs and initiatives.',
            img: contribute4
        },
        {
            id: '05',
            title: 'Join our events',
            text: 'from fundraisers and awareness campaigns to workshops and community gatherings, our events offer opportunities to connect with like-minded individuals and support our cause.',
            img: contribute5
        },
        {
            id: '06',
            title: 'Free Consultancy',
            text: 'Whether you\'re an experienced professional, a subject matter expert, or a seasoned consultant, your expertise can make a meaningful impact on our projects and programs. ',
            img: contribute6
        },
        
        
    ]
    return (
        <section id='contribute' className='w-full items-center flex flex-col'>
             <div id="contribute__header" className='mb-[164px]'>
                <div id="contribute__header__heading" className=' flex flex-col '>
                    <h2 className='text-xs text-[#1A1A1A80] text-center mb-4'>HOW TO SUPPORT</h2>
                    <h3 className='text-[36px] leading-[42px] text-center font-semibold'>Get Involved with Yuoume</h3>
                    <h3  className='text-[36px] leading-[42px] text-center font-semibold mb-8'>Development Foundation</h3>
                </div>
                <p className='font-poppins md:max-w-[795px] text-[#333333]  lg:text-sm text-center'>
                    Your support and participation are invaluable in helping us achieve our mission. Whether you're passionate about
                    making a difference in your community or want to contribute to a global cause, 
                    there are many ways you can get involved with us.
                </p>
             </div>
             <div id="contribute__body">
                {ContributeData.map((contr, index)=> (
                    <div className={`md:flex gap-8 justify-between xl:w-[1000px] mb-24 ${index % 2 === 0 ?' flex-row-reverse': ''}`} key={index}>
                        <div className='w-[470px] flex gap-6'>
                            <h5 className='text-[#D9D9D9] font-semibold text-[36px]'>{contr.id}.</h5>
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-poppins font-medium'>{contr.title}</h2>
                                <p className='text-[#1A1A1ABF] font-poppins text-sm leading-[25.2px]'>{contr.text}</p>
                                <a href='/contact' className='flex  gap-2 text-primaryColor font-semibold'>Contact us <img src={arrow}/></a>
                            </div>
                        </div>
                        <img src={contr.img} />
                        
                    </div>
                ))}
             </div>
             <div 
                        id='home-page__C__bottom__info' 
                        className=' w-4/5 flex flex-col gap-6 mt-[10rem] h-[292px] items-center justify-center mb-[10rem]'   
                        style={{backgroundImage: `url(${bottom  })`}}>

                        <h2 className='text-white font-semibold text-[36px] leading-[50.4px] text-center max-w-[700px]'>Together we can achieve more. Join us and be a part of a brighter future for all</h2>
                        <button className='bg-primaryColor text-sm font-poppins font-semibold leading-[25.2px] w-fit h-fit p-[10px] text-white'>Join our course</button>
                    </div>
        </section>
    )
}