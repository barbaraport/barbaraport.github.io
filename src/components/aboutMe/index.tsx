import { Box } from "@mui/material";
import { MyAccordion } from "../../elements/myAccordion";
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

export const AboutMe = (): JSX.Element => {
  return (
    <Box sx={{ width: "100%" }}>
      <MyAccordion
        disabled={false}
        defaultExpanded={true}
        title="About me"
        text={[
          "I am an experienced software developer contributing with software solutions of excellent quality, a thought that has accompanied me from an early age and provided me with two Honorable Mentions in educational institutions I went through.",
        ]}
      />
      <MyAccordion
        disabled={false}
        defaultExpanded={false}
        title="Hard Skills"
        text={[
          "Java 8 (complex business logic development);",
          "JUnit 5 (formulation and development of integration and unity test cases);",
          "Spring Framework (knowledge of microservices architecture);",
          "React (class and functional components development);",
          "TypeScript/JavaScript (client features development);",
          "Selenium/Cypress (consulting and development of automated tests);",
          "Cucumber/Gherkin (knowledge in development of automated specifications).",
        ]}
        paragraphIcon={<CheckBoxTwoToneIcon/>}
      />
      <MyAccordion
        disabled={false}
        defaultExpanded={false}
        title="Soft Skills"
        text={[
          "Communicative (experience acquired while developing projects remotely with agile methodologies and the language cannot be a barrier);",
          "Self-taught (I was recognized by my team as someone who chases information to solve a problem);",
          "Detail-oriented (in development, in communication and in life I always pay close attention to all information I have or receive);",
          "Studious (I always increase my knowledge and I always search for the best trainings for this purpose).",
        ]}
        paragraphIcon={<CheckBoxTwoToneIcon/>}
      />
    </Box>
  );
}
