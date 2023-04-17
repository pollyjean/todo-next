import React from "react";

export default function Addtodo() {
  return (
    <form>
      <input type="text" id="todo-add" placeholder="Add Todo" />
      <input type="submit" value="Add" />
    </form>
  );
}
