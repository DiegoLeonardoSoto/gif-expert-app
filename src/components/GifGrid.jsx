import PropTypes from 'prop-types'
import GifItem from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  console.log(isLoading)
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />
        })}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string
}

export default GifGrid
