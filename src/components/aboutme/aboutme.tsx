import { Box } from "@mui/material";
import { MyAccordion } from "../../elements/myaccordion/myaccordion";

export function AboutMe(): JSX.Element {
  return (
    <Box>
      <MyAccordion disabled={true} title="About me" text="..."/>
      <MyAccordion disabled={true} title="Skills" text="..."/>
      <MyAccordion disabled={true} title="Work Experience" text="..."/>
      <MyAccordion disabled={true} title="Education" text="..."/>
      <MyAccordion disabled={true} title="Languages" text="..."/>
      <MyAccordion disabled={true} title="Honors" text="..."/>
    </Box>
  );
}
