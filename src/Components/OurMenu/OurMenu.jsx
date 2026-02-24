
import imgCold from '../../assets/cold-beverages-C3DjeGVD.png'
import imgDesserts from '../../assets/desserts-ByukB0fu.png'
import imgRefreshment from '../../assets/refreshment-D-kVNGAg.png'
import imgSpecial from '../../assets/special-combo-In1S3Bm1.png'
import imgCoffee from '../../assets/coffee-hero-section-BJrkd7KL.png'
import imgBurger from '../../assets/burger-frenchfries-Cmz-waKa.png'

export default function OurMenu() {

    // All img & title & desc
    const data = [
        {
            id:1,
            img: imgCold,
            title: "Cold Beverages",
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi eaque repellendus repellat eos veniam illo soluta deleniti expedita amet?'
        },
        {
            id:2,
            img: imgDesserts,
            title: "Desserts",
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi eaque repellendus repellat eos veniam illo soluta deleniti expedita amet?'
        },
        {
            id:3,
            img: imgRefreshment,
            title: "Refreshment",
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi eaque repellendus repellat eos veniam illo soluta deleniti expedita amet?'
        },
        {
            id:4,
            img: imgSpecial,
            title: "Special Combo",
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi eaque repellendus repellat eos veniam illo soluta deleniti expedita amet?'
        },
        {
            id:5,
            img: imgCoffee,
            title: "Coffee",
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi eaque repellendus repellat eos veniam illo soluta deleniti expedita amet?'
        },
        {
            id:6,
            img: imgBurger,
            title: "Burger & French Fries",
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi eaque repellendus repellat eos veniam illo soluta deleniti expedita amet?'
        },
    ]

  return (
    <>
    <section className="bg-[#252525]">
        <div className="container gap-6 mx-auto md:px-0 px-3 py-8">
            <div>
                <h2 className=" text-3xl font-bold text-center">Our Menu</h2>
                <div className="bg-orange-400 w-24 h-0.5 mt-2 mx-auto"></div>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {
                    data.map((el) => {
                        return (
                            <div key={el.id} className="bg-[#1e1e1e] p-5 rounded-lg">
                                <img className="w-40 rounded-md mb-4" src={el.img} alt="imgCold" title={el.title}/>
                                <h3 className="text-xl font-medium mb-2">{el.title}</h3>
                                <p className="text-sm text-gray-400">{el.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
      
    </section>
    </>
  )
}

