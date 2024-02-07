import { getGifs } from '../helpers/getGifs'

// eslint-disable-next-line react/prop-types
const GifGrid = ({ category }) => {
  getGifs(category)
  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  )
}

export default GifGrid
