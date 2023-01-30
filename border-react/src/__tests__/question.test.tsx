import { render, screen } from '@testing-library/react'
import { Question } from '../components'
import { IQuestionWithIndex } from '../components/question'
import {
  mockAnswer,
  mockQuestionDropDown,
  mockQuestionTextBox,
  mockRadioButton,
  mockRating,
} from '../__mocks__/mockData'

function getComponent(mockQuestion: IQuestionWithIndex) {
  const indexFn = jest.fn()
  const setFn = jest.fn()
  return (
    <Question
      question={mockQuestion}
      setQuestionIndex={indexFn}
      savedAnswers={mockAnswer}
      setSavedAnswers={setFn}
    />
  )
}

describe('Rendering question box', () => {
  test('Texbox : Render question title and text input box (mandatory) ', () => {
    render(getComponent(mockQuestionTextBox))
    const title = screen.getByRole('heading', {
      name: /\* 1\. what is your name\?/i,
    })
    const inputBox = screen.getByRole('textbox')
    const mandatoryTag = screen.getByRole('heading', {
      name: /\*required : answer to move to the next question/i,
    })
    expect(mandatoryTag).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(inputBox).toBeInTheDocument()
  })
  test('DropDownbox : Render question title and drop down box (mandatory)', () => {
    render(getComponent(mockQuestionDropDown))

    const title = screen.getByRole('heading', { level: 3 })
    const dropDown = screen.getByRole('button', {
      name: /​/i,
    })
    const mandatoryTag = screen.getByRole('heading', { level: 5 })
    expect(title).toBeInTheDocument()
    expect(mandatoryTag).toBeInTheDocument()
    expect(dropDown).toBeInTheDocument()
  })

  test('Radiobox : Render question title and radio box ', () => {
    render(getComponent(mockRadioButton))
    const title = screen.getByRole('heading', { level: 3 })
    const radio = screen.getByRole('radio', {
      name: /yes/i,
    })
    const mandatoryTag = screen.getByRole('heading', { level: 5 })
    expect(title).toBeInTheDocument()
    expect(mandatoryTag).toBeInTheDocument()
    expect(radio).toBeInTheDocument()
  })

  test('Ratingbox : Render question title and rating box', () => {
    render(getComponent(mockRating))
    const title = screen.getByRole('heading', { level: 3 })
    expect(title).toBeInTheDocument()
  })
})
