import {useEffect} from "react";

const useTitle = (setTitle: (title: string) => void) => {
    useEffect(() => {
        setTitle("Very interesting contact info");
    }, [setTitle]);
};

export default useTitle;