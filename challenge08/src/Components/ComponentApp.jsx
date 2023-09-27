import React, { useState } from 'react';

const ComponentApp = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const hadleInput = (event) => {
    setCategory(event.target.value);
  };

  const añadirCategoria = () => {
    if (category.length > 0) {
      const newCategories = [...categories];
      newCategories.push(category);
      setCategories(newCategories);
      setCategory('');
    }
  };
  

  return (
    <div>
      <h1 className="text-center">Añadir nueva categoría</h1>
      <input value={category} onChange={hadleInput}/>
      <button onClick={añadirCategoria}>Añadir categoría</button>
      <ol>
        {
            categories.map(
                (category, key) => 
                {
                    return <li key={key}>{category}</li>
                }
        )}
      </ol>
    </div>
  );
};

export default ComponentApp;


    