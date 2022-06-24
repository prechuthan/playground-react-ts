import './App.css';
import { useState } from 'react';

const user = {
  name: "Hedy Lamarr",
  imageURL: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: "90"
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
]

function ShoppingList() {
  const listItems = products.map(product =>
      <li 
        key={product.id}
        style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
          {product.title}
      </li>
    );
  
    return <ul>{listItems}</ul>
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked on me {count} times
      </button>
  );
} 

export default function MyApp() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      
      {/* User with image */}
      <h1 className='blue-col'>{user.name}</h1>
      <img 
        className='avatar' 
        src={user.imageURL} 
        alt={'Photo of ' + user.name} 
        style={{
          width: user.imageSize, 
          height: user.imageSize}} />
      
      {/* Button */}
      <div>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>

      {/* Product list */}
      <div>
        <ShoppingList />
      </div>
      
    </div>
  );
}