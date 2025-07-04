import {
  deleteTask,
  toggleCompleteState,
} from "../../../redux/features/task/taskSlice";
import { selectUsers } from "../../../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import type { ITask } from "../../../types";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const assignedUser = users.find((user) => user.id === task.assignedTo);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className={`${task.isCompleted ? "line-through" : ""}`}>
          {task.title}
        </h1>

        <div>
          <button onClick={() => dispatch(deleteTask(task.id))}>Trash</button>
          <input
            type="checkbox"
            name=""
            id=""
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p>Assigned To - {assignedUser ? assignedUser.name : "No one"}</p>
      <p>{task.description}</p>
    </div>
  );
}
