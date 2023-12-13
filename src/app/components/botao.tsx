import React, { ReactNode } from 'react';

interface propsButton {
    // name?: string;
    width?: string;
    height?: string;
    children?: ReactNode
}

export function BTN({ children, width, height }: propsButton) {
    return <button style={{ width, height }}>{children}</button>;
}

