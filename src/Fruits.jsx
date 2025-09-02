const fruits = [
  { name: "Apple", price: 1.2, emoji: "🍎" },
  { name: "Orange", price: 1.0, emoji: "🍊" },
  { name: "Banana", price: 0.5, emoji: "🍌" },
  { name: "Pineapple", price: 2.0, emoji: "🍍" },
  { name: "Mango", price: 1.5, emoji: "🥭" },
];
console.log(fruits);
const Fruits = () => {
  return (
    <div>
      {/* <h1>{fruits.map((fruit) => (Key = { fruit } > { fruit }))}</h1>{" "} */}

      {fruits.map((fruit) => (
        <h2 key={fruit.name}>
          {fruit.emoji} Name:{fruit.name} Price:{fruit.price}
        </h2>
      ))}
    </div>
  );
};
export default Fruits;
