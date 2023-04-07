import { useEffect, useRef, useState } from 'react'

const Animation = () => {   
    const [backgroundColor, setBackgroundColor] = useState('pink')

    const titleRef = useRef()
    const divRef = useRef()

    useEffect(() => {
        // const title = document.getElementById('title')
        // console.log(title)
        const title = titleRef.current

        const handleClick = () => {
            console.log('hice click en el titulo')
        }

        title.addEventListener('click', handleClick)
    
        return () => {
            title.removeEventListener('click', handleClick)
        }
    }, [])

    useEffect(() => {
        const div = divRef.current

        const handleScroll = (e) => {
            console.log(e)
            const { y } = div.getBoundingClientRect()

            const newColor = y <= 0 ? 'orange' : 'pink'
            setBackgroundColor(newColor)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <h1 
                // id='title'
                ref={titleRef}
            >
                Eventos
            </h1>
            <div
                ref={divRef}
                style={{
                    height: '180vh',
                    marginTop: 20,
                    background: backgroundColor
                }}
            >
                <h2>Scroll to change background</h2>
            </div>
        </div>
    )
}

export default Animation