import React from 'react';

interface propsButton {
  name?: string;
  width?: string;
  height?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  onSubmit?: () => void;
}

export function BTN({ name, width, height, type, onClick, onSubmit }: propsButton) {
  return <button
    onSubmit={onSubmit}
    onClick={onClick}
    type={type}
    style={{ width, height }}
  >
    {name}

  </button>;
}
