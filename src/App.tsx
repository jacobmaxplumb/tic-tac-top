import { useState } from 'react';
import './App.css';
import { ListForm } from './components/ListForm';
import { ListItems } from './components/ListItems';

function App() {
  const [listItems, setListItems] = useState<any[]>(['hello', 'goodbye']);

  const addListItem = (listItem: any) => {
    setListItems([...listItems, listItem]);
  }

  const deleteListItem = (listItem: any) => {
    const newListItems = [...listItems];
    const indexOfItemToDelete = newListItems.findIndex(item => item === listItem);
    newListItems.splice(indexOfItemToDelete, 1);
    setListItems(newListItems);
  }
  
  return (
    <div className="App">
      <ListForm addItem={addListItem}/>
      <ListItems listItems={listItems} deleteListItem={deleteListItem}/>
    </div>
  );
}

export default App;
