import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
// import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aerolab Magic</title>
        <meta name="description" content="We're doing frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex px-12 py-6 justify-between">
          <Image src="/aerolab-logo.svg" width={39} height={36} alt="Aerolab Logo" />
          <div className="user-info text-gray-500 text-xl flex items-center">
            <p className="mr-4">John Kite</p>
            <div className="loyalty-points-badge flex px-3 py-2 rounded-full bg-gray-200">
              <p>6000</p>
              <Image className="ml-2 mt-1" src="/icons/coin.svg" width={24} height={24} alt="Coin" />
            </div>
          </div>
        </header>
        <Image className="mx-auto" src="/images/header-x1.png" width={1440} height={412} alt="Background with headphones"/>
      <main>
      </main>
    </>
  );
};

export default Home;
