import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/add-svgrepo-com.svg";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  taskState,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("New task", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
      </div>
      <button onClick={addTask} className="btn">
        <img src={plusIcon} alt="plus" /> Adicionar Tarefa
      </button>
    </div>
  );
}

TaskList.prototype = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
