import React from 'react';

const Functions = () => {

    //Function typing
    const sayMyName = (name: string): void => {
        name = name + ' sel za stolik';
        console.log(name)
    }
    sayMyName('Tolik')

    const sum = (a: number = 3, b: number = 2): number => {
        return a + b
    }
    sum(5,6)
    console.log(sum(5,6))
    console.log('Default ' + sum())

    const toUpper = (s1: string): string => {
        return s1.toUpperCase()
    }
    console.log(toUpper('zlyden'))

    return (
        <div>

        </div>
    );
};

export default Functions;