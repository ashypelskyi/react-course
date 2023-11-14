import React, {useEffect} from "react";

interface AboutPageProps {
    setTitle: (title: string) => void;
}

const About = ({setTitle}: AboutPageProps) => {
    useEffect(() => {
        setTitle("Very interesting contact info");
    }, [setTitle]);
    return (<></>);
}

export default About;