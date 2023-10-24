export default function TestButton(props) {
    return (
        <>
            <button type="button" style={{ backgroundColor: props.color }}>{props.title}</button>
        </>
    );
}