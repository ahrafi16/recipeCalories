const Banner = () => {
    return (
        <div className="relative">
            <div className="relative w-full items-center">
                <img className="rounded-3xl h-[500px] w-full object-cover brightness-50" src="https://www.capecrystalbrands.com/cdn/shop/articles/the-latest-modernist-cooking-techniques-496899.jpg?v=1699238453" alt="" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 text-center">
                <h2 className="text-4xl font-bold text-white">Experience a personalized cooking class designed just for you!</h2>
                <p className="text-white">
                    Join our tailored cooking classes to enhance your skills, discover new recipes, and enjoy a fun culinary experience with expert chefs!
                </p>
                <div className="flex gap-5 justify-center">
                    <button className="bg-[#7951ff] text-black b hover:text-white">Explore Now</button>
                    <button className="border-2 border-white text-white b">Our Feedback</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;