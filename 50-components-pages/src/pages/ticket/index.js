// Nested route from '/ticket'

import NavBar from '../../components/elements/NavBar/';
import TicketItem from '../../components/elements/TicketItem/';

const Ticket = () => {
    const navs = [
        {
            name: 'Home'
        },
        {
            name: 'Ticketing'
        },
    ];
    const tickets = [
        {
            id: 'ticket01',
            title: 'Final Piala Dunia Qatar 2022',
            descriptiom: 'Pertandingan final piala dunia sepak bola tahun 2022 di Qatar.',
            image: 'https://picsum.photos/id/1058/367/267'
        },
        {
            id: 'ticket02',
            title: 'Tiket Pesawat',
            descriptiom: 'Tiket pesawat Garuda Indonesia pulang pergi Jakarta - Jeddah.',
            image: 'https://picsum.photos/id/364/367/267'
        },
        {
            id: 'ticket03',
            title: 'Tiket Taman Safari Bogor',
            descriptiom: 'Tiket masuk taman safari all day.',
            image: 'https://picsum.photos/id/1003/367/267'
        },
    ];
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <NavBar navs={navs} />

            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Ticketing APP!</span>
            </h1>

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {tickets.map((ticket, index) => <TicketItem ticket={ticket} key={`ticket-${index}`} />)}
            </div>
            
        </div>
    )
}

export default Ticket;