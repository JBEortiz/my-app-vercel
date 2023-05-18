import React from "react";
import { NavLink } from "react-router-dom";

const NotFountPage = () => {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <div className="mx-auto max-w-xl py-16 sm:py-24">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <div className="mt-8">
              <NavLink
                to="/home"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Or go back home
                <span aria-hidden="true"> &rarr;</span>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFountPage;
