import React from 'react';
import javaIcon from '../images/icons/icons8-logotipo-de-java-coffee-cup-128.jpg'
import jsIcon from '../images/icons/icons8-javascript-128.jpg'
import pythonIcon from '../images/icons/icons8-python-256.jpg'
import springIcon from '../images/icons/icons8-logotipo-de-primavera-160.jpg'
import dockerIcon from '../images/icons/icons8-estibador-256.jpg'
import reactIcon from '../images/icons/icons8-reaccionar-256.jpg'
const libraryFramework = [

  {
    name: 'Spring framework',
    imageUrl:
    springIcon,
  },
  
 
  {
    name: 'React',
    imageUrl:
    reactIcon,
  },
  {
    name: 'Docker',
    imageUrl:
    dockerIcon,
  },
  
]
const team = [
  {
    name: 'Java',
    imageUrl:
    javaIcon,
  },
  {
    name: 'Javascript',
    imageUrl:
    jsIcon,
  },
  {
    name: 'Python',
    imageUrl:
    pythonIcon,
  },
  
]
const ContainerComponent = () => {
    return (
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        
          <div className="mx-auto lg:mx-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Content goes here */}
          </div>
          <h2 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300">
          Mi stack tecnologico de uso diario
          </h2>
          
          <br></br>
          
          <p className="font-sans text-lg leading-8 text-black">
                  Mis imprescindibles con los que trabajo a diario y los que me siento mas comodo trabajando.
          </p>
          <br></br>
          <p className="font-sans text-lg leading-8 text-black">
                 <strong className='text-indigo-500'>Java</strong> es el lenguaje con el que mas tiempo llevo trabajando junto a su framework <strong className='text-indigo-500'>Spring</strong> y con lenguaje de programacion que mas conocimientos tengo. <strong className='text-indigo-500'>Python</strong> es un lenguaje que me gusta mucho y usualmente lo utilizo para hacer scripts y automatizaciones sencillas, aunque he hecho algun proyecto con el framework <strong className='text-indigo-500'>Django</strong> no es un framework que utilice mucho.
                
          </p>
          <br></br>
          <p className="font-sans text-lg leading-8 text-black">
                respecto a <strong className='text-indigo-500'>Docker</strong> lo he estado utilizando en proyectos como el Santander, Masmovil y La Caixa <strong className='text-indigo-500'>Javascript</strong> juanto con <strong className='text-indigo-500'>React</strong>
                es el lenguaje y libreria que mas utilizo fuera de mi entorno laboral.
                
          </p>
                
          </div>
          <ul
            role="list"
            className="animate__animated animate__bounce animate__delay-2s mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="mx-auto h-24 w-24 rounded-md" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                
              </li>
            ))}
          </ul>
         
          
          <ul
            role="list"
            className="animate__animated animate__bounce animate__delay-3s mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {libraryFramework.map((person) => (
              <li key={person.name}>
                <img className="mx-auto h-24 w-24 rounded-md" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                
              </li>
            ))}
          </ul>
          
        </div>
    );
}

export default ContainerComponent;
