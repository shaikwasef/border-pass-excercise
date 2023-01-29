import { TextField } from '@mui/material'
import { IQuestion } from '../interfaces'
import { ButtonGroups } from '../components'
import Styles from '../styles/question.module.scss'
import { useEffect, useState } from 'react'
import DropDown from './drop-down'
import { IAnswer, QuestionType } from '../interfaces/question.interface'
import RadioButtonsGroup from './radio-button-group'
import RatingComponent from './rating-component'
import clsx from 'clsx'

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
            required={question.mandatory}
            defaultValue={savedAnswers[question.index]}
          />
        )
      case QuestionType.MULTI_LINE_TEXT:
        return (
          <TextField
            multiline={true}
            fullWidth={true}
            className={Styles.multiLine}
            rows={5}
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
            questionIndex={question.index}
          />
        )
      case QuestionType.RADIO:
        return (
          <RadioButtonsGroup
            options={question.options}
            setAnswer={setAnswer}
            selectedAnswer={savedAnswers[question.index]}
            questionIndex={question.index}
          />
        )
      case QuestionType.RATING:
        return (
          <RatingComponent
            setAnswer={setAnswer}
            selectedAnswer={savedAnswers[question.index]}
            questionIndex={question.index}
          />
        )
    }
  }

  const setAnswersFunc = () => {
    const answers = { ...savedAnswers, [question.index]: answer }
    setSavedAnswers(answers)
  }

  const handleNextClick = () => {
    setAnswersFunc()
    setQuestionIndex(question.index + 1)
  }

  const handleBackClick = () => {
    setAnswersFunc()
    setQuestionIndex(question.index - 1)
  }

  return (
    <div>
      <div className={Styles.question}>
        <h5>
          {question.mandatory &&
            `*Required : Answer to move to the next question`}
        </h5>
        <h3>
          <span>{question.mandatory && `* `}</span>
          {`${question.index + 1}. ${question.question}`}
        </h3>

        <form
          className={clsx(
            question.type === QuestionType.MULTI_LINE_TEXT &&
              Styles.multiInputForm,
            Styles.form,
          )}
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
