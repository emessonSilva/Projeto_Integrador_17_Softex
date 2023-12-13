import React from 'react';

interface propsButton {
  name?: string;
  width?: string;
  height?: string;
}

export function BTN({ name, width, height }: propsButton) {
  return <button style={{ width, height }}>{name}</button>;
}
