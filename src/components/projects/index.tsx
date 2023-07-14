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

        const sortedRepositories: Array<GitHubRepository> =
            fetchedRepositories.sort((repo_1, repo_2) =>
                repo_1.stargazers_count > repo_2.stargazers_count ? -1 : 1
            )

        setRepositories(sortedRepositories)
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
