import { Outlet } from "react-router-dom";
import Header from "src/components/site/header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="w-3/5 mx-auto container py-10">
        <Outlet />
      </main>
    </>
  );
}
