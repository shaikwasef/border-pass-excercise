import { useState } from 'react'
import { IQuestion } from '../interfaces'
import Question from './question'

interface PropsInterface {
  questions: IQuestion[]
}

export default function Questions(props: PropsInterface) {
  const { questions } = props
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  return (
    <div>
      <Question
        question={{ ...questions[questionIndex], index: questionIndex }}
      />
    </div>
  )
}
