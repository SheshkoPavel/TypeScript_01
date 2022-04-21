import React from 'react';
import {Interface} from "readline";

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
    // rect1.id = 6 Error, because readonly property
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
//--------------------------------

    interface RectWithArea extends Rect {
        getArea: () => number
    }

    const rect4: RectWithArea = {
        id: 10,
        color: 'maroon',
        size: {
            width: 150,
            height: 50
        },
        getArea() {
            return this.size.width * this.size.height
        }
    }
    console.log(rect4.getArea())

//--------------------------------------
    interface Styles {
        [key: string]: string
    }

    const css: Styles = {
        border: '1px solid black',
        marginTop: '2px',
        borderRadius: '5px'
    }
    console.log(css)

    return (
        <div>

        </div>
    );
};

export default Interfaces;