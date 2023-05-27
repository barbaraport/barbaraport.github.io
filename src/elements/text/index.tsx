import Typography from "@mui/material/Typography"

type TextProps = {
    text: string
    type: "h2" | "body1"
    color?: string
}

export const Text = (props: TextProps): JSX.Element => {
    return (
        <Typography
            variant={props.type}
            color={props.color ? props.color : "text.primary"}
        >
            {props.text}
        </Typography>
    )
}
