import {
  Accordion as AccordionUI,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

type Accordion = {
  description: string;
  heading: string;
};
export const Accordion = ({ description, heading }: Accordion) => {
  return (
    <AccordionUI>
      <AccordionSummary>
        <h3 className="text-lightText text-lg">{heading}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-lightText text-base">{description}</p>
      </AccordionDetails>
    </AccordionUI>
  );
};
