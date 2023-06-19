import axios, { AxiosResponse } from "axios"
import { GitHubRepository } from "../../dto/GitHubRepository"

export const fetchRepositories = async (): Promise<Array<GitHubRepository>> => {
    const response: AxiosResponse<unknown, unknown> = await axios.get(
        "https://api.github.com/users/barbaraport/repos"
    )

    return (await response.data) as Array<GitHubRepository>
}
