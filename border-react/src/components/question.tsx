import { TextField } from '@mui/material'
import { IQuestion } from '../interfaces'
import { ButtonGroups } from '../components'
import Styles from '../styles/question.module.scss'
import { useEffect, useState } from 'react'
import DropDown from './drop-down'
import { IAnswer, QuestionType } from '../interfaces/question.interface'
import RadioButtonsGroup from './radio-button-group'

interface IQuestionWithIndex extends IQuestion {
  index: number
}
interface PropsInterface {
  question: IQuestionWithIndex
  savedAnswers: IAnswer
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>
  setSavedAnswers: React.Dispatch<React.SetStateAction<IAnswer>>
}

export default function Question(props: PropsInterface) {
  const { question, setQuestionIndex, savedAnswers, setSavedAnswers } = props
  const [answer, setAnswer] = useState<string>('')

  useEffect(() => {
    setAnswer(savedAnswers[question.index])
  }, [question.index])

  const getComponentForType = (question: IQuestionWithIndex) => {
    switch (question.type) {
      case QuestionType.TEXT_INPUT:
        return (
          <TextField
            fullWidth
            className={Styles.textField}
            required={question.mandatory}
            defaultValue={savedAnswers[question.index]}
          />
        )
      case QuestionType.DROP_DOWN:
        return (
          <DropDown
            options={question.options}
            setAnswer={setAnswer}
            dropDownAnswer={savedAnswers[question.index]}
          />
        )
      case QuestionType.RADIO:
        return (
          <RadioButtonsGroup
            options={question.options}
            setAnswer={setAnswer}
            selectedAnswer={savedAnswers[question.index]}
          />
        )
    }
  }

  const handleNextClick = () => {
    const answers = { ...savedAnswers, [question.index]: answer }
    setQuestionIndex(question.index + 1)
    setSavedAnswers(answers)
  }

  const handleBackClick = () => {
    setQuestionIndex(question.index - 1)
  }

  return (
    <div>
      <div className={Styles.app}>
        <h5>
          {question.mandatory &&
            `*Required : Answer to move to the next question`}
        </h5>
        <h3>
          <span>{question.mandatory && `* `}</span>
          {`${question.index + 1}. ${question.question}`}
        </h3>

        <form
          className={Styles.form}
          onChange={(ev: any) => {
            setAnswer(ev.target.value)
          }}
        >
          {getComponentForType(question)}
        </form>
      </div>
      <ButtonGroups
        onNextClick={handleNextClick}
        onBackClick={handleBackClick}
        index={question.index}
        answer={answer}
        mandatory={question.mandatory}
      />
    </div>
  )
}
