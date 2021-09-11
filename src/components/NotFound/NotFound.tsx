import React from 'react';

type NotFoundProps = {
    helloWorld: string;
};
const NotFound = ({ helloWorld }: NotFoundProps) => {
    console.log(`${helloWorld} ${NotFound.displayName}`);
    return <div className="App">404 page</div>;
};

NotFound.displayName = 'NotFound Component';
export { NotFound };
