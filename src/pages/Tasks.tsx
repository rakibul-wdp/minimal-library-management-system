import { useState } from "react";
import AddTaskModal from "../components/module/tasks/AddTaskModal";
import TaskCard from "../components/module/tasks/TaskCard";
import {
  selectFilter,
  selectTasks,
  updateFilter,
} from "../redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const currentFilter = useAppSelector(selectFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateFilter(e.target.value as "All" | "High" | "Medium" | "Low"));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-48">
            <label
              htmlFor="filter"
              className="block text-sm font-medium text-white mb-1"
            >
              Filter by Priority
            </label>
            <select
              id="filter"
              value={currentFilter}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
            >
              <option value="All">All Tasks</option>
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 whitespace-nowrap h-[42px]"
          >
            Add Task
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <AddTaskModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
