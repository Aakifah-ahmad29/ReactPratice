const PropsPract = (props) => {
  console.log(props);
  //   const { name, message, emoji } = props;
  return (
    <div>
      <h1>Hi from Props Components</h1>
      {/* <h2>Name : {props.name}</h2>
      <p> Reminder: {props.message}</p> */}

      {/* Other why to define props  */}
      {/* <p>
        {message} - {name} - {emoji}
      </p> */}

      <strong>
        {props.person.name} {props.person.message} - {props.person.emoji}{" "}
      </strong>
    </div>
  );
};
export default PropsPract;
