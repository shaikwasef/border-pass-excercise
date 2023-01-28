import { TextField } from '@mui/material'
import { IQuestion } from '../interfaces'
import { ButtonGroups } from '../components'
import Styles from '../styles/question.module.scss'
import { FormEvent, useState } from 'react'

interface IQuestionWithIndex extends IQuestion {
  index: number
}
interface PropsInterface {
  question: IQuestionWithIndex
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function Question(props: PropsInterface) {
  const { question, setQuestionIndex } = props
  const [answer, setAnswer] = useState<string | string[]>()

  const getComponentForType = (question: IQuestion) => {
    switch (question.type) {
      case 'textInput':
        return (
          <TextField
            fullWidth
            className={Styles.textField}
            required={question.mandatory}
          />
        )
    }
  }

  const handleNextClick = () => {
    setQuestionIndex(question.index + 1)
  }

  const handleBackClick = () => {
    setQuestionIndex(question.index - 1)
  }

  return (
    <div>
      <div className={Styles.app}>
        <h5>{question.mandatory && `*Required`}</h5>
        <h3>{`${question.index + 1}. ${question.question}`}</h3>
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
