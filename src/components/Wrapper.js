import React, { useState } from "react";
import Control from "./Control";
import Create from "./Create";
import List from "./List";
import "../styles/style.css";
const Wrapper = () => {
  const [createStatus, setCreateStatus] = useState(false);
  return (
    <div>
      <Control sendStatus={setCreateStatus} />

      {createStatus ? <Create sendStatus={setCreateStatus} /> : false}

      <List />
    </div>
  );
};

export default Wrapper;
