const AddTask = ({handleInputData, formInfo}) => {
  return (
     <>
      <div>
        <label htmlFor="task"></label>
        <input
          id="task"
          type="text"
          name="task"
          placeholder="New Task"
          value={formInfo.newTask}
          onChange={(e) => handleInputData("newTask", e)}
          required
        />
      </div>
      <button type="submit" value="Add Task" className="add_tasks btn">
        Add Task
      </button>
    </>
  );
};

export default AddTask;
