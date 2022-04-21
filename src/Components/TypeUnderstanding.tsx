import React from 'react';

const TypeUnderstanding = () => {

    //Function typing
    const sayMyName = (name: string): void => {
        name = name + ' Nasral na stolik';
        console.log(name)
    }
    sayMyName('Tolik')

    //Type
    type Login = string
    const login: Login = 'Some text'
    // const login2: Login = 5  Give us error

    type ID = string | number
    let id: ID = 8
    id = '8 string'

    type SomeType = string | null | undefined
    let ABC: SomeType = null
    ABC = 'TS study'

    return (
        <div>
            {id} <br/>
            {ABC} <br/>
        </div>
    );
};

export default TypeUnderstanding;