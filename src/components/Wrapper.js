import React, { useState } from "react";
import Control from "./Control";
import Create from "./Create";
import List from "./List";
const Wrapper = () => {
  const [createStatus, setCreateStatus] = useState(false);
  return (
    <div>
      <Control sendStatus={setCreateStatus} />
      <div>{createStatus ? <Create /> : false}</div>
      <List />
    </div>
  );
};

export default Wrapper;
