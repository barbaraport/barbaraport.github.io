import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { Text } from "../text";

type MyAccordionProps = {
  disabled: boolean;
  defaultExpanded: boolean;
  title: string;
  text: Array<string>;
  paragraphIcon?: JSX.Element;
};

export const MyAccordion = (props: MyAccordionProps): JSX.Element => {

  const formatParagraphs = (): Array<JSX.Element> => {
    const paragraphs: Array<JSX.Element> = [];

    props.text.forEach((paragraph: string) => {
      
      const text: JSX.Element = <Text text={paragraph}/>;

      if (props.paragraphIcon)
        paragraphs.push(
          <Box display={'flex'} flexDirection={'row'} gap={'8px'}>
            {props.paragraphIcon}
            {text}
          </Box>
        ); 
      else paragraphs.push(text);

    });

    return paragraphs;
  }

  return (
    <Accordion disabled={props.disabled} defaultExpanded={props.defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Text text={props.title}/>
      </AccordionSummary>
      <AccordionDetails>{formatParagraphs()}</AccordionDetails>
    </Accordion>
  );
}
