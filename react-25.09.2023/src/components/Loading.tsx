import React from "react";


export enum LoadingSize {
    LARGE = "spinner-border", SMALL = "spinner-border spinner-border-sm"
}

interface LoadingProps {
    size?: LoadingSize
}

const Loading = ({size = LoadingSize.LARGE}: LoadingProps) => (
    <div className="d-flex justify-content-center">
        <div className={size} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

export default Loading;