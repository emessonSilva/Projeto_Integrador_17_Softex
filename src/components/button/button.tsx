import React from 'react';

interface propsButton {
  name?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  onSubmit?: () => void;
}

export function BTN({ name, width, height, backgroundColor, color, borderRadius, type, onClick, onSubmit }: propsButton) {
  return <button
    onSubmit={onSubmit}
    onClick={onClick}
    type={type}
    style={{ width, height, backgroundColor, color, borderRadius }}
  >
    {name}

  </button>;
}
