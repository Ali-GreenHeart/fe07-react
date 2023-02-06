import { Favorite, FavoriteBorder, HeartBroken } from "@mui/icons-material";
import { Checkbox, FormControlLabel, MenuItem, Rating, Select, Slider, TextField } from "@mui/material";
import { useState } from "react";

const Mui = () => {
    const [check, setCheck] = useState(false)
    const [age, setAge] = useState(10)

    const [value, setValue] = useState("")
    const [err, setErr] = useState(false)

    return (
        <div style={{ margin: 40 }}>
            <TextField
                multiline
                margin="none"
                error={err}
                label={err ? "Error" : "Email"}
                value={value}
                type="email"
                onChange={({ target }) => {
                    if (!target.value.includes('@')) {
                        setErr(true)
                    } else {
                        setErr(false)
                    }
                    setValue(target.value)
                }}
            />
            <Slider
                style={{ marginTop: 50 }}
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
            />
            <Select
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={(e) => {
                    console.log(e.target.value)
                    setAge(e.target.value)
                }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Rating name="half-rating"
                onChange={(e, newValue) => {
                    console.log(newValue)
                }}
                defaultValue={2.5}
                precision={0.5}
                icon={<Favorite color="error" />}
                emptyIcon={<FavoriteBorder color="error" />}
            />
            <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Top"
                labelPlacement="start"
            />
            <Checkbox
                checked={check}
                onChange={(e) => {
                    setCheck(e.target.checked)
                }}
                color="success" checkedIcon={<Favorite />} icon={<HeartBroken color="error" />} />
            {check && <p>checked</p>}
        </div>

    )
}
export default Mui;

