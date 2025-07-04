import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav>
          <Link to={"/tasks"}>Tasks</Link>
          <Link to={"/user"}>Users</Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default App;
