import Background from "../components/background";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Background />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
