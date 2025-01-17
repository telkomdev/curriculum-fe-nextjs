import Image from 'next/image';
import Link from 'next/link';

export default function TicketItem(props) {
    const { ticket } = props;
    const query = {
        name: ticket.title,
    };
    return (
        <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="relative h-60 w-full">
                    <Image
                        src={ticket.image}
                        alt="Beach"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{ticket.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">{ticket.descriptiom}</p>
                    <Link href={{pathname: `/ticket/${ticket.id}`, query}}>
                        <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Lihat detail
                            <span className="ml-2 -mr-1 w-4">&#10132;</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>    
    );
}