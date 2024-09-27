import './App.css';
import './components/Ingredients.tsx';
import Ingredients from './components/Ingredients.tsx';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import {useState} from 'react';
import Burger from './components/Burger.tsx';

type Ingredient = {
    name: string;
    price: number;
    image: string;
}

type Ingred = {
    name: string;
    count: number;
}

type IClasses = {
    name: string;
}

const ingredients: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
];

const classes: IClasses [] = [
    {name: 'Meat'},
    {name: 'Cheese'},
    {name: 'Salad'},
    {name: 'Bacon'},
];

const App = () => {

    const [ingred, setIngred] = useState<Ingred[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const display = {
        display: 'block',
    };




    const [price, setPrice] = useState<number>(30);

    const addIngred = ((ingredientName: string) => {

        setIngred(state => state.map(item => {
            return item.name === ingredientName ? {
                ...item,
                count: (item.count) + 1,
            } : item;
        }));

        setPrice(ingredients.reduce((acc, item) => {
            acc += item.price;
            console.log(acc);
            return acc;
        }, 30));
    });

    const deleteIngred = ((ingredientName:string) => {
        console.log('btn delete clicked');
        setIngred(state => state.map(item => {
            return item.name === ingredientName ? {
                ...item,
                count: (item.count) - 1,
            } : item;
        }));

    });


    const showIngredients = ingredients.map((ingredient) => {
        ingred.forEach(i => {
            if (i.count === 0) {
                if (i.name === ingredient.name) {
                display.display = 'none';
                }
            } else {
                display.display = 'block';
            }
        });

        return (
            <Ingredients
                key={ingredient.name}
                title={ingredient.name}
                count={`x${ingred.find(i => i.name === ingredient.name)?.count}`}
                image={ingredient.image}
                addIngredBtn={() => addIngred(ingredient.name)}
                deleteIngredBtn={() => deleteIngred(ingredient.name)}
                display={display}
            />
        );
    });

    const showIngredientsDiv = classes.map(ingredient => {
        return (
            <Burger name={ingredient.name}/>
        );
    });

    return (
      <div className="container">
          <div className="card">
              <h2 className="cardTitle"><b>Ingredients</b></h2>
              {showIngredients}
          </div>
          <div className="card">
              <h2 className='cardTitle'><b>Burger</b></h2>
              <div className="Burger">
                  <div className="BreadTop">
                      <div className="Seeds1"></div>
                      <div className="Seeds2"></div>
                  </div>
                  {showIngredientsDiv}
                  <div className="BreadBottom"></div>
              </div>
              <p className='price'><b>Price: {price}</b></p>
          </div>
      </div>
    );
};


export default App;



