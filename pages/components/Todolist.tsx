import React from "react";
import Addtodo from "./Addtodo";

export default function Todolist({ items }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
      <Addtodo />
    </>
  );
}
