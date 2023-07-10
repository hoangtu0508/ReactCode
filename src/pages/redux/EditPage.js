import React, { useState } from 'react'
import './EditPage.css'

const EditPage = () => {
    const avaUrl = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU",
    ]
    const [name, setName] = useState('Truong Hoang Tu')
    const [age, setAge] = useState(22)
    const [about, setAbout] = useState("I'm a intern TMA Solutions Bình Định")
    const [theme, setTheme] = useState('#ff9051')
    const [url, setUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU")
    return (
        <div>
            <div className='edit-container'>
                <div className='edit-container-content'>
                    <form>
                        <div className='edit-container-info'>
                            <div className='edit-container-info-btn'><button>Save</button></div>
                            <h3>Edit Profile</h3>
                            <label>Full name :</label>
                            <input type='text' placeholder='Truong Hoang Tu' onChange={(e) => setName(e.target.value)}></input><br/>
                            <label>Age :</label>
                            <input type='text' placeholder='22' onChange={(e) => setAge(e.target.value)}></input><br/>
                            <label onChange={(e) => setAbout(e.target.value)}>about :</label>
                            <textarea></textarea>
                            <div className='edit-container-info-img'>
                                {avaUrl.map((ava) => {
                                    return (
                                        <>
                                            <img onClick={(e) => setUrl(e.target.src)} src={ava} className='edit-container-info-img-url'></img>
                                        </>
                                    )
                                })}
                            </div>
                            <div className='theme-container'>
                                <label>Theme</label>
                                <input type='color'></input>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPage