import Item from "./Item";

export default function ItemList({food , isLoading})
{
   return (
    <div>
         {/* Check if food.extendedIngredients is defined before mapping
         {food.extendedIngredients ? (
            food.extendedIngredients.map((item) => (
              <div key={item.id}>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
                  alt=""
                />
                <h3>{item.name}</h3>
                <h3>
                  {item.amount} {item.unit}
                </h3>
              </div>
            ))
          ) : (
            <p>Loading ingredients...</p>
          )} */}

        {isLoading ? <p>Loading...</p>: 
        ( food.extendedIngredients.map((item) => (
            <Item item={item} />
            )))}
        {}

    </div>
   )
}