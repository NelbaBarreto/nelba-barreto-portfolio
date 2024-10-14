import React from "react";
import Title from "../Title";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Section = ({ expanded, handleChange, section }) => {
  return (
    <section className="bg-gray-800 rounded-lg m-5 p-8 border border-gray-700 shadow-lg">
      <Title>{section.section_name}</Title>
      <br />
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is Lorem Ipsum?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  )
}

export default Section;