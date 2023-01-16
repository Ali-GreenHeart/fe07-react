import { useState } from "react";
import Button from "./Button";

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>{count}</h1>
            <Button bgColor="green" text="+" clickleyende={() => {
                setCount(count + 1)
            }} />
            <Button bgColor="red" text="-" clickleyende={() => {
                setCount(count - 1)
            }} />
            <Button bgColor="blue" text="log" clickleyende={() => {
                console.log(count)
            }} />
            <Button bgColor="purple" text="reset" clickleyende={() => {
                setCount(0)
            }} />
            <Button bgColor="yellow" text="special" clickleyende={() => {
                let ed = +prompt('ededi daxil edin: ')
                setCount(ed)
            }} />
        </>
    )
}
export default Counter;
