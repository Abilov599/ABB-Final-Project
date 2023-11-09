import { Link } from "react-router-dom";
import SearchBar from "./search-bar";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="border-b py-2">
      <div className="mx-auto w-3/5 container flex items-center justify-between">
        {/* LOGO */}
        <Link to={'/'} className="h-12 w-auto block">
          <img
            src="/images/instagram-logo.png"
            alt="Instagram Logo"
            className="h-full w-auto"
          />
        </Link> 


        {/* SEARCH */}
        <SearchBar/>


        {/* NAVIGATION */}
        <Navbar/>
      </div>
    </header>
  );
}
