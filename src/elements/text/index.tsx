import Typography from "@mui/material/Typography"

type TextProps = {
    id: string
    type: "h2" | "h6" | "body1" | "body2"
    color?: string
    fontWeight?: "bold"
    children: string
}

export const Text = (props: TextProps): JSX.Element => {
    return (
        <Typography
            id={props.id}
            variant={props.type}
            color={props.color ? props.color : "text.primary"}
            sx={{ fontWeight: props.fontWeight ? "bold" : "normal" }}
        >
            {props.children}
        </Typography>
    )
}
