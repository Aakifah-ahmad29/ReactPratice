import Product from "./components/Product";

const fruits = [
  { name: "Apple", price: 10, emoji: "🍎", soldout: false },
  { name: "Orange", price: 15, emoji: "🍊", soldout: false },
  { name: "Banana", price: 5, emoji: "🍌", soldout: true },
  { name: "Pineapple", price: 4, emoji: "🍍", soldout: false },
  { name: "Mango", price: 11, emoji: "🥭", soldout: false },
];
console.log(fruits);
const Fruits = () => {
  return (
    <div>
      {/* <h1>{fruits.map((fruit) => (Key = { fruit } > { fruit }))}</h1>{" "} */}

      {/* {fruits.map((fruit) => (
        <h2 key={fruit.name}>
          {fruit.emoji} Name: {fruit.name} Price:{fruit.price}
        </h2>
      ))} */}

      {fruits.map((fruit) => (
        <Product
          key={fruit.name}
          name={fruit.name}
          price={fruit.price}
          emoji={fruit.emoji}
          soldOut={fruit.soldout}
        />
      ))}
    </div>
  );
};
export default Fruits;
