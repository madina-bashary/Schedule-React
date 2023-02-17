export default function Schedule(props) {
  const styles = {
    backgroundColor: props.on ? "#a626d3" : "transparent",
    color: props.on ? "#fff" : "initial",
  };
  return (
    <div className="schedule--card" style={styles} onClick={props.toggle}>
      <div className="side">
        <h1>{props.day}</h1>
        <p>{props.tasks} Things to do!</p>
      </div>
      <div className="content">
        <div className="tasks">
          <h3>{props.t1 && props.t1.name}</h3>
          <p>{props.t1 && props.t1.time}</p>
        </div>
        <div className="tasks">
          <h3>{props.t2 && props.t2.name}</h3>
          <p>{props.t2 && props.t2.time}</p>
        </div>
        <div className="tasks">
          <h3>{props.t3 && props.t3.name}</h3>
          <p>{props.t3 && props.t3.time}</p>
        </div>
        <div className="tasks">
          <h3>{props.t4 && props.t4.name}</h3>
          <p>{props.t4 && props.t4.time}</p>
        </div>
      </div>
    </div>
  );
}
