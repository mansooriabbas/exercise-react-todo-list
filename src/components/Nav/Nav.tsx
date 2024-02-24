import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <label htmlFor="addTodo"></label>
      <input type="text" id="addTodo" />
      <button>Add Todo</button>
    </nav>
  );
};

export default Nav;
