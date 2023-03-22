import './Counter.css'
import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const like = () => {
        setCount(count + 1)
    }
    const unlike = () => {
        if(count > 0) {
        setCount(count - 1)
        }
    }
    return (
        <div className='Like'>
            <h1>{count}</h1>
            <button className="btn btn-secondary btn fs-5" onClick={unlike}>Unlike</button>
            <button className="btn btn-secondary btn fs-5" onClick={like}>Like</button>
        </div>
    )
}
export default Counter
