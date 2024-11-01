import "@/styles/globals.css";
import Header from '../components/Header';
import Head from 'next/head';
import { CartContextProvider } from '../lib/CartContext';
import { Toaster } from 'react-hot-toast';

import { Poppins } from 'next/font/google';

import { SessionProvider } from "next-auth/react";

const inter = Poppins({
  subsets: ['latin'],
  weight: '500'
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Ecommerce</title> {/* Set the default title */}
        {/* <link rel="icon" href="/favicon.ico" /> Link to your favicon */}
        <meta name="description" content="Welcome to our Ecommerce site!" /> {/* Optional meta description */}
      </Head>
      <CartContextProvider>
        <main
        className={`${inter.className} min-h-screen max-w-screen-2xl mx-auto bg-background sm:px-6`}
        >
          <Header />
          <Component {...pageProps} />
          <Toaster position='top-center' reverseOrder={false} />
        </main>
      </CartContextProvider>
    </SessionProvider>
  );
}
