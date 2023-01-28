import './App.css'
import { Question, ErrorComponent } from './components'
import { apiEndPoints } from './constants'
import useApi from './hooks/use-api'
import { IQuestion } from './interfaces'
import CircularProgress from '@mui/material/CircularProgress'
import Questions from './components/questions'

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
    </div>
  )
}

export default App
