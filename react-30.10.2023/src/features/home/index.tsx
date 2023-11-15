import React, {useEffect} from "react";

interface MainPageProps {
    setTitle: (title: string) => void;
}

const MainPage = ({setTitle}: MainPageProps) => {
    useEffect(() => {
        setTitle("Your advertisement could be here");
    }, [setTitle]);
    return (<></>);
}
export default MainPage;