import {useState} from "react";

const useNotification = () => {
    const [display, setDisplay] = useState(false);

    const show = () => setDisplay(true);
    const hide = () => setDisplay(false);

    return {display, show, hide};
};

export default useNotification;