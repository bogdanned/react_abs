export default [
    {
        "id": 1,
        "label": "What is your name?",
        "name": "name",
        "image": "generalised.png",
        "machine_answer": "Hi Alex, I am AVA.",
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
        "image": "generalised.png",
        "machine_answer": "Did you know that women have more than 50 percent chance of getting a blad infection at some point in their lives.",
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
        "image": "clessidra.jpg",
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
        "id": 4,
        "label": "Where is the pain located within your abdomen?",
        "name": "pain_location",
        "image": "lower_generalised.png",
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
        "id": 5,
        "label": "How do you describe the pain?",
        "name": "pain_type",
        "image": "pain_intensity.jpg",
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
        "id": 6,
        "label": "How intense is the pain?",
        "name": "intense",
        "image": "generalised.png",
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
        "id": 7,
        "label": "Have you been vomiting or feeling nauseous?",
        "name": "vomit",
        "image": "vomit.jpg",
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
        "id": 8,
        "label": "Are you experiencing constant feeling of fullness?",
        "name": "bloated",
        "image": "bloated_belly.jpg",
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
        "id": 9,
        "label": "How is the passing of your stool?",
        "name": "stool",
        "image": "generalised.png",
        "options": [
            {
                "value": "hard",
                "label": "Hard"
            },
            {
                "value": "loose",
                "label": "Loose"
            }
        ]
    },
    {
        "id": 10,
        "label": "How does eating affect your pain?",
        "name": "eating",
        "image": "generalised.png",
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