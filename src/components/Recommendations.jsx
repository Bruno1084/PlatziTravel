import React from "react";
import cardInfo from "../utils/cardInfo.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"


const Recommentations = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section>
      <h3 className="text-red text-3xl font-bold m-4">Our Recomendations</h3>

      <div id="default-carousel" className="m-2 p-4" data-carousel="static">
        <Carousel responsive={responsive}>
          {cardInfo.map((value) => {
            const isEven = value.id % 2 === 0;
            const bgColorClass = isEven ? 'bg-green' : 'bg-white';

            return (
              <div key={value.id} className={`rounded-lg h-72 w-60 mx-4 shadow-lg overflow-hidden inline-block hover:cursor-pointer ${bgColorClass}`}>
                <div className="container-img h-3/5">
                  <img src={value.CoverImage} alt="img-destination" className="h-full" />
                </div>
                <div className="container-text h-2/5 p-4">
                  <h4 className={`font-bold text-xl ${isEven ? 'text-white' : 'text-blue'}`}>{value.Destination}</h4>
                  <p className={isEven ? 'text-white' : 'text-blue'}>{value.Description}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export { Recommentations };