const name = "Aakifah Naz";
function displaymessage() {
  return "hello from function";
}
const Header = () => {
  return (
    <div>
      Header (HELLO WORLD)
      <h1 className="heading">HI FROM COMPONENT {name}</h1>
      <p>{displaymessage()}</p>
      <li>sum of 10 + 30 = {10 + 30}</li>
      <strong> {"sum is" + " " + (10 + 30)}</strong>
    </div>
  );
};
export default Header;
