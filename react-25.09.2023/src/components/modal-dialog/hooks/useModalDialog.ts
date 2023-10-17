import {useState} from "react";

const useModalDialog = () => {
    const [display, setDisplay] = useState(false);

    const show = () => setDisplay(true);
    const hide = () => setDisplay(false);

    return {display, show, hide};
};

export default useModalDialog;