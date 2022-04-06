import React from "react";
import Card from "../cards";
import "./body.css";
const index = ({
  notes,
  deleteCardHandler,
  openEditModalHandler,
  changeCompleted,
}) => {
  return (
    <div className="tasks-list-body">
      { notes.length !== 0 && notes.map(({ id, title, description, createdAt, done }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
            createdAt={createdAt}
            done={done}
            deleteCardHandler={deleteCardHandler}
            openEditModalHandler={openEditModalHandler}
            changeCompleted={changeCompleted}
          />
        );
      })}
      {notes.length === 0 && <p className="no-tasks">You haven't got any notes yet!</p>}

    </div>
  );
};

export default index;
