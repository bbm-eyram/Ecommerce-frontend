import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Products from "../components/Products";
import Hero from "@/components/Hero";
import Collection from "../components/Collection";

export default function Home({ featuredProduct, newProducts, collectionProduct }) {
  return <>
  <Hero product={featuredProduct}/>

  <hr class="my-1 h-px border-0 bg-gray-300" />

  <Products products={newProducts} />

  <hr class="my-1 h-px border-0 bg-gray-300" />

  <Collection product={collectionProduct} />

  </>;
}

export async function getServerSideProps() {
  await mongooseConnect();

  const featuredId = '671b5ed9af1635f46fddd8bb'
  const collectionId = '671b615daf1635f46fddd8e6';

  const featuredProduct = await Product.findById(featuredId);
  const collectionProduct = await Product.findById(collectionId);
  const newProducts = await Product.find({}, null, {sort: {'_id': 1}, limit: 5})

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      collectionProduct: JSON.parse(JSON.stringify(collectionProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),

    }
  }
}
