import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/20/solid";
import Spinner from "../../components/SpinnerComponent";
import ImageComponent from "../../components/imageComponent";
async function getRepos() {
  const response = await axios.get(
    "https://api.github.com/users/JBEortiz/repos"
  );
  return response.data;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProjectPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
    async function fetchData() {
      const data = await getRepos();
      setRepos(data);
      setIsLoading(false);
    }
    fetchData();
  }, 1000);
  }, []);
  //37 line //<ImageComponent></ImageComponent>
  return (
    <div>
      <div className="bg-white ">
        <main className="isolate">


          <Navbar></Navbar>
          <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="animate__animated animate__fadeIn mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl hover:-translate-y-1 hover:scale-110 hover:text-sky-500 duration-300">
                  Pruebas de concepto
                  <span className="block text-indigo-500 hover:text-sky-500 duration-300">
                    + proyectos{" "}
                  </span>
                </h1>
                <p className="mx-auto mt-3 max-w-md text-base text-gray-900 sm:text-lg md:mt-5">
                  Mi pequeña{" "}
                  <strong className="text-indigo-500">enciclopedia</strong>{" "}
                  donde se encuentran mis{" "}
                  <strong className="text-indigo-500">
                    proyectos y pruebas de concepto
                  </strong>
                  , que muchas veces me resultan muy útiles para recordar cómo
                  solucionar alguna problemática.
                </p>
              </div>
            </div>
            <br></br>
            <div>

            {isLoading ? (
        <Spinner />
      ) : (
            <div className="animate__animated animate__fadeIn rounded-lg lg:min-w-0 lg:flex-1 border-solid border-2 border-indigo-200 ">
              <div className="border-b border-t border-indigo-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
                <div className="flex items-center">
                  <h1 className="flex-1 text-lg font-medium">
                    <strong className="text-indigo-500">Proyectos :</strong>
                  </h1>
                </div>
              </div>
              <ul
                role="list"
                className="divide-y divide-indigo-200 border-b border-indigo-200"
              >
                { repos.map((project) => (
                  <li
                    key={project.id}
                    className="relative py-5 pl-4 pr-6 hover:bg-indigo-100 hover:rounded-lg sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6 transition ease-in-out hover:-translate-y-2 hover:scale-105"
                  >
                    <div className="flex items-center justify-between space-x-4">
                      {/* Repo name and link */}
                      <div className="min-w-0 space-y-3">
                        <div className="flex items-center space-x-3">
                          <span
                            className={classNames(
                              project.has_wiki
                                ? "bg-indigo-100"
                                : "bg-gray-100",
                              "h-4 w-4 rounded-full flex items-center justify-center"
                            )}
                            aria-hidden="true"
                          >
                            <span
                              className={classNames(
                                project.has_wiki
                                  ? "bg-indigo-400"
                                  : "bg-gray-400",
                                "h-2 w-2 rounded-full"
                              )}
                            />
                          </span>

                          <h2 className="text-sm font-medium">
                            <a href={project.svn_url}>
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              {project.name}{" "}
                              <span className="sr-only">
                                {project.active ? "Running" : "Not running"}
                              </span>
                            </a>
                          </h2>
                        </div>
                        <a
                          href={project.svn_url}
                          className="group relative flex items-center space-x-2.5"
                        >
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-Sky-100"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
                              fill="currentcolor"
                            />
                          </svg>
                          <span className="truncate text-sm font-medium text-gray-500 group-hover:text-gray-900">
                            {project.description}
                          </span>
                        </a>
                      </div>
                      <div className="sm:hidden">
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      {/* Repo meta info */}
                      <div className="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex">
                        <p className="flex items-center space-x-4">
                          <a
                            href={project.svn_url}
                            className="relative text-sm font-medium text-gray-500 hover:text-gray-900"
                          >
                            Visit site
                          </a>
                          <button
                            type="button"
                            className="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="sr-only">
                              {project.starred
                                ? "Add to favorites"
                                : "Remove from favorites"}
                            </span>
                            <StarIcon
                              className={classNames(
                                project.stargazers_count > 0
                                  ? "text-sky-300 hover:text-sky-400"
                                  : "text-gray-300 hover:text-Sky-200",
                                "h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          </button>
                        </p>
                        <p className="flex space-x-2 text-sm text-gray-500">
                          <span>{project.language}</span>
                          <span aria-hidden="true">&middot;</span>
                          <span>
                            Last deploy{" "}
                            {new Date(project.created_at)
                              .toISOString()
                              .slice(0, 10)}
                          </span>
                          <span aria-hidden="true">&middot;</span>
                          <span>{project.visibility}</span>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              </div>
              )}
            </div>
          </div>
          <div className="animate__animated animate__rotateInDownLeft animate__slow animate__delay-3s absolute inset-x-10 -z-10 sm:top-[50rem]">
            <svg
              className="h-[0rem] left-[calc(90%-11rem)] max-w-none -translate-x-1/2 rotate-[180deg] sm:left-[calc(50%-0rem)] sm:h-[35.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".4"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#67e8f9" />
                  <stop offset={1} stopColor="#67e8f9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </main>
      </div>
      <br></br>
    </div>
  );
};

export default ProjectPage;
