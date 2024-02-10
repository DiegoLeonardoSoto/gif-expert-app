import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>>', () => {
  const category = 'One Punch'

  test('Debe de mostar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))
  })

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku7.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    })

    render(<GifGrid category={category} />)
    screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
