import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

type MyAccordionProps = {
  disabled: boolean;
  defaultExpanded: boolean;
  title: string;
  text: Array<string>;
  paragraphIcon?: JSX.Element;
};

export function MyAccordion(props: MyAccordionProps): JSX.Element {
  return (
    <Accordion disabled={props.disabled} defaultExpanded={props.defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{formatParagraphs()}</AccordionDetails>
    </Accordion>
  );

  function formatParagraphs(): Array<JSX.Element> {
    const paragraphs: Array<JSX.Element> = [];

    props.text.forEach((paragraph: string) => {
      
      const text: JSX.Element = <Typography>{paragraph}</Typography>;

      if (!props.paragraphIcon)
        paragraphs.push(text);

      paragraphs.push(
        <Box display={'flex'} flexDirection={'row'} gap={'8px'}>
          {props.paragraphIcon}
          {text}
        </Box>
      ); 
    });

    return paragraphs;
  }
}
