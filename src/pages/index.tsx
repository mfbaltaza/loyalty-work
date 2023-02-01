import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import * as Separator from "@radix-ui/react-separator";
import ControlBadge from "./components/ControlBadge";
import Image from "next/image";
import z from "zod";
import { atom, useAtom } from "jotai";

export const userAtom = atom<User | null>(null);
export const productsAtom = atom<Product[] | null>(null);

const Home: NextPage<{ user: User; products: Array<Product> }> = (props) => {
  console.log("PROPS", props);

  // We bring our state atom to the component's context
  const [, setStateAtom] = useAtom(userAtom);
  const [, setProductsAtom] = useAtom(productsAtom);
  // And we fill it with the current info, that we get from the server
  setStateAtom(props.user);
  setProductsAtom(props.products);

  const filteredArray = [...props.products].sort((a, b) => b.cost - a.cost)

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
      bg-header-img 
      mb-16 flex
      h-96 items-end bg-cover
      text-5xl font-bold
      text-white
      "
      >
        <p className="mx-auto mb-12 md:ml-32">Electronics</p>
      </div>
      <main className="mx-auto max-w-7xl">
        <div className="catalog-controls px-8 text-xl md:px-0">
          <div className="flex flex-col items-center md:flex-row">
            <p className="product-count">{`${props.products.length} of ${props.products.length}`} products</p>
            <Separator.Root
              className="SeparatorRoot h-8"
              decorative
              orientation="vertical"
              style={{ margin: "0 15px" }}
            />
            <p className="mr-6 mb-6 text-gray-400 md:mb-0">Sort by:</p>
            <div className="badges mb-6 flex flex-col gap-6 md:mb-0 md:flex-row">
              <ControlBadge text="Most recent" enabled={true} />
              <ControlBadge text="Lowest price" />
              <ControlBadge text="Highest price" />
            </div>
            <Image
              className="mx-auto md:mx-0 md:ml-auto"
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
        <div className="product-showcase grid grid-cols-1 place-items-center gap-8 pb-8 md:grid-cols-4 md:flex-row md:place-items-start">
          {filteredArray.map((product) => (
            <div
              key={product._id}
              className="product-card h-64 w-64 items-end bg-white shadow-md"
            >
              <div className="product-details mx-6 my-4">
                <Image
                  className="mx-auto"
                  src={product.img.url}
                  width={175}
                  height={175}
                  alt="Product"
                />
                <Separator.Root
                  className="SeparatorRoot"
                  style={{ margin: "24px 0" }}
                />
                <p className="text-gray-400">{product.category}</p>
                <p>{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

const userValidator = z.object({
  _id: z.string(),
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  points: z.number().finite(),
  createDate: z.string(),
  redeemHistory: z.array(z.string()),
  __v: z.number(),
});

const productValidator = z.object({
  img: z.object({
    url: z.string().url(),
    hdUrl: z.string().url(),
  }),
  _id: z.string(),
  name: z.string(),
  cost: z.number().finite(),
  category: z.string(),
});

type User = z.infer<typeof userValidator>;
type Product = z.infer<typeof productValidator>;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const apiKey = process.env.API_KEY;
  if (apiKey) {
    const userReq = await fetch(
      "https://coding-challenge-api.aerolab.co/user/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const productsReq = await fetch(
      "https://coding-challenge-api.aerolab.co/products",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const user = (await userReq.json()) as User;
    const products = (await productsReq.json()) as Product[];

    // By returning { props: user, products }, the Home component
    // will receive `{user, products}` as a prop at build time
    return {
      props: { user, products },
      revalidate: 10, // In seconds
    };
  }
}
