import PropTypes from 'prop-types';
import { MdOutlineAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, handleAddItem, isSelected }) => {
    const { recipe_name, short_description, recipe_image, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='space-y-3 border p-5 rounded-2xl'>
            <img className='w-full h-48 object-cover rounded-2xl' src={recipe_image} alt={`cover picture of the title of ${recipe_name}`} />
            <h1 className='font-extrabold'>{recipe_name}</h1>
            <p className='text-sm'>{short_description}</p>
            <hr />
            <p className='font-bold'>Ingredients: {ingredients.length}</p>
            <ul className='list-disc ml-5'>
                {ingredients.slice(0, 3).map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <div className='flex gap-3'>
                <p className='flex items-center'><MdOutlineAccessTime /> {preparing_time}</p>
                <p className='flex items-center'><FaFire /> {calories}</p>
            </div>
            <button 
                onClick={() => handleAddItem(recipe)} 
                className={`bg-[#7951ff] text-black b hover:text-white ${isSelected ? 'bg-gray-400 cursor-not-allowed' : ''}`} 
                disabled={isSelected} // Disable button if selected
            >
                {isSelected ? 'Added' : 'Want to Cook'}
            </button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddItem: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired // Track if the recipe is already selected
};

export default Recipe;
