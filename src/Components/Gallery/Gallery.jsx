
import imgC6kI426W from '../../assets/gallery-1-C6kI426W.jpg'
import imgBDAle6YK from '../../assets/gallery-2-BDAle6YK.jpg'
import imgD8D0kJLk from '../../assets/gallery-3-D8D0kJLk.jpg'
import imgC4TaCsGh from '../../assets/gallery-4-C4TaCsGh.jpg'
import imgCkpF2mmx from '../../assets/gallery-5-CkpF2mmx.jpg'
import imgCCNWiyJy from '../../assets/gallery-6-CCNWiyJy.jpg'

export default function Gallery() {

    const AllImg = [imgC6kI426W, imgBDAle6YK, imgD8D0kJLk, imgC4TaCsGh, imgCkpF2mmx, imgCCNWiyJy]

  return (
    <>
    <section>
        <div className='container gap-6 lg:px-28 mx-auto md:px-0 px-3 py-8'>
            <div>
                <h2 className=" text-3xl font-bold text-center">Gallery</h2>
                <div className="bg-orange-400 w-24 h-0.5 mt-2 mx-auto"></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                {AllImg.map((e, i)=>{
                    return(
                        <div key={i} className='overflow-hidden rounded'>
                            <img loading='lazy' className='w-full h-full object-cover hover:scale-110 transition duration-500' src={e} alt="img" />
                        </div>
                    )
                })}
            </div>

        </div>
    </section> 
    </>
  )
}

