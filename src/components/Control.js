import React, { useState } from "react";
import eventWatcher from "./tools/eventWatcher";
const Control = ({ sendStatus }) => {
  const [searchElement, setSearchElement] = useState(null);
  return (
    <div>
      <form>
        <input
          type="button"
          value="create"
          data-type="create-button"
          onClick={(e) => eventWatcher(e, sendStatus, null)}
        />
        <input
          type="text"
          data-type="search-input"
          onChange={(e) => eventWatcher(e, setSearchElement, null)}
        />
        <input
          type="button"
          data-type="search-submit"
          value="search"
          onClick={(e) => eventWatcher(e, null, searchElement)}
        />
      </form>
    </div>
  );
};

export default Control;
