import { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box,
    Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqs = [
        {
            question: "What industries do you serve?",
            answer: "We serve multiple industries including construction, real estate, oil & gas, agriculture, transportation, software and technology solutions and manufacturing. Our diverse expertise allows us to provide comprehensive solutions across various sectors."
        },
        {
            question: "How do you ensure quality in your projects?",
            answer: "We maintain strict quality standards through certified processes, regular inspections, and adherence to international standards including ISO 9001:2015. Our experienced team ensures every project meets or exceeds expectations."
        },
        {
            question: "What is your project timeline approach?",
            answer: "We develop detailed project timelines based on scope, complexity, and client requirements. Our project management methodology ensures timely delivery while maintaining quality standards throughout the project lifecycle."
        }
    ];

    return (
        <Box
            component="section"
            sx={{
                py: 10,
                backgroundColor: '#f9fafb',
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3rem' },
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #133551 0%, #1e4766 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            mb: 3,
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Divider
                        sx={{
                            width: 80,
                            height: 4,
                            backgroundColor: '#133551',
                            margin: '0 auto',
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            elevation={2}
                            sx={{
                                borderRadius: '8px !important',
                                '&:before': {
                                    display: 'none',
                                },
                                '&.Mui-expanded': {
                                    margin: '0 !important',
                                    marginBottom: '16px !important',
                                },
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 4px 12px rgba(19, 53, 81, 0.15)',
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        sx={{
                                            color: '#133551',
                                            fontSize: '1.75rem',
                                        }}
                                    />
                                }
                                sx={{
                                    padding: '16px 24px',
                                    '& .MuiAccordionSummary-content': {
                                        margin: '12px 0',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#133551',
                                        fontWeight: 600,
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                    }}
                                >
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    padding: '0 24px 24px 24px',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                                    paddingTop: '16px',
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#4b5563',
                                        lineHeight: 1.7,
                                        fontSize: { xs: '0.9375rem', md: '1rem' },
                                    }}
                                >
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;
