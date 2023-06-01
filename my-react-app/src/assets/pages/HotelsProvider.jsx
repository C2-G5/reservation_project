import React from 'react'
import {MdAddLocationAlt} from "react-icons/md"
import HotelPhoto from "../components/HotelDetails/Hotelphoto"
import LocationMenue from "../components/HotelDetails/LocationMenu"
function HotelsProvider() {
  return (
    <div>
      <HotelPhoto/>
     <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold text-[#c5a880] sm:text-3xl">
PICK YOUR HOTEL RIGHT NOW  
    </h2>

      <p class="text-xl font-bold text-gray-900 py-8 sm:text-l">
     Here Are the Best Hotels In Town,we bring for you the best offer,lowest price and the best places to make your experience the best 
      </p>
    </header>

    <div class="mt-8 flex items-center justify-between">
      <div class="flex rounded border border-gray-100">
    


      </div>

<form class="flex-col  items-center">
  

    <label for="simple-search" class="sr-only">Search</label>
  <div className='flex mb-4'>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-[#c5a880] rounded-lg border border-[#ae8956] hover:bg-[#ae8956] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#c5a880] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
  </div>   
    <label for="simple-search" class="sr-only">Search</label>
  <div className='flex'>

    <LocationMenue/>
  </div>   
</form>

    </div>

    <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li>
<div class="py-4">
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
        <div  class="w-full image-cover rounded-t-md" >
          
        </div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
        <span class="block text-lg text-gray-800 font-bold tracking-wide"><p>Book An Hotel</p></span>
            <span  class="block text-gray-600 text-sm">
                <p>
                    Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui. 
                    </p>
            </span>
        </div>
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
       <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> 
       <div class="pt-8 text-center">
           <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">book your room</button>
           </div>
    </div>
    </div>
   
</div>

      </li>

      <li>
      <div class="py-4">
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
        <div  class="w-full image-cover rounded-t-md" >
          
        </div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
        <span class="block text-lg text-gray-800 font-bold tracking-wide"><p>Book An Hotel</p></span>
            <span  class="block text-gray-600 text-sm">
                <p>
                    Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui. 
                    </p>
            </span>
        </div>
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
       <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> 
       <div class="pt-8 text-center">
           <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">book your room</button>
           </div>
    </div>
    </div>
   
</div>
      </li>

      <li>
      <div class="py-4">
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
        <div  class="w-full image-cover rounded-t-md" >
          
        </div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
        <span class="block text-lg text-gray-800 font-bold tracking-wide"><p>Book An Hotel</p></span>
            <span  class="block text-gray-600 text-sm">
                <p>
                    Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui. 
                    </p>
            </span>
        </div>
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
       <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> 
       <div class="pt-8 text-center">
           <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">book your room</button>
           </div>
    </div>
    </div>
   
</div>
      </li>

      <li>
      <div class="py-4">
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
        <div  class="w-full image-cover rounded-t-md" >
          
        </div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
        <span class="block text-lg text-gray-800 font-bold tracking-wide"><p>Book An Hotel</p></span>
            <span  class="block text-gray-600 text-sm">
                <p>
                    Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui. 
                    </p>
            </span>
        </div>
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
       <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> 
       <div class="pt-8 text-center">
           <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">book your room</button>
           </div>
    </div>
    </div>
   
</div>
      </li>
      <li>
      <div class="py-4">
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
        <div  class="w-full image-cover rounded-t-md" >
        
        </div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
            <span class="block text-lg text-gray-800 font-bold tracking-wide"><p>Book An Hotel</p></span>
            <span  class="block text-gray-600 text-sm">
                <p>
                    Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui. 
                    </p>
            </span>
        </div>
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
       <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> 
       <div class="pt-8 text-center">
           <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">book your room</button>
           </div>
    </div>
    </div>
   
</div>
      </li>
      <li>
      <div class="py-4">
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
        <div  class="w-full image-cover rounded-t-md" >
          
        </div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
        <span class="block text-lg text-gray-800 font-bold tracking-wide"><p>Book An Hotel</p></span>
            <span  class="block text-gray-600 text-sm">
                <p>
                    Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui. 
                    </p>
            </span>
        </div>
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
       <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> 
       <div class="pt-8 text-center">
           <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">book your room</button>
           </div>
    </div>
    </div>
   
</div>
      </li>
    </ul>
 

<ol class="flex justify-center mt-8 gap-1 text-xs font-medium">
  <li>
    <a
      href="#"
      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>

  <li>
    <a
      href="#"
      class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      1
    </a>
  </li>

  <li
    class="block h-8 w-8 rounded border-[#c5a880] bg-[#c5a880] text-center leading-8 text-white"
  >
    2
  </li>

  <li>
    <a
      href="#"
      class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      3
    </a>
  </li>

  <li>
    <a
      href="#"
      class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      4
    </a>
  </li>

  <li>
    <a
      href="#"
      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>
</ol>
  </div>
</section>

    </div>
  )
}

export default HotelsProvider