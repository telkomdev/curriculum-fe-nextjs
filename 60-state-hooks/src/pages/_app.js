import '../styles/globals.css';
import App from 'next/app';
import { AuthProvider, ProtectRoute } from '../context/auth';

function MyApp({ Component, pageProps, router }) {
    return (
        <AuthProvider router={router}>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp;
