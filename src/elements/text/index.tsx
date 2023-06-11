import Typography from "@mui/material/Typography"

type TextProps = {
    text: string
    type: "h2" | "h6" | "body1" | "body2"
    color?: string
    fontWeight?: "bold"
}

export const Text = (props: TextProps): JSX.Element => {
    return (
        <Typography
            variant={props.type}
            color={props.color ? props.color : "text.primary"}
            sx={{ fontWeight: props.fontWeight ? "bold" : "normal" }}
        >
            {props.text}
        </Typography>
    )
}
