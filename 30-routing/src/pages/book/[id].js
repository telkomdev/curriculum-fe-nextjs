// Dynamic route from '/book/:id'

import { useRouter } from "next/router";
import Link from 'next/link';

const BookDetail = () => {
    const router = useRouter();
    return (
        <div>
            <a href="/"><h2>back to home</h2></a>
            <Link href="/book">
                <a><h2>back to APP</h2></a>
            </Link>
            <h1>Detail Book :: {router.query.id}</h1>
        </div>
    )
}

export default BookDetail;