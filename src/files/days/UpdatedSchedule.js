export default function UpdatedSchedule(props) {
  const styles = {
    backgroundColor: props.on ? "#a626d3" : "transparent",
    color: props.on ? "#fff" : "initial",
  };
  return (
    <div className="tasks" style={styles} onClick={props.toggle}>
      <h3>{props.name && props.name}</h3>
      <p>{props.time && props.time}</p>
    </div>
  );
}
