import { Outlet } from "react-router-dom";

export default function PageTemplate() {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
