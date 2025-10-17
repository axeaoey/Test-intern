interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetail({ params }: ProductPageProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Detail: #{params.id}</h1>
      <p>This is the detail page for product {params.id}.</p>
    </div>
  );
}
