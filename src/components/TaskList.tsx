import React from "react";
import Task, { TaskProps } from "./Task";

type TaskListProps = {
  loading: boolean;
  tasks: TaskProps["task"][];
  onPinTask: TaskProps["onPinTask"];
  onArchiveTask: TaskProps["onArchiveTask"];
};

const TaskList: React.FC<TaskListProps> = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default TaskList;
