import React from 'react'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <div className='w-screen h-screen bg-cover flex items-center justify-center' style={{backgroundImage : 'url(bg-3.jpg)'}}>
      <div className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white' style={{backgroundImage: 'url(atombg-comp.webp)'}}>
         <div className='absolute left-20 bottom-16 w-[70%] md:w-[30%]'>
            <ContactForm />
         </div>
      </div>
    </div>
  )
}

export default page 