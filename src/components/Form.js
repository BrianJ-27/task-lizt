import AddTask from "./AddTask";
import FilterTask from './FilterTask';
import ClearTask from "./ClearTasks";

const Form = ({handleInputData, formInfo}) => {
  return (
    <form>
      <fieldset>
        <legend>Opening Tasks</legend>
        <AddTask handleInputData={handleInputData} formInfo={formInfo}
        />
      </fieldset>
      <fieldset>
        <legend>My Tasks</legend>
        <FilterTask handleInputData={handleInputData} formInfo={formInfo}/>
        <ClearTask/>
      </fieldset>
    </form>
  );
};

export default Form;
