import React from "react";

const Hero =()=> {

  return(
    <section className="relative md:flex md:items-center  bg-[url('PlatziTravelV2/imgs/sanFrancisco.jpg')] md:bg-[url('/imgs/sanFranciscoDesktop.jpg')] bg-cover h-screen md:h-[90vh]">
       <div className="grid md:hidden text-center content-around h-full">
            <form action="">
                <input type="text" placeholder="City Name" className="shadow-lg rounded-full py-4 w-3/4 outline-none text-center" />
            </form>
            <button className="text-red text-lg font-semibold rounded-full shadow-lg bg-white hover:bg-red hover:text-white p-4 w-1/2 mx-auto">Explore More</button>
        </div>

        <div className="hidden md:block mx-8 z-10">
            <h2 className="text-4xl font-bold">Find More Location <br/> Like This</h2>
            <button className="bg-white rounded-full py-3 px-6  m-6  font-semibold text-red hover:text-white hover:bg-red">Explore More</button>
        </div>

    </section>
  );
}

export { Hero };