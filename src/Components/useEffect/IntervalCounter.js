import React, {useEffect, useState} from 'react'

function IntervalCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 2)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return() => {
            clearInterval(interval)
        }
    }, [])
  return (
    <div style={{textAlign:"center", fontSize: '25px', color: 'blue'}}>
        {count}
    </div>
  )
}

export default IntervalCounter