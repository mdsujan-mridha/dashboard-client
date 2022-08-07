import React from 'react';

const StudentsRow = ({ student }) => {
    const option = [
        <>
            <input type="radio" id="pre" name="present" value="present" />
            <label for="pre"> Present </label> 
            <input type="radio" id="abs" name="absent" value="absent" />
            <label for="abs"> absent </label> 
        </>
    ]
    const comment = [
        <input type="text" name="text" id="2" />
    ]
    const { email } = student;
    return (
        <tr>
            <td>{ }</td>
            <td> {email} </td>
            <td className='flex gap-3'> {option} </td>
            <td> {comment} </td>
        </tr>
    );
};

export default StudentsRow;