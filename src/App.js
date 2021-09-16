import "./App.css";
import React, { useState } from 'react';
import TitleHeader from "./components/Title";

const App = () => {

  const [formData, setFormData] = useState({
    newTask: '',
    filterTask: ''
  });

  const handleUpdate = (field, { target }) => {
      setFormData({
        ...formData,
        [field]: target.value,
      });
  };

  return (
    <main className="App">
      <TitleHeader/>
      <div>
        <form>
          <fieldset>
            <div>
            <legend>Opening Tasks</legend>
            <label htmlFor="task"></label>
            <input 
              id="task" 
              type="text" 
              name="task" 
              placeholder="New Task" 
              value={formData.newTask}
              onChange={e => handleUpdate('newTask', e)}
              required
              />
            </div>
            <button type="submit" value="Add Task" className="add_tasks btn">
              Add Task
            </button>
          </fieldset>
          <fieldset>
            <legend>My Tasks</legend>
            <div className="input-field col">
            <label htmlFor="filter"></label>
              <input
                id="filter"
                type="text"
                name="filter"
                placeholder="Filter Tasks"
                value={formData.filterTask}
                onChange={e => handleUpdate('filterTask', e)}
              />
            </div>
            <div className="col">
              <ul className="collection"></ul>
              <button type="submit" value="Clear Task" className="clear_tasks btn">
                Clear Tasks
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}

export default App;
