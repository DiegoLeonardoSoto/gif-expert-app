import { useState } from 'react'

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default AddCategory
