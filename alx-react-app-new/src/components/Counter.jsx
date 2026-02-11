import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>

            <div>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;