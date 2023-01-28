import { useState } from 'react'
import { IQuestion } from '../interfaces'
import { IAnswer } from '../interfaces/question.interface'
import Question from './question'

interface PropsInterface {
  questions: IQuestion[]
}

export default function Questions(props: PropsInterface) {
  const { questions } = props
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [savedAnswers, setSavedAnswers] = useState<IAnswer>({})
  return (
    <div>
      <Question
        question={{ ...questions[questionIndex], index: questionIndex }}
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
        savedAnswers={savedAnswers}
        setSavedAnswers={setSavedAnswers}
      />
    </div>
  )
}
