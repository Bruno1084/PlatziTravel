import React from "react";

const Header =()=> {


  return(
    <header className="Sec-Header w-full p-2 z-20 md:flex md:flex-row md:justify-around text-red font-bold bg-white">
      <h1 className=" hidden md:block  my-auto text-xl">Platzi Travel</h1>
      <nav className="md:hidden flex flex-row justify-around">
        <a href="#"><img src="/svg/home.svg" alt="icon-home" className="h-10" /></a>
        <a href="#"><img src="/svg/search.svg" alt="icon-search" className="h-10" /></a>
        <a href="#"><img src="/svg/heart.svg" alt="icon-heart" className="h-10" /></a>
        <a href="#"><img src="/svg/user.svg" alt="icon-user" className="h-10" /></a>
      </nav>

      <nav className="hidden md:block my-auto">
        <a href="#" className="hover:text-black mx-2">Locations</a>
        <a href="#" className="hover:text-black mx-2">Stays</a>
        <a href="#" className="hover:text-black mx-2">FAQS</a>
        <a href="#" className="hover:text-black mx-2">About Us</a>
      </nav>

      <div className="hidden md:flex  my-3">
        <img src="/svg/search.svg" alt="icon-search" className="mx-3" />
        <img src="/svg/moon.svg" alt="icon-mode" className="mx-3" />
        <img src="/svg/user.svg" alt="icon-user" className="mx-3" />
      </div>
    </header>
  )
}

export { Header};