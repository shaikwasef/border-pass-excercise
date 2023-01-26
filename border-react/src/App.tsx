import './App.css'
import { Question, ButtonGroups, ErrorComponent } from './components'

function App() {
  const error = true
  if (error) {
    return <ErrorComponent error={{ status: 400, message: 'check' }} />
  }
  return (
    <div>
      <Question />
      <ButtonGroups />
    </div>
  )
}

export default App
