import React from "react";
import pcImage from "../images/pc.PNG";

const incentives = [
  {
    name: "afinciones",
    description: "descripcion",
  },
  {
    name: "afinciones",
    description: "descripcion",
  },
  {
    name: "afinciones",
    description: "descripcion",
  },
];
const PresentationComponent = () => {
  return (
    <div className="bg-zinc-300/20">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Mi nombre es Juan{" "}
              </h2>
              <p className="mt-4 text-white">
                Quiero compartir con ustedes algo sobre mí. La programación es
                mi pasión y es algo que realmente disfruto hacer. En mi trabajo,
                utilizo Java con Spring
              </p>
              <p className="mt-4 text-white">
                En mi tiempo libre, estoy aprendiendo React.js y Nest.js. Estos
                frameworks me permiten crear aplicaciones web modernas y
                eficientes, y estoy emocionado de poder aplicar mis
                conocimientos en proyectos personales.
              </p>
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-zinc-300/20">
              <img
                src={pcImage}
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">INCONOS</div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-white">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationComponent;
