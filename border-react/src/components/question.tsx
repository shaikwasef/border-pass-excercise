import { IQuestion } from '../interfaces'
import Styles from '../styles/question.module.scss'

interface PropsInterface {
  questions: IQuestion[]
}

export default function Question(props: PropsInterface) {
  const { questions } = props

  console.log(questions)
  return <div className={Styles.app}></div>
}
