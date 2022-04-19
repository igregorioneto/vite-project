
type TweetType = {
    text: String;
}

export function Tweet (props: TweetType) {
    return (
        <div>{props.text}</div>
    );
}