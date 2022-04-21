import React from 'react';

const Interfaces = () => {

    interface Rect {
        readonly id: number
        color?: string
        size: {
            width: number
            height: number
        }
    }

    const rect1: Rect = {
        id: 5,
        color: 'red',
        size : {
            width: 35,
            height: 15
        }
    }
    console.log(rect1)


    const rect2: Rect = {
        id: 2,
        size: {
            width: 4,
            height: 5
        }
    }
    rect2.color = 'blue'
    rect2.color = 'green'
    console.log(rect2)

    const rect3 = {} as Rect

    return (
        <div>

        </div>
    );
};

export default Interfaces;