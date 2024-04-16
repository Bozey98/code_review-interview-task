import React from "react";

interface Props {
  name?: string;
  value: string;
  onChange: (e: any) => void;
}

const TextInput = (props: Props) => {
  console.count(`Render ${props.name}`);
  return <input type="text" {...props} />;
};

export default TextInput;
