import React, {useState} from 'react'

const withCount = (WrappedComponents) => {

    function Counter() {
        const [count, setCount] = useState(0);
        function Increment() {
            setCount(count + 1);
        }

        return (
            <div>
                <WrappedComponents increment={Increment} count={count}/>
            </div>
          )
    }
  return Counter;
}

export default withCount;
