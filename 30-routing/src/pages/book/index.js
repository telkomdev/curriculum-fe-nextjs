// Nested route from '/book'

import Link from 'next/link';

const Book = () => {
    return (
        <div>
            <h1>Tikceting APP!</h1>
            <div>
                <h2>BOOK 1</h2>
                <Link href="/book/book-1">
                    <button>go to detail</button>
                </Link>
            </div>
            <div>
                <h2>BOOK 2</h2>
                <Link href="/book/book-2">
                    <button>go to detail</button>
                </Link>
            </div>
        </div>
    )
}

export default Book;