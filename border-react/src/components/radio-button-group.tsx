import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { useEffect, useState } from 'react'

interface PropsInterface {
  selectedAnswer: string
  setAnswer: React.Dispatch<React.SetStateAction<string>>
  questionIndex: number
  options?: string[] | number[]
}

export default function RadioButtonsGroup(props: PropsInterface) {
  const { selectedAnswer, setAnswer, options, questionIndex } = props
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setValue(selectedAnswer ? selectedAnswer : '')
  }, [selectedAnswer, questionIndex])

  const handleChange = (event: any) => {
    const currAnswer = isNaN(event.target.labels[0].textContent)
      ? event.target.labels[0].textContent
      : event.target.labels[0].textContent.toString()
    setAnswer(currAnswer)
    setValue(currAnswer)
  }

  return (
    <FormControl>
      <RadioGroup value={value} onChange={handleChange}>
        {options &&
          options.map((option: string | number, index: number) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
      </RadioGroup>
    </FormControl>
  )
}
