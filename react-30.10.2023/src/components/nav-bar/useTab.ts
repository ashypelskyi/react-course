import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const useTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const {pathname} = useLocation();

    useEffect(() => {
        if (pathname.includes("waiters")) {
            setTabIndex(1);
        } else if (pathname.includes("about")) {
            setTabIndex(2);
        } else {
            setTabIndex(0);
        }
    }, [pathname]);

    return {tabIndex, setTabIndex};
}

export default useTab;