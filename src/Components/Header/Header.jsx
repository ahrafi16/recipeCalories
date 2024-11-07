import { FaRegUserCircle, FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
            <div>
                <h1 className="text-3xl font-bold">Recipe Calories</h1>
            </div>
            <div className="navbar">
                <ul className="flex justify-between text-sm gap-5 cursor-pointer">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex items-center gap-2 relative invisible md:visible">
                {/* Search input field with padding to make space for the icon */}
                <input
                    className="bg-slate-200 p-2 pl-10 pr-4 rounded-full w-72"
                    type="text"
                    placeholder="Search"
                />
                {/* Search icon inside the input field */}
                <FaSearch
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                />
                {/* User profile icon */}
                <FaRegUserCircle size={40} className="bg-[#7951ff] rounded-full p-2" />
            </div>
        </div>
    );
};

export default Header;
