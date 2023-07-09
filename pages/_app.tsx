import '../styles/global.css';
import { AppProps } from 'next';

export default function App({ Component, pageProps }: AppProps) {
    return <Component { ...pageProps } />
}