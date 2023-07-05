import React, { useState } from 'react'
import { useEffect } from 'react'

const tabs = ['posts', 'comments', 'albums']

const UseEffect = () => {
    
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts');

    const [showbutton, setShowbutton] = useState(false)

    const [countdown, setCountdown] = useState(0)
    const [inputCount, setInputCount] = useState(0)
    const [showtime, setShowtime] = useState(false)
//------call Api
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])
//-------hiện thị nút Go to Top
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowbutton(true)
            } else {
                setShowbutton(false)
            }
            console.log(window.scrollY)
        }
// Lắng nghe sự kiện lăn chuột từ window
        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleGotoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    //------đồng hồ điếm ngược-----
    const handleButtonStart = () => {
        setCountdown(inputCount);
        setShowtime(true);
    }
    useEffect(() => {
        let interval = null
        if (showtime) {
            interval = setInterval(() => {
                setCountdown(prevState => prevState - 1)
            },1000)
        }
        if (countdown === 0) {
            clearInterval(interval);
            setShowtime(false)
        }
        return () => clearInterval(interval);
        // return () => clearInterval(interval);
    },[showtime,countdown])

    return (
        <div>
            <h3>UseEffect</h3>
            <div>
                <h4>Đồng hồ điếm ngược</h4>
                <input type='number' value={inputCount} onChange={(e) => setInputCount(e.target.value)}></input>
                {showtime && (<h1 >{countdown}</h1>)}
                <button onClick={() => handleButtonStart()}>Start</button>
            </div>

            <div>
                <h4>Call API</h4>
                {tabs.map(tab => (
                    <button 
                        className='button'
                        key={tab}
                        style={type === tab ? {color: '#fff', backgroundColor: '#333'} : {}}
                        onClick={() => setType(tab)}
                    >{tab}
                    </button>
                ))}
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))}
                </ul>
            </div>

            {showbutton && (
                <button 
                    style={{position: 'fixed', right: 20, bottom: 20}}
                    onClick={() => {handleGotoTop()}}
                >
                    Go to Top
                </button>
            )}

        </div>
    )
}

export default UseEffect