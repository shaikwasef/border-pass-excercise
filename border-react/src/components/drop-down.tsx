import { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface PropsInterface {
  setAnswer: React.Dispatch<React.SetStateAction<string>>
  dropDownAnswer: string
  options?: string[] | number[]
}

export default function DropDown(props: PropsInterface) {
  const { options, setAnswer, dropDownAnswer } = props
  const [menuValue, setMenuValue] = useState('')

  useEffect(() => {
    if (dropDownAnswer) {
      setMenuValue(dropDownAnswer)
    }
  }, [dropDownAnswer])

  const handleChange = (event: SelectChangeEvent) => {
    setAnswer(event.target.value)
    setMenuValue(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        defaultValue={menuValue}
        value={menuValue}
        onChange={handleChange}
      >
        {options ? (
          options.map((option: number | string, index: number) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))
        ) : (
          <div />
        )}
      </Select>
    </FormControl>
  )
}
