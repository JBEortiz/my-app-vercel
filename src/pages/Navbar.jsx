import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Navigate, NavLink
} from "react-router-dom";
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Blog', href: '#' },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-transparent ">
    
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex  h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-violet-400 hover:bg-gray-100 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
     
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  href="/home"
                  className="inline-flex items-center border-b-2 focus:border-sky-500 px-1 pt-1 text-sm font-medium text-gray-900 hover:border-indigo-500 hover:text-indigo-500 focus:ring-sky-500"
                >
                  Home
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center border-b-2 focus:border-sky-500 px-1 pt-1 text-sm font-medium text-gray-900 hover:border-indigo-500 hover:text-indigo-500 focus:ring-sky-500"
                >
                  Proyectos
                </a>
               
                <a
                  href="/contact"
                  className="inline-flex items-center border-b-2 focus:border-sky-500 px-1 pt-1 text-sm font-medium text-gray-900 hover:border-indigo-500 hover:text-indigo-500 focus:ring-sky-500"
                >
                  Contactame
                </a>
                
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  
                   
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 pt-2 pb-4">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            <Disclosure.Button
              as="a"
              href="/home"
              className="block border-l-4 border-sky-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-sky-700"
            >
              Home
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="/projects"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-violet-500"
            >
              Projectos
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="/contact"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-violet-500"
            >
              Contactame
            </Disclosure.Button>
          
          </div>
        </Disclosure.Panel>
      </>
      
    )}
    
  </Disclosure>
  )
}




export default Navbar;