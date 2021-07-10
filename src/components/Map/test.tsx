import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any markert', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive map/i
      })
    ).toBeInTheDocument()
  })

  it('Should render with the marker in correct place', () => {
    const place = [
      {
        id: '1',
        name: 'Petropolis',
        slug: 'petropolis',
        location: {
          latitude: 0,
          longitude: 0
        }
      }
    ]

    render(<Map places={place} />)
    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument()
  })
})
