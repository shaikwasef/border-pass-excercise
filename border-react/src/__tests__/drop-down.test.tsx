import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DropDown from '../components/drop-down'
import { mockQuestionDropDown } from '../__mocks__/mockData'

function getComponent() {
  const setAnswer = jest.fn()
  return (
    <DropDown
      setAnswer={setAnswer}
      dropDownAnswer={''}
      questionIndex={mockQuestionDropDown.index}
      options={mockQuestionDropDown.options}
    />
  )
}
describe(' Render drop down menu tests', () => {
  test('Render drop down menu', () => {
    render(getComponent())
    const dropDownListButton = screen.getByRole('button', {
      name: /​/i,
    })
    expect(dropDownListButton).toBeInTheDocument()
  })
})

describe(' Interaction drop down menu tests', () => {
  test('Interaction drop down menu', async () => {
    render(getComponent())
    const dropDownListButton = screen.getByRole('button', {
      name: /​/i,
    })
    await userEvent.click(dropDownListButton)
    const dropDownList = screen.getByRole('listbox')
    const dropDownOption = screen.queryAllByRole('option')
    expect(dropDownList).toBeVisible()
    expect(dropDownOption.length).toBe(mockQuestionDropDown.options.length)
  })
})
