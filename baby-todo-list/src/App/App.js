import './App.css';
import AddItem from '../Components/Input/Input';
import AddButton from '../Components/Button/AddButton';
import DeleteButton from '../Components/Button/DeleteButton';
import ToDoList from '../Components/ToDoList/ToDoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      Before Eli arrives...
      </header>
        <div>
        <AddItem></AddItem>
        <ToDoList></ToDoList>
        <AddButton></AddButton> <DeleteButton></DeleteButton>
        </div>
    </div>
  );
}

export default App;
