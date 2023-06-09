import React, { useState, useEffect } from 'react'

function MouseUseEffect() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useffect')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks : X - {x} Y - {y}
        </div>
    )
}

export default MouseUseEffect