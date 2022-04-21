import React from 'react';

const SimpleTypes = () => {

    //String
    let str: string = 'Hello. It\'s works'
    const strArray: Array<string> = ['one', 'two', 'three']

    //Number
    const numbers: number = 4.2
    const numberArray: Array<number> = [1, 2, 3, 4, 5]  //Generic type
    const numberArray2: number[] = [11, 22, 33, 44, 55]

    //Tuple. A tuple type variable can include multiple data types
    const user: [number, string, boolean, number, string] = [1, "Steve", true, 20, "Admin"]

    //Any
    let math: any = 'text'
    math = true
    math = 5

    const nA = numberArray.map((n, index) => <span key={index} style={{paddingLeft: 5}}>{n}</span> )

    return (
        <p>
            {str + ' '} <br/>
            {strArray + ' '} <br/>
            {numbers}<br/>
            {numberArray}<br/>
            {numberArray2}<br/>
            {nA}<br/>
            {user}<br/>{math} <br/>

        </p>
    );
};

export default SimpleTypes;