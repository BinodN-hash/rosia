import React, {useState} from "react";
import axios from "axios";

function Login(){



    return(
        <>
            <div
                className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto"
                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                    </div>

                    <form>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <h2 className="mt-6 text-center uppercase tracking-wide text-2 font-bold text-slate-900">
                                Sign in to rosia account
                            </h2>
                            <div className="px-9 py-8 bg-white space-y-6">
                                <div className="col-span-6">
                                    <label htmlFor="email" className="block uppercase tracking-wider text-xs font-bold text-gray-700">Email
                                        address</label>
                                    <input type="text" name="username" id="email" autoComplete="email" className="mt-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="password" className="block uppercase tracking-wider text-xs font-bold text-gray-700">Password</label>
                                    <input type="password" name="password" id="password"
                                           className="mt-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <a href="#" className="font-bold uppercase tracking-wider text-xs  text-blue-700 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" id="loginBtn"
                                            className="group uppercase tracking-wider  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bolder rounded-md text-white bg-blue-700 focus:outline-none">
                                        Sign in
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )


};

export default Login;