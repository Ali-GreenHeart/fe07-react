function Button({ bgColor, text, clickleyende }) {
    return (
        <button style={{
            backgroundColor: bgColor
        }}
            onClick={clickleyende}
        >
            {text}
        </button>
    )
}
export default Button;

