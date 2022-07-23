import React from "react";

export const List = ({ list, clearItems, removeItem }) => {
  return (
    <div className="bg-white flex flex-col w-96  rounded-lg font-mono mx-auto mt-5   text-xl">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="flex justify-between p-5">
            <p>{title}</p>
            <button className="text-red-600" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <hr />
      <button className="p-2 text-red-600" onClick={clearItems}>
        Remove All
      </button>
    </div>
  );
};
