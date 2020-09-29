import React, { useState } from "react";

interface ITask {
  title: string;
  description: string;
  done: boolean;
}

function TaskInput(): JSX.Element {
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProject(newTitle, newDescription);
    setNewTitle("");
    setNewDescription("");
  };

  const toggleDoneProject = (i: number) => {
    const newProject: ITask[] = [...tasks];
    newProject[i].done = !newProject[i].done;
    setTasks(newProject);
  };

  const addProject = (titleP: string, descriptionP: string) => {
    const newProjects: ITask[] = [
      ...tasks,
      { title: titleP, description: descriptionP, done: false },
    ];
    setTasks(newProjects);
  };

  return (
    <div className="App-body">
      <h1>PROJECT MANAGER</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        />

        <input
          type="text"
          className="form-control"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
        />

        <button className="btn btn-success btn-block mt-2">SAVE</button>
      </form>
      <div className="task-columns">
        <h3 style={{ color: "white" }}> To add columns click here</h3>
        <button className="btn btn-primary btn-block mt-2">Add Column</button>
        {/* <TasksColumn /> */}
      </div>
      {tasks.map((p: ITask, i: number) => {
        return (
          <div className="card card-body mt-2" key={i}>
            <div className="toast-header">
              <h1
                style={{
                  color: "black",
                  textDecoration: p.done ? "line-through" : "",
                }}
              >
                {p.title}
              </h1>
            </div>
            <div className="toast-body">
              {" "}
              <p
                style={{
                  color: "black",
                  textDecoration: p.done ? "line-through" : "",
                }}
              >
                {p.description}
              </p>
              <div className="project-buttons">
                <button className={"btn btn-secondary"}>Edit</button>

                <button
                  className={p.done ? "btn btn-primary" : "btn btn-danger"}
                  onClick={(e) => toggleDoneProject(i)}
                >
                  {p.done ? "reactivate" : "remove"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskInput;
