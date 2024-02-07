import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const handleAddCategory = (category) => {
    setCategories([...categories, category])
  }

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory />

      <button onClick={() => handleAddCategory('Superman')}>
        Add categorie
      </button>

      {/* Gif's list */}
      <ol>
        {categories.map((category, i) => {
          return <li key={i}>{category}</li>
        })}
      </ol>
      {/* Gif Item */}
    </>
  )
}

export default GifExpertApp
