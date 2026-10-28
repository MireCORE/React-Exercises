import { useState } from "react";

function RecipeCollection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "breakfast", "lunch", "dinner", "dessert"];

  const recipes = [
    {
      id: 1,
      title: "Pancakes",
      category: "breakfast",
      time: "20 min",
      difficulty: "easy",
      image: "🥞",
      ingredients: ["flour", "eggs", "milk", "butter"],
    },
    {
      id: 2,
      title: "Pasta Carbonara",
      category: "dinner",
      time: "30 min",
      difficulty: "medium",
      image: "🍝",
      ingredients: ["pasta", "eggs", "cheese", "bacon"],
    },
    {
      id: 3,
      title: "Caesar Salad",
      category: "lunch",
      time: "15 min",
      difficulty: "easy",
      image: "🥗",
      ingredients: ["lettuce", "croutons", "parmesan", "chicken"],
    },
    {
      id: 4,
      title: "Chocolate Cake",
      category: "dessert",
      time: "45 min",
      difficulty: "medium",
      image: "🍰",
      ingredients: ["flour", "cocoa", "sugar", "eggs"],
    },
  ];

  const FilteredRecipes =
    selectedCategory === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  const defficultyState = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100  py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-bold mb-4 text-3xl text-grey-800">
            My Recipe Collectio
          </h1>
          <p className="text-grey-600">
            Find your favorite recipes and start cooking!{" "}
          </p>
        </div>
        {/* Catogary filters */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-full capitalize transitio-color cursor-pointer 
                ${selectedCategory === category ? "text-white bg-orange-500" : "text-grey-600 bg-white hover:bg-orange-100"}`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
          {FilteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover: shadow-md transition"
            >
              <div className="p-6">
                {/* Header recipe */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {recipe.title}
                  </h2>
                  <span className="text-4xl ">{recipe.image}</span>
                </div>
                {/* Recipe Details */}
                <div className="flex gap-4 mb-4">
                  <span className="text-gray-500 text-sm flex items-center">
                    ⏰ {recipe.time}
                  </span>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${defficultyState(recipe.difficulty)}`}
                  >
                    {recipe.difficulty}
                  </span>
                </div>
                {/* Ingredients */}
                <div>
                  <h3 className="text-gray-700 mb-2 font-medium text-sm ">
                    Ingredients:
                  </h3>
                  <div className="flex gap-2 flex-wrap ">
                    {recipe.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-gray-600 bg-gray-100 rounded-xl"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {FilteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-gray-500">
              {" "}
              No recipes found in this category.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCollection;
