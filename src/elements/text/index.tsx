import Typography from "@mui/material/Typography";

type TextProps = {
    text: string,
    type: 'h1' | 'body1'
}

export const Text = (props: TextProps): JSX.Element => {
    return (
        <Typography variant={props.type} color={props.type === 'h1' ? 'text.secondary' : 'text.primary'}>{props.text}</Typography>
    );
}