import { render, screen } from '@testing-library/react'
import { ButtonGroups } from '../components'
import userEvent from '@testing-library/user-event'

describe('Rendering Next and back buttons', () => {
  const nextFn = jest.fn()
  const backFn = jest.fn()
  test('Render next and previous button for non-zero index and mandatory false', () => {
    render(
      <ButtonGroups
        index={1}
        onNextClick={nextFn}
        onBackClick={backFn}
        mandatory={false}
      />,
    )
    const nextButtonElement = screen.getByRole('button', {
      name: /next/i,
    })
    const backButtonElement = screen.getByRole('button', {
      name: /back/i,
    })
    expect(nextButtonElement).toBeInTheDocument()
    expect(backButtonElement).toBeInTheDocument()
  })

  test('Render next and previous button for zero index and mandatory true', () => {
    render(
      <ButtonGroups
        index={0}
        onNextClick={nextFn}
        onBackClick={backFn}
        mandatory={true}
      />,
    )
    const nextButtonElement = screen.getByRole('button', {
      name: /next/i,
    })
    const backButtonElement = screen.getByRole('button', {
      name: /back/i,
    })
    expect(nextButtonElement).toHaveAttribute('disabled')
    expect(backButtonElement).toHaveAttribute('disabled')
  })

  test('Render next and previous button for non-zero index and mandatory true', () => {
    render(
      <ButtonGroups
        index={1}
        onNextClick={nextFn}
        onBackClick={backFn}
        mandatory={true}
      />,
    )
    const nextButtonElement = screen.getByRole('button', {
      name: /next/i,
    })
    const backButtonElement = screen.getByRole('button', {
      name: /back/i,
    })
    expect(nextButtonElement).toHaveAttribute('disabled')
    expect(backButtonElement).toBeInTheDocument()
  })
})

describe('Test interactions of next and back buttons', () => {
  const nextFn = jest.fn()
  const backFn = jest.fn()
  test('Test interactions - next and back button for non-zero index and mandatory false', async () => {
    render(
      <ButtonGroups
        index={1}
        onNextClick={nextFn}
        onBackClick={backFn}
        mandatory={false}
      />,
    )
    const nextButtonElement = screen.getByRole('button', {
      name: /next/i,
    })
    const backButtonElement = screen.getByRole('button', {
      name: /back/i,
    })
    await userEvent.click(nextButtonElement)
    await userEvent.click(backButtonElement)
    expect(nextFn).toHaveBeenCalledTimes(1)
    expect(backFn).toHaveBeenCalledTimes(1)
  })

  test('Test interactions - next button for zero index and mandatory false', async () => {
    render(
      <ButtonGroups
        index={0}
        onNextClick={nextFn}
        onBackClick={backFn}
        mandatory={false}
      />,
    )
    const nextButtonElement = screen.getByRole('button', {
      name: /next/i,
    })
    await userEvent.click(nextButtonElement)
    expect(nextFn).toHaveBeenCalledTimes(1)
  })

  test('Test interactions - next button for non-zero index and mandatory true', async () => {
    render(
      <ButtonGroups
        index={1}
        onNextClick={nextFn}
        onBackClick={backFn}
        mandatory={true}
      />,
    )
    const backButtonElement = screen.getByRole('button', {
      name: /back/i,
    })
    await userEvent.click(backButtonElement)
    expect(backFn).toHaveBeenCalledTimes(1)
  })
  test('Test interactions - back button for non-zero index and mandatory true', async () => {
    render(
      <ButtonGroups
        index={1}
        onNextClick={nextFn}
        onBackClick={backFn}
        mandatory={true}
      />,
    )
    const backButtonElement = screen.getByRole('button', {
      name: /back/i,
    })
    await userEvent.click(backButtonElement)
    expect(backFn).toHaveBeenCalledTimes(1)
  })
})