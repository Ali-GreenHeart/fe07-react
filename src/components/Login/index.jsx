import { useEffect, useRef, useState } from "react";
import { addGmail } from "../../utils";
import Button from "../Button";
import styles from "./index.module.css"
const initialValue = {
    email: "",
    password: ''
}

function Login() {
    const [input, setInput] = useState(initialValue)
    const emailInput = useRef()
    const passwordInput = useRef()

    useEffect(() => {
        setInput({ ...input, email: 'a' })
    }, [])
    // useEffect(() => {
    //     console.log('componentim doguldu urraaaa')
    // }, []) // bu massiv adlanir dependency list-> 
    // useEffect(() => {
    //     console.log('input deyishdi')
    // }, [input])
    // useEffect(() => {
    //     return () => {
    //         console.log('component unmounted ☠')
    //     }
    // }, [])
    // bos olanda  -> mount
    // input (state) falan verilen -> update

    // console.log(emailInput.current.focus())
    // lifecycle
    /*
        dogulmagin  mount
        update   -> update
        olmeyin   -> unmount
    */

    return (
        <div className={styles.form}>
            <input
                ref={emailInput}
                onChange={({ target }) => {
                    setInput({ ...input, email: target.value })
                }}
                value={input.email} type="email" placeholder="enter your email" />
            <input
                ref={passwordInput}
                onChange={({ target }) => {
                    setInput({ ...input, password: target.value })
                }}
                value={input.password} type="password" placeholder="enter your password" />
            <Button bgColor="red" text="submit" clickleyende={() => {
                console.log(input)
            }} />
            <Button bgColor="red" text="add gmail" clickleyende={() => {
                setInput({ ...input, email: addGmail(input.email) })
            }} />
        </div>
    )
}


export default Login;
