import React from 'react';
const timeline = [
  {
    name: 'nTT Data - Junior Developer',
    description:
     "Java 8, 11, Microservicios con Spring, Spring Framework, Spring Batch, Metodología Agile y Sprint",
    date: 'Sep 2020 - Oct 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Capgemini - Developer',
    description:
      'Spring Boot, Microservices, Kubernetes, Google cloud, Go, I+d+i : Investigación, desarrollo e innovación',
    date: 'Nov 2021 - May 2022 ·',
    dateTime: '2021-12',
  },
  {
    name: 'Bosonit - Developer',
    description:
      'Arquitectura Hexagonal, Docker, Microservicios, Spring Framework, Java 11, 8',
    date: 'May 2022 - Oct 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Minsait - Consultan Developer',
    description:
      'Clean Architecture, DDD (Domain-Driven Design), Saga pattern, Spring Framework, Java 11, 8, Jenkins, Kafka, Docker',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]
const ExperienceComponent = () => {
    return (
      
      <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8 ">
       
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
     
      
        {timeline.map((item) => (
          <div key={item.name}>
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-sky-500 hover:text-black"
            >
              <svg viewBox="0 0 4 4" className="mr-2 h-2 w-2 flex-none" aria-hidden="true">
                <circle cx={0} cy={0} r={0} fill="currentColor" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:ml-8 lg:-mr-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-xl font-semibold leading-8 tracking-tight text-black hover:text-sky-500">{item.name}</p>
            <p className="mt-1 text-lg leading-7 text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
       
    );
}

export default ExperienceComponent;
