import React from 'react'
import Person from './Person'

function NameList() {
    const persons =[
        {
            id:1,
            name:'Saleh',
            age:22,
            skill:'react'
        },
        {
            id:2,
            name:'Abdullahi',
            age:42,
            skill:'Vue'
        },
        {
            id:3,
            name:'Aliyu',
            age:64,
            skill:'TypeScript'
        },
        {
            id:4,
            name:'Muhammad',
            age:86,
            skill:'Java'
        },
        {
            id:5,
            name:'Abubakar',
            age:108,
            skill:'C#'
        }
    ]
    const personList = persons.map(person =>(<Person key={person.id} person={person} />))
  return (
    <div>
      { personList}
    </div>
  )
}

export default NameList