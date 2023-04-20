import './App.css'
import { useAppState } from './AppStateContext'
import AddNewItem from './components/AddNewItem'
import Column from './components/Column'
import { AppContainer } from './styles'



function App() {

  const { state } = useAppState()
  return (
    <div className={AppContainer}>
      {
        state.lists.map((list, i) => (

          <Column text={list.text} key={list.id} index={i} />

        ))
      }
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={console.log} />
    </div>
  )
}

export default App
