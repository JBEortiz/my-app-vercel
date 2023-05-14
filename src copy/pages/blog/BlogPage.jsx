import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Navbar from '../Navbar';
import SectionMovile from '../../components/sectionMovile';


const BlogPage= () => {

  return (
   <div className="bg-white">
    <main className="isolate">
    <div className="animate__animated animate__rollIn animate__slower absolute inset-x-0 top-[-10rem] -z-10 transform-gpu blur-1xl sm:top-[-22rem]">
              <svg
                className="relative left-[calc(100%-13rem)] -z-10 h-[70.1875rem] max-w-none -translate-x-1/2 rotate-[220deg] sm:left-[calc(50%-0rem)] sm:h-[74.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".5"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="5.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#67e8f9"/>
                    <stop offset={1} stopColor="#9089FC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
    <Navbar></Navbar>
    <div className=" mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl  ">
    <div class="embed-responsive">
    <iframe class="rounded-lg embed-responsive" width="580" height="315" src="https://www.youtube.com/embed/GiJxMF-hk_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  </div>
  </div>
<SectionMovile></SectionMovile>
<div className="animate__animated animate__rotateInUpRight animate__slow animate__delay-1s absolute inset-x-10 -z-20 transform-gpu blur-1xl sm:top-[40rem]">
                <svg
                  className="relative max-w-none -translate-x-1/2 rotate-[10deg] sm:left-[calc(80%+46rem)] sm:h-[45.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".4"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1255.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#67e8f9" />
                      <stop offset={1} stopColor="#9089FC" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
    </main>
  
	
    
   
   <br></br>
  </div>
  )
  }

export default BlogPage;
