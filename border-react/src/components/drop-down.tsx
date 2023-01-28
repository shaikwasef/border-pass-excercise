import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface PropsInterface {
  options?: string[] | number[]
}

export default function DropDown(props: PropsInterface) {
  const { options } = props
  const [menuValue, setMenuValue] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setMenuValue(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select value={menuValue} onChange={handleChange}>
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
