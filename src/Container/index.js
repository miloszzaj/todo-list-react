import "./style.css";

const Container = props => {
  return <main className="todolist">{props.children}</main>;
};

export default Container;
