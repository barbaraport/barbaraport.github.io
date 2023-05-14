import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type MyAccordionProps = {
  disabled: boolean;
  title: string;
  text: string;
};

export function MyAccordion(props: MyAccordionProps): JSX.Element {
  return (
    <Accordion disabled={props.disabled}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.text}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
