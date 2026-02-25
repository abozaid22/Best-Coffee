

export default function Ticket() {
  return (
    <section>
      <div className='container gap-5 lg:px-28 mx-auto grid grid-cols-1 sm:grid-cols-[2fr_1fr] py-7'>

        <div className='w-full text-sm gap-6 mx-auto px-5 py-8 bg-[#1E1E1E] '>
          <h2 className='px-2 text-3xl text-[#FDBA74] mb-4 font-bold'>Need Help? Open a Ticket</h2>
          <p className='px-2 '>Our support team will get back to you ASAP via email.</p>
          
          <form >
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              <div className=' p-1 m-1 '>
                <label htmlFor="name">Your Name</label>
                <input required className='my-2 bg-[#3F181C] w-full p-1 px-2 rounded-md focus:ring-2 focus:ring-orange-400 outline-none ' type="text" name="name" id="name" placeholder='Enter Your Name'/>
              </div>
              <div className=' p-1 m-1 '>
                <label htmlFor="email">Your Email</label>
                <input required className='my-2 bg-[#3F181C] w-full p-1 px-2 rounded-md focus:ring-2 focus:ring-orange-400 outline-none ' type="email" name="email" id="email" placeholder='Enter Your Email' />
              </div>
            </div>
            <div className='px-2'>
              <textarea required className='mt-2 bg-[#3f181c] w-full p-2 rounded-md focus:ring-2 focus:ring-orange-400 outline-none' placeholder='Write your message here... ' name="" id=""  rows="5"></textarea>
            </div>
            <button type='submit' className='px-6 py-3 m-2 mt-4 cursor-pointer bg-[#F97316] hover:bg-[#bb5309] rounded-full transition decoration-300'>Submit Ticket</button>
           </form>
        </div>

        <div className='w-full text-sm gap-6 mx-auto px-5 py-8 bg-[#1E1E1E]'>
          <h2 className=' px-2 text-3xl text-[#FDBA74] mb-4 font-bold'>Subscribe to receive future updates</h2>
          <p className='px-2 '>Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
          <div className=' my-4 border border-gray-700'></div>
          <form >
            <input required className=' my-2 bg-[#3F181C] w-full p-1 px-2 rounded-md focus:ring-2 focus:ring-orange-400 outline-none ' type="email" name="email" id="email" placeholder='Enter Your Email' />
            <input required className=' my-2 bg-[#3F181C] w-full p-1 px-2 rounded-md focus:ring-2 focus:ring-orange-400 outline-none ' type="email" name="email" id="email" placeholder='Enter Your Email' />
            <button type='submit'className='w-full rounded-md py-1 mt-4 cursor-pointer bg-[#F97316] hover:bg-[#bb5309] transition decoration-300'>submit</button>
          </form>
        </div>

      </div>
    </section>
  )
}

