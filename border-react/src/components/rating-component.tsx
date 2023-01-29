import { Rating } from '@mui/material'
import { useEffect, useState } from 'react'

interface PropsInterface {
  setAnswer: React.Dispatch<React.SetStateAction<string>>
  selectedAnswer: string
  questionIndex: number
}

export default function RatingComponent(props: PropsInterface) {
  const { setAnswer, selectedAnswer, questionIndex } = props
  const [value, setValue] = useState<string>('0')

  useEffect(() => {
    setValue(selectedAnswer ? selectedAnswer : '0')
  }, [selectedAnswer, questionIndex])

  return (
    <Rating
      name="simple-controlled"
      value={parseInt(value)}
      defaultValue={parseInt(value)}
      onChange={(_event, newValue) => {
        setValue(newValue ? newValue.toString() : '0')
        setAnswer(newValue ? newValue.toString() : '0')
      }}
      size="large"
      max={10}
    />
  )
}
