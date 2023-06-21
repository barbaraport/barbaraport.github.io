import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone"
import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { MyAccordion } from "../../elements/myAccordion"
import { MyProject } from "../../elements/myProject"
import { GitHubRepository } from "../../model/dto/GitHubRepository"
import { fetchRepositories } from "../../model/service/GitHubRepositoriesService"

export const AboutMe = (): JSX.Element => {
    const [repositories, setRepositories] = useState<Array<GitHubRepository>>()

    useEffect(() => {
        fetchMyRepositories()
    }, [])

    const fetchMyRepositories = async (): Promise<void> => {
        const fetchedRepositories: Array<GitHubRepository> =
            await fetchRepositories()
        setRepositories(fetchedRepositories)
    }

    const aboutMe = (): Array<string> => {
        return [
            "Experienced software developer with a passion for crafting high-quality solutions and skilled in strong typed languages. Recognized with two Honorable Mentions for my outstanding contributions in educational institutions.",
        ]
    }
    const hardSkills = (): Array<string> => {
        return [
            "Complex business logic development using Java 8, formulating, and implementing integration and unit test cases with JUnit 5 and leveraging the Spring Framework for microservices architecture;",
            "Adept at developing React functional and class components, implementing client features using TypeScript/JavaScript;",
            "Consulting on automated testing with Selenium/Cypress;",
            "My expertise extends to Cucumber/Gherkin for automated specifications.",
        ]
    }

    const softSkills = (): Array<string> => {
        return [
            "My communicative nature shines through collaborating remotely using agile methodologies, breaking down language barriers;",
            "I'm a self-taught problem solver, continuously pursuing knowledge to overcome challenges;",
            "Detail-oriented in development, communication, and life, I meticulously attend to information at hand;",
            "With a thirst for learning, I actively seek out the best training opportunities to further enhance my abilities.",
        ]
    }

    const projects = (): Array<JSX.Element> => {
        const items: Array<JSX.Element> = []

        repositories?.forEach((repository: GitHubRepository) => {
            items.push(<MyProject project={repository} />)
        })

        return [
            <Grid
                container
                spacing={{ xs: 2, sm: 2, md: 2 }}
                justifyContent={"center"}
                key={"repositories"}
            >
                {items}
            </Grid>,
        ]
    }

    return (
        <Box sx={{ width: "100%" }}>
            <MyAccordion
                disabled={false}
                defaultExpanded={true}
                title="About Me"
            >
                {aboutMe()}
            </MyAccordion>
            <MyAccordion
                disabled={false}
                defaultExpanded={true}
                title="Hard Skills"
                paragraphIcon={<CheckBoxTwoToneIcon />}
            >
                {hardSkills()}
            </MyAccordion>
            <MyAccordion
                disabled={false}
                defaultExpanded={true}
                title="Soft Skills"
                paragraphIcon={<CheckBoxTwoToneIcon />}
            >
                {softSkills()}
            </MyAccordion>
            <MyAccordion
                disabled={false}
                defaultExpanded={false}
                title="GitHub Projects"
            >
                {projects()}
            </MyAccordion>
        </Box>
    )
}
