"use client";

import React from "react";
import ExampleServe from "./ExampleServe";

const ExamleClient = () => {
  console.log("I'm a Client Side Component");
  return (
    <>
      <div>
        <p> This is an Example of Client Side Component</p>
      </div>
      <ExampleServe />
    </>
  );
};

export default ExamleClient;
