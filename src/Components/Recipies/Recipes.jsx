import { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [sidebarItems, setSidebarItems] = useState([]); // State for sidebar items
    const [selectedItems, setSelectedItems] = useState([]); // Track selected recipes by ID

    const handleAddItem = (item) => {
        if (selectedItems.includes(item.recipe_id)) {
            // Optionally show an error toast if trying to add the same recipe twice
            toast.error('This recipe is already in your "Want to Cook" list.');
            return;
        }

        // Add item to the sidebar items state
        setSidebarItems((prevItems) => [...prevItems, item]);

        // Mark the recipe as selected by adding its ID to the selectedItems array
        setSelectedItems((prevSelected) => [...prevSelected, item.recipe_id]);

        // Show a success toast when a recipe is added
        toast.success(`${item.recipe_name} added successfully!`);
    };

    useEffect(() => {
        // Fetch the recipes
        fetch('recipes.json')
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, []);

    return (
        <div className="flex justify-center flex-col">
            <div className="text-center max-w-screen-lg space-y-8">
                <h2 className="text-3xl font-semibold">Our Recipes</h2>
                <p className="text-sm">
                    The section features a range of dishes across diverse cuisines, including vegetarian and gluten-free options, catering to all skill levels, with seasonal highlights and user ratings for guidance.
                </p>
            </div>
            <div className="flex flex-col md:flex-row my-8 gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3">
                    {recipes.map((recipe) => (
                        <Recipe 
                            key={recipe.recipe_id} 
                            recipe={recipe} 
                            handleAddItem={handleAddItem} 
                            isSelected={selectedItems.includes(recipe.recipe_id)} // Pass selected state to each recipe
                        />
                    ))}
                </div>
                <div className="border rounded-2xl py-5 md:w-1/3">
                    <Sidebar items={sidebarItems} /> {/* Pass the sidebar items */}
                </div>
            </div>

            {/* Toast container goes here */}
            <ToastContainer 
                position="top-right" // Position of the toast
                autoClose={3000} // Time the toast will stay visible
                hideProgressBar={false} // Show progress bar
                newestOnTop={false} // Toasts will stack normally
                closeOnClick={true} // Close toast on click
                rtl={false} // Whether to use RTL direction
                pauseOnFocusLoss={false} // Toast stays visible if focus is lost
                draggable={false} // Disables dragging the toast
                pauseOnHover={false} // Disables pausing the toast when hovered
            />
        </div>
    );
};

export default Recipes;
