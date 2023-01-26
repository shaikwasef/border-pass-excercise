import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Styles from '../styles/button-group.module.scss'

export default function ButtonGroups() {
  return (
    <div className={Styles.buttonGroup}>
      <Button
        className={Styles.button}
        startIcon={<ArrowBackIcon />}
        variant="contained"
        color="error"
        disabled={true}
      >
        Back
      </Button>
      <Button
        className={Styles.button}
        endIcon={<ArrowForwardIcon />}
        variant="contained"
        color="success"
      >
        Next
      </Button>
    </div>
  )
}
