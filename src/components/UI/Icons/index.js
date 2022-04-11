import React from "react";
import {IconArrow} from "./IconArrow";
import {IconSetting} from "./IconSetting";

const Icon = ({type}) => {
    switch (type) {
        case 'arrow': return <IconArrow/>;
        case 'setting': return <IconSetting/>;
        default: return;
    }
}

export default Icon;
