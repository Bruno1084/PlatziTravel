import React from "react";

const Trending = () => {

  return (
    <section>
      <h3 className="text-red text-3xl font-bold p-6">Trending Stays</h3>

      <div className="px-4 md:px-10">
        <div className="my-5 bg-[url('/imgs/chicago.jpg')] bg-cover bg-bottom rounded-lg h-[30rem] p-10">
          <div className="text-white font-bold text-left md:text-right">
            <h3 className="text-3xl drop-shadow-lg">Chicago</h3>
            <p className="text-xl drop-shadow-lg">2 rooms, bathroom and kitchen.</p>
          </div>
        </div>

        <div className="grid grid-rows-3 md:grid-rows-4 md:grid-cols-5 gap-5 md:h-[40rem]">

          <div className="rounded-lg bg-[url('/imgs/LA.jpg')] bg-cover bg-center h-[28rem] md:h-auto row-span-1 md:col-span-2 md:row-span-4 p-10">
            <div className="text-white font-bold text-left md:text-right">
              <h3 className="text-3xl drop-shadow-lg">Los Angeles</h3>
              <p className="text-xl drop-shadow-lg">4 rooms, 3 bathrooms, <br/>kitchen and private pool.</p>
            </div>
          </div>

          <div className="rounded-lg bg-[url('/imgs/miami.jpg')] bg-cover bg-bottom row-span-1 md:col-span-3 md:row-span-2 p-10">
            <div className="text-white font-bold text-left md:text-right">
              <h3 className="text-3xl drop-shadow-lg">Miami</h3>
              <p className="text-xl drop-shadow-lg">3 rooms, 2 bathrooms, <br/>kitchen and amazing sea view.</p>
            </div>
          </div>

          <div className="rounded-lg bg-[url('/imgs/bali.jpg')] bg-cover bg-bottom  row-span-1 md:col-span-3 md:row-span-2 p-10">
            <div className="text-white font-bold text-left md:text-right">
              <h3 className="text-3xl drop-shadow-lg">Bali</h3>
              <p className="text-xl drop-shadow-lg">2 rooms, 2 bathrooms, <br/>kitchen and private pool</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export { Trending };