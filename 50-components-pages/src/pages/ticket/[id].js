// Dynamic route from '/ticket/:id'

import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/elements/NavBar/';

const TicketDetail = () => {
    const router = useRouter();
    const navs = [
        {
            name: 'Home'
        },
        {
            name: 'Ticketing',
            link: '/ticket'
        },
        {
            name: 'Detail'
        }
    ];
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <NavBar navs={navs} />

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

export default TicketDetail;