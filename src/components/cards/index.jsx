import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./card.css";
const index = ({
  id,
  title,
  description,
  createdAt,
  done,
  deleteCardHnadler,
}) => {
  return (
    <div className="card-card">
      <div className="card-head">
        <h2>{title}</h2>
        <div className="card-edit-delete">
          <FontAwesomeIcon
            className="card-edit-btn"
            icon={faEdit}

            // onClick={closeModalHandler}
          />
          <FontAwesomeIcon
            className="card-delete-btn"
            icon={faTrash}
            onClick={() => deleteCardHnadler(id)}
          />
        </div>
      </div>
      <div className="card-body-description">
        <p>{description}</p>
      </div>
      <div className="card-footer">{createdAt}</div>
    </div>
  );
};

export default index;
