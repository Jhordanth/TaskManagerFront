import React from 'react';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return <button className="bg-purple-200">{text}</button>;
};

export default Button;
