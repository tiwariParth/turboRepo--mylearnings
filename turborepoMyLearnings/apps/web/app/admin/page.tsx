import React from "react";
import Admin from "@repo/ui/admin";
import { InputBox } from "@repo/ui/input-box";
const page = () => {
  return (
    <div>
      <h1>
        <Admin />
        <InputBox />
      </h1>
    </div>
  );
};

export default page;
