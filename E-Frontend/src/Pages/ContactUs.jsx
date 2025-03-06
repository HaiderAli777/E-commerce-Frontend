import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faDungeon } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';


export default function ContactUs() {
  return (
    <div className=' my-6'>
        <div className='flex flex-row items-center justify-center space-x-3'>
        <h1 className='text-center font-bold text-purple-800 text-4xl'>
          Contact <span className='text-purple-500'>US</span>
        </h1>
        <div className='w-20 h-0.5 bg-purple-300'></div>
        </div>
      {/*No we will make a body section */}
        <div className=' grid grid-cols-1 mx-5 gap-y-3  md:grid-cols-3 md:mx-40 mt-13 '>
        <div className='bg-purple-600  py-10  px-5 pt-10 pb-10 rounded-3xl'>
         <h1 className='text-3xl font-bold text-white mb-13'>Contact Us</h1>
         <p className='text-sm leading-13 text-white font-medium'>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> New York Office 123 Main Street,Manhattan.
         <br></br>
         <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +1 (310) 555-1234
         <br></br>
         <FontAwesomeIcon icon={faDungeon}></FontAwesomeIcon> Helpline: +1 (800) 555-5678
         <br></br>
           <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> support@example.com
         <br></br>
         <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> Working Hours : Monday - Friday: 9:00 AM - 6:00 PM
<br></br>
         </p>
        </div>
        <div className=' md:col-span-2 p-10 bg-gradient-to-l rounded-3xl from-purple-400'>
       <h1 className='text-3xl font-bold text-purple-700 mb-5 text-center'>
        GET IN TOUCH
        <br></br>
        <spna className="text-sm">Fell free to drop a message!</spna>
       </h1>
      
       <div className="justify-items-center space-y-5">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="name"
                  className="text-left text-purple-800 font-bold"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className="border-purple-800"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-left  text-purple-800 font-bold"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="border-purple-800"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="message"
                  className="text-left  text-purple-800 font-bold"
                >
                  Message
                </Label>
                <textarea
                  
                  id="message"
                  placeholder="Enter Your Message"
                  className="border-1 border-purple-700 focus:border-purple-400 p-3 rounded-2xl"
                  rows={6}
                />
              </div>
              <Button className="bg-purple-900 text-white hover:bg-purple-700">Submit</Button>
            </div>
        </div>
        </div>

    </div>
  )
}
