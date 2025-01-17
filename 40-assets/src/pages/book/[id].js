// Dynamic route from '/book/:id'

import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';

const BookDetail = () => {
    const router = useRouter();
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link href="/">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <Link href="/book">
                                <a><span className="ml-1 text-sm font-medium md:ml-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Tikceting</span></a>
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <a><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Detil</span></a>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="flex flex-col items-center justify-center">
                <div className="max-w-md w-full h-full mx-auto z-10 bg-blue-900 rounded-3xl">
                    <div className="flex flex-col">
                        <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                            <div className="flex-none sm:flex">
                                <div className="flex-auto justify-evenly">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center  my-1">
                                            <h2 className="font-medium">{router.query.name}</h2>
                                        </div>
                                        <div className="ml-auto text-blue-800">{router.query.id.toUpperCase()}</div>
                                    </div>
                                    <div className="border-b border-dashed border-b-2 my-5"></div>
                                    <div className="flex items-center">
                                        <div className="flex flex-col">
                                            <div className="flex-auto text-xs text-gray-400 my-1">
                                                <span className="mr-1 ">Indonesia</span>
                                            </div>
                                            <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">CGK</div>
                                            <div className="text-xs">Jakarta</div>

                                        </div>
                                        <div className="flex flex-col mx-auto">

                                            </div>
                                            <div className="flex flex-col ">
                                                <div className="flex-auto text-xs text-gray-400 my-1">
                                                    <span className="mr-1">Qatar</span>
                                                </div>
                                                <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">DOH</div>
                                                <div className="text-xs">Doha</div>

                                            </div>
                                        </div>
                                        <div className="border-b border-dashed border-b-2 my-5 pt-5">
                                            <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                            <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                        </div>
                                        <div className="flex items-center mb-5 p-5 text-sm">
                                            <div className="flex flex-col">
                                                <span className="text-sm">Flight</span>
                                                <div className="font-semibold">Airbus 9999</div>

                                            </div>
                                            <div className="flex flex-col ml-auto">
                                                <span className="text-sm">Gate</span>
                                                <div className="font-semibold">X3</div>

                                            </div>
                                        </div>
                                        <div className="flex items-center mb-4 px-5">
                                            <div className="flex flex-col text-sm">
                                                <span className="">Board</span>
                                                <div className="font-semibold">11:50AM</div>

                                            </div>
                                            <div className="flex flex-col mx-auto text-sm">
                                                <span className="">Departs</span>
                                                <div className="font-semibold">11:30Am</div>

                                            </div>
                                            <div className="flex flex-col text-sm">
                                                <span className="">Arrived</span>
                                                <div className="font-semibold">2:00PM</div>

                                            </div>
                                        </div>
                                        <div className="border-b border-dashed border-b-2 my-5 pt-5">
                                            <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                            <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                        </div>
                                        <div className="flex items-center px-5 pt-3 text-sm">
                                            <div className="flex flex-col">
                                                <span className="">Passanger</span>
                                                <div className="font-semibold">Tony Stark</div>

                                            </div>
                                            <div className="flex flex-col mx-auto">
                                                <span className="">Class</span>
                                                <div className="font-semibold">Executive</div>

                                            </div>
                                            <div className="flex flex-col">
                                                <span className="">Seat</span>
                                                <div className="font-semibold">7 E</div>

                                            </div>
                                        </div>
                                        <div className="flex flex-col py-5 justify-center text-sm mt-6">
                                            <h6 className="font-bold text-center">Boarding Pass</h6>
                                            <div className="h-24 mt-4 flex items-center justify-center relative">
                                                <Image src="/barcode.png" layout="fill" objectFit="contain" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default BookDetail;