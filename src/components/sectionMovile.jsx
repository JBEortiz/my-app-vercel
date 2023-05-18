import React from "react";
import phone from "../images/3966821 (2).jpg";
const SectionMovile = () => {
  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300">
              ¿Por que empezar a programar?
            </h2>
            <br></br>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Empece a programar por la necesidad que quere un cambio en mi
              vida, y la programacion me dio esa oportunidad de un futuro
              laboral mejor
            </p>
          </div>

          <div className="lg:col-end-2 lg:w-full lg:max-w-lg lg:pb-8">
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src={phone}
                  alt=""
                  className="embed-responsive aspect-[3/5] w-[24rem] max-w-none rounded-2xl bg-white-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMovile;
