import { useState } from 'react'
import { IQuestion } from '../interfaces'
import { IAnswer } from '../interfaces/question.interface'
import Question from './question'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Styles from '../styles/questions.module.scss'

interface PropsInterface {
  questions: IQuestion[]
}

export default function Questions(props: PropsInterface) {
  const { questions } = props
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [savedAnswers, setSavedAnswers] = useState<IAnswer>({})

  const progress = Math.floor((questionIndex / questions.length) * 100)

  return (
    <div className={Styles.questionContainer}>
      {questionIndex < questions.length ? (
        <>
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              color="success"
              value={progress}
            />
          </Box>
          <Question
            question={{ ...questions[questionIndex], index: questionIndex }}
            setQuestionIndex={setQuestionIndex}
            savedAnswers={savedAnswers}
            setSavedAnswers={setSavedAnswers}
          />
        </>
      ) : (
        <h2>BorderPass thanks you for your answers!!</h2>
      )}
    </div>
  )
}
