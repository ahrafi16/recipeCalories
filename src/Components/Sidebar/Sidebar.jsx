import { useState } from "react";
import Item from "../Item/Item";
import PropTypes from "prop-types";

const Sidebar = ({ items,setSidebarItems }) => {
    const [preparingItems, setPreparingItems] = useState([]); // State for "Cooking Now" items
    const [preparingTime, setPreparingTime] = useState(0); // State for total preparing time
    const [calories, setCalories] = useState(0); // State for total calories

    // Move item from "Want to Cook" to "Cooking Now"
    const handlePreparingNow = (item, recipe_id) => {
        // Add item to the "Cooking Now" list
        setPreparingItems((prevItems) => [...prevItems, item]);

        // Update total time and calories
        setPreparingTime((prevTime) => prevTime + parseInt(item.preparing_time)); // Assuming time is a number
        setCalories((prevCalories) => prevCalories + parseInt(item.calories)); // Assuming calories is a number

        // Remove item from the "Want to Cook" list
        const remainingItems = items.filter((item) => item.recipe_id !== recipe_id);
        setSidebarItems(remainingItems);
    };

    return (
        <div className="text-center space-y-2">
            {/* Want to Cook Section */}
            <h1 className="text-2xl font-bold">Want to Cook: {items.length}</h1>
            <hr />
            <div className="flex justify-between px-5">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div className="space-y-2">
                {items.length === 0 ? (
                    <p>No items added yet.</p>
                ) : (
                    items.map((item, index) => (
                        <Item
                            key={index}
                            item={item}
                            handlePreparingNow={handlePreparingNow} // Pass the function to each item
                        />
                    ))
                )}
            </div>

            {/* Cooking Now Section */}
            <h1 className="text-2xl font-bold">Cooking Now: {preparingItems.length}</h1>
            <hr />
            <div className="flex justify-between px-5">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div className="space-y-2">
                {preparingItems.length === 0 ? (
                    <p>No items preparing.</p>
                ) : (
                    preparingItems.map((preparingItem, index) => (
                        <Item
                            key={index}
                            item={preparingItem}
                        />
                    ))
                )}
            </div>

            {/* Total Time and Calories */}
            <div className="flex justify-end gap-3 pr-2">
                <p>Total Time = {preparingTime} minutes</p>
                <p>Total Calories = {calories} kcal</p>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    items: PropTypes.array.isRequired,
    setSidebarItems :PropTypes.func // "Want to Cook" items
};

export default Sidebar;
