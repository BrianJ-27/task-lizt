const FilterTask = ({handleInputData, formInfo})=> {
    return (
        <div className="input-field col">
        <label htmlFor="filter"></label>
        <input
          id="filter"
          type="text"
          name="filter"
          placeholder="Filter Tasks"
          value={formInfo.filterTask}
          onChange={(e) => handleInputData("filterTask", e)}
        />
      </div>    
    );
}

export default FilterTask;