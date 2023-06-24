import { Box, Grid, Link } from "@mui/material"
import { GitHubRepository } from "../../model/dto/GitHubRepository"
import { Text } from "../text"

type MyProjectProps = {
    project: GitHubRepository
}

export const MyProject = (props: MyProjectProps): JSX.Element => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={props.project.name}
            sx={{ wordWrap: "break-word", padding: "16px" }}
        >
            <Link href={props.project.html_url} underline={"hover"}>
                <Box
                    border={"1px solid"}
                    borderColor={"text.secondary"}
                    borderRadius={"8px"}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        placeContent: "center",
                        alignItems: "center",
                        height: "100%",
                        padding: "8px",
                    }}
                >
                    <Box
                        component="img"
                        alt="Folder image"
                        width={"50%"}
                        src={
                            "https://icon-library.com/images/folder-image-icon/folder-image-icon-2.jpg"
                        }
                    />
                    <Box>
                        <Text type="body2" fontWeight="bold">
                            {props.project.name}
                        </Text>
                        <Text type="body2">{props.project.description}</Text>
                    </Box>
                </Box>
            </Link>
        </Grid>
    )
}
