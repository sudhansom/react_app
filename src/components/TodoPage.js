import React from "react";

import HeaderContainer from "./HeaderContainer";

const TodoPage = ({ todoHandler }) => {
  return (
    <div>
      <HeaderContainer todoHandler={todoHandler} />
    </div>
  );
};

export default TodoPage;
