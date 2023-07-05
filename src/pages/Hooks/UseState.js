import React from 'react'
import { useState } from 'react'

//------Random Gift------------
const gifts = [
    'CPU I9',
    'LAPTOP GAMING',
    'RAM 32GB',
    'KEYBOARD'
]

//---------Radio-----------
const buttonRadio = [
    {id: 1, name: 'FrontEnd'},
    {id: 2, name: 'BackEnd'},
    {id: 3, name: 'FullStack'}
]
const UseState = () => {
    //--------Random Gift-------------
    const [gift, setGift] = useState()

    const handleRandomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }
    //-------------Register-----------
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [list, setList] = useState([])

    const handleRegister = () => {
        setList([{name: name, email: email}])
        console.log(list)
    }

    //--------------Radio---------------
    const [checked, setChecked] = useState()
    const [nameRadio, setNameRadio] = useState()

    const handleSubmit = () => {
        setNameRadio()
    }
    return (
        <div>
            <h1>UseState</h1>
            <div>
                <h3>Random Gift</h3>
                <h2>{gift || 'Bạn chưa có phần thưởng'}</h2>
                <button onClick={() => {handleRandomGift()}}>Nhận thưởng</button>
            </div>
            <div>
                <h3>Register</h3>
                <h5>Name: </h5>
                <input value={name} onChange={(e) => {setName(e.target.value)}}></input><br/>
                <h5>Email: </h5>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}}></input><br/>
                <button onClick={() => {handleRegister()}}>Register</button>
                <h2>List customer</h2>
                <ul>
                    {list.map(customer => {
                        return (
                            <li key={customer.index}>name: {customer.name}, email:{customer.email}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h3>Radio</h3>
                {buttonRadio.map(course => (
                    <div key={course.id}>
                        <input 
                            type='radio' 
                            checked={checked === course.id} 
                            onChange={() => setChecked(course.id)}
                        >
                        </input>{course.name}
                    </div>
                ))}
                <button onClick={() => {handleSubmit()}}>Submit</button>
                <h4>Kết quả chọn: {checked}</h4>
            </div>
        </div>
    )
}

export default UseState