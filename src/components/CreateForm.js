import React from "react";

const createForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          value={props.values.title}
          onChange={props.onChange}
          name="title"
          placeholder="title"
        ></input>
        <input
          type="text"
          value={props.values.url}
          onChange={props.onChange}
          name="url"
          placeholder="url"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default createForm;
