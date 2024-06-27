
import imp1 from '../../assets/youmeImpactGallery1.svg'
import imp2 from '../../assets/youmeImpactGallery2.svg'
import imp3 from '../../assets/youmeImpactGallery3.svg'
import imp4 from '../../assets/youmeImpactGallery4.svg'
import imp5 from '../../assets/youmeImpactGallery5.svg'
import imp6 from '../../assets/youmeImpactGallery6.svg'
import imp7 from '../../assets/youmeImpactGallery7.svg'
import imp8 from '../../assets/youmeImpactGallery8.svg'
import imp9 from '../../assets/youmeImpactArrow1.svg'
import imp10 from '../../assets/youmeImpactArrow2.svg'


const ImpactGalleryData = [
    {
        desc: '',
        year: '',
        img: imp1
    },
    {
        desc: '',
        year: '',
        img: imp2
    },
    {
        desc: '',
        year: '',
        img: imp3
    },
    {
        desc: '',
        year: '',
        img: imp4
    },
    {
        desc: '',
        year: '',
        img: imp5
    },
    {
        desc: '',
        year: '',
        img: imp6
    },
    {
        desc: '',
        year: '',
        img: imp7
    },
    {
        desc: '',
        year: '',
        img: imp8
    },
]





export default function Impact() {
    return (
        <section id="impact" className='flex flex-col items-center max-w-[1900px] gap-20'>
            <div id="impact__header" className='max-w-[593px] text-center'>
                <h1 className='text-xs text-[#1A1A1A80]'>OUR IMPACT</h1>
                <h3 className='font-semiibold text-[#1a1a1a] text-[36px]'>Changing Lives, Creating Hope</h3>
                <p className='text-[#262626] font-poppins'>Over the years, YOUME Development Foundation has made a significant impact, 
                    touching the lives of thousands of individuals and communities. View all our projects, 
                    events and transformations for communities
                </p>
            </div>

            <div id="impact__gallery" className='flex flex-wrap gap-4 w-[1203px]'>
                {
                    ImpactGalleryData.map((data, index)=> (
                        <div key={index} className='flex flex-col'>
                                <img src={data.img} className='w-[285px] h-[208px]'/>
                                <div className='flex'>
                                    <h5>{data.desc}</h5>
                                    <h5>{data.year}</h5>
                                </div>
                        </div>
                    ))
                }
                
                <div className='flex gap-4 items-center justify-center w-full'>
                    <button className='items-center gap-2 flex w-[136px] h-[45px] border-2 text-[#808080] font-semibold text-sm border-[#808080] p-[10px] box-border'>
                    <h6>View Less</h6> 
                    <img src={imp9}/>

                    </button>
                    <button className='flex gap-2 items-center w-[136px] h-[45px] border-2 border-primaryColor font-semibold text-sm text-primaryColor p-[10px]'>
                       <h6>View More</h6> 
                        <img src={imp10}/>
                    </button>
                </div>
            </div>

        </section>
    )
}