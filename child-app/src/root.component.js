import "./style.css";

export default function Root(props) {

  return (
    <div className="root-component">
      <h1>{props.name} is mounted!</h1>
    </div>
  )

}
