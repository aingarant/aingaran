import React from "react";

type AboutProps = {
  name: string;
  age: number;
  location: string;
};

const About = (props: AboutProps) => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.location}</li>
      </ul>
    </div>
  );
};

export default About;
