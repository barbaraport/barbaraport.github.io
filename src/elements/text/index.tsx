import Typography from "@mui/material/Typography";

type TextProps = {
    text: string
}

export const Text = (props: TextProps): JSX.Element => {
    return (
        <Typography>{props.text}</Typography>
    );
}