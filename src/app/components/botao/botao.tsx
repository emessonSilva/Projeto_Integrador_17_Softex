import React from 'react';

interface propsButton {
  name?: string;
  width?: string;
  height?: string;
  type?: "submit" | "reset" | "button" | undefined;

}

export function BTN({ name, width, height, type }: propsButton) {
  return <button
    type={type}
    style={{ width, height }}
  >
    {name}

  </button>;
}
