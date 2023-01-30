import { render, screen } from '@testing-library/react'
import { ErrorComponent } from '../components'

function getComponent() {
  const error = {
    status: 404,
    message: 'Page not found',
  }
  return <ErrorComponent error={error} />
}

describe('Render error component', () => {
  test('render test headings and message', () => {
    render(getComponent())
    const headings = screen.getAllByRole('heading', { level: 4 })
    const headingStatus = screen.getByRole('heading', {
      name: /Status/i,
    })
		const headingMessage = screen.getByRole('heading', {
      name: /Message/i,
    })
    expect(headings.length).toBe(2)
    expect(headingStatus).toBeInTheDocument()
		expect(headingMessage).toBeInTheDocument()
  })
})
