import React from "react";

export type TaskProps = {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
};

const Task: React.FC<TaskProps> = ({task, onArchiveTask, onPinTask}) => {
  return (
    <div className={`list-item ${task.state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${task.id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${task.id}`}
          checked={task.state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask && onArchiveTask(task.id)}
        />
      </label>

      <label htmlFor="title" aria-label={task.title} className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {task.state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask && onPinTask(task.id)}
          id={`pinTask-${task.id}`}
          aria-label={`pinTask-${task.id}`}
          key={`pinTask-${task.id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
};

export default Task;
