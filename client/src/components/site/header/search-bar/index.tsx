import { useState, useCallback, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
export default function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(searchValue);
    },
    [searchValue]
  );

  const clearValue = useCallback(() => {
    setSearchValue("");
    inputRef.current?.focus()
  }, []);
  return (
    <form className="h-9 relative" onSubmit={handleSubmit}>
      <button
        type="submit"
        className="absolute w-9 h-9 top-0 left-0 flex items-center justify-center text-gray-400"
      >
        <AiOutlineSearch size={22} />
      </button>
      <input
        ref={inputRef}
        value={searchValue}
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        className="h-full w-[240px] border bg-secondary outline-none px-10 placeholder:text-gray-400 text-black rounded"
        placeholder="Search..."
      />

      {searchValue && (
        <button
          type="button"
          onClick={clearValue}
          className="w-9 h-9 flex items-center justify-center right-0 top-0 text-gray-400 absolute"
        >
          <IoMdClose size={22} />
        </button>
      )}
    </form>
  );
}
