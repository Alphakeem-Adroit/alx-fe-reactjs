import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '5px' }}>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: 'darkblue' }}>{count}</p>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => setCount(count - 1)} style={{backgroundColor: 'yellow', color: 'black' }}>Decrement</button>
                <button onClick={() => setCount(count + 1)} style={{backgroundColor: 'green'}}>Increment</button>
                <button onClick={() => setCount(0)} style={{backgroundColor: 'red' }}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;