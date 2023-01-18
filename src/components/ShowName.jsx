import { useState } from "react";
import Button from "./Button";

function ShowName() {
    const [ad, setAd] = useState("")
    // class component

    return (
        <>
            <h1>{ad}</h1>
            <Button bgColor="red" text="adini deyis" clickleyende={() => {
                setAd(prompt('adini daxil et: '))
            }} />
        </>
    )
}


export default ShowName;
