import Image from 'next/image';
import Link from 'next/link';

export default function Header(props){
    const {
        heading,
        paragraph,
        linkName,
        linkUrl = '/'
    } = props;
    return(
        <div>
            <div className="flex justify-center">
                <div className="h-40 w-full relative">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link href={linkUrl}>
                <a className="font-medium text-blue-600 hover:text-blue-500">{linkName}</a>
            </Link>
            </p>
        </div>
    )
}