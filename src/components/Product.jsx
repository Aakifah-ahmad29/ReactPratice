export default function Product({ name, price, emoji, soldOut }) {
  return (
    <div>
      {/*
      {price > 5 ? (
        <h4>
          {emoji}
          {name}
          {price}
        </h4>
      ) : (
        ""
      )}*/}
      {emoji} {name} {price} {soldOut ? "soldout" : ""}
    </div>
  );
}
