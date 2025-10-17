import Link from "next/link";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: ProductProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className="border p-4 rounded shadow hover:shadow-lg transition">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
        <h3 className="font-semibold mt-2">{title}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
    </Link>
  );
}