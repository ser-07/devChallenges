import Button from "./Button";
import React from "react";

const ButtonsContent = () => {
  return (
    <div>
      <section>
        <h4>Colors</h4>
        <Button color={"default"} />
        <Button color={"primary"} />
        <Button color={"secondary"} />
        <Button color={"danger"} />
      </section>
      <h4>Varients</h4>
      <Button />
      <Button varient={"outline"} />
      <Button varient={"text"} />
    </div>
  );
};

export default ButtonsContent;
