import { FC, ReactNode } from "react";
declare const Scrollbar: FC<{
    height: number;
    childrenHeight: number;
    width?: number;
    focus?: boolean;
    children: ReactNode[];
    current: number;
    onChange: (current: number) => void;
}>;
export default Scrollbar;
