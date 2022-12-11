import './App.css';
import AddItem from '../Components/Input/Input';
import AddButton from '../Components/Button/AddButton';
import DeleteButton from '../Components/Button/DeleteButton';
import ToDoList from '../Components/ToDoList/ToDoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddItem></AddItem>
        <ToDoList></ToDoList>
        <AddButton></AddButton> <DeleteButton></DeleteButton>
      </header>
    </div>
  );
}

export default App;
