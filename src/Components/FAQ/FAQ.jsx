import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  let theme = useTheme();

  return (
    <>
      <Box component="main" sx={{ mt: 10, ml: 12 }}>
        <Typography sx={{ fontSize: 30, fontWeight: 700, color: theme.palette.primary.main }}>
          Frequently Asked Questions
        </Typography>
        <Typography>Find answers to common questions below</Typography>
      </Box>

      <Box component="main" sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: { xs: '100%', md: '80%' }, marginLeft: { xs: '63px', md: '0' } }}>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              <Typography>How can I create a new account?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To create a new account, click on the "Sign Up" button on the homepage, fill in your details, and submit the form.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography>How do I reset my password?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Go to the "Login" page, click "Forgot Password", and follow the instructions to reset your password.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
              <Typography>Can I change my subscription plan later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, go to "Settings" "Subscription" to choose a new plan and confirm your changes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
              <Typography>Where can I find the billing history?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Check the "Billing" section under "Account Settings" to view and download your billing history.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
              <Typography>How do I contact customer support?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can contact customer support via the "Help" section or by emailing support@website.com.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6-content" id="panel6-header">
              <Typography>Is my personal data secure?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we implement industry-standard encryption and data protection policies to keep your data safe.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7-content" id="panel7-header">
              <Typography>Can I cancel my subscription at any time?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, you can cancel your subscription at any time from the "Subscription" page in "Settings".
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8-content" id="panel8-header">
              <Typography>How do I update my payment method?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Go to the "Billing" section and click "Update Payment Method" to enter your new payment details.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9-content" id="panel9-header">
              <Typography>Why am I being charged extra fees?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Additional fees may apply for premium services or international transactions. See the "Billing" section for details.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel10-content" id="panel10-header">
              <Typography>What are the supported languages?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our platform supports multiple languages, including English, Spanish, French, and German. You can change your language in the "Settings".
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Box>
      </Box>
    </>
  );
}
