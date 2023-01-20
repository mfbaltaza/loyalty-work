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
        <div className="catalog-controls text-xl px-8 md:px-0">
          <div className="flex flex-col md:flex-row items-center">
            <p className="product-count">16 of 32 products</p>
            <Separator.Root
              className="SeparatorRoot h-8"
              decorative
              orientation="vertical"
              style={{ margin: "0 15px" }}
            />
            <p className="mr-6 mb-6 md:mb-0 text-gray-400">Sort by:</p>
            <div className="badges flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
              <ControlBadge text="Most recent" enabled={true} />
              <ControlBadge text="Lowest price" />
              <ControlBadge text="Highest price" />
            </div>
            <Image
              className="mx-auto md:ml-auto"
              src="/icons/arrow-right.svg"
              height={48}
              width={48}
              alt="Arrow"
            />
          </div>
          <Separator.Root
            className="SeparatorRoot"
            style={{ margin: "24px 0" }}
          />
        </div>
        <div className="product-showcase flex flex-col items-center gap-8 pb-8 md:flex-row">
          <div className="product-card h-64 w-64 items-end bg-white shadow-md">
            <div className="product-details mx-6 my-4">
              <Image
                className="mx-auto"
                src="/images/product-pics/iPhone8-x1.png"
                width={175}
                height={175}
                alt="Product"
              />
              <Separator.Root
                className="SeparatorRoot"
                style={{ margin: "24px 0" }}
              />
              <p className="text-gray-400">Laptops</p>
              <p>Macbook Pro</p>
            </div>
          </div>
          <div className="product-card h-64 w-64 items-end bg-white shadow-md">
            <div className="product-details mx-6 my-4">
              <Image
                className="mx-auto"
                src="/images/product-pics/iPhone8-x1.png"
                width={175}
                height={175}
                alt="Product"
              />
              <Separator.Root
                className="SeparatorRoot"
                style={{ margin: "24px 0" }}
              />
              <p className="text-gray-400">Laptops</p>
              <p>Macbook Pro</p>
            </div>
          </div>
          <div className="product-card h-64 w-64 items-end bg-white shadow-md">
            <div className="product-details mx-6 my-4">
              <Image
                className="mx-auto"
                src="/images/product-pics/iPhone8-x1.png"
                width={175}
                height={175}
                alt="Product"
              />
              <Separator.Root
                className="SeparatorRoot"
                style={{ margin: "24px 0" }}
              />
              <p className="text-gray-400">Laptops</p>
              <p>Macbook Pro</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
