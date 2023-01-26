import './App.css'
import { Questions, ButtonGroups, ErrorComponent } from './components'
import { apiEndPoints } from './constants'
import useApi from './hooks/use-api'
import { IQuestion } from './interfaces'
import CircularProgress from '@mui/material/CircularProgress'

function App() {
  const [apiData, error, loading] = useApi<IQuestion>(
    apiEndPoints.LOCAL_HOST_QUESTIONS_API,
  )

  if (loading) {
    return <CircularProgress className="loaderClass" />
  }

  if (error) {
    return <ErrorComponent error={{ status: 400, message: 'check' }} />
  }

  return (
    <div>
      <Questions questions={apiData} />
      <ButtonGroups />
    </div>
  )
}

export default App
