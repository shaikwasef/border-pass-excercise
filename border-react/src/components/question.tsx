import { IQuestion } from '../interfaces'
import Styles from '../styles/question.module.scss'

interface IQuestionWithIndex extends IQuestion {
  index: number
}
interface PropsInterface {
  question: IQuestionWithIndex
}

export default function Question(props: PropsInterface) {
  const { question } = props

  return (
    <div className={Styles.app}>
      <h3>{`${question.index + 1}. ${question.question}`}</h3>
    </div>
  )
}
