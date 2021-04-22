import React, { FunctionComponent, ReactNode } from "react";
import style from "./Box.module.scss";

const Box; FunctionComponent <{ children: ReactNode}> ({ children}) => {
    return <div className={style.Box}>{children}</div>; 
}

export default Box;