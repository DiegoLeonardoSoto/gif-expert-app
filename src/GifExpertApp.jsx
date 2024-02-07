import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        /* setCategories={setCategories} */
        onNewCategory={(e) => handleAddCategory(e)}
      />

      {/* Gif's list */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>
        })}
      </ol>
      {/* Gif Item */}
    </>
  )
}

export default GifExpertApp
