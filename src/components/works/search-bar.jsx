// src/components/works/search-bar.js
import { BookMarked, ChevronDown } from "lucide-react";

const SearchBar = ({ searchProject, handleChange }) => {
  return (
    <div className="flex flex-column flex-col xl:flex-row justify-center gap-2 p-4">
      <div className="flex md:hidden rounded-md text-white border-[#3d9a4f] h-8 border-[0.2px] bg-[#29903b] hover:bg-[#31a945] font-semibold px-3 py-1 items-center gap-2 justify-center mb-4">
        <BookMarked size={17} />
        <p>New</p>
      </div>
      <input
        type="text"
        value={searchProject}
        onChange={handleChange}
        className="flex items-center p-2 h-8 md:w-96 bg-[#21262D] border-borderColor border-[0.2px] rounded-md text-gray-400 outline-none"
        placeholder="Find a repository..."
      />
      <div className="flex flex-row gap-2">
        <div className="rounded-md text-[#c9d1d9] border-borderColor h-8 border-[0.2px] bg-[#21262D] hover:bg-[#292e36] font-semibold px-3 py-1 flex items-center gap-2 justify-between">
          <p>Type</p>
          <ChevronDown size={17} />
        </div>
        <div className="rounded-md text-[#c9d1d9] border-borderColor h-8 border-[0.2px] bg-[#21262D] hover:bg-[#292e36] font-semibold px-3 py-1 flex items-center gap-2 justify-between">
          <p>Language</p>
          <ChevronDown size={17} />
        </div>
        <div className="rounded-md text-[#c9d1d9] border-borderColor h-8 border-[0.2px] bg-[#21262D] hover:bg-[#292e36] font-semibold px-3 py-1 flex items-center gap-2 justify-between">
          <p>Sort</p>
          <ChevronDown size={17} />
        </div>
        <div className="hidden lg:flex rounded-md text-white border-[#3d9a4f] h-8 border-[0.2px] bg-[#29903b] hover:bg-[#31a945] font-semibold px-3 py-1 items-center gap-2 justify-between">
          <BookMarked size={17} />
          <p>New</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
