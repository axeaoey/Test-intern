import CounterButton from "./components/CounterButton";
import FruitList from "./components/FruitList";
import AlertButton from "./components/AlertButton";
import BlueBox from "./components/BlueBox";
import FetchPosts from "./components/FetchPosts";
import NameForm from "./components/NameForm";
import ProductCard from "./components/ProductCard";

export default function HomePage() {
  const products = [
    { id: 1, title: "Laptop", price: 1200, image: "/laptop.png" },
    { id: 2, title: "Phone", price: 800, image: "/smartphone.png" },
    { id: 3, title: "Headphones", price: 150, image: "/headphones.png" },
  ];

  return (
    <main className="p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Test</h1>

      <CounterButton />
      <FruitList />
      <AlertButton />
      <BlueBox />
      <FetchPosts />
      <NameForm />

      <section>
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}