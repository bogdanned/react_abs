export default [
    {
        "id": 1,
        "label": "What is your name?",
        "name": "name",
        "image": "left_flank.png",
        "machine_answer": "Nice to meet you Alex ",
        // "textType": true,
        "options": [
            {
                "value": "Alex",
                "label": "Alex"
            }
        ]
    },
    {
        "id": 2,
        "label": "What is your gender?",
        "name": "Gender",
        "machine_answer": "Did you know that females are more exposed to bladder infection. Approximately, xx% have experienced xx",
        "options": [
            {
                "value": "female",
                "label": "Female"
            },
            {
                "value": "male",
                "label": "Male"
            }
        ]
    },
    {
        "id": 3,
        "label": "How long has your pain been going on for?",
        "name": "pain",
        "machine_answer": "1 week? I am sorry. Alex, I have a few more questions for you.",
        "options": [
            {
                "value": "1_day",
                "label": "1 day"
            },
            {
                "value": "1_w",
                "label": "1 week"
            },
            {
                "value": "longer",
                "label": "Longer"
            }
        ]
    },
    {
        "id": 3,
        "label": "Where is the pain located within your abdomen?",
        "name": "pain_location",
        "machine_answer": "I understand Alex.",
        "options": [
            {
                "value": "l_left",
                "label": "Lower Left"
            },
            {
                "value": "l_right",
                "label": "Lower Right"
            },
            {
                "value": "u_left",
                "label": "Upper Left"
            },
            {
                "value": "u_right",
                "label": "Upper Right"
            },
            {
                "value": "l_abdomen",
                "label": "Lower abdomen"
            }
        ]
    },

    {
        "id": 4,
        "label": "How do you describe the pain?",
        "name": "pain_type",
        "machine_answer": "Did you know that sharp pain is usually associted with xx.",
        "options": [
            {
                "value": "sharp",
                "label": "Sharp"
            },
            {
                "value": "squeeze",
                "label": "Squeezing"
            },
            {
                "value": "dull_ache",
                "label": "Dull ache"
            },
            {
                "value": "dknow",
                "label": "Don't know"
            }
        ]
    },
    {
        "id": 5,
        "label": "How intense is the pain?",
        "name": "intense",

        "options": [
            {
                "value": "mild",
                "label": "Mild"
            },
            {
                "value": "moderate",
                "label": "Moderate"
            },
            {
                "value": "severe",
                "label": "Severe"
            }
        ]
    },
    {
        "id": 6,
        "label": "Have you been vomiting or feeling nauseous?",
        "name": "vomit",
        "options": [
            {
                "value": true,
                "label": "Yes"
            },
            {
                "value": false,
                "label": "No"
            }
        ]
    },
    {
        "id": 7,
        "label": "How does eating affect your pain?",
        "name": "eating",
        "machine_answer": "Alex, this is the end of the questionnaire. I have reviewed your answers, and I would say that probably the pain you are experiencing is related to possible constipation. I would advise you to see a doctor. Do not worry, I have filed a report for you that you can take with you when you go to.",
        "options": [
            {
                "value": "no_impact",
                "label": "No impact"
            },
            {
                "value": "improves",
                "label": "It improves"
            },
            {
                "value": "worse",
                "label": "It worsens"
            },
        ]
    }]