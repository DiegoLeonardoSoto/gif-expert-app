import { useState } from 'react'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* input */}

      {/* Gif's list */}
      <ol>
        {categories.map((categorie) => {
          return <li key={categorie}>{categorie}</li>
        })}
      </ol>
      {/* Gif Item */}
    </>
  )
}

export default GifExpertApp
