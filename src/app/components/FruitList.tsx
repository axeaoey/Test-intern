export default function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];

  return (
    <ul className="list-disc ml-6">
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
