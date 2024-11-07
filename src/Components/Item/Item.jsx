import PropTypes from "prop-types";

const Item = ({ item, handlePreparingNow }) => {
    const { recipe_name, preparing_time, calories, recipe_id } = item;
    
    return (
        <div className="flex justify-between bg-slate-100 p-2 items-center text-sm">
            <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            {handlePreparingNow && (
                <p>
                    <button
                        onClick={() => handlePreparingNow(item, recipe_id)} // Pass item and recipe_id correctly
                        className="bg-[#7951ff] text-black btn hover:text-white"
                    >
                        Preparing Now
                    </button>
                </p>
            )}
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
        recipe_id: PropTypes.number.isRequired,
    }).isRequired,
    handlePreparingNow: PropTypes.func.isRequired,
};

export default Item;
