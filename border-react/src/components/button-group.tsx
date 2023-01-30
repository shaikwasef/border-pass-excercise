import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Styles from '../styles/button-group.module.scss'
import { checkDisableNextButton } from '../helpers'

interface PropsInterface {
  onNextClick: () => void
  onBackClick: () => void
  index: number
  mandatory: boolean
  answer?: string | string[]
}

export default function ButtonGroups(props: PropsInterface) {
  const { onNextClick, onBackClick, index, mandatory, answer } = props

  return (
    <div className={Styles.buttonGroup}>
      <Button
        className={Styles.button}
        startIcon={<ArrowBackIcon />}
        variant="contained"
        role="button"
        color="error"
        disabled={!index}
        onClick={onBackClick}
      >
        Back
      </Button>
      <Button
        className={Styles.button}
        endIcon={<ArrowForwardIcon />}
        variant="contained"
        role="button"
        color="success"
        onClick={onNextClick}
        disabled={checkDisableNextButton(mandatory, answer)}
      >
        Next
      </Button>
    </div>
  )
}
