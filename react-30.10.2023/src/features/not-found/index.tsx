import React, {useEffect} from "react";

interface NotFoundProps {
    setTitle: (title: string) => void;
}

const NotFound = ({setTitle}: NotFoundProps) => {
    useEffect(() => {
        setTitle("404 Page not found");
    }, [setTitle]);

    return (<></>);
}
export default NotFound;