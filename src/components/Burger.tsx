import * as React from 'react';

interface Classes {
    name: string;
}

const Burger: React.FC<Classes> = ({name}) => {
    return (
        <div className={name}></div>
    );
};

export default Burger;