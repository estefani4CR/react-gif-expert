import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    // Si la categoría que se desea agregar ya se encuentra en las categorías existentes entonces salir del método
    if (categories.includes(newCategory)) return;

    // newCategory = 'One Piece';
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}


      {/* Se usa el map para separar cada categoría */}
      {
        categories.map((category) =>
        (
          <GifGrid
            key={category}
            category={category}
          />
        ))

      }
    </>
  );
};
