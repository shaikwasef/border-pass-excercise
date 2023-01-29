import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

interface PropsInterface {
  options?: string[] | number[]
}

export default function MultiSelectGroup(props: PropsInterface) {
  const { options } = props
  return (
    <FormGroup>
      {options &&
        options.map((option: number | string, index: number) => (
          <FormControlLabel
            value="end"
            key={index}
            control={<Checkbox />}
            label={option}
          />
        ))}
    </FormGroup>
  )
}
