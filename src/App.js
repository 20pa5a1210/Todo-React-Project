import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { List } from "./List";
import { Alert } from "./Alert";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      showAlert(true, "Empty Text! Enter Something", "alert-red");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: value };
      setList([...list, newItem]);
      showAlert(true, "Item Added Successfully", "alert-green");
      setValue("");
    }
  };

  const showAlert = (show = false, message = "", type = "") => {
    setAlert({ show, message, type });
  };

  const clearItems = () => {
    setList([]);
    showAlert(true, "ALL Items Removed Succesfully", "alert-yellow");
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "Item Removed", "alert-red");
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className="mx-auto flex justify-center flex-col">
      <h1 className="text-4xl lg:text-6xl font-mono font-bold text-center text-white">
        Todo-List-App
      </h1>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center mt-5"
      >
        <input
          type="text"
          className="input-primary"
          placeholder="Enter a Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="bg-white text-black mx-2 text-xl px-4 py-1 font-mono">
          Submit
        </button>
      </form>
      <div>
        {list.length > 0 && (
          <List list={list} clearItems={clearItems} removeItem={removeItem} />
        )}
      </div>
    </div>
  );
}

export default App;
