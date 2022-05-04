import Button from "./Button";
import React from "react";

const ButtonsContent = () => {
  return (
    <div className="container">
      <section>
        <h4>Colors</h4>
        <div className="btn-container">
          <Button color={"default"} />
          <Button color={"primary"} btnname="Primary" />
          <Button color={"secondary"} btnname="Secondary" />
          <Button color={"danger"} btnname="Danger" />
        </div>
      </section>
      <section>
        <h4>Varients</h4>
        <div className="btn-container">
          <Button varient={"outline"} btnname="Outline" />
          <Button varient={"text"} btnname="Text" />
        </div>
      </section>
      <section>
        <h4>Icons</h4>
        <div className="btn-container">
          <Button startIcon="cart" btnname="Buy Now" />
          <Button endIcon="start" btnname="Play" />
          <Button startIcon="attach" endIcon="start" btnname="Bookmark" />
        </div>
      </section>
      <section>
        <h4>Sizes</h4>
        <div className="btn-container">
          <Button size="sm" btnname="small" />
          <Button size="md" btnname={"Medium"} />
          <Button size="lg" btnname={"Large"} />
        </div>
      </section>
      <section>
        <h4>Disabled Varients</h4>
        <div className="btn-container">
          <Button disabled btnname="Disabled" />
          <Button varient="text" disabled btnname="Disabled" />
          <Button disableShadow btnname="Disable Shadow" />
        </div>
      </section>
    </div>
  );
};

export default ButtonsContent;
