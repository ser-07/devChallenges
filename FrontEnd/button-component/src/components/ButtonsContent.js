import Button from "./Button";
import React from "react";

const ButtonsContent = () => {
  return (
    <div className="container">
      <section>
        <h4>Colors</h4>
        <div className="btn-container">
          <div className="single-btn">
            <p>{"<Button >"}</p>
            <Button color={"default"} />
          </div>
          <div className="single-btn">
            <p>{`<Button color='primary' />`}</p>
            <Button color={"primary"} btnname="Primary" />
          </div>
          <div className="single-btn">
            <p>{`<Button color="secondary" />`}</p>
            <Button color={"secondary"} btnname="Secondary" />
          </div>
          <div className="single-btn">
            <p>{`<Button color="danger" />`}</p>
            <Button color={"danger"} btnname="Danger" />
          </div>
        </div>
      </section>
      <section>
        <h4>Varients</h4>
        <div className="btn-container">
          <div className="single-btn">
            <p>{`<Button varient='outline' />`}</p>
            <Button varient={"outline"} btnname="Outline" />
          </div>
          <div className="single-btn">
            <p>{`<Button varient='text' />`}</p>
            <Button varient={"text"} btnname="Text" />
          </div>
        </div>
      </section>
      <section>
        <h4>Icons</h4>
        <div className="btn-container">
          <div className="single-btn">
            <p>{`<Button StartIcon='cart' />`}</p>
            <Button startIcon="cart" btnname="Buy Now" />
          </div>
          <div className="single-btn">
            <p>{`<Button endIcon='start' />`}</p>
            <Button endIcon="start" btnname="Play" />
          </div>
          <div className="single-btn">
            <p>{`<Button StartIcon='attach' />`}</p>
            <Button startIcon="attach" endIcon="start" btnname="Bookmark" />
          </div>
        </div>
      </section>
      <section>
        <h4>Sizes</h4>
        <div className="btn-container">
          <div className="single-btn">
            <p>{`<Button size='sm' />`}</p>
            <Button size="sm" btnname="small" />
          </div>
          <div className="single-btn">
            <p>{`<Button size='md' />`}</p>
            <Button size="md" btnname={"Medium"} />
          </div>
          <div className="single-btn">
            <p>{`<Button size='lg' />`}</p>
            <Button size="lg" btnname={"Large"} />
          </div>
        </div>
      </section>
      <section>
        <h4>Disabled Varients</h4>
        <div className="btn-container">
          <div className="single-btn">
            <p>{`<Button disabled />`}</p>
            <Button disabled btnname="Disabled" />
          </div>
          <div className="single-btn">
            <p>{`<Button varient='text' disabled />`}</p>
            <Button varient="text" disabled btnname="Disabled" />
          </div>
          <div className="single-btn">
            <p>{`<Button disableShadow />`}</p>
            <Button disableShadow btnname="Disable Shadow" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonsContent;
