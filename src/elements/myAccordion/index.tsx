import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import { Text } from "../text"

type MyAccordionProps = {
    disabled: boolean
    defaultExpanded: boolean
    title: string
    paragraphIcon?: JSX.Element
    children?: Array<JSX.Element> | Array<string>
}

export const MyAccordion = (props: MyAccordionProps): JSX.Element => {
    const formatParagraphs = (): Array<JSX.Element> => {
        const paragraphs: Array<JSX.Element> = []

        props.children?.forEach(
            (child: JSX.Element | string, index: number) => {
                if (typeof child === "string") {
                    const text: JSX.Element = (
                        <Text
                            type="body1"
                            id={"text-" + index}
                            key={"text-" + index}
                        >
                            {child as string}
                        </Text>
                    )

                    if (props.paragraphIcon)
                        paragraphs.push(
                            <Box
                                display={"flex"}
                                flexDirection={"row"}
                                gap={"8px"}
                                key={"box-" + index}
                            >
                                {props.paragraphIcon}
                                {text}
                            </Box>
                        )
                    else paragraphs.push(text)
                } else {
                    paragraphs.push(child as JSX.Element)
                }
            }
        )

        return paragraphs
    }

    return (
        <Accordion
            disabled={props.disabled}
            defaultExpanded={props.defaultExpanded}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Box width={"100%"} textAlign={"center"}>
                    <Text type="body1" id={"title"}>
                        {props.title}
                    </Text>
                </Box>
            </AccordionSummary>
            <AccordionDetails>{formatParagraphs()}</AccordionDetails>
        </Accordion>
    )
}
