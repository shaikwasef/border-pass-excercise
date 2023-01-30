import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RadioButtonsGroup from '../components/radio-button-group'
import { mockRadioButton } from '../__mocks__/mockData'

function getComponent() {
  const setAnswer = jest.fn()
  return (
    <RadioButtonsGroup
      selectedAnswer={''}
      setAnswer={setAnswer}
      questionIndex={mockRadioButton.index}
      options={mockRadioButton.options}
    />
  )
}
describe(' Render radio button group tests', () => {
  test('Render radio button', () => {
    render(getComponent())
    const radioButtonGroup = screen.queryAllByRole('radio')
    expect(radioButtonGroup.length).toBe(mockRadioButton.options.length)
  })
})

describe(' Interaction radio button group tests', () => {
  test('interaction radio button', async () => {
    render(getComponent())
    const yesRadioButton = screen.getByRole('radio', {
      name: /yes/i,
    })
    const noRadioButton = screen.getByRole('radio', {
      name: /no/i,
    })
    await userEvent.click(yesRadioButton)
    expect(yesRadioButton.checked).toEqual(true)
    expect(noRadioButton.checked).toEqual(false)
  })
})
