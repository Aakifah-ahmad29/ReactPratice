export default function Message() {
  function HandleClick() {
    console.log("Button clicked ");
  }
  return (
    <div>
      <button onClick={HandleClick}>Click Here To Get Message</button>
    </div>
  );
}
