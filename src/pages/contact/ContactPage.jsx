import React, { useRef } from "react";
import Navbar from "../Navbar";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z52leef",
        "template_hcnyh7q",
        form.current,
        "GF99YxRQaQchpt5op"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado correctamente");
        },
        (error) => {
          console.log(error.text);
        }
      );
    
  };

  return (
    <div className="bg-transparent">
      <main className="isolate">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu blur-1xl sm:top-[-22rem]">
          <svg
            className="w-full h-auto left-[calc(100%-13rem)] -z-10 h-[70.1875rem] max-w-none -translate-x-1/2 rotate-[220deg] sm:left-[calc(50%-0rem)] sm:h-[74.375rem]"
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
                <stop stopColor="#67e8f9" />
                <stop offset={1} stopColor="#9089FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Navbar></Navbar>

        {/* Header */}
        <div className="animate__animated animate__fadeIn bg-warm-gray-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
              <p className="text-4xl font-bold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl hover:-translate-y-1 hover:scale-105 hover:text-sky-500 duration-300">
                ¡Ponte en contacto conmigo!
              </p>
              <p className="mt-6 max-w-3xl text-xl text-warm-gray-500">
                ¡Hola! Si necesitas contactarme por algún motivo, por favor no
                dudes en hacerlo. Puedes enviarme un correo electrónico a la
                dirección que se encuentra en esta página o completar el
                formulario de contacto también disponible aquí.
                <strong className="text-indigo-500">
                  {" "}
                  ¡Espero tener noticias tuyas pronto!
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className=" relative bg-transparent"
          aria-labelledby="contact-heading"
        >
          <div
            className="absolute h-1/2 w-full bg-warm-gray-50"
            aria-hidden="true"
          />
          {/* Decorative dot pattern */}

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-transparent shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="rounded-lg relative overflow-hidden bg-gradient-to-b from-indigo-300 to-indigo-400 py-10 px-6 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="pointer-events-none absolute inset-0 sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-white">
                    Información de contacto
                  </p>
                  <p className="mt-6 max-w-3xl text-base text-teal-50">
                    Además de mi correo electrónico y formulario de contacto,
                    también puedes encontrarme en Twitter, Instagram y Facebook.
                    Sígueme para estar al tanto de mis últimas publicaciones y
                    novedades, y no dudes en enviarme un mensaje directo si
                    necesitas ayuda o tienes alguna pregunta.
                  </p>
                  
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"> 
                
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        for="email_id"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email_id"
                          name="email_id"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          required
                        />
                      </div>
                    </div>
                    <div></div>
                    <div className="sm:col-span-2">
                      <label
                        for="subject"
                        className="block text-sm font-medium text-warm-gray-900"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          for="message"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-warm-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          aria-describedby="message-max"
                          defaultValue={""}
                          required
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-transparent bg-sky-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto "
                        aria-label="Enviar">Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <br></br>
    </div>
  );
};

export default ContactPage;
