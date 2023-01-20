import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import * as Separator from "@radix-ui/react-separator";
import ControlBadge from "./components/ControlBadge";
import Image from "next/image";
// import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aerolab Magic</title>
        <meta name="description" content="We're doing frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        className="
      mb-16 flex h-96
      items-end bg-header-img bg-cover
      text-5xl font-bold
      text-white
      "
      >
        <p className="mx-auto mb-12 md:ml-32">Electronics</p>
      </div>
      <main className="mx-auto max-w-7xl">
        <div className="catalog-controls text-xl">
          <div className="flex items-center">
            <p className="product-count">16 of 32 products</p>
            <Separator.Root
              className="SeparatorRoot h-8"
              decorative
              orientation="vertical"
              style={{ margin: "0 15px" }}
            />
            <p className="mr-6 text-gray-400">Sort by:</p>
            <div className="badges flex gap-6">
              <ControlBadge text="Most recent" enabled={true} />
              <ControlBadge text="Lowest price" />
              <ControlBadge text="Highest price"/>
            </div>
            <Image className="ml-auto" src="/icons/arrow-right.svg" height={48} width={48} alt="Arrow" />
          </div>
          <Separator.Root
            className="SeparatorRoot"
            style={{ margin: "24px 0" }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
