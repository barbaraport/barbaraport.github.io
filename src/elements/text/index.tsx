import Typography from "@mui/material/Typography";

type TextProps = {
  text: string;
  type: "h2" | "body1";
};

export const Text = (props: TextProps): JSX.Element => {
  return (
    <Typography
      variant={props.type}
      color={props.type === "h2" ? "text.secondary" : "text.primary"}
    >
      {props.text}
    </Typography>
  );
};
