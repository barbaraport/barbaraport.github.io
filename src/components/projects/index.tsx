import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { MyProject } from "../../elements/myProject"
import { GitHubRepository } from "../../model/dto/GitHubRepository"
import { fetchRepositories } from "../../model/service/GitHubRepositoriesService"

export const MyProjects = (): JSX.Element => {
    const [repositories, setRepositories] = useState<Array<GitHubRepository>>()

    useEffect(() => {
        fetchMyRepositories()
    }, [])

    const fetchMyRepositories = async (): Promise<void> => {
        const fetchedRepositories: Array<GitHubRepository> =
            await fetchRepositories()

        setRepositories(fetchedRepositories)
    }

    const getItems = (): Array<JSX.Element> => {
        const items: Array<JSX.Element> = []

        repositories?.forEach((repository: GitHubRepository) => {
            items.push(<MyProject project={repository} />)
        })

        return items
    }

    return (
        <Grid
            container
            spacing={{ xs: 2, sm: 2, md: 2 }}
            justifyContent={"center"}
            key={"repositories"}
        >
            {getItems()}
        </Grid>
    )
}
