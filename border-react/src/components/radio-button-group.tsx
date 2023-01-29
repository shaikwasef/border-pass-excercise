import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { useEffect, useState } from 'react'

interface PropsInterface {
  selectedAnswer: string
  setAnswer: React.Dispatch<React.SetStateAction<string>>
  options?: string[] | number[]
}

export default function RadioButtonsGroup(props: PropsInterface) {
  const { selectedAnswer, setAnswer, options } = props
  const [value, setValue] = useState<string>('yes')

  useEffect(() => {
    setValue(selectedAnswer)
  }, [selectedAnswer])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
    setValue((event.target as HTMLInputElement).value)
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
