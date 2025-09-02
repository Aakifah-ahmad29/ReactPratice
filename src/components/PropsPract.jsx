const PropsPract = (props) => {
  return (
    <div>
      <h1>Hi from Props Components</h1>
      <h2>Name : {props.name}</h2>
      <p> Reminder: {props.message}</p>
    </div>
  );
};
export default PropsPract;
