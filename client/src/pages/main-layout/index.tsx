import { Outlet } from "react-router-dom";
import Header from "src/components/site/header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}
