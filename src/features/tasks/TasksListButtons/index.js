import { Wrapper, Button } from '../TasksPage/StyledButtons/styledButtons';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
} from '../../tasks/tasksSlice';

const TasksListButtons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? 'Pokaż ' : 'Ukryj '}
            ukończone
          </Button>
          <Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default TasksListButtons;
