import React from "react";

interface ITask {
  title: string;
  description: string;
  done: boolean;
}

interface IColumn {
  tasks: ITask[] | [];
}

function TasksColumn() {
  return (
    <div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Título Columna</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default TasksColumn;
