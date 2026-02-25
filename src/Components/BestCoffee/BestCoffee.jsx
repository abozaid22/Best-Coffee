
import imgCoffee from '../../assets/coffee-hero-section-BJrkd7KL.png'

export default function BestCoffee() {
  return (
    <section>
      <div className="container py-5 gap-6 mx-auto md:px-0 lg:px-28 px-3 grid grid-cols-1 md:grid-cols-2">
        {/* text */}
        <div className=" space-y-6 py-5 self-center"> 
            <h1 className='text-orange-300 text-4xl font-bold'>Best Coffee</h1>
            <p className='text-4xl font-bold'>Make Your Day Great With Our Special Coffee</p>
            <p className='text-lg'>Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>

            <div className='space-x-4'>
                <button className='bg-orange-500 px-6 py-3 rounded-full hover:bg-transparent transition duration-300 cursor-pointer'>Order Now</button>
                <button className=' px-6 py-3 rounded-full font-medium border border-white transition duration-300 cursor-pointer'>Contact Us</button>
            </div>
        </div>
        {/* img */}
        <div> 
            <img className='w-full' src={imgCoffee} alt="imgCoffee" />
        </div>
      </div>
    </section>
  )
}

