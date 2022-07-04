import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "SHOW ADDTASK BAR",
    bgColor: "purple",
  });

  const handleShow = () => {
    //*State fonksiyon bitmeden guncellenmez
    //*React Stateleri async yontemi ile guncelliyor
    if (show) {
      setBtnStyle({ name: "SHOW ADDTASK BAR", bgColor: "purple" });
    } else {
      setBtnStyle({ name: "CLOSE ADDTASK BAR", bgColor: "red" });
    }

    setShow(!show);
  };
  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button className="btn" style={{backgroundColor:btnStyle.bgColor}} onClick={handleShow}>
        {btnStyle.name}
      </button>
      {show && <AddTaskForm />}
    </header>
  );
};

export default Header;
