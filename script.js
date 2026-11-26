"use strict";

/* =====================================================
   GOVSCHEME AI — MAIN JAVASCRIPT
   This is an educational demonstration, not an official
   government eligibility or application service.
===================================================== */


/* ================= SCHEME DATA ================= */

const schemes = [
    // ---------- STUDENTS ----------
    {
        id: "nsp",
        title: "National Scholarship Portal",
        category: "Students",
        icon: "🎓",
        description: "Explore scholarship opportunities through the National Scholarship Portal.",
        eligibility: "Eligibility depends on the particular scholarship, course, institution, income limits, and other scheme conditions.",
        benefits: "Depending on the scholarship, assistance may help with educational expenses. The amount and coverage vary by scheme.",
        documents: [
            "Identity and personal details, as requested",
            "Academic records and admission details",
            "Income or category certificate, if required",
            "Bank details, if required",
            "Any documents listed in the selected scholarship guidelines"
        ],
        steps: [
            "Visit the official National Scholarship Portal.",
            "Review the scholarships currently listed and their guidelines.",
            "Check the eligibility and document requirements for the scholarship you want.",
            "Register or sign in using the portal's instructions.",
            "Complete the application and submit it through the official process."
        ],
        url: "https://scholarships.gov.in/"
    },
    {
        id: "post-matric",
        title: "Post-Matric Scholarship Schemes",
        category: "Students",
        icon: "📚",
        description: "Find post-matric scholarship information for eligible students continuing their education.",
        eligibility: "Conditions vary by scholarship and state. They may include course, institution, community, income, and academic requirements.",
        benefits: "Some schemes provide educational financial assistance. The amount and eligible expenses depend on the applicable guidelines.",
        documents: [
            "Previous examination marksheet",
            "Current admission or bonafide details",
            "Income certificate, if required",
            "Caste or category certificate, if required",
            "Bank account details, if required"
        ],
        steps: [
            "Identify the relevant central or state scholarship.",
            "Read its current eligibility and document requirements.",
            "Use the official portal specified by the scheme.",
            "Fill in the application carefully and upload the requested documents.",
            "Save the application reference number for future use."
        ],
        url: "https://scholarships.gov.in/"
    },
    {
        id: "national-means-cum-merit",
        title: "National Means-cum-Merit Scholarship Scheme",
        category: "Students",
        icon: "🏅",
        description: "A scholarship scheme intended to support eligible students in continuing their education.",
        eligibility: "Students must meet the scheme's current class, examination, income, and other conditions. Check the official guidelines for details.",
        benefits: "Scholarship assistance may be available to students who qualify under the current scheme rules.",
        documents: [
            "School and student details",
            "Required examination records",
            "Income certificate or supporting records",
            "Bank details, if required",
            "Other documents specified in the current guidelines"
        ],
        steps: [
            "Read the latest scheme guidelines and application schedule.",
            "Confirm whether you meet the required conditions.",
            "Ask your school or relevant authority about the application process.",
            "Submit the application using the official process.",
            "Keep your application details and check for updates."
        ],
        url: "https://scholarships.gov.in/"
    },

    // ---------- FARMERS ----------
    {
        id: "pm-kisan",
        title: "PM-KISAN Samman Nidhi",
        category: "Farmers",
        icon: "🌾",
        description: "Explore the PM-KISAN income-support scheme for eligible landholding farmer families.",
        eligibility: "Eligibility is governed by the current scheme rules, including landholding records and exclusion criteria. Not every farmer automatically qualifies.",
        benefits: "Eligible beneficiaries may receive income support in instalments as provided under the scheme rules.",
        documents: [
            "Landholding records, as applicable",
            "Identity details requested by the portal",
            "Bank account information",
            "Mobile number and other required details"
        ],
        steps: [
            "Visit the official PM-KISAN website.",
            "Read the current eligibility and exclusion conditions.",
            "Use the portal's services to check registration or beneficiary information.",
            "Follow the official instructions for registration or corrections.",
            "Use the official status service to check updates."
        ],
        url: "https://pmkisan.gov.in/"
    },
    {
        id: "pmfby",
        title: "Pradhan Mantri Fasal Bima Yojana",
        category: "Farmers",
        icon: "🌱",
        description: "Explore crop insurance information under the Pradhan Mantri Fasal Bima Yojana.",
        eligibility: "Availability and eligibility depend on notified crops, areas, season, and current scheme rules. Check the applicable notification.",
        benefits: "The scheme provides crop insurance coverage according to its terms and conditions. Coverage and claim decisions depend on the applicable rules.",
        documents: [
            "Farmer identity and contact details",
            "Land or cultivation records, as applicable",
            "Bank details",
            "Crop and season information",
            "Other documents required for the relevant application"
        ],
        steps: [
            "Visit the official crop insurance portal.",
            "Check whether your crop, area, and season are covered.",
            "Read the current enrolment and deadline information.",
            "Follow the official application process.",
            "Keep your application or insurance reference details."
        ],
        url: "https://pmfby.gov.in/"
    },
    {
        id: "soil-health",
        title: "Soil Health Card Scheme",
        category: "Farmers",
        icon: "🧑‍🌾",
        description: "Learn about soil testing and soil health information for agricultural land.",
        eligibility: "Availability and procedures may depend on local agricultural services and the relevant department.",
        benefits: "Soil testing information can help farmers understand soil characteristics and recommendations for nutrient management.",
        documents: [
            "Farmer contact details",
            "Land or field details",
            "Location information",
            "Other details requested by the local agricultural office"
        ],
        steps: [
            "Contact your local agriculture department or agricultural extension office.",
            "Ask about soil sampling and testing services in your area.",
            "Provide the requested farm and contact information.",
            "Follow the instructions for sample collection.",
            "Review the soil report and seek local agricultural guidance if needed."
        ],
        url: "https://soilhealth.dac.gov.in/"
    },

    // ---------- WOMEN ----------
    {
        id: "pmmvy",
        title: "Pradhan Mantri Matru Vandana Yojana",
        category: "Women",
        icon: "🤱",
        description: "Explore maternity benefit information under the Pradhan Mantri Matru Vandana Yojana.",
        eligibility: "Eligibility, benefit conditions, and required records depend on the current scheme guidelines and the applicant's circumstances.",
        benefits: "Eligible applicants may receive maternity-related financial assistance as specified in the applicable rules.",
        documents: [
            "Applicant identity and contact details",
            "Pregnancy or birth-related records, as required",
            "Bank account details",
            "Other documents listed in the current guidelines"
        ],
        steps: [
            "Read the current scheme guidelines.",
            "Contact the relevant health facility or scheme office for local application instructions.",
            "Check the documents and conditions that apply to your case.",
            "Submit the application through the official process.",
            "Keep the acknowledgement or reference details."
        ],
        url: "https://pmmvy.wcd.gov.in/"
    },
    {
        id: "stand-up-india",
        title: "Stand-Up India",
        category: "Women",
        icon: "💼",
        description: "Explore information about bank loans for eligible women entrepreneurs and other covered applicants starting eligible enterprises.",
        eligibility: "Applicant, enterprise, ownership, loan, and other conditions are governed by the current scheme and lending rules.",
        benefits: "The scheme provides a framework for eligible applicants to seek bank finance for qualifying business activities, subject to approval.",
        documents: [
            "Identity and address proof",
            "Business plan or project details",
            "Business registration details, if applicable",
            "Financial and bank documents requested by the lender",
            "Other documents required by the bank"
        ],
        steps: [
            "Review the current scheme information and lending conditions.",
            "Prepare a business plan and estimate project requirements.",
            "Contact a participating bank or use the official scheme information.",
            "Submit the documents requested by the lender.",
            "The lender will assess the application under its applicable rules."
        ],
        url: "https://www.standupmitra.in/"
    },
    {
        id: "day-nrlm",
        title: "Deendayal Antyodaya Yojana — National Rural Livelihoods Mission",
        category: "Women",
        icon: "🤝",
        description: "Explore rural livelihood and self-help group support information under DAY-NRLM.",
        eligibility: "Participation and support depend on programme guidelines, local implementation, and the applicant or group's circumstances.",
        benefits: "Programme support may include self-help group development, livelihood activities, capacity building, and access to financial services.",
        documents: [
            "Identity and contact details",
            "Self-help group details, if applicable",
            "Residence or household information, if requested",
            "Other documents required by the local programme office"
        ],
        steps: [
            "Contact the local rural livelihood mission or relevant block office.",
            "Ask about self-help groups and programmes operating in your area.",
            "Check participation requirements and available support.",
            "Follow the local registration or group-joining process.",
            "Keep records of applications and communications."
        ],
        url: "https://aajeevika.gov.in/"
    },

    // ---------- FAMILIES ----------
    {
        id: "pmay",
        title: "Pradhan Mantri Awas Yojana",
        category: "Families",
        icon: "🏠",
        description: "Explore housing assistance information under the relevant Pradhan Mantri Awas Yojana programme.",
        eligibility: "Eligibility differs between rural and urban components and depends on current rules, household circumstances, and other conditions.",
        benefits: "Eligible households may receive housing-related assistance as defined by the relevant programme.",
        documents: [
            "Identity and household details",
            "Residence and housing information",
            "Income or category records, if required",
            "Bank details, if required",
            "Other documents specified by the relevant authority"
        ],
        steps: [
            "Identify whether the rural or urban programme applies to your situation.",
            "Read the latest official eligibility rules.",
            "Contact the relevant local authority or use the official portal.",
            "Follow the prescribed application or survey process.",
            "Keep the acknowledgement and check updates through official channels."
        ],
        url: "https://pmaymis.gov.in/"
    },
    {
        id: "pmjay",
        title: "Ayushman Bharat — PM-JAY",
        category: "Families",
        icon: "🩺",
        description: "Explore eligibility and hospital-related information for Ayushman Bharat PM-JAY.",
        eligibility: "Eligibility is based on the applicable beneficiary identification rules and programme provisions. Check through official channels.",
        benefits: "Eligible beneficiaries may receive covered hospital treatment benefits subject to the scheme's package and rules.",
        documents: [
            "Identity details requested for beneficiary verification",
            "Family or beneficiary information",
            "Documents requested by the authorised help desk"
        ],
        steps: [
            "Use the official PM-JAY beneficiary services.",
            "Check whether your household or beneficiary details are listed.",
            "Contact an authorised Ayushman help desk if you need assistance.",
            "Confirm the hospital and treatment coverage before proceeding.",
            "Follow the official verification and treatment process."
        ],
        url: "https://beneficiary.nha.gov.in/"
    },
    {
        id: "ujjwala",
        title: "Pradhan Mantri Ujjwala Yojana",
        category: "Families",
        icon: "🔥",
        description: "Explore information about LPG connections under the Pradhan Mantri Ujjwala Yojana.",
        eligibility: "Eligibility and application conditions are set by current scheme guidelines and should be checked before applying.",
        benefits: "Eligible applicants may receive LPG connection support as specified by the scheme's current provisions.",
        documents: [
            "Identity and household details",
            "Address or residence details",
            "Ration card or other household records, if required",
            "Bank details, if required",
            "Documents requested by the authorised LPG distributor"
        ],
        steps: [
            "Read the latest Ujjwala scheme guidelines.",
            "Contact an authorised LPG distributor or use the official portal.",
            "Check the current eligibility and document requirements.",
            "Complete the prescribed application process.",
            "Keep the acknowledgement and follow up through official channels."
        ],
        url: "https://www.pmuy.gov.in/"
    },

    // ---------- SENIOR CITIZENS ----------
    {
        id: "ignoaps",
        title: "Indira Gandhi National Old Age Pension Scheme",
        category: "Senior Citizens",
        icon: "👴",
        description: "Explore old-age pension information under the National Social Assistance Programme.",
        eligibility: "Eligibility depends on current programme rules, age, household or poverty criteria, and state implementation.",
        benefits: "Eligible beneficiaries may receive pension assistance according to the applicable central and state provisions.",
        documents: [
            "Age proof",
            "Identity and residence details",
            "Income or household records, if required",
            "Bank account details",
            "Other documents required by the local authority"
        ],
        steps: [
            "Contact your local social welfare office or relevant authority.",
            "Ask about old-age pension eligibility and the application process in your state.",
            "Collect the required documents.",
            "Submit the application through the prescribed channel.",
            "Keep your acknowledgement and check status with the relevant office."
        ],
        url: "https://nsap.nic.in/"
    },
    {
        id: "scss",
        title: "Senior Citizens' Savings Scheme",
        category: "Senior Citizens",
        icon: "🏦",
        description: "Explore the Senior Citizens' Savings Scheme and its current account-opening rules.",
        eligibility: "Eligibility, deposit limits, interest rates, and account conditions are subject to current government rules. Verify them before investing.",
        benefits: "The scheme is a government-backed savings option with terms defined by the current rules. Returns and conditions can change.",
        documents: [
            "Age and identity proof",
            "Address proof",
            "Photographs, if requested",
            "Account-opening form",
            "Other documents requested by the bank or post office"
        ],
        steps: [
            "Review the current scheme rules, deposit limits, and interest rate.",
            "Contact an authorised bank or post office offering the scheme.",
            "Ask for the latest account-opening form and document checklist.",
            "Complete the form and follow the institution's process.",
            "Keep the account documents and review the applicable terms."
        ],
        url: "https://www.indiapost.gov.in/"
    },
    {
        id: "pmjay-seniors",
        title: "Ayushman Bharat PM-JAY for Senior Citizens",
        category: "Senior Citizens",
        icon: "🩺",
        description: "Check official information about PM-JAY provisions applicable to senior citizens.",
        eligibility: "Coverage and eligibility depend on the current programme provisions and beneficiary verification. Confirm the rules through official channels.",
        benefits: "Eligible beneficiaries may access covered health services subject to applicable scheme rules and hospital arrangements.",
        documents: [
            "Identity details requested for verification",
            "Age or beneficiary information, if required",
            "Other documents requested by an authorised help desk"
        ],
        steps: [
            "Visit the official PM-JAY beneficiary portal.",
            "Review the current provisions for senior citizens.",
            "Check beneficiary details using the authorised process.",
            "Contact an authorised help desk for clarification.",
            "Confirm coverage and hospital participation before treatment."
        ],
        url: "https://beneficiary.nha.gov.in/"
    }
];


// ================= ADDITIONAL GOVERNMENT SCHEMES =================

const additionalSchemes = [

    // ---------- STUDENTS ----------
    {
        id: "pm-yasasvi",
        title: "PM YASASVI Scholarship",
        category: "Students",
        icon: "🎓",
        description: "Scholarship support for eligible students from OBC, EBC and DNT communities.",
        eligibility: "Eligibility depends on the student's community, class, family income and current scheme guidelines.",
        benefits: "Financial assistance for eligible students' education.",
        documents: ["Aadhaar Card", "Income Certificate", "Caste Certificate", "Previous Marksheet", "Bank Details"],
        steps: ["Check the latest eligibility rules.", "Visit the National Scholarship Portal.", "Register and complete the application.", "Submit the required documents."],
        url: "https://scholarships.gov.in/"
    },
    {
        id: "national-overseas-scholarship",
        title: "National Overseas Scholarship",
        category: "Students",
        icon: "🌍",
        description: "Financial assistance for eligible students from specified communities pursuing higher education abroad.",
        eligibility: "Applicants must meet the community, income, academic and other conditions in the current official guidelines.",
        benefits: "Eligible support for approved overseas higher education expenses.",
        documents: ["Identity Proof", "Community Certificate", "Income Certificate", "Academic Records", "Admission Documents"],
        steps: ["Read the official scheme guidelines.", "Check eligibility and available slots.", "Apply through the official portal when applications are open.", "Complete document verification."],
        url: "https://socialjustice.gov.in/schemes/28"
    },

    // ---------- FARMERS ----------
    {
        id: "pm-kisan-maandhan",
        title: "Pradhan Mantri Kisan Maandhan Yojana",
        category: "Farmers",
        icon: "👨‍🌾",
        description: "A contributory pension scheme for eligible small and marginal farmers.",
        eligibility: "Generally intended for small and marginal farmers aged 18–40, subject to scheme exclusions and rules.",
        benefits: "Eligible enrolled farmers can receive a monthly pension after reaching the prescribed age, subject to scheme conditions.",
        documents: ["Aadhaar Card", "Bank Account Details", "Landholding Records", "Mobile Number"],
        steps: ["Check the eligibility conditions.", "Visit the official Maandhan portal or an authorised enrolment centre.", "Complete registration and contribution formalities."],
        url: "https://maandhan.in/"
    },
    {
        id: "pm-matsya-sampada",
        title: "Pradhan Mantri Matsya Sampada Yojana",
        category: "Farmers",
        icon: "🐟",
        description: "A government programme supporting fisheries and aquaculture development.",
        eligibility: "Fishers, fish farmers and other eligible fisheries-sector beneficiaries, according to scheme guidelines.",
        benefits: "Support for eligible fisheries development activities and projects.",
        documents: ["Identity Proof", "Address Proof", "Project Details", "Bank Details", "Other Documents as Required"],
        steps: ["Check the relevant fisheries department guidelines.", "Contact the state fisheries department.", "Submit the application and required project documents."],
        url: "https://dof.gov.in/pmmsy"
    },
    {
        id: "agriculture-infrastructure-fund",
        title: "Agriculture Infrastructure Fund",
        category: "Farmers",
        icon: "🏗️",
        description: "A financing facility supporting eligible agricultural infrastructure projects.",
        eligibility: "Eligible farmers, farmer producer organisations, agri-entrepreneurs and other entities, subject to scheme rules.",
        benefits: "Financing support for eligible post-harvest and community farming infrastructure projects.",
        documents: ["Identity Proof", "Project Report", "Bank Details", "Land or Project Documents", "Other Required Records"],
        steps: ["Review the scheme guidelines.", "Prepare a project proposal.", "Apply through the official channel.", "Complete lender and department formalities."],
        url: "https://agriinfra.dac.gov.in/"
    },

    // ---------- WOMEN ----------
    {
        id: "namo-drone-didi",
        title: "Namo Drone Didi",
        category: "Women",
        icon: "🚁",
        description: "A programme supporting eligible women self-help groups in providing agricultural services using drones.",
        eligibility: "Women self-help groups selected under the programme and meeting applicable guidelines.",
        benefits: "Support for eligible groups to access drone-related equipment, training and services as specified by the programme.",
        documents: ["SHG Registration Details", "Member Identity Documents", "Bank Details", "Other Documents Required by Authorities"],
        steps: ["Contact the relevant self-help group or agriculture department.", "Check selection and eligibility requirements.", "Follow the official training and application process."],
        url: "https://www.pib.gov.in/"
    },
    {
        id: "mahila-kisan-sashaktikaran",
        title: "Mahila Kisan Sashaktikaran Pariyojana",
        category: "Women",
        icon: "🌱",
        description: "An initiative under the rural livelihoods framework focused on supporting women farmers.",
        eligibility: "Eligible rural women farmers and groups covered by programme implementation guidelines.",
        benefits: "Support for agricultural skills, sustainable livelihoods and improved participation in farming activities.",
        documents: ["Identity Proof", "SHG Details if Applicable", "Bank Details", "Other Documents Required Locally"],
        steps: ["Contact the local rural livelihoods mission or relevant department.", "Ask about local programme implementation.", "Complete the required enrolment process."],
        url: "https://aajeevika.gov.in/"
    },

    // ---------- FAMILIES ----------
    {
        id: "pm-ujjwala",
        title: "Pradhan Mantri Ujjwala Yojana",
        category: "Families",
        icon: "🔥",
        description: "A scheme providing eligible households access to LPG connections under the applicable guidelines.",
        eligibility: "Eligible adult women from households meeting the scheme's deprivation and other conditions.",
        benefits: "LPG connection-related assistance as provided under current scheme rules.",
        documents: ["Aadhaar Card", "Ration Card or Family Composition Proof", "Bank Details", "Address Proof"],
        steps: ["Check current eligibility.", "Contact an authorised LPG distributor.", "Submit the application and required documents."],
        url: "https://www.pmuy.gov.in/"
    },
    {
        id: "national-food-security",
        title: "National Food Security Act (NFSA)",
        category: "Families",
        icon: "🌾",
        description: "A food security framework through which eligible households can receive subsidised foodgrains.",
        eligibility: "Households identified as eligible under the applicable central and state rules.",
        benefits: "Access to entitled foodgrains through the public distribution system, subject to eligibility.",
        documents: ["Ration Card", "Identity Proof", "Residence Details", "Other Documents Required by the State"],
        steps: ["Contact the local food and civil supplies office.", "Check ration-card eligibility.", "Apply or update household details through the authorised process."],
        url: "https://nfsa.gov.in/"
    },

    // ---------- SENIOR CITIZENS ----------
    {
        id: "atal-vayo-abhyuday",
        title: "Atal Vayo Abhyuday Yojana",
        category: "Senior Citizens",
        icon: "👵",
        description: "A programme supporting the welfare and well-being of senior citizens.",
        eligibility: "Senior citizens and eligible organisations or beneficiaries covered by the relevant programme components.",
        benefits: "Support through applicable senior-citizen welfare services and initiatives.",
        documents: ["Age Proof", "Identity Proof", "Address Proof", "Other Documents as Required"],
        steps: ["Contact the relevant social justice or senior-citizen welfare department.", "Check which services are available locally.", "Follow the applicable registration process."],
        url: "https://socialjustice.gov.in/"
    }

];

// Add the new entries to the existing schemes array.
schemes.push(...additionalSchemes);

/* ================= TRANSLATIONS ================= */

const translations = {
    English: {
        navHome: "Home",
        navSchemes: "Schemes",
        navEligibility: "Eligibility",
        navHelp: "Application Help",
        navAbout: "About",
        heroEyebrow: "YOUR GUIDE TO GOVERNMENT SCHEMES",
        heroTitle: "Find the Government Schemes Made for You",
        heroDescription: "Explore schemes, understand eligibility, discover benefits, and learn how to apply.",
        searchPlaceholder: "Search schemes by name or category...",
        searchButton: "Search",
        exploreButton: "Explore Schemes ↓",
        categoryEyebrow: "EXPLORE BY CATEGORY",
        categoryTitle: "Who are you looking for?",
        categoryDescription: "Choose a category to find related government schemes.",
        allSchemes: "All Schemes",
        students: "Students",
        farmers: "Farmers",
        women: "Women",
        families: "Families",
        seniorCitizens: "Senior Citizens",
        schemesEyebrow: "DISCOVER OPPORTUNITIES",
        schemesTitle: "Government Schemes",
        eligibilityEyebrow: "QUICK CHECK",
        eligibilityTitle: "Check Possible Scheme Matches",
        eligibilityDescription: "Enter some basic details to see schemes related to your selected category. This is only a demonstration and does not confirm official eligibility.",
        stateLabel: "State or Union Territory",
        ageLabel: "Age",
        categoryLabel: "Category",
        incomeLabel: "Approximate annual family income (₹)",
        checkButton: "Find Possible Matches",
        helpEyebrow: "WE CAN HELP YOU GET STARTED",
        helpTitle: "Having Trouble Applying?",
        helpDescription: "Choose the problem you are facing to see some basic troubleshooting steps.",
        helpOtp: "OTP not received",
        helpLogin: "Login problem",
        helpUpload: "Document upload problem",
        helpForm: "Form field problem",
        helpSubmit: "Unable to submit",
        helpStatus: "Check application status",
        helpTap: "Click to see suggestions",
        assistantTitle: "GovScheme Assistant",
        assistantSubtitle: "Ask a question about finding or applying for schemes.",
        demoBadge: "DEMO",
        chatPlaceholder: "Type your question...",
        sendButton: "Send",
        assistantNote: "This is a rule-based demo assistant, not a live AI or official government service. Do not enter Aadhaar numbers, passwords, OTPs, or other sensitive information.",
        aboutEyebrow: "ABOUT THIS PROJECT",
        aboutTitle: "Making Scheme Information Easier to Explore",
        aboutDescription: "GovScheme AI is an educational website concept that organizes government scheme information by category and provides basic application guidance. Always confirm eligibility, deadlines, documents, and application procedures on the relevant official portal.",
        footerNote: "Educational demo. Not affiliated with any government department.",
        detailsEligibility: "Eligibility information",
        detailsBenefits: "Possible benefits",
        detailsDocuments: "Documents to check",
        detailsSteps: "How to get started",
        detailsDisclaimer: "Details can change. Verify all information with the official scheme portal or relevant department before applying.",
        officialPortal: "Visit Official Portal ↗",
        noResults: "No schemes found. Try another search.",
        allResults: "Showing all scheme information.",
        categoryResults: "Showing schemes in the selected category.",
        searchResults: "Search results",
        noMatch: "No matching schemes were found. Try a different search or category.",
        possibleMatches: "Possible schemes to explore",
        eligibilityNotice: "This result is only a category-based demonstration. It does not determine whether you qualify. Check the current official rules.",
        chooseCategory: "Please choose a category.",
        selectState: "Please select a state or Union Territory.",
        enterAge: "Please enter a valid age.",
        selectCategoryFirst: "Choose a category to view related schemes.",
        chatbotGreeting: "Hello! I can provide general guidance about finding schemes and common application problems. What would you like to know?",
        chatApply: "To apply, first open the official portal for the scheme. Read its latest eligibility rules and document checklist, then follow the portal's application instructions. The process can differ between schemes.",
        chatDocuments: "Documents vary by scheme. Common examples may include identity details, residence records, income or category certificates, academic or land records, and bank details. Use only the checklist published for your chosen scheme.",
        chatOtp: "Check that your registered mobile number is correct and has network coverage. Wait briefly before requesting another OTP. Check SMS blocking settings. Never share your OTP with anyone. If the issue continues, use the portal's official support option.",
        chatLogin: "Check that you are using the correct official website and login details. Use the portal's password recovery option if available. Avoid sharing your password or OTP. If the account remains inaccessible, contact official support.",
        chatUpload: "Check the permitted file type, file size, image clarity, and whether all required pages are included. Rename the file simply if necessary and try again. Follow the exact instructions displayed on the official portal.",
        chatSubmit: "Check for fields marked as required, validation messages, and missing uploads. Confirm your internet connection and try again after a short wait. Avoid submitting repeatedly if the portal shows a pending transaction. Contact official support if the error persists.",
        chatStatus: "Use the official portal's application-status or tracking feature. You may need an application reference number or registered login. Do not share private identifiers in this chat.",
        chatFallback: "I can help with general questions about applying, documents, OTP, login, uploading files, submission errors, and application status. Please do not share personal or sensitive information. For scheme-specific decisions, consult the official portal.",
        helpOtpTitle: "OTP not received",
        helpOtpText: [
            "Check that your registered mobile number is correct and has network coverage.",
            "Wait briefly before requesting another OTP and check whether SMS messages are being blocked.",
            "Use the portal's official resend option, if available.",
            "Never share your OTP with anyone. Contact official support if the issue continues."
        ],
        helpLoginTitle: "Login problem",
        helpLoginText: [
            "Confirm that you are using the correct official website.",
            "Check your login details carefully.",
            "Use the official password recovery option if available.",
            "Never share your password or OTP. Contact the portal's official support if you remain locked out."
        ],
        helpUploadTitle: "Document upload problem",
        helpUploadText: [
            "Check the file type and size limits shown on the portal.",
            "Make sure the scan or photo is clear and all required pages are included.",
            "Try a simple filename and upload again.",
            "Follow the portal's instructions. Requirements can differ between schemes."
        ],
        helpFormTitle: "Form field problem",
        helpFormText: [
            "Read the field label and instructions carefully.",
            "Check required fields and the format requested, such as date or number format.",
            "Use details that match your supporting documents.",
            "If the field still does not accept your information, contact the scheme's official help desk."
        ],
        helpSubmitTitle: "Unable to submit",
        helpSubmitText: [
            "Look for validation messages or required fields that are incomplete.",
            "Check that all required documents have uploaded successfully.",
            "Check your connection and try again after a short wait.",
            "If the portal indicates that submission is pending, avoid repeatedly submitting. Contact official support if the problem continues."
        ],
        helpStatusTitle: "Check application status",
        helpStatusText: [
            "Open the official portal for the scheme you applied to.",
            "Look for an application-status, tracking, or beneficiary-status option.",
            "Use the reference details requested by the portal.",
            "Do not post your application number, Aadhaar number, password, or OTP in this chat."
        ]
    },

    Hindi: {
        navHome: "होम",
        navSchemes: "योजनाएँ",
        navEligibility: "पात्रता",
        navHelp: "आवेदन सहायता",
        navAbout: "परिचय",
        heroEyebrow: "सरकारी योजनाओं के लिए आपका मार्गदर्शक",
        heroTitle: "अपने लिए उपयुक्त सरकारी योजनाएँ खोजें",
        heroDescription: "योजनाएँ देखें, पात्रता समझें, लाभ जानें और आवेदन करने का तरीका सीखें।",
        searchPlaceholder: "योजना के नाम या श्रेणी से खोजें...",
        searchButton: "खोजें",
        exploreButton: "योजनाएँ देखें ↓",
        categoryEyebrow: "श्रेणी के अनुसार खोजें",
        categoryTitle: "आप किस श्रेणी की योजनाएँ खोज रहे हैं?",
        categoryDescription: "संबंधित सरकारी योजनाएँ देखने के लिए श्रेणी चुनें।",
        allSchemes: "सभी योजनाएँ",
        students: "विद्यार्थी",
        farmers: "किसान",
        women: "महिलाएँ",
        families: "परिवार",
        seniorCitizens: "वरिष्ठ नागरिक",
        schemesEyebrow: "अवसर खोजें",
        schemesTitle: "सरकारी योजनाएँ",
        eligibilityEyebrow: "त्वरित जाँच",
        eligibilityTitle: "संभावित योजनाएँ देखें",
        eligibilityDescription: "चुनी गई श्रेणी से संबंधित योजनाएँ देखने के लिए सामान्य जानकारी भरें। यह केवल एक डेमो है और आधिकारिक पात्रता की पुष्टि नहीं करता।",
        stateLabel: "राज्य या केंद्र शासित प्रदेश",
        ageLabel: "आयु",
        categoryLabel: "श्रेणी",
        incomeLabel: "अनुमानित वार्षिक पारिवारिक आय (₹)",
        checkButton: "संभावित योजनाएँ खोजें",
        helpEyebrow: "शुरुआत करने में सहायता",
        helpTitle: "आवेदन में परेशानी हो रही है?",
        helpDescription: "समस्या चुनें और सामान्य समाधान देखें।",
        helpOtp: "OTP नहीं मिला",
        helpLogin: "लॉगिन की समस्या",
        helpUpload: "दस्तावेज़ अपलोड की समस्या",
        helpForm: "फॉर्म भरने की समस्या",
        helpSubmit: "फॉर्म जमा नहीं हो रहा",
        helpStatus: "आवेदन की स्थिति देखें",
        helpTap: "सुझाव देखने के लिए क्लिक करें",
        assistantTitle: "GovScheme सहायक",
        assistantSubtitle: "योजनाएँ खोजने या आवेदन करने के बारे में पूछें।",
        demoBadge: "डेमो",
        chatPlaceholder: "अपना प्रश्न लिखें...",
        sendButton: "भेजें",
        assistantNote: "यह नियम-आधारित डेमो सहायक है, लाइव AI या सरकारी सेवा नहीं। आधार नंबर, पासवर्ड या OTP जैसी संवेदनशील जानकारी न लिखें।",
        aboutEyebrow: "इस परियोजना के बारे में",
        aboutTitle: "योजनाओं की जानकारी को आसान बनाना",
        aboutDescription: "GovScheme AI एक शैक्षणिक वेबसाइट का विचार है, जो सरकारी योजनाओं की जानकारी श्रेणी के अनुसार व्यवस्थित करता है और सामान्य आवेदन सहायता देता है। आवेदन से पहले पात्रता, अंतिम तिथि, दस्तावेज़ और प्रक्रिया की पुष्टि आधिकारिक पोर्टल पर करें।",
        footerNote: "शैक्षणिक डेमो। किसी सरकारी विभाग से संबद्ध नहीं।",
        detailsEligibility: "पात्रता की जानकारी",
        detailsBenefits: "संभावित लाभ",
        detailsDocuments: "जाँचने योग्य दस्तावेज़",
        detailsSteps: "शुरुआत कैसे करें",
        detailsDisclaimer: "जानकारी बदल सकती है। आवेदन से पहले आधिकारिक पोर्टल या संबंधित विभाग से पुष्टि करें।",
        officialPortal: "आधिकारिक पोर्टल खोलें ↗",
        noResults: "कोई योजना नहीं मिली। दूसरी खोज करें।",
        allResults: "सभी योजनाओं की जानकारी दिखाई जा रही है।",
        categoryResults: "चुनी गई श्रेणी की योजनाएँ दिखाई जा रही हैं।",
        searchResults: "खोज परिणाम",
        noMatch: "कोई मिलती-जुलती योजना नहीं मिली। दूसरी खोज या श्रेणी चुनें।",
        possibleMatches: "देखने योग्य संभावित योजनाएँ",
        eligibilityNotice: "यह परिणाम केवल श्रेणी-आधारित डेमो है। यह पात्रता तय नहीं करता। वर्तमान आधिकारिक नियम देखें।",
        chooseCategory: "कृपया श्रेणी चुनें।",
        selectState: "कृपया राज्य या केंद्र शासित प्रदेश चुनें।",
        enterAge: "कृपया सही आयु दर्ज करें।",
        selectCategoryFirst: "संबंधित योजनाएँ देखने के लिए श्रेणी चुनें।",
        chatbotGreeting: "नमस्ते! मैं योजनाएँ खोजने और आवेदन की सामान्य समस्याओं में मार्गदर्शन दे सकता हूँ। आप क्या जानना चाहते हैं?",
        chatApply: "आवेदन करने के लिए पहले योजना का आधिकारिक पोर्टल खोलें। पात्रता और दस्तावेज़ों की नवीनतम सूची पढ़ें और पोर्टल के निर्देशों का पालन करें। प्रक्रिया अलग-अलग योजनाओं में अलग हो सकती है।",
        chatDocuments: "दस्तावेज़ योजना के अनुसार अलग होते हैं। पहचान, निवास, आय या श्रेणी प्रमाणपत्र, शैक्षणिक या भूमि रिकॉर्ड और बैंक विवरण माँगे जा सकते हैं। अपनी योजना की आधिकारिक सूची देखें।",
        chatOtp: "जाँचें कि पंजीकृत मोबाइल नंबर सही है और नेटवर्क उपलब्ध है। दोबारा OTP माँगने से पहले थोड़ा इंतज़ार करें। OTP किसी के साथ साझा न करें। समस्या बनी रहे तो आधिकारिक सहायता लें।",
        chatLogin: "सही आधिकारिक वेबसाइट और लॉगिन विवरण जाँचें। उपलब्ध होने पर पासवर्ड रिकवरी विकल्प इस्तेमाल करें। पासवर्ड या OTP साझा न करें।",
        chatUpload: "पोर्टल पर फ़ाइल प्रकार, आकार और स्पष्टता की शर्तें जाँचें। सभी आवश्यक पृष्ठ शामिल करें और निर्देशों के अनुसार फिर से अपलोड करें।",
        chatSubmit: "आवश्यक फ़ील्ड, त्रुटि संदेश और अपलोड जाँचें। इंटरनेट कनेक्शन देखें और थोड़ी देर बाद प्रयास करें। समस्या बनी रहे तो आधिकारिक सहायता लें।",
        chatStatus: "योजना के आधिकारिक पोर्टल पर आवेदन स्थिति या ट्रैकिंग विकल्प देखें। निजी जानकारी इस चैट में साझा न करें।",
        chatFallback: "मैं आवेदन, दस्तावेज़, OTP, लॉगिन, अपलोड, सबमिशन और स्थिति के बारे में सामान्य जानकारी दे सकता हूँ। निजी जानकारी साझा न करें।",
        helpOtpTitle: "OTP नहीं मिला",
        helpOtpText: [
            "पंजीकृत मोबाइल नंबर और नेटवर्क जाँचें।",
            "दूसरा OTP माँगने से पहले थोड़ा इंतज़ार करें।",
            "पोर्टल का आधिकारिक री-सेंड विकल्प इस्तेमाल करें।",
            "OTP किसी को न बताएँ। समस्या बनी रहे तो आधिकारिक सहायता लें।"
        ],
        helpLoginTitle: "लॉगिन की समस्या",
        helpLoginText: [
            "सही आधिकारिक वेबसाइट खोलें।",
            "लॉगिन विवरण सावधानी से जाँचें।",
            "उपलब्ध होने पर पासवर्ड रिकवरी विकल्प इस्तेमाल करें।",
            "पासवर्ड या OTP साझा न करें और सहायता के लिए आधिकारिक पोर्टल से संपर्क करें।"
        ],
        helpUploadTitle: "दस्तावेज़ अपलोड की समस्या",
        helpUploadText: [
            "पोर्टल पर फ़ाइल प्रकार और आकार की सीमा जाँचें।",
            "दस्तावेज़ स्पष्ट हो और सभी आवश्यक पृष्ठ शामिल हों।",
            "सरल फ़ाइल नाम रखकर फिर से प्रयास करें।",
            "योजना के आधिकारिक निर्देशों का पालन करें।"
        ],
        helpFormTitle: "फॉर्म भरने की समस्या",
        helpFormText: [
            "फ़ील्ड के निर्देश ध्यान से पढ़ें।",
            "अनिवार्य फ़ील्ड और माँगा गया प्रारूप जाँचें।",
            "दस्तावेज़ों से मेल खाने वाली जानकारी भरें।",
            "समस्या बनी रहे तो आधिकारिक सहायता लें।"
        ],
        helpSubmitTitle: "फॉर्म जमा नहीं हो रहा",
        helpSubmitText: [
            "त्रुटि संदेश और अधूरे अनिवार्य फ़ील्ड जाँचें।",
            "सभी आवश्यक दस्तावेज़ सफलतापूर्वक अपलोड हुए हैं या नहीं देखें।",
            "कनेक्शन जाँचें और थोड़ी देर बाद प्रयास करें।",
            "समस्या बनी रहे तो आधिकारिक सहायता लें।"
        ],
        helpStatusTitle: "आवेदन की स्थिति देखें",
        helpStatusText: [
            "योजना का आधिकारिक पोर्टल खोलें।",
            "आवेदन स्थिति या ट्रैकिंग विकल्प खोजें।",
            "पोर्टल द्वारा माँगे गए संदर्भ विवरण का उपयोग करें।",
            "आधार नंबर, पासवर्ड या OTP यहाँ साझा न करें।"
        ]
    },

    Marathi: {
        navHome: "मुख्यपृष्ठ",
        navSchemes: "योजना",
        navEligibility: "पात्रता",
        navHelp: "अर्जासाठी मदत",
        navAbout: "माहिती",
        heroEyebrow: "सरकारी योजनांसाठी तुमचे मार्गदर्शक",
        heroTitle: "तुमच्यासाठी योग्य सरकारी योजना शोधा",
        heroDescription: "योजना पाहा, पात्रता समजून घ्या, लाभ जाणून घ्या आणि अर्ज करण्याची पद्धत शिका.",
        searchPlaceholder: "योजनेच्या नावाने किंवा श्रेणीनुसार शोधा...",
        searchButton: "शोधा",
        exploreButton: "योजना पाहा ↓",
        categoryEyebrow: "श्रेणीनुसार शोधा",
        categoryTitle: "तुम्ही कोणत्या श्रेणीतील योजना शोधत आहात?",
        categoryDescription: "संबंधित सरकारी योजना पाहण्यासाठी श्रेणी निवडा.",
        allSchemes: "सर्व योजना",
        students: "विद्यार्थी",
        farmers: "शेतकरी",
        women: "महिला",
        families: "कुटुंबे",
        seniorCitizens: "ज्येष्ठ नागरिक",
        schemesEyebrow: "संधी शोधा",
        schemesTitle: "सरकारी योजना",
        eligibilityEyebrow: "त्वरित तपासणी",
        eligibilityTitle: "संभाव्य योजना पाहा",
        eligibilityDescription: "निवडलेल्या श्रेणीशी संबंधित योजना पाहण्यासाठी प्राथमिक माहिती भरा. हा केवळ डेमो आहे; अधिकृत पात्रतेची खात्री देत नाही.",
        stateLabel: "राज्य किंवा केंद्रशासित प्रदेश",
        ageLabel: "वय",
        categoryLabel: "श्रेणी",
        incomeLabel: "अंदाजे वार्षिक कौटुंबिक उत्पन्न (₹)",
        checkButton: "संभाव्य योजना शोधा",
        helpEyebrow: "सुरुवात करण्यासाठी मदत",
        helpTitle: "अर्ज करताना अडचण येत आहे?",
        helpDescription: "समस्या निवडा आणि प्राथमिक उपाय पाहा.",
        helpOtp: "OTP मिळत नाही",
        helpLogin: "लॉगिनची समस्या",
        helpUpload: "कागदपत्र अपलोडची समस्या",
        helpForm: "फॉर्ममधील समस्या",
        helpSubmit: "अर्ज सबमिट होत नाही",
        helpStatus: "अर्जाची स्थिती तपासा",
        helpTap: "सूचना पाहण्यासाठी क्लिक करा",
        assistantTitle: "GovScheme सहाय्यक",
        assistantSubtitle: "योजना शोधणे किंवा अर्ज करण्याबद्दल प्रश्न विचारा.",
        demoBadge: "डेमो",
        chatPlaceholder: "तुमचा प्रश्न लिहा...",
        sendButton: "पाठवा",
        assistantNote: "हा नियमांवर आधारित डेमो सहाय्यक आहे; प्रत्यक्ष AI किंवा सरकारी सेवा नाही. आधार क्रमांक, पासवर्ड किंवा OTP यांसारखी संवेदनशील माहिती लिहू नका.",
        aboutEyebrow: "या प्रकल्पाबद्दल",
        aboutTitle: "योजनांची माहिती सहज उपलब्ध करणे",
        aboutDescription: "GovScheme AI ही शैक्षणिक वेबसाइटची संकल्पना आहे. ती सरकारी योजनांची माहिती श्रेणीनुसार मांडते आणि प्राथमिक अर्ज मार्गदर्शन देते. अर्ज करण्यापूर्वी पात्रता, अंतिम तारीख, कागदपत्रे आणि प्रक्रिया अधिकृत पोर्टलवर तपासा.",
        footerNote: "शैक्षणिक डेमो. कोणत्याही सरकारी विभागाशी संलग्न नाही.",
        detailsEligibility: "पात्रतेची माहिती",
        detailsBenefits: "संभाव्य लाभ",
        detailsDocuments: "तपासायची कागदपत्रे",
        detailsSteps: "सुरुवात कशी करावी",
        detailsDisclaimer: "माहिती बदलू शकते. अर्ज करण्यापूर्वी अधिकृत पोर्टल किंवा संबंधित विभागाकडून खात्री करा.",
        officialPortal: "अधिकृत पोर्टल उघडा ↗",
        noResults: "कोणतीही योजना सापडली नाही. दुसरा शोध करून पाहा.",
        allResults: "सर्व योजनांची माहिती दाखवली आहे.",
        categoryResults: "निवडलेल्या श्रेणीतील योजना दाखवल्या आहेत.",
        searchResults: "शोध परिणाम",
        noMatch: "जुळणारी योजना सापडली नाही. दुसरा शोध किंवा श्रेणी निवडा.",
        possibleMatches: "पाहण्यासाठी संभाव्य योजना",
        eligibilityNotice: "हा निकाल केवळ श्रेणीवर आधारित डेमो आहे. तो पात्रता ठरवत नाही. सध्याचे अधिकृत नियम तपासा.",
        chooseCategory: "कृपया श्रेणी निवडा.",
        selectState: "कृपया राज्य किंवा केंद्रशासित प्रदेश निवडा.",
        enterAge: "कृपया योग्य वय भरा.",
        selectCategoryFirst: "संबंधित योजना पाहण्यासाठी श्रेणी निवडा.",
        chatbotGreeting: "नमस्कार! योजना शोधणे आणि अर्जातील सामान्य अडचणी याबद्दल मी प्राथमिक मार्गदर्शन करू शकतो. तुम्हाला काय जाणून घ्यायचे आहे?",
        chatApply: "अर्ज करण्यासाठी प्रथम योजनेचे अधिकृत पोर्टल उघडा. पात्रता आणि कागदपत्रांची नवीनतम यादी वाचा आणि पोर्टलवरील सूचना पाळा. प्रत्येक योजनेची प्रक्रिया वेगळी असू शकते.",
        chatDocuments: "कागदपत्रे योजनेनुसार बदलतात. ओळख, निवास, उत्पन्न किंवा प्रवर्ग प्रमाणपत्र, शैक्षणिक किंवा जमीन नोंदी आणि बँक तपशील मागितले जाऊ शकतात. संबंधित योजनेची अधिकृत यादी तपासा.",
        chatOtp: "नोंदणीकृत मोबाईल क्रमांक आणि नेटवर्क तपासा. पुन्हा OTP मागण्यापूर्वी थोडा वेळ थांबा. OTP कोणाशीही शेअर करू नका. समस्या कायम राहिल्यास अधिकृत मदत घ्या.",
        chatLogin: "योग्य अधिकृत वेबसाइट आणि लॉगिन तपशील तपासा. उपलब्ध असल्यास पासवर्ड रिकव्हरी वापरा. पासवर्ड किंवा OTP शेअर करू नका.",
        chatUpload: "पोर्टलवरील फाइल प्रकार, आकार आणि स्पष्टतेच्या अटी तपासा. सर्व आवश्यक पाने जोडा आणि सूचनांनुसार पुन्हा अपलोड करा.",
        chatSubmit: "अनिवार्य फील्ड, त्रुटी संदेश आणि अपलोड तपासा. इंटरनेट कनेक्शन पाहून थोड्या वेळाने पुन्हा प्रयत्न करा. समस्या कायम राहिल्यास अधिकृत मदत घ्या.",
        chatStatus: "योजनेच्या अधिकृत पोर्टलवरील अर्ज स्थिती किंवा ट्रॅकिंग पर्याय वापरा. वैयक्तिक माहिती या चॅटमध्ये शेअर करू नका.",
        chatFallback: "अर्ज, कागदपत्रे, OTP, लॉगिन, अपलोड, सबमिशन आणि अर्ज स्थितीबद्दल मी सामान्य माहिती देऊ शकतो. संवेदनशील माहिती शेअर करू नका.",
        helpOtpTitle: "OTP मिळत नाही",
        helpOtpText: [
            "नोंदणीकृत मोबाईल क्रमांक आणि नेटवर्क तपासा.",
            "दुसरा OTP मागण्यापूर्वी थोडा वेळ थांबा.",
            "पोर्टलवरील अधिकृत पुन्हा पाठवा पर्याय वापरा.",
            "OTP कोणालाही सांगू नका. समस्या कायम राहिल्यास अधिकृत मदत घ्या."
        ],
        helpLoginTitle: "लॉगिनची समस्या",
        helpLoginText: [
            "योग्य अधिकृत वेबसाइट उघडा.",
            "लॉगिन तपशील काळजीपूर्वक तपासा.",
            "उपलब्ध असल्यास पासवर्ड रिकव्हरी वापरा.",
            "पासवर्ड किंवा OTP शेअर करू नका. गरज असल्यास अधिकृत मदत घ्या."
        ],
        helpUploadTitle: "कागदपत्र अपलोडची समस्या",
        helpUploadText: [
            "पोर्टलवरील फाइल प्रकार आणि आकाराची मर्यादा तपासा.",
            "स्कॅन किंवा फोटो स्पष्ट आहे आणि सर्व पाने समाविष्ट आहेत याची खात्री करा.",
            "सोपे फाइल नाव ठेवून पुन्हा प्रयत्न करा.",
            "योजनेच्या अधिकृत सूचनांचे पालन करा."
        ],
        helpFormTitle: "फॉर्ममधील समस्या",
        helpFormText: [
            "फील्डचे लेबल आणि सूचना काळजीपूर्वक वाचा.",
            "अनिवार्य फील्ड आणि अपेक्षित स्वरूप तपासा.",
            "कागदपत्रांशी जुळणारी माहिती भरा.",
            "समस्या कायम राहिल्यास अधिकृत मदत केंद्राशी संपर्क साधा."
        ],
        helpSubmitTitle: "अर्ज सबमिट होत नाही",
        helpSubmitText: [
            "त्रुटी संदेश आणि अपूर्ण अनिवार्य फील्ड तपासा.",
            "सर्व आवश्यक कागदपत्रे अपलोड झाली आहेत का ते पाहा.",
            "कनेक्शन तपासून थोड्या वेळाने पुन्हा प्रयत्न करा.",
            "समस्या कायम राहिल्यास अधिकृत मदत घ्या."
        ],
        helpStatusTitle: "अर्जाची स्थिती तपासा",
        helpStatusText: [
            "योजनेचे अधिकृत पोर्टल उघडा.",
            "अर्ज स्थिती किंवा ट्रॅकिंग पर्याय शोधा.",
            "पोर्टलने मागितलेले संदर्भ तपशील वापरा.",
            "आधार क्रमांक, पासवर्ड किंवा OTP येथे शेअर करू नका."
        ]
    }
};



/* ================= SCHEME TRANSLATIONS (title + description) ================= */

const schemeTranslations = {
    Hindi: {
        "nsp": { title: "राष्ट्रीय छात्रवृत्ति पोर्टल", description: "राष्ट्रीय छात्रवृत्ति पोर्टल के माध्यम से छात्रवृत्ति के अवसर देखें।" },
        "post-matric": { title: "पोस्ट-मैट्रिक छात्रवृत्ति योजनाएँ", description: "पढ़ाई जारी रखने वाले पात्र विद्यार्थियों के लिए पोस्ट-मैट्रिक छात्रवृत्ति की जानकारी देखें।" },
        "national-means-cum-merit": { title: "राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति योजना", description: "पात्र विद्यार्थियों को पढ़ाई जारी रखने में सहायता देने वाली छात्रवृत्ति योजना।" },
        "pm-kisan": { title: "पीएम-किसान सम्मान निधि", description: "पात्र भूमिधारक किसान परिवारों के लिए पीएम-किसान आय सहायता योजना देखें।" },
        "pmfby": { title: "प्रधानमंत्री फसल बीमा योजना", description: "प्रधानमंत्री फसल बीमा योजना के तहत फसल बीमा की जानकारी देखें।" },
        "soil-health": { title: "मृदा स्वास्थ्य कार्ड योजना", description: "कृषि भूमि की मिट्टी की जाँच और मृदा स्वास्थ्य की जानकारी जानें।" },
        "pmmvy": { title: "प्रधानमंत्री मातृ वंदना योजना", description: "प्रधानमंत्री मातृ वंदना योजना के तहत मातृत्व लाभ की जानकारी देखें।" },
        "stand-up-india": { title: "स्टैंड-अप इंडिया", description: "पात्र महिला उद्यमियों और अन्य पात्र आवेदकों के लिए बैंक ऋण की जानकारी देखें।" },
        "day-nrlm": { title: "दीनदयाल अंत्योदय योजना — राष्ट्रीय ग्रामीण आजीविका मिशन", description: "DAY-NRLM के तहत ग्रामीण आजीविका और स्वयं सहायता समूह सहायता की जानकारी देखें।" },
        "pmay": { title: "प्रधानमंत्री आवास योजना", description: "संबंधित प्रधानमंत्री आवास योजना के तहत आवास सहायता की जानकारी देखें।" },
        "pmjay": { title: "आयुष्मान भारत — पीएम-जेएवाई", description: "आयुष्मान भारत पीएम-जेएवाई की पात्रता और अस्पताल संबंधी जानकारी देखें।" },
        "ujjwala": { title: "प्रधानमंत्री उज्ज्वला योजना", description: "प्रधानमंत्री उज्ज्वला योजना के तहत एलपीजी कनेक्शन की जानकारी देखें।" },
        "ignoaps": { title: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना", description: "राष्ट्रीय सामाजिक सहायता कार्यक्रम के तहत वृद्धावस्था पेंशन की जानकारी देखें।" },
        "scss": { title: "वरिष्ठ नागरिक बचत योजना", description: "वरिष्ठ नागरिक बचत योजना और खाता खोलने के वर्तमान नियम देखें।" },
        "pmjay-seniors": { title: "वरिष्ठ नागरिकों के लिए आयुष्मान भारत पीएम-जेएवाई", description: "वरिष्ठ नागरिकों पर लागू पीएम-जेएवाई प्रावधानों की आधिकारिक जानकारी देखें।" },
        "pm-yasasvi": { title: "पीएम यशस्वी छात्रवृत्ति", description: "ओबीसी, ईबीसी और डीएनटी समुदायों के पात्र विद्यार्थियों के लिए छात्रवृत्ति सहायता।" },
        "national-overseas-scholarship": { title: "राष्ट्रीय विदेश छात्रवृत्ति", description: "विदेश में उच्च शिक्षा लेने वाले निर्दिष्ट समुदायों के पात्र विद्यार्थियों के लिए आर्थिक सहायता।" },
        "pm-kisan-maandhan": { title: "प्रधानमंत्री किसान मानधन योजना", description: "पात्र छोटे और सीमांत किसानों के लिए अंशदायी पेंशन योजना।" },
        "pm-matsya-sampada": { title: "प्रधानमंत्री मत्स्य संपदा योजना", description: "मत्स्य पालन और जलीय कृषि के विकास को सहयोग देने वाली सरकारी योजना।" },
        "agriculture-infrastructure-fund": { title: "कृषि अवसंरचना कोष", description: "पात्र कृषि अवसंरचना परियोजनाओं के लिए वित्तपोषण सुविधा।" },
        "namo-drone-didi": { title: "नमो ड्रोन दीदी", description: "पात्र महिला स्वयं सहायता समूहों को ड्रोन से कृषि सेवाएँ देने में सहयोग देने वाला कार्यक्रम।" },
        "mahila-kisan-sashaktikaran": { title: "महिला किसान सशक्तिकरण परियोजना", description: "ग्रामीण आजीविका ढाँचे के तहत महिला किसानों को सहयोग देने वाली पहल।" },
        "pm-ujjwala": { title: "प्रधानमंत्री उज्ज्वला योजना", description: "प्रधानमंत्री उज्ज्वला योजना के तहत एलपीजी कनेक्शन की जानकारी देखें।" },
        "national-food-security": { title: "राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA)", description: "पात्र परिवारों को रियायती खाद्यान्न उपलब्ध कराने वाला खाद्य सुरक्षा ढाँचा।" },
        "atal-vayo-abhyuday": { title: "अटल वयो अभ्युदय योजना", description: "वरिष्ठ नागरिकों के कल्याण और सुख-सुविधा को सहयोग देने वाला कार्यक्रम।" }
    },

    Marathi: {
        "nsp": { title: "राष्ट्रीय शिष्यवृत्ती पोर्टल", description: "राष्ट्रीय शिष्यवृत्ती पोर्टलद्वारे शिष्यवृत्तीच्या संधी पाहा." },
        "post-matric": { title: "पोस्ट-मॅट्रिक शिष्यवृत्ती योजना", description: "शिक्षण सुरू ठेवणाऱ्या पात्र विद्यार्थ्यांसाठी पोस्ट-मॅट्रिक शिष्यवृत्तीची माहिती पाहा." },
        "national-means-cum-merit": { title: "राष्ट्रीय आर्थिक-गुणवत्ता शिष्यवृत्ती योजना", description: "पात्र विद्यार्थ्यांना शिक्षण सुरू ठेवण्यास मदत करणारी शिष्यवृत्ती योजना." },
        "pm-kisan": { title: "पीएम-किसान सन्मान निधी", description: "पात्र जमीनधारक शेतकरी कुटुंबांसाठी पीएम-किसान उत्पन्न सहाय्य योजना पाहा." },
        "pmfby": { title: "प्रधानमंत्री पीक विमा योजना", description: "प्रधानमंत्री पीक विमा योजनेअंतर्गत पीक विम्याची माहिती पाहा." },
        "soil-health": { title: "मृदा आरोग्य पत्रिका योजना", description: "शेतजमिनीची माती तपासणी आणि मृदा आरोग्याची माहिती जाणून घ्या." },
        "pmmvy": { title: "प्रधानमंत्री मातृ वंदना योजना", description: "प्रधानमंत्री मातृ वंदना योजनेअंतर्गत मातृत्व लाभाची माहिती पाहा." },
        "stand-up-india": { title: "स्टँड-अप इंडिया", description: "पात्र महिला उद्योजक आणि इतर पात्र अर्जदारांसाठी बँक कर्जाची माहिती पाहा." },
        "day-nrlm": { title: "दीनदयाल अंत्योदय योजना — राष्ट्रीय ग्रामीण उपजीविका अभियान", description: "DAY-NRLM अंतर्गत ग्रामीण उपजीविका आणि स्वयंसहाय्यता गट सहाय्याची माहिती पाहा." },
        "pmay": { title: "प्रधानमंत्री आवास योजना", description: "संबंधित प्रधानमंत्री आवास योजनेअंतर्गत घरकुल सहाय्याची माहिती पाहा." },
        "pmjay": { title: "आयुष्मान भारत — पीएम-जेएवाय", description: "आयुष्मान भारत पीएम-जेएवायची पात्रता आणि रुग्णालयविषयक माहिती पाहा." },
        "ujjwala": { title: "प्रधानमंत्री उज्ज्वला योजना", description: "प्रधानमंत्री उज्ज्वला योजनेअंतर्गत एलपीजी जोडणीची माहिती पाहा." },
        "ignoaps": { title: "इंदिरा गांधी राष्ट्रीय वृद्धापकाळ निवृत्तीवेतन योजना", description: "राष्ट्रीय सामाजिक सहाय्य कार्यक्रमांतर्गत वृद्धापकाळ निवृत्तीवेतनाची माहिती पाहा." },
        "scss": { title: "ज्येष्ठ नागरिक बचत योजना", description: "ज्येष्ठ नागरिक बचत योजना आणि खाते उघडण्याचे सध्याचे नियम पाहा." },
        "pmjay-seniors": { title: "ज्येष्ठ नागरिकांसाठी आयुष्मान भारत पीएम-जेएवाय", description: "ज्येष्ठ नागरिकांना लागू असलेल्या पीएम-जेएवाय तरतुदींची अधिकृत माहिती पाहा." },
        "pm-yasasvi": { title: "पीएम यशस्वी शिष्यवृत्ती", description: "ओबीसी, ईबीसी आणि डीएनटी समुदायांतील पात्र विद्यार्थ्यांसाठी शिष्यवृत्ती सहाय्य." },
        "national-overseas-scholarship": { title: "राष्ट्रीय परदेश शिष्यवृत्ती", description: "परदेशात उच्च शिक्षण घेणाऱ्या निर्दिष्ट समुदायांतील पात्र विद्यार्थ्यांसाठी आर्थिक सहाय्य." },
        "pm-kisan-maandhan": { title: "प्रधानमंत्री किसान मानधन योजना", description: "पात्र लहान आणि अल्पभूधारक शेतकऱ्यांसाठी अंशदायी निवृत्तीवेतन योजना." },
        "pm-matsya-sampada": { title: "प्रधानमंत्री मत्स्य संपदा योजना", description: "मत्स्यव्यवसाय आणि मत्स्यशेतीच्या विकासाला पाठबळ देणारी सरकारी योजना." },
        "agriculture-infrastructure-fund": { title: "कृषी पायाभूत सुविधा निधी", description: "पात्र कृषी पायाभूत प्रकल्पांसाठी वित्तपुरवठा सुविधा." },
        "namo-drone-didi": { title: "नमो ड्रोन दीदी", description: "पात्र महिला स्वयंसहाय्यता गटांना ड्रोनद्वारे शेती सेवा देण्यासाठी मदत करणारा कार्यक्रम." },
        "mahila-kisan-sashaktikaran": { title: "महिला किसान सक्षमीकरण प्रकल्प", description: "ग्रामीण उपजीविका चौकटीअंतर्गत महिला शेतकऱ्यांना पाठबळ देणारा उपक्रम." },
        "pm-ujjwala": { title: "प्रधानमंत्री उज्ज्वला योजना", description: "प्रधानमंत्री उज्ज्वला योजनेअंतर्गत एलपीजी जोडणीची माहिती पाहा." },
        "national-food-security": { title: "राष्ट्रीय अन्न सुरक्षा कायदा (NFSA)", description: "पात्र कुटुंबांना सवलतीच्या दरात धान्य देणारी अन्न सुरक्षा व्यवस्था." },
        "atal-vayo-abhyuday": { title: "अटल वयो अभ्युदय योजना", description: "ज्येष्ठ नागरिकांच्या कल्याणासाठी आणि सुखसोयींसाठी पाठबळ देणारा कार्यक्रम." }
    }
};

// Extra text used by the scheme cards.
Object.assign(translations.English, {
    viewDetails: "View Details",
    officialPortalShort: "Official Portal ↗"
});

Object.assign(translations.Hindi, {
    viewDetails: "विवरण देखें",
    officialPortalShort: "आधिकारिक पोर्टल ↗"
});

Object.assign(translations.Marathi, {
    viewDetails: "तपशील पाहा",
    officialPortalShort: "अधिकृत पोर्टल ↗"
});

// More interface text: Sign In popup, dropdowns, placeholders, chat messages.
Object.assign(translations.English, {
    signIn: "Sign In",
    welcomeBack: "Welcome Back!",
    emailLabel: "Email Address",
    passwordLabel: "Password",
    continueGuest: "Continue as Guest",
    loginNeedBoth: "Please enter email and password.",
    loginSuccess: "Sign In successful!",

    selectStatePlaceholder: "Select your state",
    chooseCategoryOption: "Choose a category",
    agePlaceholder: "Enter your age",
    incomePlaceholder: "Enter annual income",
    selectedStateNote: "Selected state: {state}. Age entered: {age}.",

    stateMaharashtra: "Maharashtra",
    stateGujarat: "Gujarat",
    stateMadhyaPradesh: "Madhya Pradesh",
    stateRajasthan: "Rajasthan",
    stateUttarPradesh: "Uttar Pradesh",
    stateOther: "Other",

    suggestApplyLabel: "How do I apply?",
    suggestDocsLabel: "Required documents",
    suggestOtpLabel: "OTP problem",
    suggestStatusLabel: "Check application status",
    suggestApplyQuestion: "How do I apply for a scheme?",
    suggestDocsQuestion: "What documents may be required?",
    suggestOtpQuestion: "I am not receiving OTP",
    suggestStatusQuestion: "How can I check application status?",

    chatThinking: "Thinking...",
    chatBadImage: "Please select a valid image file.",
    chatBigImage: "Image size must be 10 MB or less.",
    chatNoAnswer: "Sorry, I could not generate an answer.",
    chatServerError: "Sorry, I could not connect to the AI server. Please make sure server.mjs is running.",
    selectedImageAlt: "Selected image",
    uploadedImageAlt: "Uploaded image",
    imageUploadTitle: "Upload Image",
    closeLabel: "Close"
});

Object.assign(translations.Hindi, {
    signIn: "साइन इन",
    welcomeBack: "वापसी पर स्वागत है!",
    emailLabel: "ईमेल पता",
    passwordLabel: "पासवर्ड",
    continueGuest: "अतिथि के रूप में जारी रखें",
    loginNeedBoth: "कृपया ईमेल और पासवर्ड दर्ज करें।",
    loginSuccess: "साइन इन सफल रहा!",

    selectStatePlaceholder: "अपना राज्य चुनें",
    chooseCategoryOption: "श्रेणी चुनें",
    agePlaceholder: "अपनी आयु दर्ज करें",
    incomePlaceholder: "वार्षिक आय दर्ज करें",
    selectedStateNote: "चुना गया राज्य: {state}। दर्ज की गई आयु: {age}।",

    stateMaharashtra: "महाराष्ट्र",
    stateGujarat: "गुजरात",
    stateMadhyaPradesh: "मध्य प्रदेश",
    stateRajasthan: "राजस्थान",
    stateUttarPradesh: "उत्तर प्रदेश",
    stateOther: "अन्य",

    suggestApplyLabel: "आवेदन कैसे करें?",
    suggestDocsLabel: "आवश्यक दस्तावेज़",
    suggestOtpLabel: "OTP की समस्या",
    suggestStatusLabel: "आवेदन की स्थिति जाँचें",
    suggestApplyQuestion: "मैं किसी योजना के लिए आवेदन कैसे करूँ?",
    suggestDocsQuestion: "कौन-से दस्तावेज़ आवश्यक हो सकते हैं?",
    suggestOtpQuestion: "मुझे OTP नहीं मिल रहा है",
    suggestStatusQuestion: "मैं आवेदन की स्थिति कैसे जाँच सकता हूँ?",

    chatThinking: "सोच रहा हूँ...",
    chatBadImage: "कृपया सही इमेज फ़ाइल चुनें।",
    chatBigImage: "इमेज का आकार 10 MB या उससे कम होना चाहिए।",
    chatNoAnswer: "क्षमा करें, मैं उत्तर तैयार नहीं कर सका।",
    chatServerError: "क्षमा करें, मैं AI सर्वर से जुड़ नहीं सका। कृपया जाँचें कि server.mjs चल रहा है।",
    selectedImageAlt: "चुनी गई इमेज",
    uploadedImageAlt: "अपलोड की गई इमेज",
    imageUploadTitle: "इमेज अपलोड करें",
    closeLabel: "बंद करें"
});

Object.assign(translations.Marathi, {
    signIn: "साइन इन",
    welcomeBack: "पुन्हा स्वागत आहे!",
    emailLabel: "ईमेल पत्ता",
    passwordLabel: "पासवर्ड",
    continueGuest: "पाहुणा म्हणून सुरू ठेवा",
    loginNeedBoth: "कृपया ईमेल आणि पासवर्ड टाका.",
    loginSuccess: "साइन इन यशस्वी झाले!",

    selectStatePlaceholder: "तुमचे राज्य निवडा",
    chooseCategoryOption: "श्रेणी निवडा",
    agePlaceholder: "तुमचे वय टाका",
    incomePlaceholder: "वार्षिक उत्पन्न टाका",
    selectedStateNote: "निवडलेले राज्य: {state}. टाकलेले वय: {age}.",

    stateMaharashtra: "महाराष्ट्र",
    stateGujarat: "गुजरात",
    stateMadhyaPradesh: "मध्य प्रदेश",
    stateRajasthan: "राजस्थान",
    stateUttarPradesh: "उत्तर प्रदेश",
    stateOther: "इतर",

    suggestApplyLabel: "अर्ज कसा करावा?",
    suggestDocsLabel: "आवश्यक कागदपत्रे",
    suggestOtpLabel: "OTP ची समस्या",
    suggestStatusLabel: "अर्जाची स्थिती तपासा",
    suggestApplyQuestion: "मी योजनेसाठी अर्ज कसा करू?",
    suggestDocsQuestion: "कोणती कागदपत्रे लागू शकतात?",
    suggestOtpQuestion: "मला OTP मिळत नाही",
    suggestStatusQuestion: "मी अर्जाची स्थिती कशी तपासू शकतो?",

    chatThinking: "विचार करत आहे...",
    chatBadImage: "कृपया योग्य इमेज फाइल निवडा.",
    chatBigImage: "इमेजचा आकार 10 MB किंवा त्यापेक्षा कमी असावा.",
    chatNoAnswer: "क्षमस्व, मी उत्तर तयार करू शकलो नाही.",
    chatServerError: "क्षमस्व, मी AI सर्व्हरशी जोडू शकलो नाही. कृपया server.mjs चालू आहे याची खात्री करा.",
    selectedImageAlt: "निवडलेली इमेज",
    uploadedImageAlt: "अपलोड केलेली इमेज",
    imageUploadTitle: "इमेज अपलोड करा",
    closeLabel: "बंद करा"
});

// Returns the title/description of a scheme in the selected language.
// If a translation is missing, the English text is shown.
function getSchemeText(scheme, field) {
    if (scheme.state) {
        return getStateSchemeText(scheme, field);
    }

    return schemeTranslations[currentLanguage]?.[scheme.id]?.[field] ??
           schemeDetailTranslations[currentLanguage]?.[scheme.id]?.[field] ??
           scheme[field];
}

// Returns the category name (Students, Farmers...) in the selected language.
function getCategoryName(category) {
    const categoryKeys = {
        "Students": "students",
        "Farmers": "farmers",
        "Women": "women",
        "Families": "families",
        "Senior Citizens": "seniorCitizens"
    };

    return categoryKeys[category] ? getText(categoryKeys[category]) : category;
}


/* ================= SCHEME DETAILS TRANSLATIONS ================= */

const schemeDetailTranslations = {
    Hindi: {
        "nsp": {
            eligibility: "पात्रता संबंधित छात्रवृत्ति, पाठ्यक्रम, संस्थान, आय सीमा और योजना की अन्य शर्तों पर निर्भर करती है।",
            benefits: "छात्रवृत्ति के अनुसार शैक्षणिक खर्चों में सहायता मिल सकती है। राशि और कवरेज योजना के अनुसार अलग होते हैं।",
            documents: ["माँगे अनुसार पहचान और व्यक्तिगत विवरण", "शैक्षणिक रिकॉर्ड और प्रवेश विवरण", "आय या श्रेणी प्रमाणपत्र, यदि आवश्यक हो", "बैंक विवरण, यदि आवश्यक हो", "चुनी गई छात्रवृत्ति के दिशानिर्देशों में बताए गए अन्य दस्तावेज़"],
            steps: ["आधिकारिक राष्ट्रीय छात्रवृत्ति पोर्टल पर जाएँ।", "वर्तमान में सूचीबद्ध छात्रवृत्तियाँ और उनके दिशानिर्देश पढ़ें।", "जिस छात्रवृत्ति के लिए आवेदन करना है, उसकी पात्रता और दस्तावेज़ों की शर्तें जाँचें।", "पोर्टल के निर्देशों के अनुसार पंजीकरण करें या साइन इन करें।", "आवेदन पूरा करें और आधिकारिक प्रक्रिया से जमा करें।"]
        },
        "post-matric": {
            eligibility: "शर्तें छात्रवृत्ति और राज्य के अनुसार अलग होती हैं। इनमें पाठ्यक्रम, संस्थान, समुदाय, आय और शैक्षणिक आवश्यकताएँ शामिल हो सकती हैं।",
            benefits: "कुछ योजनाएँ शिक्षा के लिए आर्थिक सहायता देती हैं। राशि और पात्र खर्च लागू दिशानिर्देशों पर निर्भर करते हैं।",
            documents: ["पिछली परीक्षा की अंकतालिका", "वर्तमान प्रवेश या बोनाफाइड विवरण", "आय प्रमाणपत्र, यदि आवश्यक हो", "जाति या श्रेणी प्रमाणपत्र, यदि आवश्यक हो", "बैंक खाता विवरण, यदि आवश्यक हो"],
            steps: ["संबंधित केंद्रीय या राज्य छात्रवृत्ति की पहचान करें।", "उसकी वर्तमान पात्रता और दस्तावेज़ों की शर्तें पढ़ें।", "योजना द्वारा बताए गए आधिकारिक पोर्टल का उपयोग करें।", "आवेदन ध्यान से भरें और माँगे गए दस्तावेज़ अपलोड करें।", "आवेदन संदर्भ संख्या भविष्य के लिए सुरक्षित रखें।"]
        },
        "national-means-cum-merit": {
            eligibility: "विद्यार्थियों को योजना की वर्तमान कक्षा, परीक्षा, आय और अन्य शर्तें पूरी करनी होंगी। विवरण के लिए आधिकारिक दिशानिर्देश देखें।",
            benefits: "वर्तमान योजना नियमों के अंतर्गत पात्र विद्यार्थियों को छात्रवृत्ति सहायता मिल सकती है।",
            documents: ["विद्यालय और विद्यार्थी का विवरण", "आवश्यक परीक्षा रिकॉर्ड", "आय प्रमाणपत्र या सहायक रिकॉर्ड", "बैंक विवरण, यदि आवश्यक हो", "वर्तमान दिशानिर्देशों में बताए गए अन्य दस्तावेज़"],
            steps: ["योजना के नवीनतम दिशानिर्देश और आवेदन कार्यक्रम पढ़ें।", "जाँचें कि आप आवश्यक शर्तें पूरी करते हैं या नहीं।", "आवेदन प्रक्रिया के बारे में अपने विद्यालय या संबंधित प्राधिकरण से पूछें।", "आधिकारिक प्रक्रिया से आवेदन जमा करें।", "अपने आवेदन का विवरण सुरक्षित रखें और अपडेट देखते रहें।"]
        },
        "pm-kisan": {
            eligibility: "पात्रता वर्तमान योजना नियमों से तय होती है, जिनमें भूमि रिकॉर्ड और अपवर्जन मानदंड शामिल हैं। हर किसान अपने आप पात्र नहीं होता।",
            benefits: "पात्र लाभार्थियों को योजना नियमों के अनुसार किस्तों में आय सहायता मिल सकती है।",
            documents: ["भूमि स्वामित्व रिकॉर्ड, जैसा लागू हो", "पोर्टल द्वारा माँगा गया पहचान विवरण", "बैंक खाते की जानकारी", "मोबाइल नंबर और अन्य आवश्यक विवरण"],
            steps: ["आधिकारिक पीएम-किसान वेबसाइट पर जाएँ।", "वर्तमान पात्रता और अपवर्जन शर्तें पढ़ें।", "पंजीकरण या लाभार्थी जानकारी जाँचने के लिए पोर्टल की सेवाओं का उपयोग करें।", "पंजीकरण या सुधार के लिए आधिकारिक निर्देशों का पालन करें।", "अपडेट देखने के लिए आधिकारिक स्थिति सेवा का उपयोग करें।"]
        },
        "pmfby": {
            eligibility: "उपलब्धता और पात्रता अधिसूचित फसलों, क्षेत्र, मौसम और वर्तमान योजना नियमों पर निर्भर करती है। लागू अधिसूचना देखें।",
            benefits: "योजना अपनी शर्तों के अनुसार फसल बीमा कवरेज देती है। कवरेज और दावा निर्णय लागू नियमों पर निर्भर करते हैं।",
            documents: ["किसान का पहचान और संपर्क विवरण", "भूमि या खेती के रिकॉर्ड, जैसा लागू हो", "बैंक विवरण", "फसल और मौसम की जानकारी", "संबंधित आवेदन के लिए आवश्यक अन्य दस्तावेज़"],
            steps: ["आधिकारिक फसल बीमा पोर्टल पर जाएँ।", "जाँचें कि आपकी फसल, क्षेत्र और मौसम कवर होते हैं या नहीं।", "वर्तमान नामांकन और अंतिम तिथि की जानकारी पढ़ें।", "आधिकारिक आवेदन प्रक्रिया का पालन करें।", "आवेदन या बीमा संदर्भ विवरण सुरक्षित रखें।"]
        },
        "soil-health": {
            eligibility: "उपलब्धता और प्रक्रियाएँ स्थानीय कृषि सेवाओं और संबंधित विभाग पर निर्भर हो सकती हैं।",
            benefits: "मिट्टी जाँच की जानकारी से किसान मिट्टी की विशेषताएँ और पोषक तत्व प्रबंधन की सिफारिशें समझ सकते हैं।",
            documents: ["किसान का संपर्क विवरण", "भूमि या खेत का विवरण", "स्थान की जानकारी", "स्थानीय कृषि कार्यालय द्वारा माँगा गया अन्य विवरण"],
            steps: ["अपने स्थानीय कृषि विभाग या कृषि विस्तार कार्यालय से संपर्क करें।", "अपने क्षेत्र में मिट्टी के नमूने और जाँच सेवाओं के बारे में पूछें।", "माँगी गई खेत और संपर्क जानकारी दें।", "नमूना संग्रह के निर्देशों का पालन करें।", "मिट्टी की रिपोर्ट देखें और ज़रूरत हो तो स्थानीय कृषि मार्गदर्शन लें।"]
        },
        "pmmvy": {
            eligibility: "पात्रता, लाभ की शर्तें और आवश्यक रिकॉर्ड वर्तमान योजना दिशानिर्देशों और आवेदक की परिस्थिति पर निर्भर करते हैं।",
            benefits: "पात्र आवेदकों को लागू नियमों के अनुसार मातृत्व संबंधी आर्थिक सहायता मिल सकती है।",
            documents: ["आवेदक का पहचान और संपर्क विवरण", "गर्भावस्था या जन्म संबंधी रिकॉर्ड, जैसा आवश्यक हो", "बैंक खाता विवरण", "वर्तमान दिशानिर्देशों में बताए गए अन्य दस्तावेज़"],
            steps: ["योजना के वर्तमान दिशानिर्देश पढ़ें।", "स्थानीय आवेदन निर्देशों के लिए संबंधित स्वास्थ्य केंद्र या योजना कार्यालय से संपर्क करें।", "अपने मामले पर लागू दस्तावेज़ और शर्तें जाँचें।", "आधिकारिक प्रक्रिया से आवेदन जमा करें।", "पावती या संदर्भ विवरण सुरक्षित रखें।"]
        },
        "stand-up-india": {
            eligibility: "आवेदक, उद्यम, स्वामित्व, ऋण और अन्य शर्तें वर्तमान योजना और ऋण नियमों से तय होती हैं।",
            benefits: "योजना पात्र आवेदकों को योग्य व्यावसायिक गतिविधियों के लिए बैंक वित्त माँगने का ढाँचा देती है, जो स्वीकृति के अधीन है।",
            documents: ["पहचान और पते का प्रमाण", "व्यवसाय योजना या परियोजना विवरण", "व्यवसाय पंजीकरण विवरण, यदि लागू हो", "ऋणदाता द्वारा माँगे गए वित्तीय और बैंक दस्तावेज़", "बैंक द्वारा माँगे गए अन्य दस्तावेज़"],
            steps: ["योजना की वर्तमान जानकारी और ऋण शर्तें देखें।", "व्यवसाय योजना तैयार करें और परियोजना की ज़रूरतों का अनुमान लगाएँ।", "किसी सहभागी बैंक से संपर्क करें या आधिकारिक योजना जानकारी देखें।", "ऋणदाता द्वारा माँगे गए दस्तावेज़ जमा करें।", "ऋणदाता लागू नियमों के अनुसार आवेदन का मूल्यांकन करेगा।"]
        },
        "day-nrlm": {
            eligibility: "भागीदारी और सहायता कार्यक्रम दिशानिर्देशों, स्थानीय क्रियान्वयन और आवेदक या समूह की परिस्थिति पर निर्भर करती है।",
            benefits: "कार्यक्रम सहायता में स्वयं सहायता समूह विकास, आजीविका गतिविधियाँ, क्षमता निर्माण और वित्तीय सेवाओं तक पहुँच शामिल हो सकती है।",
            documents: ["पहचान और संपर्क विवरण", "स्वयं सहायता समूह का विवरण, यदि लागू हो", "निवास या परिवार की जानकारी, यदि माँगी जाए", "स्थानीय कार्यक्रम कार्यालय द्वारा माँगे गए अन्य दस्तावेज़"],
            steps: ["स्थानीय ग्रामीण आजीविका मिशन या संबंधित ब्लॉक कार्यालय से संपर्क करें।", "अपने क्षेत्र में चल रहे स्वयं सहायता समूहों और कार्यक्रमों के बारे में पूछें।", "भागीदारी की शर्तें और उपलब्ध सहायता जाँचें।", "स्थानीय पंजीकरण या समूह में शामिल होने की प्रक्रिया का पालन करें।", "आवेदनों और संवाद का रिकॉर्ड रखें।"]
        },
        "pmay": {
            eligibility: "पात्रता ग्रामीण और शहरी घटकों में अलग है और वर्तमान नियमों, परिवार की परिस्थिति व अन्य शर्तों पर निर्भर करती है।",
            benefits: "पात्र परिवारों को संबंधित कार्यक्रम द्वारा तय आवास संबंधी सहायता मिल सकती है।",
            documents: ["पहचान और परिवार का विवरण", "निवास और आवास की जानकारी", "आय या श्रेणी के रिकॉर्ड, यदि आवश्यक हो", "बैंक विवरण, यदि आवश्यक हो", "संबंधित प्राधिकरण द्वारा बताए गए अन्य दस्तावेज़"],
            steps: ["पहचानें कि ग्रामीण या शहरी कार्यक्रम आपकी स्थिति पर लागू होता है।", "नवीनतम आधिकारिक पात्रता नियम पढ़ें।", "संबंधित स्थानीय प्राधिकरण से संपर्क करें या आधिकारिक पोर्टल का उपयोग करें।", "निर्धारित आवेदन या सर्वेक्षण प्रक्रिया का पालन करें।", "पावती रखें और आधिकारिक माध्यमों से अपडेट देखें।"]
        },
        "pmjay": {
            eligibility: "पात्रता लागू लाभार्थी पहचान नियमों और कार्यक्रम प्रावधानों पर आधारित है। आधिकारिक माध्यमों से जाँचें।",
            benefits: "पात्र लाभार्थियों को योजना के पैकेज और नियमों के अनुसार अस्पताल में इलाज का कवर मिल सकता है।",
            documents: ["लाभार्थी सत्यापन के लिए माँगा गया पहचान विवरण", "परिवार या लाभार्थी की जानकारी", "अधिकृत हेल्प डेस्क द्वारा माँगे गए दस्तावेज़"],
            steps: ["आधिकारिक पीएम-जेएवाई लाभार्थी सेवाओं का उपयोग करें।", "जाँचें कि आपके परिवार या लाभार्थी का विवरण सूची में है या नहीं।", "सहायता चाहिए तो अधिकृत आयुष्मान हेल्प डेस्क से संपर्क करें।", "आगे बढ़ने से पहले अस्पताल और इलाज का कवरेज पक्का करें।", "आधिकारिक सत्यापन और इलाज प्रक्रिया का पालन करें।"]
        },
        "ujjwala": {
            eligibility: "पात्रता और आवेदन की शर्तें वर्तमान योजना दिशानिर्देशों से तय होती हैं और आवेदन से पहले जाँचनी चाहिए।",
            benefits: "पात्र आवेदकों को योजना के वर्तमान प्रावधानों के अनुसार एलपीजी कनेक्शन सहायता मिल सकती है।",
            documents: ["पहचान और परिवार का विवरण", "पता या निवास का विवरण", "राशन कार्ड या अन्य पारिवारिक रिकॉर्ड, यदि आवश्यक हो", "बैंक विवरण, यदि आवश्यक हो", "अधिकृत एलपीजी वितरक द्वारा माँगे गए दस्तावेज़"],
            steps: ["उज्ज्वला योजना के नवीनतम दिशानिर्देश पढ़ें।", "अधिकृत एलपीजी वितरक से संपर्क करें या आधिकारिक पोर्टल का उपयोग करें।", "वर्तमान पात्रता और दस्तावेज़ों की शर्तें जाँचें।", "निर्धारित आवेदन प्रक्रिया पूरी करें।", "पावती रखें और आधिकारिक माध्यमों से पूछताछ करें।"]
        },
        "ignoaps": {
            eligibility: "पात्रता वर्तमान कार्यक्रम नियमों, आयु, परिवार या गरीबी मानदंड और राज्य के क्रियान्वयन पर निर्भर करती है।",
            benefits: "पात्र लाभार्थियों को लागू केंद्र और राज्य प्रावधानों के अनुसार पेंशन सहायता मिल सकती है।",
            documents: ["आयु प्रमाण", "पहचान और निवास का विवरण", "आय या परिवार के रिकॉर्ड, यदि आवश्यक हो", "बैंक खाता विवरण", "स्थानीय प्राधिकरण द्वारा माँगे गए अन्य दस्तावेज़"],
            steps: ["अपने स्थानीय समाज कल्याण कार्यालय या संबंधित प्राधिकरण से संपर्क करें।", "अपने राज्य में वृद्धावस्था पेंशन की पात्रता और आवेदन प्रक्रिया के बारे में पूछें।", "आवश्यक दस्तावेज़ इकट्ठा करें।", "निर्धारित माध्यम से आवेदन जमा करें।", "पावती रखें और संबंधित कार्यालय से स्थिति जाँचें।"]
        },
        "scss": {
            eligibility: "पात्रता, जमा सीमा, ब्याज दर और खाते की शर्तें वर्तमान सरकारी नियमों के अधीन हैं। निवेश से पहले जाँचें।",
            benefits: "यह सरकार समर्थित बचत विकल्प है, जिसकी शर्तें वर्तमान नियमों से तय होती हैं। रिटर्न और शर्तें बदल सकती हैं।",
            documents: ["आयु और पहचान का प्रमाण", "पते का प्रमाण", "फोटो, यदि माँगे जाएँ", "खाता खोलने का फॉर्म", "बैंक या डाकघर द्वारा माँगे गए अन्य दस्तावेज़"],
            steps: ["योजना के वर्तमान नियम, जमा सीमा और ब्याज दर देखें।", "योजना देने वाले अधिकृत बैंक या डाकघर से संपर्क करें।", "खाता खोलने का नवीनतम फॉर्म और दस्तावेज़ सूची माँगें।", "फॉर्म भरें और संस्था की प्रक्रिया का पालन करें।", "खाते के दस्तावेज़ सुरक्षित रखें और लागू शर्तें देखते रहें।"]
        },
        "pmjay-seniors": {
            eligibility: "कवरेज और पात्रता वर्तमान कार्यक्रम प्रावधानों और लाभार्थी सत्यापन पर निर्भर करती है। आधिकारिक माध्यमों से नियम जाँचें।",
            benefits: "पात्र लाभार्थी लागू योजना नियमों और अस्पताल व्यवस्था के अनुसार कवर की गई स्वास्थ्य सेवाएँ ले सकते हैं।",
            documents: ["सत्यापन के लिए माँगा गया पहचान विवरण", "आयु या लाभार्थी की जानकारी, यदि आवश्यक हो", "अधिकृत हेल्प डेस्क द्वारा माँगे गए अन्य दस्तावेज़"],
            steps: ["आधिकारिक पीएम-जेएवाई लाभार्थी पोर्टल पर जाएँ।", "वरिष्ठ नागरिकों के लिए वर्तमान प्रावधान पढ़ें।", "अधिकृत प्रक्रिया से लाभार्थी विवरण जाँचें।", "स्पष्टीकरण के लिए अधिकृत हेल्प डेस्क से संपर्क करें।", "इलाज से पहले कवरेज और अस्पताल की भागीदारी पक्की करें।"]
        },
        "pm-yasasvi": {
            eligibility: "पात्रता विद्यार्थी के समुदाय, कक्षा, पारिवारिक आय और वर्तमान योजना दिशानिर्देशों पर निर्भर करती है।",
            benefits: "पात्र विद्यार्थियों की शिक्षा के लिए आर्थिक सहायता।",
            documents: ["आधार कार्ड", "आय प्रमाणपत्र", "जाति प्रमाणपत्र", "पिछली अंकतालिका", "बैंक विवरण"],
            steps: ["नवीनतम पात्रता नियम जाँचें।", "राष्ट्रीय छात्रवृत्ति पोर्टल पर जाएँ।", "पंजीकरण करें और आवेदन पूरा करें।", "आवश्यक दस्तावेज़ जमा करें।"]
        },
        "national-overseas-scholarship": {
            eligibility: "आवेदकों को वर्तमान आधिकारिक दिशानिर्देशों में दी गई समुदाय, आय, शैक्षणिक और अन्य शर्तें पूरी करनी होंगी।",
            benefits: "स्वीकृत विदेशी उच्च शिक्षा के खर्चों के लिए पात्र सहायता।",
            documents: ["पहचान प्रमाण", "समुदाय प्रमाणपत्र", "आय प्रमाणपत्र", "शैक्षणिक रिकॉर्ड", "प्रवेश दस्तावेज़"],
            steps: ["आधिकारिक योजना दिशानिर्देश पढ़ें।", "पात्रता और उपलब्ध स्थान जाँचें।", "आवेदन खुलने पर आधिकारिक पोर्टल से आवेदन करें।", "दस्तावेज़ सत्यापन पूरा करें।"]
        },
        "pm-kisan-maandhan": {
            eligibility: "सामान्यतः 18–40 वर्ष के छोटे और सीमांत किसानों के लिए, योजना के अपवर्जन और नियमों के अधीन।",
            benefits: "नामांकित पात्र किसान निर्धारित आयु के बाद, योजना की शर्तों के अधीन, मासिक पेंशन पा सकते हैं।",
            documents: ["आधार कार्ड", "बैंक खाता विवरण", "भूमि स्वामित्व रिकॉर्ड", "मोबाइल नंबर"],
            steps: ["पात्रता शर्तें जाँचें।", "आधिकारिक मानधन पोर्टल या अधिकृत नामांकन केंद्र पर जाएँ।", "पंजीकरण और अंशदान की औपचारिकताएँ पूरी करें।"]
        },
        "pm-matsya-sampada": {
            eligibility: "मछुआरे, मत्स्य किसान और अन्य पात्र मत्स्य क्षेत्र के लाभार्थी, योजना दिशानिर्देशों के अनुसार।",
            benefits: "पात्र मत्स्य विकास गतिविधियों और परियोजनाओं के लिए सहायता।",
            documents: ["पहचान प्रमाण", "पते का प्रमाण", "परियोजना विवरण", "बैंक विवरण", "आवश्यकतानुसार अन्य दस्तावेज़"],
            steps: ["संबंधित मत्स्य विभाग के दिशानिर्देश जाँचें।", "राज्य मत्स्य विभाग से संपर्क करें।", "आवेदन और आवश्यक परियोजना दस्तावेज़ जमा करें।"]
        },
        "agriculture-infrastructure-fund": {
            eligibility: "पात्र किसान, किसान उत्पादक संगठन, कृषि-उद्यमी और अन्य संस्थाएँ, योजना नियमों के अधीन।",
            benefits: "पात्र फसल-कटाई उपरांत और सामुदायिक खेती अवसंरचना परियोजनाओं के लिए वित्तीय सहायता।",
            documents: ["पहचान प्रमाण", "परियोजना रिपोर्ट", "बैंक विवरण", "भूमि या परियोजना दस्तावेज़", "अन्य आवश्यक रिकॉर्ड"],
            steps: ["योजना दिशानिर्देश देखें।", "परियोजना प्रस्ताव तैयार करें।", "आधिकारिक माध्यम से आवेदन करें।", "ऋणदाता और विभाग की औपचारिकताएँ पूरी करें।"]
        },
        "namo-drone-didi": {
            eligibility: "कार्यक्रम के तहत चुने गए और लागू दिशानिर्देश पूरे करने वाले महिला स्वयं सहायता समूह।",
            benefits: "पात्र समूहों को कार्यक्रम में बताए अनुसार ड्रोन उपकरण, प्रशिक्षण और सेवाएँ पाने में सहायता।",
            documents: ["स्वयं सहायता समूह पंजीकरण विवरण", "सदस्यों के पहचान दस्तावेज़", "बैंक विवरण", "प्राधिकरणों द्वारा माँगे गए अन्य दस्तावेज़"],
            steps: ["संबंधित स्वयं सहायता समूह या कृषि विभाग से संपर्क करें।", "चयन और पात्रता की शर्तें जाँचें।", "आधिकारिक प्रशिक्षण और आवेदन प्रक्रिया का पालन करें।"]
        },
        "mahila-kisan-sashaktikaran": {
            eligibility: "पात्र ग्रामीण महिला किसान और समूह, जो कार्यक्रम क्रियान्वयन दिशानिर्देशों के अंतर्गत आते हैं।",
            benefits: "कृषि कौशल, टिकाऊ आजीविका और खेती की गतिविधियों में बेहतर भागीदारी के लिए सहायता।",
            documents: ["पहचान प्रमाण", "स्वयं सहायता समूह का विवरण, यदि लागू हो", "बैंक विवरण", "स्थानीय स्तर पर माँगे गए अन्य दस्तावेज़"],
            steps: ["स्थानीय ग्रामीण आजीविका मिशन या संबंधित विभाग से संपर्क करें।", "स्थानीय कार्यक्रम क्रियान्वयन के बारे में पूछें।", "आवश्यक नामांकन प्रक्रिया पूरी करें।"]
        },
        "pm-ujjwala": {
            eligibility: "योजना की अभाव और अन्य शर्तें पूरी करने वाले परिवारों की पात्र वयस्क महिलाएँ।",
            benefits: "वर्तमान योजना नियमों के अनुसार एलपीजी कनेक्शन से जुड़ी सहायता।",
            documents: ["आधार कार्ड", "राशन कार्ड या पारिवारिक संरचना का प्रमाण", "बैंक विवरण", "पते का प्रमाण"],
            steps: ["वर्तमान पात्रता जाँचें।", "अधिकृत एलपीजी वितरक से संपर्क करें।", "आवेदन और आवश्यक दस्तावेज़ जमा करें।"]
        },
        "national-food-security": {
            eligibility: "लागू केंद्र और राज्य नियमों के तहत पात्र पहचाने गए परिवार।",
            benefits: "पात्रता के अधीन, सार्वजनिक वितरण प्रणाली के माध्यम से निर्धारित खाद्यान्न की उपलब्धता।",
            documents: ["राशन कार्ड", "पहचान प्रमाण", "निवास विवरण", "राज्य द्वारा माँगे गए अन्य दस्तावेज़"],
            steps: ["स्थानीय खाद्य एवं नागरिक आपूर्ति कार्यालय से संपर्क करें।", "राशन कार्ड की पात्रता जाँचें।", "अधिकृत प्रक्रिया से आवेदन करें या परिवार का विवरण अपडेट करें।"]
        },
        "atal-vayo-abhyuday": {
            eligibility: "वरिष्ठ नागरिक और संबंधित कार्यक्रम घटकों के अंतर्गत आने वाले पात्र संगठन या लाभार्थी।",
            benefits: "लागू वरिष्ठ नागरिक कल्याण सेवाओं और पहलों के माध्यम से सहायता।",
            documents: ["आयु प्रमाण", "पहचान प्रमाण", "पते का प्रमाण", "आवश्यकतानुसार अन्य दस्तावेज़"],
            steps: ["संबंधित सामाजिक न्याय या वरिष्ठ नागरिक कल्याण विभाग से संपर्क करें।", "जाँचें कि स्थानीय स्तर पर कौन-सी सेवाएँ उपलब्ध हैं।", "लागू पंजीकरण प्रक्रिया का पालन करें।"]
        }
    },

    Marathi: {
        "nsp": {
            eligibility: "पात्रता संबंधित शिष्यवृत्ती, अभ्यासक्रम, संस्था, उत्पन्न मर्यादा आणि योजनेच्या इतर अटींवर अवलंबून असते.",
            benefits: "शिष्यवृत्तीनुसार शैक्षणिक खर्चासाठी मदत मिळू शकते. रक्कम आणि कव्हरेज योजनेनुसार बदलते.",
            documents: ["मागितल्यानुसार ओळख आणि वैयक्तिक तपशील", "शैक्षणिक नोंदी आणि प्रवेश तपशील", "उत्पन्न किंवा प्रवर्ग प्रमाणपत्र, आवश्यक असल्यास", "बँक तपशील, आवश्यक असल्यास", "निवडलेल्या शिष्यवृत्तीच्या मार्गदर्शक सूचनांमध्ये नमूद केलेली इतर कागदपत्रे"],
            steps: ["अधिकृत राष्ट्रीय शिष्यवृत्ती पोर्टलला भेट द्या.", "सध्या सूचीबद्ध असलेल्या शिष्यवृत्ती आणि त्यांच्या मार्गदर्शक सूचना वाचा.", "तुम्हाला हवी असलेल्या शिष्यवृत्तीची पात्रता आणि कागदपत्रांच्या अटी तपासा.", "पोर्टलच्या सूचनेनुसार नोंदणी करा किंवा साइन इन करा.", "अर्ज पूर्ण करा आणि अधिकृत प्रक्रियेने सादर करा."]
        },
        "post-matric": {
            eligibility: "अटी शिष्यवृत्ती आणि राज्यानुसार वेगळ्या असतात. त्यात अभ्यासक्रम, संस्था, समुदाय, उत्पन्न आणि शैक्षणिक आवश्यकता असू शकतात.",
            benefits: "काही योजना शिक्षणासाठी आर्थिक मदत देतात. रक्कम आणि पात्र खर्च लागू मार्गदर्शक सूचनांवर अवलंबून असतात.",
            documents: ["मागील परीक्षेचे गुणपत्रक", "सध्याचा प्रवेश किंवा बोनाफाईड तपशील", "उत्पन्न प्रमाणपत्र, आवश्यक असल्यास", "जात किंवा प्रवर्ग प्रमाणपत्र, आवश्यक असल्यास", "बँक खात्याचा तपशील, आवश्यक असल्यास"],
            steps: ["संबंधित केंद्र किंवा राज्य शिष्यवृत्ती ओळखा.", "तिची सध्याची पात्रता आणि कागदपत्रांच्या अटी वाचा.", "योजनेने सांगितलेल्या अधिकृत पोर्टलचा वापर करा.", "अर्ज काळजीपूर्वक भरा आणि मागितलेली कागदपत्रे अपलोड करा.", "अर्जाचा संदर्भ क्रमांक भविष्यासाठी जपून ठेवा."]
        },
        "national-means-cum-merit": {
            eligibility: "विद्यार्थ्यांनी योजनेचे सध्याचे इयत्ता, परीक्षा, उत्पन्न आणि इतर निकष पूर्ण करणे आवश्यक आहे. तपशीलांसाठी अधिकृत मार्गदर्शक सूचना पाहा.",
            benefits: "सध्याच्या योजनेच्या नियमांनुसार पात्र ठरणाऱ्या विद्यार्थ्यांना शिष्यवृत्ती सहाय्य मिळू शकते.",
            documents: ["शाळा आणि विद्यार्थ्याचा तपशील", "आवश्यक परीक्षा नोंदी", "उत्पन्न प्रमाणपत्र किंवा सहाय्यक नोंदी", "बँक तपशील, आवश्यक असल्यास", "सध्याच्या मार्गदर्शक सूचनांमध्ये नमूद केलेली इतर कागदपत्रे"],
            steps: ["योजनेच्या ताज्या मार्गदर्शक सूचना आणि अर्जाचे वेळापत्रक वाचा.", "तुम्ही आवश्यक अटी पूर्ण करता का ते तपासा.", "अर्ज प्रक्रियेबद्दल तुमच्या शाळेकडे किंवा संबंधित प्राधिकरणाकडे चौकशी करा.", "अधिकृत प्रक्रियेद्वारे अर्ज सादर करा.", "अर्जाचा तपशील जपून ठेवा आणि अद्यतने तपासत राहा."]
        },
        "pm-kisan": {
            eligibility: "पात्रता सध्याच्या योजनेच्या नियमांनुसार ठरते, ज्यात जमीन नोंदी आणि वगळण्याचे निकष समाविष्ट आहेत. प्रत्येक शेतकरी आपोआप पात्र ठरत नाही.",
            benefits: "पात्र लाभार्थ्यांना योजनेच्या नियमांनुसार हप्त्यांमध्ये उत्पन्न सहाय्य मिळू शकते.",
            documents: ["जमीन मालकीच्या नोंदी, लागू असल्यास", "पोर्टलने मागितलेला ओळख तपशील", "बँक खात्याची माहिती", "मोबाईल क्रमांक आणि इतर आवश्यक तपशील"],
            steps: ["अधिकृत पीएम-किसान वेबसाइटला भेट द्या.", "सध्याच्या पात्रता आणि वगळण्याच्या अटी वाचा.", "नोंदणी किंवा लाभार्थी माहिती तपासण्यासाठी पोर्टलच्या सेवांचा वापर करा.", "नोंदणी किंवा दुरुस्तीसाठी अधिकृत सूचनांचे पालन करा.", "अद्यतने पाहण्यासाठी अधिकृत स्थिती सेवा वापरा."]
        },
        "pmfby": {
            eligibility: "उपलब्धता आणि पात्रता अधिसूचित पिके, क्षेत्र, हंगाम आणि सध्याच्या योजनेच्या नियमांवर अवलंबून असते. लागू अधिसूचना तपासा.",
            benefits: "योजना तिच्या अटींनुसार पीक विमा संरक्षण देते. संरक्षण आणि दावा निर्णय लागू नियमांवर अवलंबून असतात.",
            documents: ["शेतकऱ्याचा ओळख आणि संपर्क तपशील", "जमीन किंवा लागवडीच्या नोंदी, लागू असल्यास", "बँक तपशील", "पीक आणि हंगामाची माहिती", "संबंधित अर्जासाठी आवश्यक इतर कागदपत्रे"],
            steps: ["अधिकृत पीक विमा पोर्टलला भेट द्या.", "तुमचे पीक, क्षेत्र आणि हंगाम समाविष्ट आहेत का ते तपासा.", "सध्याची नोंदणी आणि अंतिम तारखेची माहिती वाचा.", "अधिकृत अर्ज प्रक्रियेचे पालन करा.", "अर्ज किंवा विम्याचा संदर्भ तपशील जपून ठेवा."]
        },
        "soil-health": {
            eligibility: "उपलब्धता आणि प्रक्रिया स्थानिक कृषी सेवा आणि संबंधित विभागावर अवलंबून असू शकतात.",
            benefits: "माती तपासणीच्या माहितीमुळे शेतकऱ्यांना मातीची वैशिष्ट्ये आणि पोषकद्रव्य व्यवस्थापनाच्या शिफारशी समजण्यास मदत होते.",
            documents: ["शेतकऱ्याचा संपर्क तपशील", "जमीन किंवा शेताचा तपशील", "ठिकाणाची माहिती", "स्थानिक कृषी कार्यालयाने मागितलेला इतर तपशील"],
            steps: ["तुमच्या स्थानिक कृषी विभाग किंवा कृषी विस्तार कार्यालयाशी संपर्क साधा.", "तुमच्या भागातील माती नमुना आणि तपासणी सेवांबद्दल विचारा.", "मागितलेली शेत आणि संपर्क माहिती द्या.", "नमुना गोळा करण्याच्या सूचनांचे पालन करा.", "मातीचा अहवाल तपासा आणि गरज असल्यास स्थानिक कृषी मार्गदर्शन घ्या."]
        },
        "pmmvy": {
            eligibility: "पात्रता, लाभाच्या अटी आणि आवश्यक नोंदी सध्याच्या योजनेच्या मार्गदर्शक सूचना आणि अर्जदाराच्या परिस्थितीवर अवलंबून असतात.",
            benefits: "पात्र अर्जदारांना लागू नियमांनुसार मातृत्वाशी संबंधित आर्थिक सहाय्य मिळू शकते.",
            documents: ["अर्जदाराचा ओळख आणि संपर्क तपशील", "गर्भधारणा किंवा जन्माशी संबंधित नोंदी, आवश्यक असल्यास", "बँक खात्याचा तपशील", "सध्याच्या मार्गदर्शक सूचनांमध्ये नमूद केलेली इतर कागदपत्रे"],
            steps: ["योजनेच्या सध्याच्या मार्गदर्शक सूचना वाचा.", "स्थानिक अर्ज सूचनांसाठी संबंधित आरोग्य केंद्र किंवा योजना कार्यालयाशी संपर्क साधा.", "तुमच्या प्रकरणाला लागू असलेली कागदपत्रे आणि अटी तपासा.", "अधिकृत प्रक्रियेद्वारे अर्ज सादर करा.", "पोचपावती किंवा संदर्भ तपशील जपून ठेवा."]
        },
        "stand-up-india": {
            eligibility: "अर्जदार, उद्योग, मालकी, कर्ज आणि इतर अटी सध्याच्या योजना आणि कर्ज नियमांनुसार ठरतात.",
            benefits: "योजना पात्र अर्जदारांना पात्र व्यवसायिक उपक्रमांसाठी बँक वित्तपुरवठा मागण्याची चौकट देते, जी मंजुरीच्या अधीन असते.",
            documents: ["ओळख आणि पत्त्याचा पुरावा", "व्यवसाय आराखडा किंवा प्रकल्प तपशील", "व्यवसाय नोंदणी तपशील, लागू असल्यास", "कर्जदात्याने मागितलेली आर्थिक आणि बँक कागदपत्रे", "बँकेने मागितलेली इतर कागदपत्रे"],
            steps: ["योजनेची सध्याची माहिती आणि कर्जाच्या अटी पाहा.", "व्यवसाय आराखडा तयार करा आणि प्रकल्पाच्या गरजांचा अंदाज घ्या.", "सहभागी बँकेशी संपर्क साधा किंवा अधिकृत योजना माहिती पाहा.", "कर्जदात्याने मागितलेली कागदपत्रे सादर करा.", "कर्जदाता लागू नियमांनुसार अर्जाचे मूल्यांकन करेल."]
        },
        "day-nrlm": {
            eligibility: "सहभाग आणि सहाय्य कार्यक्रमाच्या मार्गदर्शक सूचना, स्थानिक अंमलबजावणी आणि अर्जदार किंवा गटाच्या परिस्थितीवर अवलंबून असते.",
            benefits: "कार्यक्रम सहाय्यात स्वयंसहाय्यता गट विकास, उपजीविका उपक्रम, क्षमता बांधणी आणि आर्थिक सेवांपर्यंत पोहोच यांचा समावेश असू शकतो.",
            documents: ["ओळख आणि संपर्क तपशील", "स्वयंसहाय्यता गटाचा तपशील, लागू असल्यास", "निवास किंवा कुटुंबाची माहिती, मागितल्यास", "स्थानिक कार्यक्रम कार्यालयाने मागितलेली इतर कागदपत्रे"],
            steps: ["स्थानिक ग्रामीण उपजीविका अभियान किंवा संबंधित गट कार्यालयाशी संपर्क साधा.", "तुमच्या भागात सुरू असलेल्या स्वयंसहाय्यता गट आणि कार्यक्रमांबद्दल विचारा.", "सहभागाच्या अटी आणि उपलब्ध सहाय्य तपासा.", "स्थानिक नोंदणी किंवा गटात सामील होण्याच्या प्रक्रियेचे पालन करा.", "अर्ज आणि पत्रव्यवहाराच्या नोंदी ठेवा."]
        },
        "pmay": {
            eligibility: "पात्रता ग्रामीण आणि शहरी घटकांमध्ये वेगळी आहे आणि सध्याचे नियम, कुटुंबाची परिस्थिती व इतर अटींवर अवलंबून असते.",
            benefits: "पात्र कुटुंबांना संबंधित कार्यक्रमाने ठरवलेले घरकुलाशी संबंधित सहाय्य मिळू शकते.",
            documents: ["ओळख आणि कुटुंबाचा तपशील", "निवास आणि घराची माहिती", "उत्पन्न किंवा प्रवर्ग नोंदी, आवश्यक असल्यास", "बँक तपशील, आवश्यक असल्यास", "संबंधित प्राधिकरणाने नमूद केलेली इतर कागदपत्रे"],
            steps: ["ग्रामीण की शहरी कार्यक्रम तुमच्या परिस्थितीला लागू आहे ते ओळखा.", "ताजे अधिकृत पात्रता नियम वाचा.", "संबंधित स्थानिक प्राधिकरणाशी संपर्क साधा किंवा अधिकृत पोर्टल वापरा.", "विहित अर्ज किंवा सर्वेक्षण प्रक्रियेचे पालन करा.", "पोचपावती ठेवा आणि अधिकृत माध्यमांतून अद्यतने तपासा."]
        },
        "pmjay": {
            eligibility: "पात्रता लागू लाभार्थी ओळख नियम आणि कार्यक्रमाच्या तरतुदींवर आधारित आहे. अधिकृत माध्यमांतून तपासा.",
            benefits: "पात्र लाभार्थ्यांना योजनेच्या पॅकेज आणि नियमांनुसार रुग्णालयातील उपचारांचे संरक्षण मिळू शकते.",
            documents: ["लाभार्थी पडताळणीसाठी मागितलेला ओळख तपशील", "कुटुंब किंवा लाभार्थ्याची माहिती", "अधिकृत हेल्प डेस्कने मागितलेली कागदपत्रे"],
            steps: ["अधिकृत पीएम-जेएवाय लाभार्थी सेवांचा वापर करा.", "तुमच्या कुटुंबाचा किंवा लाभार्थ्याचा तपशील यादीत आहे का ते तपासा.", "मदत हवी असल्यास अधिकृत आयुष्मान हेल्प डेस्कशी संपर्क साधा.", "पुढे जाण्यापूर्वी रुग्णालय आणि उपचारांचे संरक्षण निश्चित करा.", "अधिकृत पडताळणी आणि उपचार प्रक्रियेचे पालन करा."]
        },
        "ujjwala": {
            eligibility: "पात्रता आणि अर्जाच्या अटी सध्याच्या योजनेच्या मार्गदर्शक सूचनांनुसार ठरतात आणि अर्ज करण्यापूर्वी तपासाव्यात.",
            benefits: "पात्र अर्जदारांना योजनेच्या सध्याच्या तरतुदींनुसार एलपीजी जोडणी सहाय्य मिळू शकते.",
            documents: ["ओळख आणि कुटुंबाचा तपशील", "पत्ता किंवा निवासाचा तपशील", "रेशन कार्ड किंवा इतर कौटुंबिक नोंदी, आवश्यक असल्यास", "बँक तपशील, आवश्यक असल्यास", "अधिकृत एलपीजी वितरकाने मागितलेली कागदपत्रे"],
            steps: ["उज्ज्वला योजनेच्या ताज्या मार्गदर्शक सूचना वाचा.", "अधिकृत एलपीजी वितरकाशी संपर्क साधा किंवा अधिकृत पोर्टल वापरा.", "सध्याची पात्रता आणि कागदपत्रांच्या अटी तपासा.", "विहित अर्ज प्रक्रिया पूर्ण करा.", "पोचपावती ठेवा आणि अधिकृत माध्यमांतून पाठपुरावा करा."]
        },
        "ignoaps": {
            eligibility: "पात्रता सध्याचे कार्यक्रम नियम, वय, कुटुंब किंवा दारिद्र्य निकष आणि राज्याच्या अंमलबजावणीवर अवलंबून असते.",
            benefits: "पात्र लाभार्थ्यांना लागू केंद्र आणि राज्य तरतुदींनुसार निवृत्तीवेतन सहाय्य मिळू शकते.",
            documents: ["वयाचा पुरावा", "ओळख आणि निवासाचा तपशील", "उत्पन्न किंवा कुटुंबाच्या नोंदी, आवश्यक असल्यास", "बँक खात्याचा तपशील", "स्थानिक प्राधिकरणाने मागितलेली इतर कागदपत्रे"],
            steps: ["तुमच्या स्थानिक समाजकल्याण कार्यालय किंवा संबंधित प्राधिकरणाशी संपर्क साधा.", "तुमच्या राज्यातील वृद्धापकाळ निवृत्तीवेतनाची पात्रता आणि अर्ज प्रक्रियेबद्दल विचारा.", "आवश्यक कागदपत्रे गोळा करा.", "विहित माध्यमातून अर्ज सादर करा.", "पोचपावती ठेवा आणि संबंधित कार्यालयाकडून स्थिती तपासा."]
        },
        "scss": {
            eligibility: "पात्रता, ठेव मर्यादा, व्याजदर आणि खात्याच्या अटी सध्याच्या सरकारी नियमांच्या अधीन आहेत. गुंतवणुकीपूर्वी तपासा.",
            benefits: "हा सरकारी पाठबळ असलेला बचत पर्याय आहे, ज्याच्या अटी सध्याच्या नियमांनुसार ठरतात. परतावा आणि अटी बदलू शकतात.",
            documents: ["वय आणि ओळखीचा पुरावा", "पत्त्याचा पुरावा", "छायाचित्रे, मागितल्यास", "खाते उघडण्याचा अर्ज", "बँक किंवा पोस्ट ऑफिसने मागितलेली इतर कागदपत्रे"],
            steps: ["योजनेचे सध्याचे नियम, ठेव मर्यादा आणि व्याजदर पाहा.", "योजना देणाऱ्या अधिकृत बँक किंवा पोस्ट ऑफिसशी संपर्क साधा.", "खाते उघडण्याचा ताजा अर्ज आणि कागदपत्रांची यादी मागा.", "अर्ज भरा आणि संस्थेच्या प्रक्रियेचे पालन करा.", "खात्याची कागदपत्रे जपून ठेवा आणि लागू अटी तपासत राहा."]
        },
        "pmjay-seniors": {
            eligibility: "संरक्षण आणि पात्रता सध्याच्या कार्यक्रम तरतुदी आणि लाभार्थी पडताळणीवर अवलंबून असते. अधिकृत माध्यमांतून नियम तपासा.",
            benefits: "पात्र लाभार्थी लागू योजना नियम आणि रुग्णालय व्यवस्थेनुसार समाविष्ट आरोग्य सेवा घेऊ शकतात.",
            documents: ["पडताळणीसाठी मागितलेला ओळख तपशील", "वय किंवा लाभार्थ्याची माहिती, आवश्यक असल्यास", "अधिकृत हेल्प डेस्कने मागितलेली इतर कागदपत्रे"],
            steps: ["अधिकृत पीएम-जेएवाय लाभार्थी पोर्टलला भेट द्या.", "ज्येष्ठ नागरिकांसाठीच्या सध्याच्या तरतुदी वाचा.", "अधिकृत प्रक्रियेद्वारे लाभार्थी तपशील तपासा.", "स्पष्टीकरणासाठी अधिकृत हेल्प डेस्कशी संपर्क साधा.", "उपचारांपूर्वी संरक्षण आणि रुग्णालयाचा सहभाग निश्चित करा."]
        },
        "pm-yasasvi": {
            eligibility: "पात्रता विद्यार्थ्याचा समुदाय, इयत्ता, कौटुंबिक उत्पन्न आणि सध्याच्या योजनेच्या मार्गदर्शक सूचनांवर अवलंबून असते.",
            benefits: "पात्र विद्यार्थ्यांच्या शिक्षणासाठी आर्थिक सहाय्य.",
            documents: ["आधार कार्ड", "उत्पन्न प्रमाणपत्र", "जात प्रमाणपत्र", "मागील गुणपत्रक", "बँक तपशील"],
            steps: ["ताजे पात्रता नियम तपासा.", "राष्ट्रीय शिष्यवृत्ती पोर्टलला भेट द्या.", "नोंदणी करा आणि अर्ज पूर्ण करा.", "आवश्यक कागदपत्रे सादर करा."]
        },
        "national-overseas-scholarship": {
            eligibility: "अर्जदारांनी सध्याच्या अधिकृत मार्गदर्शक सूचनांमधील समुदाय, उत्पन्न, शैक्षणिक आणि इतर अटी पूर्ण करणे आवश्यक आहे.",
            benefits: "मंजूर परदेशी उच्च शिक्षणाच्या खर्चासाठी पात्र सहाय्य.",
            documents: ["ओळखीचा पुरावा", "समुदाय प्रमाणपत्र", "उत्पन्न प्रमाणपत्र", "शैक्षणिक नोंदी", "प्रवेशाची कागदपत्रे"],
            steps: ["अधिकृत योजना मार्गदर्शक सूचना वाचा.", "पात्रता आणि उपलब्ध जागा तपासा.", "अर्ज सुरू झाल्यावर अधिकृत पोर्टलवरून अर्ज करा.", "कागदपत्र पडताळणी पूर्ण करा."]
        },
        "pm-kisan-maandhan": {
            eligibility: "सर्वसाधारणपणे १८–४० वयोगटातील लहान आणि अल्पभूधारक शेतकऱ्यांसाठी, योजनेतील वगळणे आणि नियमांच्या अधीन.",
            benefits: "नोंदणी केलेले पात्र शेतकरी विहित वयानंतर, योजनेच्या अटींच्या अधीन राहून, मासिक निवृत्तीवेतन मिळवू शकतात.",
            documents: ["आधार कार्ड", "बँक खात्याचा तपशील", "जमीन मालकीच्या नोंदी", "मोबाईल क्रमांक"],
            steps: ["पात्रतेच्या अटी तपासा.", "अधिकृत मानधन पोर्टल किंवा अधिकृत नोंदणी केंद्राला भेट द्या.", "नोंदणी आणि अंशदानाच्या औपचारिकता पूर्ण करा."]
        },
        "pm-matsya-sampada": {
            eligibility: "मच्छीमार, मत्स्य शेतकरी आणि मत्स्यव्यवसाय क्षेत्रातील इतर पात्र लाभार्थी, योजनेच्या मार्गदर्शक सूचनांनुसार.",
            benefits: "पात्र मत्स्यविकास उपक्रम आणि प्रकल्पांसाठी सहाय्य.",
            documents: ["ओळखीचा पुरावा", "पत्त्याचा पुरावा", "प्रकल्प तपशील", "बँक तपशील", "आवश्यकतेनुसार इतर कागदपत्रे"],
            steps: ["संबंधित मत्स्य विभागाच्या मार्गदर्शक सूचना तपासा.", "राज्य मत्स्य विभागाशी संपर्क साधा.", "अर्ज आणि आवश्यक प्रकल्प कागदपत्रे सादर करा."]
        },
        "agriculture-infrastructure-fund": {
            eligibility: "पात्र शेतकरी, शेतकरी उत्पादक संघटना, कृषी-उद्योजक आणि इतर संस्था, योजनेच्या नियमांच्या अधीन.",
            benefits: "पात्र काढणीपश्चात आणि सामुदायिक शेती पायाभूत प्रकल्पांसाठी वित्तीय सहाय्य.",
            documents: ["ओळखीचा पुरावा", "प्रकल्प अहवाल", "बँक तपशील", "जमीन किंवा प्रकल्पाची कागदपत्रे", "इतर आवश्यक नोंदी"],
            steps: ["योजनेच्या मार्गदर्शक सूचना पाहा.", "प्रकल्प प्रस्ताव तयार करा.", "अधिकृत माध्यमातून अर्ज करा.", "कर्जदाता आणि विभागाच्या औपचारिकता पूर्ण करा."]
        },
        "namo-drone-didi": {
            eligibility: "कार्यक्रमांतर्गत निवडलेले आणि लागू मार्गदर्शक सूचना पूर्ण करणारे महिला स्वयंसहाय्यता गट.",
            benefits: "पात्र गटांना कार्यक्रमात नमूद केल्यानुसार ड्रोन उपकरणे, प्रशिक्षण आणि सेवा मिळवण्यासाठी सहाय्य.",
            documents: ["स्वयंसहाय्यता गट नोंदणी तपशील", "सदस्यांची ओळख कागदपत्रे", "बँक तपशील", "प्राधिकरणांनी मागितलेली इतर कागदपत्रे"],
            steps: ["संबंधित स्वयंसहाय्यता गट किंवा कृषी विभागाशी संपर्क साधा.", "निवड आणि पात्रतेच्या अटी तपासा.", "अधिकृत प्रशिक्षण आणि अर्ज प्रक्रियेचे पालन करा."]
        },
        "mahila-kisan-sashaktikaran": {
            eligibility: "पात्र ग्रामीण महिला शेतकरी आणि गट, जे कार्यक्रम अंमलबजावणीच्या मार्गदर्शक सूचनांच्या कक्षेत येतात.",
            benefits: "कृषी कौशल्ये, शाश्वत उपजीविका आणि शेती उपक्रमांतील चांगल्या सहभागासाठी सहाय्य.",
            documents: ["ओळखीचा पुरावा", "स्वयंसहाय्यता गटाचा तपशील, लागू असल्यास", "बँक तपशील", "स्थानिक पातळीवर मागितलेली इतर कागदपत्रे"],
            steps: ["स्थानिक ग्रामीण उपजीविका अभियान किंवा संबंधित विभागाशी संपर्क साधा.", "स्थानिक कार्यक्रम अंमलबजावणीबद्दल विचारा.", "आवश्यक नोंदणी प्रक्रिया पूर्ण करा."]
        },
        "pm-ujjwala": {
            eligibility: "योजनेच्या वंचितता आणि इतर अटी पूर्ण करणाऱ्या कुटुंबांतील पात्र प्रौढ महिला.",
            benefits: "सध्याच्या योजनेच्या नियमांनुसार एलपीजी जोडणीशी संबंधित सहाय्य.",
            documents: ["आधार कार्ड", "रेशन कार्ड किंवा कौटुंबिक रचनेचा पुरावा", "बँक तपशील", "पत्त्याचा पुरावा"],
            steps: ["सध्याची पात्रता तपासा.", "अधिकृत एलपीजी वितरकाशी संपर्क साधा.", "अर्ज आणि आवश्यक कागदपत्रे सादर करा."]
        },
        "national-food-security": {
            eligibility: "लागू केंद्र आणि राज्य नियमांनुसार पात्र ठरलेली कुटुंबे.",
            benefits: "पात्रतेच्या अधीन, सार्वजनिक वितरण प्रणालीद्वारे हक्काचे धान्य मिळण्याची सुविधा.",
            documents: ["रेशन कार्ड", "ओळखीचा पुरावा", "निवासाचा तपशील", "राज्याने मागितलेली इतर कागदपत्रे"],
            steps: ["स्थानिक अन्न व नागरी पुरवठा कार्यालयाशी संपर्क साधा.", "रेशन कार्डची पात्रता तपासा.", "अधिकृत प्रक्रियेद्वारे अर्ज करा किंवा कुटुंबाचा तपशील अद्ययावत करा."]
        },
        "atal-vayo-abhyuday": {
            eligibility: "ज्येष्ठ नागरिक आणि संबंधित कार्यक्रम घटकांच्या कक्षेत येणाऱ्या पात्र संस्था किंवा लाभार्थी.",
            benefits: "लागू ज्येष्ठ नागरिक कल्याण सेवा आणि उपक्रमांद्वारे सहाय्य.",
            documents: ["वयाचा पुरावा", "ओळखीचा पुरावा", "पत्त्याचा पुरावा", "आवश्यकतेनुसार इतर कागदपत्रे"],
            steps: ["संबंधित सामाजिक न्याय किंवा ज्येष्ठ नागरिक कल्याण विभागाशी संपर्क साधा.", "स्थानिक पातळीवर कोणत्या सेवा उपलब्ध आहेत ते तपासा.", "लागू नोंदणी प्रक्रियेचे पालन करा."]
        }
    }
};


/* ================= STATE LEVEL SCHEMES ================= */

// Names used to translate state names (the value stays in English).
const stateKeys = {
    "Maharashtra": "stateMaharashtra",
    "Gujarat": "stateGujarat",
    "Madhya Pradesh": "stateMadhyaPradesh",
    "Rajasthan": "stateRajasthan",
    "Uttar Pradesh": "stateUttarPradesh",
    "Other": "stateOther"
};

const stateSchemes = [
    { id: "mh-students", state: "Maharashtra", category: "Students", icon: "🎓", url: "https://mahadbt.maharashtra.gov.in",
      title: "MahaDBT Scholarships",
      description: "Apply for scholarships and education benefits of the Maharashtra government through the MahaDBT portal." },
    { id: "mh-farmers", state: "Maharashtra", category: "Farmers", icon: "🌾", url: "https://krishi.maharashtra.gov.in",
      title: "Namo Shetkari Mahasanman Nidhi Yojana",
      description: "Maharashtra's state income-support scheme for farmer families, run alongside PM-KISAN." },
    { id: "mh-women", state: "Maharashtra", category: "Women", icon: "👩", url: "https://ladakibahin.maharashtra.gov.in",
      title: "Mukhyamantri Majhi Ladki Bahin Yojana",
      description: "Monthly financial support scheme for eligible women in Maharashtra. Check the current status and eligibility rules before applying." },
    { id: "mh-families", state: "Maharashtra", category: "Families", icon: "🏠", url: "https://www.jeevandayee.gov.in",
      title: "Mahatma Jyotirao Phule Jan Arogya Yojana",
      description: "Health insurance cover for eligible families in Maharashtra for treatment at listed hospitals." },
    { id: "mh-seniors", state: "Maharashtra", category: "Senior Citizens", icon: "👴", url: "https://sjsa.maharashtra.gov.in",
      title: "Sanjay Gandhi Niradhar Anudan Yojana",
      description: "Monthly financial assistance from the Maharashtra government for destitute and needy people, including elderly persons." },
    { id: "gj-students", state: "Gujarat", category: "Students", icon: "🎓", url: "https://mysy.guj.nic.in",
      title: "Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
      description: "Financial help with tuition fees and hostel and food costs for eligible students in higher education in Gujarat." },
    { id: "gj-farmers", state: "Gujarat", category: "Farmers", icon: "🌾", url: "https://ikhedut.gujarat.gov.in",
      title: "iKhedut Portal Schemes",
      description: "One portal for Gujarat government farmer schemes such as agriculture, horticulture and animal husbandry assistance." },
    { id: "gj-women", state: "Gujarat", category: "Women", icon: "👩", url: "https://myscheme.gov.in/schemes/vdy",
      title: "Vahli Dikri Yojana",
      description: "Financial assistance for eligible girl children in Gujarat at different stages of their life and education." },
    { id: "gj-families", state: "Gujarat", category: "Families", icon: "🏠", url: "https://www.magujarat.com",
      title: "Mukhyamantri Amrutum (MA) Yojana",
      description: "Health cover for eligible low-income families in Gujarat for treatment at listed hospitals, linked with Ayushman Bharat PM-JAY." },
    { id: "gj-seniors", state: "Gujarat", category: "Senior Citizens", icon: "👴", url: "https://sje.gujarat.gov.in",
      title: "Old Age Pension Schemes (Gujarat)",
      description: "Monthly pension assistance for eligible elderly and destitute people under Gujarat's social justice department." },
    { id: "mp-students", state: "Madhya Pradesh", category: "Students", icon: "🎓", url: "https://scholarshipportal.mp.nic.in",
      title: "Mukhyamantri Medhavi Vidyarthi Yojana",
      description: "Fee support for eligible meritorious students who get admission in higher education." },
    { id: "mp-farmers", state: "Madhya Pradesh", category: "Farmers", icon: "🌾", url: "https://mpkrishi.mp.gov.in",
      title: "Mukhyamantri Kisan Kalyan Yojana",
      description: "Madhya Pradesh's additional income-support scheme for eligible farmers who receive PM-KISAN." },
    { id: "mp-women", state: "Madhya Pradesh", category: "Women", icon: "👩", url: "https://cmladlibahna.mp.gov.in",
      title: "Mukhyamantri Ladli Behna Yojana",
      description: "Monthly financial assistance for eligible women in Madhya Pradesh." },
    { id: "mp-families", state: "Madhya Pradesh", category: "Families", icon: "🏠", url: "https://sambal.mp.gov.in",
      title: "Sambal Yojana",
      description: "Support for eligible unorganised-sector workers and their families in Madhya Pradesh in case of accident, illness or death." },
    { id: "mp-seniors", state: "Madhya Pradesh", category: "Senior Citizens", icon: "👴", url: "https://socialjustice.mp.gov.in",
      title: "Samajik Suraksha Pension Yojana",
      description: "Monthly social security pension for eligible elderly, widowed and other vulnerable people in Madhya Pradesh." },
    { id: "rj-students", state: "Rajasthan", category: "Students", icon: "🎓", url: "https://sso.rajasthan.gov.in",
      title: "Rajasthan Scholarship Schemes",
      description: "Scholarship and fee-support schemes of the Rajasthan government for eligible students, applied for through the SSO portal." },
    { id: "rj-farmers", state: "Rajasthan", category: "Farmers", icon: "🌾", url: "https://rajkisan.rajasthan.gov.in",
      title: "Raj Kisan Sathi Portal Schemes",
      description: "Farmer portal for Rajasthan Agriculture Department schemes, subsidies and services." },
    { id: "rj-women", state: "Rajasthan", category: "Women", icon: "👩", url: "https://wcd.rajasthan.gov.in",
      title: "Rajshri Yojana",
      description: "Financial support for eligible girl children in Rajasthan from birth through school education." },
    { id: "rj-families", state: "Rajasthan", category: "Families", icon: "🏠", url: "https://health.rajasthan.gov.in",
      title: "Mukhyamantri Ayushman Arogya (MAA) Yojana",
      description: "Health insurance cover for eligible families in Rajasthan for treatment at listed hospitals." },
    { id: "rj-seniors", state: "Rajasthan", category: "Senior Citizens", icon: "👴", url: "https://sje.rajasthan.gov.in",
      title: "Rajasthan Social Security Pension",
      description: "Monthly pension for eligible elderly, widowed and other vulnerable people in Rajasthan." },
    { id: "up-students", state: "Uttar Pradesh", category: "Students", icon: "🎓", url: "https://scholarship.up.gov.in",
      title: "UP Scholarship Schemes",
      description: "Scholarship and fee reimbursement for eligible students in Uttar Pradesh, applied for through the UP scholarship portal." },
    { id: "up-farmers", state: "Uttar Pradesh", category: "Farmers", icon: "🌾", url: "https://upagriculture.com",
      title: "Mukhyamantri Krishak Durghatna Kalyan Yojana",
      description: "Financial assistance for farmers and their families in case of accidental death or injury in Uttar Pradesh." },
    { id: "up-women", state: "Uttar Pradesh", category: "Women", icon: "👩", url: "https://mksy.up.gov.in",
      title: "Mukhyamantri Kanya Sumangala Yojana",
      description: "Financial support in stages for eligible girl children in Uttar Pradesh, from birth up to graduation." },
    { id: "up-families", state: "Uttar Pradesh", category: "Families", icon: "🏠", url: "https://up.gov.in",
      title: "Mukhyamantri Samuhik Vivah Yojana",
      description: "Financial assistance for the marriage of daughters of eligible poor families through community marriage events in Uttar Pradesh." },
    { id: "up-seniors", state: "Uttar Pradesh", category: "Senior Citizens", icon: "👴", url: "https://sspy-up.gov.in",
      title: "UP Old Age Pension Scheme",
      description: "Monthly pension for eligible elderly people in Uttar Pradesh through the social security pension portal." }
];

// Hindi and Marathi title + description of every state scheme.
const stateSchemeTranslations = {
    Hindi: {
        "mh-students": { title: "महाडीबीटी छात्रवृत्ति योजनाएँ", description: "महाडीबीटी पोर्टल के माध्यम से महाराष्ट्र सरकार की छात्रवृत्तियों और शिक्षा लाभों के लिए आवेदन करें।" },
        "mh-farmers": { title: "नमो शेतकरी महासन्मान निधि योजना", description: "महाराष्ट्र के किसान परिवारों के लिए राज्य की आय सहायता योजना, जो पीएम-किसान के साथ चलती है।" },
        "mh-women": { title: "मुख्यमंत्री माझी लाडकी बहीण योजना", description: "महाराष्ट्र की पात्र महिलाओं के लिए मासिक आर्थिक सहायता योजना। आवेदन से पहले वर्तमान स्थिति और पात्रता नियम जाँचें।" },
        "mh-families": { title: "महात्मा ज्योतिराव फुले जन आरोग्य योजना", description: "महाराष्ट्र के पात्र परिवारों को सूचीबद्ध अस्पतालों में इलाज के लिए स्वास्थ्य बीमा कवर।" },
        "mh-seniors": { title: "संजय गांधी निराधार अनुदान योजना", description: "महाराष्ट्र सरकार की ओर से निराश्रित और ज़रूरतमंद लोगों, जिनमें बुज़ुर्ग भी शामिल हैं, के लिए मासिक आर्थिक सहायता।" },
        "gj-students": { title: "मुख्यमंत्री युवा स्वावलंबन योजना (MYSY)", description: "गुजरात में उच्च शिक्षा ले रहे पात्र विद्यार्थियों के लिए ट्यूशन फीस तथा छात्रावास और भोजन के खर्च में आर्थिक सहायता।" },
        "gj-farmers": { title: "आई-खेडूत पोर्टल योजनाएँ", description: "गुजरात सरकार की कृषि, बागवानी और पशुपालन सहायता जैसी किसान योजनाओं के लिए एक ही पोर्टल।" },
        "gj-women": { title: "वहाली दीकरी योजना", description: "गुजरात की पात्र बालिकाओं को उनके जीवन और शिक्षा के अलग-अलग चरणों में आर्थिक सहायता।" },
        "gj-families": { title: "मुख्यमंत्री अमृतम (MA) योजना", description: "गुजरात के पात्र कम आय वाले परिवारों को सूचीबद्ध अस्पतालों में इलाज के लिए स्वास्थ्य कवर, जो आयुष्मान भारत पीएम-जेएवाई से जुड़ा है।" },
        "gj-seniors": { title: "वृद्ध पेंशन योजनाएँ (गुजरात)", description: "गुजरात के समाज न्याय विभाग के अंतर्गत पात्र बुज़ुर्गों और निराश्रित लोगों के लिए मासिक पेंशन सहायता।" },
        "mp-students": { title: "मुख्यमंत्री मेधावी विद्यार्थी योजना", description: "उच्च शिक्षा में प्रवेश पाने वाले पात्र मेधावी विद्यार्थियों के लिए फीस सहायता।" },
        "mp-farmers": { title: "मुख्यमंत्री किसान कल्याण योजना", description: "पीएम-किसान का लाभ पाने वाले मध्य प्रदेश के पात्र किसानों के लिए अतिरिक्त आय सहायता योजना।" },
        "mp-women": { title: "मुख्यमंत्री लाड़ली बहना योजना", description: "मध्य प्रदेश की पात्र महिलाओं के लिए मासिक आर्थिक सहायता।" },
        "mp-families": { title: "संबल योजना", description: "मध्य प्रदेश में असंगठित क्षेत्र के पात्र श्रमिकों और उनके परिवारों के लिए दुर्घटना, बीमारी या मृत्यु पर सहायता।" },
        "mp-seniors": { title: "सामाजिक सुरक्षा पेंशन योजना", description: "मध्य प्रदेश के पात्र बुज़ुर्गों, विधवाओं और अन्य कमज़ोर व्यक्तियों के लिए मासिक सामाजिक सुरक्षा पेंशन।" },
        "rj-students": { title: "राजस्थान छात्रवृत्ति योजनाएँ", description: "राजस्थान सरकार की पात्र विद्यार्थियों के लिए छात्रवृत्ति और फीस सहायता योजनाएँ, जिनके लिए एसएसओ पोर्टल से आवेदन होता है।" },
        "rj-farmers": { title: "राज किसान साथी पोर्टल योजनाएँ", description: "राजस्थान कृषि विभाग की योजनाओं, अनुदानों और सेवाओं के लिए किसानों का पोर्टल।" },
        "rj-women": { title: "राजश्री योजना", description: "राजस्थान की पात्र बालिकाओं को जन्म से स्कूली शिक्षा तक आर्थिक सहायता।" },
        "rj-families": { title: "मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना", description: "राजस्थान के पात्र परिवारों को सूचीबद्ध अस्पतालों में इलाज के लिए स्वास्थ्य बीमा कवर।" },
        "rj-seniors": { title: "राजस्थान सामाजिक सुरक्षा पेंशन", description: "राजस्थान के पात्र बुज़ुर्गों, विधवाओं और अन्य कमज़ोर लोगों के लिए मासिक पेंशन।" },
        "up-students": { title: "उत्तर प्रदेश छात्रवृत्ति योजनाएँ", description: "उत्तर प्रदेश के पात्र विद्यार्थियों के लिए छात्रवृत्ति और फीस प्रतिपूर्ति, जिसके लिए यूपी छात्रवृत्ति पोर्टल से आवेदन होता है।" },
        "up-farmers": { title: "मुख्यमंत्री कृषक दुर्घटना कल्याण योजना", description: "उत्तर प्रदेश में दुर्घटना से मृत्यु या चोट की स्थिति में किसानों और उनके परिवारों को आर्थिक सहायता।" },
        "up-women": { title: "मुख्यमंत्री कन्या सुमंगला योजना", description: "उत्तर प्रदेश की पात्र बालिकाओं को जन्म से स्नातक तक चरणों में आर्थिक सहायता।" },
        "up-families": { title: "मुख्यमंत्री सामूहिक विवाह योजना", description: "उत्तर प्रदेश में सामूहिक विवाह कार्यक्रमों के माध्यम से पात्र गरीब परिवारों की बेटियों के विवाह के लिए आर्थिक सहायता।" },
        "up-seniors": { title: "उत्तर प्रदेश वृद्धावस्था पेंशन योजना", description: "उत्तर प्रदेश के पात्र बुज़ुर्गों के लिए सामाजिक सुरक्षा पेंशन पोर्टल के माध्यम से मासिक पेंशन।" }
    },

    Marathi: {
        "mh-students": { title: "महाडीबीटी शिष्यवृत्ती योजना", description: "महाडीबीटी पोर्टलद्वारे महाराष्ट्र सरकारच्या शिष्यवृत्ती आणि शैक्षणिक लाभांसाठी अर्ज करा." },
        "mh-farmers": { title: "नमो शेतकरी महासन्मान निधी योजना", description: "महाराष्ट्रातील शेतकरी कुटुंबांसाठी राज्याची उत्पन्न सहाय्य योजना, जी पीएम-किसानसोबत चालते." },
        "mh-women": { title: "मुख्यमंत्री माझी लाडकी बहीण योजना", description: "महाराष्ट्रातील पात्र महिलांसाठी मासिक आर्थिक सहाय्य योजना. अर्ज करण्यापूर्वी सध्याची स्थिती आणि पात्रता नियम तपासा." },
        "mh-families": { title: "महात्मा ज्योतिराव फुले जन आरोग्य योजना", description: "महाराष्ट्रातील पात्र कुटुंबांना यादीतील रुग्णालयांत उपचारांसाठी आरोग्य विमा संरक्षण." },
        "mh-seniors": { title: "संजय गांधी निराधार अनुदान योजना", description: "महाराष्ट्र सरकारकडून निराधार आणि गरजू व्यक्तींसाठी, ज्येष्ठ नागरिकांसह, मासिक आर्थिक सहाय्य." },
        "gj-students": { title: "मुख्यमंत्री युवा स्वावलंबन योजना (MYSY)", description: "गुजरातमध्ये उच्च शिक्षण घेणाऱ्या पात्र विद्यार्थ्यांसाठी शिकवणी शुल्क तसेच वसतिगृह आणि भोजन खर्चासाठी आर्थिक सहाय्य." },
        "gj-farmers": { title: "आय-खेडूत पोर्टल योजना", description: "गुजरात सरकारच्या कृषी, फलोत्पादन आणि पशुपालन सहाय्यासारख्या शेतकरी योजनांसाठी एकच पोर्टल." },
        "gj-women": { title: "वहाली दीकरी योजना", description: "गुजरातमधील पात्र मुलींना त्यांच्या जीवनातील आणि शिक्षणातील विविध टप्प्यांवर आर्थिक सहाय्य." },
        "gj-families": { title: "मुख्यमंत्री अमृतम (MA) योजना", description: "गुजरातमधील पात्र कमी उत्पन्न गटातील कुटुंबांना यादीतील रुग्णालयांत उपचारांसाठी आरोग्य संरक्षण, जे आयुष्मान भारत पीएम-जेएवायशी जोडलेले आहे." },
        "gj-seniors": { title: "वृद्ध निवृत्तीवेतन योजना (गुजरात)", description: "गुजरातच्या समाज न्याय विभागांतर्गत पात्र ज्येष्ठ आणि निराधार व्यक्तींसाठी मासिक निवृत्तीवेतन सहाय्य." },
        "mp-students": { title: "मुख्यमंत्री मेधावी विद्यार्थी योजना", description: "उच्च शिक्षणात प्रवेश मिळवणाऱ्या पात्र गुणवंत विद्यार्थ्यांसाठी शुल्क सहाय्य." },
        "mp-farmers": { title: "मुख्यमंत्री किसान कल्याण योजना", description: "पीएम-किसानचा लाभ घेणाऱ्या मध्य प्रदेशातील पात्र शेतकऱ्यांसाठी अतिरिक्त उत्पन्न सहाय्य योजना." },
        "mp-women": { title: "मुख्यमंत्री लाडली बहना योजना", description: "मध्य प्रदेशातील पात्र महिलांसाठी मासिक आर्थिक सहाय्य." },
        "mp-families": { title: "संबल योजना", description: "मध्य प्रदेशातील असंघटित क्षेत्रातील पात्र कामगार आणि त्यांच्या कुटुंबांसाठी अपघात, आजार किंवा मृत्यू प्रसंगी सहाय्य." },
        "mp-seniors": { title: "सामाजिक सुरक्षा निवृत्तीवेतन योजना", description: "मध्य प्रदेशातील पात्र ज्येष्ठ, विधवा आणि इतर दुर्बल व्यक्तींसाठी मासिक सामाजिक सुरक्षा निवृत्तीवेतन." },
        "rj-students": { title: "राजस्थान शिष्यवृत्ती योजना", description: "राजस्थान सरकारच्या पात्र विद्यार्थ्यांसाठी शिष्यवृत्ती आणि शुल्क सहाय्य योजना, ज्यांसाठी एसएसओ पोर्टलवरून अर्ज करावा लागतो." },
        "rj-farmers": { title: "राज किसान साथी पोर्टल योजना", description: "राजस्थान कृषी विभागाच्या योजना, अनुदाने आणि सेवांसाठी शेतकऱ्यांचे पोर्टल." },
        "rj-women": { title: "राजश्री योजना", description: "राजस्थानमधील पात्र मुलींना जन्मापासून शालेय शिक्षणापर्यंत आर्थिक सहाय्य." },
        "rj-families": { title: "मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना", description: "राजस्थानमधील पात्र कुटुंबांना यादीतील रुग्णालयांत उपचारांसाठी आरोग्य विमा संरक्षण." },
        "rj-seniors": { title: "राजस्थान सामाजिक सुरक्षा निवृत्तीवेतन", description: "राजस्थानमधील पात्र ज्येष्ठ, विधवा आणि इतर दुर्बल व्यक्तींसाठी मासिक निवृत्तीवेतन." },
        "up-students": { title: "उत्तर प्रदेश शिष्यवृत्ती योजना", description: "उत्तर प्रदेशातील पात्र विद्यार्थ्यांसाठी शिष्यवृत्ती आणि शुल्क प्रतिपूर्ती, ज्यासाठी यूपी शिष्यवृत्ती पोर्टलवरून अर्ज करावा लागतो." },
        "up-farmers": { title: "मुख्यमंत्री कृषक दुर्घटना कल्याण योजना", description: "उत्तर प्रदेशात अपघाती मृत्यू किंवा दुखापत झाल्यास शेतकऱ्यांना आणि त्यांच्या कुटुंबांना आर्थिक सहाय्य." },
        "up-women": { title: "मुख्यमंत्री कन्या सुमंगला योजना", description: "उत्तर प्रदेशातील पात्र मुलींना जन्मापासून पदवीपर्यंत टप्प्याटप्प्याने आर्थिक सहाय्य." },
        "up-families": { title: "मुख्यमंत्री सामूहिक विवाह योजना", description: "उत्तर प्रदेशात सामूहिक विवाह कार्यक्रमांद्वारे पात्र गरीब कुटुंबांच्या मुलींच्या विवाहासाठी आर्थिक सहाय्य." },
        "up-seniors": { title: "उत्तर प्रदेश वृद्धापकाळ निवृत्तीवेतन योजना", description: "उत्तर प्रदेशातील पात्र ज्येष्ठांसाठी सामाजिक सुरक्षा निवृत्तीवेतन पोर्टलद्वारे मासिक निवृत्तीवेतन." }
    }
};

// Eligibility, benefits, documents and steps are kept general on purpose:
// state rules change often, so people are sent to the official portal.
const stateGenericDetails = {
    "English": {
        "eligibility": "Eligibility is decided by the current {state} government rules, such as age, income, residence and category. Read the latest official guidelines before applying.",
        "benefits": "Benefits, amounts and coverage depend on the current rules of the scheme and can change. Check the official portal for the latest details.",
        "documents": [
            "Identity proof (such as Aadhaar), if required",
            "Proof of residence in {state}",
            "Income or category certificate, if required",
            "Bank account details, if required",
            "Any other documents listed in the official guidelines"
        ],
        "steps": [
            "Open the official portal linked below.",
            "Read the current eligibility rules and last dates.",
            "Register or sign in as the portal instructs.",
            "Fill in the application carefully and upload the documents asked for.",
            "Keep the application number safe to check the status later."
        ]
    },
    "Hindi": {
        "eligibility": "पात्रता {state} सरकार के वर्तमान नियमों, जैसे आयु, आय, निवास और श्रेणी, से तय होती है। आवेदन से पहले नवीनतम आधिकारिक दिशानिर्देश पढ़ें।",
        "benefits": "लाभ, राशि और कवरेज योजना के वर्तमान नियमों पर निर्भर करते हैं और बदल सकते हैं। नवीनतम जानकारी के लिए आधिकारिक पोर्टल देखें।",
        "documents": [
            "पहचान प्रमाण (जैसे आधार), यदि आवश्यक हो",
            "{state} में निवास का प्रमाण",
            "आय या श्रेणी प्रमाणपत्र, यदि आवश्यक हो",
            "बैंक खाता विवरण, यदि आवश्यक हो",
            "आधिकारिक दिशानिर्देशों में बताए गए अन्य दस्तावेज़"
        ],
        "steps": [
            "नीचे दिए गए आधिकारिक पोर्टल को खोलें।",
            "वर्तमान पात्रता नियम और अंतिम तिथियाँ पढ़ें।",
            "पोर्टल के निर्देशों के अनुसार पंजीकरण करें या साइन इन करें।",
            "आवेदन ध्यान से भरें और माँगे गए दस्तावेज़ अपलोड करें।",
            "बाद में स्थिति देखने के लिए आवेदन संख्या सुरक्षित रखें।"
        ]
    },
    "Marathi": {
        "eligibility": "पात्रता {state} सरकारच्या सध्याच्या नियमांनुसार, जसे वय, उत्पन्न, रहिवास आणि श्रेणी, ठरते. अर्ज करण्यापूर्वी नवीनतम अधिकृत मार्गदर्शक सूचना वाचा.",
        "benefits": "लाभ, रक्कम आणि संरक्षण योजनेच्या सध्याच्या नियमांवर अवलंबून असते आणि बदलू शकते. ताज्या माहितीसाठी अधिकृत पोर्टल पाहा.",
        "documents": [
            "ओळखीचा पुरावा (उदा. आधार), आवश्यक असल्यास",
            "{state} मधील रहिवासाचा पुरावा",
            "उत्पन्न किंवा श्रेणी प्रमाणपत्र, आवश्यक असल्यास",
            "बँक खात्याचा तपशील, आवश्यक असल्यास",
            "अधिकृत मार्गदर्शक सूचनांमध्ये नमूद केलेली इतर कागदपत्रे"
        ],
        "steps": [
            "खाली दिलेले अधिकृत पोर्टल उघडा.",
            "सध्याचे पात्रता नियम आणि शेवटच्या तारखा वाचा.",
            "पोर्टलच्या सूचनांनुसार नोंदणी करा किंवा साइन इन करा.",
            "अर्ज काळजीपूर्वक भरा आणि मागितलेली कागदपत्रे अपलोड करा.",
            "नंतर स्थिती पाहण्यासाठी अर्ज क्रमांक सुरक्षित ठेवा."
        ]
    }
};

Object.assign(translations.English, {
    "stateFilterLabel": "Also show state schemes for:",
    "stateFilterNone": "No state selected",
    "stateSchemesEyebrow": "STATE SCHEMES",
    "stateSchemesTitle": "{state} Government Schemes",
    "stateSchemesNote": "These are state-level schemes. Always confirm the details on the official portal.",
    "noStateSchemes": "No state schemes found for this selection.",
    "stateSchemesForState": "Schemes of {state}",
    "stateNotAdded": "State-level schemes for this selection have not been added yet."
});
Object.assign(translations.Hindi, {
    "stateFilterLabel": "राज्य की योजनाएँ भी दिखाएँ:",
    "stateFilterNone": "कोई राज्य नहीं चुना",
    "stateSchemesEyebrow": "राज्य की योजनाएँ",
    "stateSchemesTitle": "{state} सरकार की योजनाएँ",
    "stateSchemesNote": "ये राज्य स्तर की योजनाएँ हैं। विवरण हमेशा आधिकारिक पोर्टल पर जाँचें।",
    "noStateSchemes": "इस चयन के लिए कोई राज्य योजना नहीं मिली।",
    "stateSchemesForState": "{state} की योजनाएँ",
    "stateNotAdded": "इस चयन के लिए राज्य स्तर की योजनाएँ अभी जोड़ी नहीं गई हैं।"
});
Object.assign(translations.Marathi, {
    "stateFilterLabel": "राज्याच्या योजनाही दाखवा:",
    "stateFilterNone": "कोणतेही राज्य निवडलेले नाही",
    "stateSchemesEyebrow": "राज्याच्या योजना",
    "stateSchemesTitle": "{state} सरकारच्या योजना",
    "stateSchemesNote": "या राज्यस्तरीय योजना आहेत. तपशील नेहमी अधिकृत पोर्टलवर तपासा.",
    "noStateSchemes": "या निवडीसाठी राज्य योजना सापडल्या नाहीत.",
    "stateSchemesForState": "{state} च्या योजना",
    "stateNotAdded": "या निवडीसाठी राज्यस्तरीय योजना अजून जोडलेल्या नाहीत."
});

function getStateSchemeText(scheme, field) {
    const own = stateSchemeTranslations[currentLanguage]?.[scheme.id]?.[field];

    if (own) {
        return own;
    }

    if (field === "title" || field === "description") {
        return scheme[field];
    }

    const generic = stateGenericDetails[currentLanguage]?.[field] ??
                    stateGenericDetails.English[field];

    const stateName = getText(stateKeys[scheme.state]);

    return Array.isArray(generic)
        ? generic.map(line => line.replace("{state}", stateName))
        : generic.replace("{state}", stateName);
}

function findScheme(schemeId) {
    return schemes.find(item => item.id === schemeId) ||
           stateSchemes.find(item => item.id === schemeId);
}


/* ================= APP STATE ================= */

let selectedCategory = "All";
let currentSearch = "";
let currentLanguage = "English";

// What is open right now, so it can be redrawn when the language changes.
let openSchemeId = null;
let openHelpType = null;
let lastEligibility = null;
let selectedState = "";


/* ================= DOM ELEMENTS ================= */

const schemeList = document.getElementById("schemeList");
const resultMessage = document.getElementById("resultMessage");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const stateFilter = document.getElementById("stateFilter");
const stateSchemeResult = document.getElementById("stateSchemeResult");
const categoryButtons = document.querySelectorAll(".category-card");

const detailsModal = document.getElementById("detailsModal");
const closeDetailsButton = document.getElementById("closeDetails");

const eligibilityForm = document.getElementById("eligibilityForm");
const eligibilityResult = document.getElementById("eligibilityResult");

const helpCards = document.querySelectorAll(".help-card");
const helpAnswer = document.getElementById("helpAnswer");
const helpAnswerTitle = document.getElementById("helpAnswerTitle");
const helpAnswerText = document.getElementById("helpAnswerText");

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

/* ================= IMAGE UPLOAD ================= */

const imageInput =
    document.getElementById("imageInput");

const imagePreview =
    document.getElementById("imagePreview");

let selectedImageFile = null;


/* ================= IMAGE SELECT ================= */

if (imageInput) {

    imageInput.addEventListener(
        "change",
        function () {

            const file = this.files[0];

            if (!file) {
                return;
            }


            /* Check image */

            if (!file.type.startsWith("image/")) {

                addChatMessage(
                    getText("chatBadImage"),
                    "bot"
                );

                this.value = "";

                return;
            }


            /* Check size */

            if (
                file.size >
                10 * 1024 * 1024
            ) {

                addChatMessage(
                    getText("chatBigImage"),
                    "bot"
                );

                this.value = "";

                return;
            }


            /* Save selected image */

            selectedImageFile = file;


            /* Create preview */

            const imageURL =
                URL.createObjectURL(file);


            imagePreview.innerHTML = `

                <div class="image-preview-box">

                    <img
                        src="${imageURL}"
                        alt="${getText('selectedImageAlt')}"
                        style="
                            width:70px;
                            height:70px;
                            object-fit:cover;
                            border-radius:8px;
                            margin-right:10px;
                        "
                    >

                    <span>
                        ${file.name}
                    </span>

                    <button
                        type="button"
                        id="removeImage"
                        class="remove-image"
                        style="
                            margin-left:10px;
                            cursor:pointer;
                        "
                    >
                        ✕
                    </button>

                </div>

            `;


            /* Remove image */

            const removeImage =
                document.getElementById(
                    "removeImage"
                );


            if (removeImage) {

                removeImage.addEventListener(
                    "click",
                    function () {

                        selectedImageFile = null;

                        imageInput.value = "";

                        imagePreview.innerHTML = "";

                    }
                );

            }

        }
    );

}


/* ================= HELPER FUNCTIONS ================= */

function getText(key) {
    return translations[currentLanguage]?.[key] ??
           translations.English[key] ??
           key;
}

function makeElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined && text !== null) {
        element.textContent = text;
    }

    return element;
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


/* ================= LANGUAGE SELECTOR ================= */

function setLanguage(language) {
    currentLanguage = translations[language] ? language : "English";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        const translatedText = getText(key);

        if (translatedText) {
            element.textContent = translatedText;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        const translatedText = getText(key);

        if (translatedText) {
            element.placeholder = translatedText;
        }
    });

    document.documentElement.lang =
        currentLanguage === "Hindi" ? "hi" :
        currentLanguage === "Marathi" ? "mr" : "en";

    // Plain text inside <option>, buttons and labels with extra attributes.
    document.querySelectorAll("[data-i18n-title]").forEach(element => {
        element.title = getText(element.getAttribute("data-i18n-title"));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(element => {
        element.setAttribute("aria-label", getText(element.getAttribute("data-i18n-aria")));
    });

    // Suggestion buttons send a question that is also in the selected language.
    document.querySelectorAll(".suggestion").forEach(button => {
        button.dataset.question = getText(button.dataset.questionKey);
    });

    renderSchemes();

    // Redraw anything that is already open, in the new language.
    if (openSchemeId) {
        openDetails(openSchemeId);
    }

    if (openHelpType) {
        showHelpAnswer(openHelpType, false);
    }

    if (lastEligibility) {
        renderEligibilityResult();
    }

    // Keep the selected language when the page is refreshed.
    try {
        localStorage.setItem("govscheme-language", currentLanguage);
    } catch (error) {
        console.warn("Language preference could not be saved.");
    }
}

const languageDropdown = document.getElementById("language");

languageDropdown.addEventListener("change", function () {
    setLanguage(this.value);
});

try {
    const savedLanguage = localStorage.getItem("govscheme-language");

    if (savedLanguage && translations[savedLanguage]) {
        languageDropdown.value = savedLanguage;
        setLanguage(savedLanguage);
    }
} catch (error) {
    setLanguage("English");
}


/* ================= RENDER SCHEME CARDS ================= */

function schemeMatchesFilters(scheme) {
    const categoryMatches =
        selectedCategory === "All" ||
        scheme.category === selectedCategory;

    const searchableText =
        `${scheme.title} ${scheme.category} ${scheme.description} ${getSchemeText(scheme, "title")} ${getSchemeText(scheme, "description")} ${getCategoryName(scheme.category)}`.toLowerCase();

    const searchMatches =
        !currentSearch || searchableText.includes(currentSearch.toLowerCase());

    return categoryMatches && searchMatches;
}

function getFilteredSchemes() {
    return schemes.filter(schemeMatchesFilters);
}

function buildSchemeCard(scheme) {
    const card = makeElement("article", "scheme-card");

    const top = makeElement("div", "scheme-card-top");
    const icon = makeElement("span", "scheme-icon", scheme.icon);

    const categoryName = getCategoryName(scheme.category);
    const badgeText = scheme.state
        ? `${getText(stateKeys[scheme.state])} · ${categoryName}`
        : categoryName;

    const category = makeElement("span", "scheme-category", badgeText);

    top.append(icon, category);

    const title = makeElement("h3", "", getSchemeText(scheme, "title"));
    const description = makeElement("p", "", getSchemeText(scheme, "description"));

    const actions = makeElement("div", "card-actions");

    const detailsButton = makeElement(
        "button",
        "details-button",
        getText("viewDetails")
    );

    detailsButton.type = "button";
    detailsButton.addEventListener("click", () => openDetails(scheme.id));

    const portalButton = makeElement(
        "a",
        "portal-button",
        getText("officialPortalShort")
    );

    portalButton.href = scheme.url;
    portalButton.target = "_blank";
    portalButton.rel = "noopener noreferrer";

    actions.append(detailsButton, portalButton);
    card.append(top, title, description, actions);

    return card;
}

function renderSchemes() {
    clearElement(schemeList);

    const filteredSchemes = getFilteredSchemes();

    filteredSchemes.forEach(scheme => {
        schemeList.appendChild(buildSchemeCard(scheme));
    });

    renderStateSchemes();

    noResults.classList.toggle("hidden", filteredSchemes.length !== 0);

    if (filteredSchemes.length === 0) {
        noResults.textContent = getText("noResults");
        resultMessage.textContent = getText("noMatch");
    } else if (currentSearch) {
        resultMessage.textContent =
            `${getText("searchResults")}: ${filteredSchemes.length}`;
    } else if (selectedCategory === "All") {
        resultMessage.textContent = getText("allResults");
    } else {
        resultMessage.textContent =
            `${getText("categoryResults")} (${filteredSchemes.length})`;
    }
}


/* ================= STATE SCHEMES (shown for the chosen state) ================= */

const categoryOrder = ["Students", "Farmers", "Women", "Families", "Senior Citizens"];

function renderStateSchemes() {
    if (!stateSchemeResult) {
        return;
    }

    clearElement(stateSchemeResult);
    stateSchemeResult.classList.toggle("has-results", Boolean(selectedState));

    if (!selectedState) {
        return;
    }

    const stateName = getText(stateKeys[selectedState]);

    const heading = makeElement("div", "section-heading");
    heading.append(
        makeElement("span", "eyebrow", getText("stateSchemesEyebrow")),
        makeElement("h2", "", getText("stateSchemesTitle").replace("{state}", stateName)),
        makeElement("p", "", getText("stateSchemesNote"))
    );
    stateSchemeResult.appendChild(heading);

    const matching = stateSchemes.filter(scheme =>
        scheme.state === selectedState && schemeMatchesFilters(scheme)
    );

    if (matching.length === 0) {
        stateSchemeResult.appendChild(
            makeElement("p", "no-state-schemes", getText("noStateSchemes"))
        );
        return;
    }

    // One grid, ordered by category. Every card shows its category badge.
    const ordered = [...matching].sort(
        (first, second) =>
            categoryOrder.indexOf(first.category) - categoryOrder.indexOf(second.category)
    );

    const grid = makeElement("div", "scheme-grid");
    ordered.forEach(scheme => grid.appendChild(buildSchemeCard(scheme)));
    stateSchemeResult.appendChild(grid);
}

function chooseState(stateValue, shouldScroll) {
    selectedState = stateKeys[stateValue] && stateValue !== "Other" ? stateValue : "";

    if (stateFilter) {
        stateFilter.value = selectedState;
    }

    renderStateSchemes();

    if (selectedState && shouldScroll) {
        stateSchemeResult.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

if (stateFilter) {
    stateFilter.addEventListener("change", function () {
        chooseState(this.value, true);
    });
}


/* ================= CATEGORY BUTTONS ================= */

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        categoryButtons.forEach(item => {
            item.classList.toggle("active", item === button);
        });

        currentSearch = "";
        searchInput.value = "";

        renderSchemes();

        document.getElementById("schemes").scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* ================= SEARCH ================= */

function performSearch() {
    currentSearch = searchInput.value.trim();
    renderSchemes();

    document.getElementById("schemes").scrollIntoView({
        behavior: "smooth"
    });
}

searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        performSearch();
    }
});

searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value.trim();
    renderSchemes();
});


/* ================= SCHEME DETAILS MODAL ================= */

function openDetails(schemeId) {
    const scheme = findScheme(schemeId);

    if (!scheme) {
        return;
    }

    openSchemeId = schemeId;

    document.getElementById("detailsIcon").textContent = scheme.icon;
    document.getElementById("detailsCategory").textContent = getCategoryName(scheme.category);
    document.getElementById("detailsTitle").textContent = getSchemeText(scheme, "title");
    document.getElementById("detailsDescription").textContent = getSchemeText(scheme, "description");
    document.getElementById("detailsEligibilityText").textContent = getSchemeText(scheme, "eligibility");
    document.getElementById("detailsBenefitsText").textContent = getSchemeText(scheme, "benefits");

    const documentsList = document.getElementById("detailsDocuments");
    clearElement(documentsList);

    getSchemeText(scheme, "documents").forEach(documentText => {
        documentsList.appendChild(makeElement("li", "", documentText));
    });

    const stepsList = document.getElementById("detailsSteps");
    clearElement(stepsList);

    getSchemeText(scheme, "steps").forEach(stepText => {
        stepsList.appendChild(makeElement("li", "", stepText));
    });

    const officialLink = document.getElementById("officialLink");
    officialLink.href = scheme.url;
    officialLink.textContent = getText("officialPortal");

    detailsModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    closeDetailsButton.focus();
}

function closeDetails() {
    openSchemeId = null;
    detailsModal.classList.add("hidden");
    document.body.style.overflow = "";
}

closeDetailsButton.addEventListener("click", closeDetails);

detailsModal.addEventListener("click", event => {
    if (event.target === detailsModal) {
        closeDetails();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !detailsModal.classList.contains("hidden")) {
        closeDetails();
    }
});


/* ================= ELIGIBILITY CHECKER ================= */

function renderEligibilityResult() {
    clearElement(eligibilityResult);

    if (!lastEligibility) {
        return;
    }

    eligibilityResult.classList.remove("hidden");

    const { state, age, category, error } = lastEligibility;

    if (error) {
        eligibilityResult.textContent = getText(error);
        return;
    }

    // Income is collected for demonstration only. This simple checker
    // does not use income to make an eligibility decision.
    const matchingSchemes = schemes.filter(scheme => scheme.category === category);

    const heading = makeElement("h3", "", getText("possibleMatches"));
    const list = makeElement("ul");

    matchingSchemes.forEach(scheme => {
        const item = makeElement("li");
        const link = makeElement("a", "", getSchemeText(scheme, "title"));

        link.href = scheme.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.style.color = "var(--primary)";
        link.style.fontWeight = "700";

        item.appendChild(link);
        list.appendChild(item);
    });

    const notice = makeElement("p", "", getText("eligibilityNotice"));
    notice.style.marginTop = "15px";

    const stateName = stateKeys[state] ? getText(stateKeys[state]) : state;

    const locationNote = makeElement(
        "p",
        "",
        getText("selectedStateNote")
            .replace("{state}", stateName)
            .replace("{age}", age)
    );

    locationNote.style.marginTop = "8px";
    locationNote.style.fontSize = "0.9rem";

    // State level schemes for the chosen state and category.
    const stateMatches = stateSchemes.filter(scheme =>
        scheme.state === state && scheme.category === category
    );

    const stateHeading = makeElement(
        "h3",
        "",
        getText("stateSchemesForState").replace("{state}", stateName)
    );
    stateHeading.style.marginTop = "18px";

    const stateList = makeElement("ul");

    stateMatches.forEach(scheme => {
        const item = makeElement("li");
        const link = makeElement("a", "", getSchemeText(scheme, "title"));

        link.href = scheme.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.style.color = "var(--primary)";
        link.style.fontWeight = "700";

        item.appendChild(link);
        stateList.appendChild(item);
    });

    eligibilityResult.append(heading, list, stateHeading);

    if (stateMatches.length > 0) {
        eligibilityResult.appendChild(stateList);
    } else {
        eligibilityResult.appendChild(makeElement("p", "", getText("stateNotAdded")));
    }

    eligibilityResult.append(notice, locationNote);

    // Do not display or store the income value. Scheme rules vary and
    // this demonstration does not make an eligibility determination.
}

eligibilityForm.addEventListener("submit", event => {
    event.preventDefault();

    const state = document.getElementById("userState").value;
    const age = Number(document.getElementById("userAge").value);
    const category = document.getElementById("userCategory").value;

    if (!state) {
        lastEligibility = { error: "selectState" };
    } else if (!Number.isFinite(age) || age < 1 || age > 120) {
        lastEligibility = { error: "enterAge" };
    } else if (!category) {
        lastEligibility = { error: "chooseCategory" };
    } else {
        lastEligibility = { state, age, category };
    }

    renderEligibilityResult();

    // Also show all schemes of the chosen state in the state section.
    if (lastEligibility && !lastEligibility.error) {
        chooseState(lastEligibility.state, false);
    }
});


/* ================= APPLICATION HELP ================= */

const helpContent = {
    otp: {
        title: "helpOtpTitle",
        text: "helpOtpText"
    },
    login: {
        title: "helpLoginTitle",
        text: "helpLoginText"
    },
    upload: {
        title: "helpUploadTitle",
        text: "helpUploadText"
    },
    form: {
        title: "helpFormTitle",
        text: "helpFormText"
    },
    submit: {
        title: "helpSubmitTitle",
        text: "helpSubmitText"
    },
    status: {
        title: "helpStatusTitle",
        text: "helpStatusText"
    }
};

function showHelpAnswer(helpType, shouldScroll) {
    const content = helpContent[helpType];

    if (!content) {
        return;
    }

    openHelpType = helpType;

    helpAnswerTitle.textContent = getText(content.title);
    clearElement(helpAnswerText);

    const list = makeElement("ul");

    getText(content.text).forEach(line => {
        list.appendChild(makeElement("li", "", line));
    });

    helpAnswerText.appendChild(list);
    helpAnswer.classList.remove("hidden");

    if (shouldScroll) {
        helpAnswer.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
}

helpCards.forEach(card => {
    card.addEventListener("click", () => {
        showHelpAnswer(card.dataset.help, true);
    });
});


/* ================= AI ASSISTANT ================= */

function addChatMessage(message, type) {

    if (!chatMessages) {
        return;
    }

    const messageElement = makeElement(
        "div",
        `chat-message ${type === "user" ? "user-message" : "bot-message"}`,
        message
    );

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}



/* ================= SEND MESSAGE TO BACKEND ================= */

async function sendToAI(
    message,
    imageFile = null
) {

    let loadingMessage = null;


    try {

        /* ================= THINKING MESSAGE ================= */

        loadingMessage = makeElement(
            "div",
            "chat-message bot-message",
            getText("chatThinking")
        );


        chatMessages.appendChild(
            loadingMessage
        );


        chatMessages.scrollTop =
            chatMessages.scrollHeight;


        /* ================= FORM DATA ================= */

        const formData =
            new FormData();


        /* Add text */

        // Ask the AI to answer in the language selected on the website.
        const languageRule = {
            Hindi: "\n\n(कृपया उत्तर हिन्दी में दें।)",
            Marathi: "\n\n(कृपया उत्तर मराठीत द्या.)"
        }[currentLanguage] || "";

        formData.append(
            "message",
            (message || "") + (message ? languageRule : "")
        );

        formData.append("language", currentLanguage);


        /* Add image */

        if (imageFile) {

            formData.append(
                "image",
                imageFile
            );

        }


        /* ================= SEND TO SERVER ================= */

        const response =
            await fetch(
                "/api/chat",
                {

                    method: "POST",

                    body: formData

                }
            );


        /* Remove thinking */

        if (loadingMessage) {

            loadingMessage.remove();

        }


        /* Check response */

        if (!response.ok) {

            throw new Error(
                `Server returned ${response.status}`
            );

        }


        /* Convert response */

        const data =
            await response.json();


        /* ================= SHOW AI ANSWER ================= */

        if (data.reply) {

            addChatMessage(
                data.reply,
                "bot"
            );

        } else {

            addChatMessage(
                getText("chatNoAnswer"),
                "bot"
            );

        }


    } catch (error) {

        console.error(
            "AI Assistant Error:",
            error
        );


        if (loadingMessage) {

            loadingMessage.remove();

        }


        addChatMessage(

            getText("chatServerError"),

            "bot"

        );

    }

}




/* ================= CHAT FORM ================= */

if (chatForm) {

    chatForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* Get text */

            const message =
                chatInput.value.trim();


            /* Get selected image */

            const imageFile =
                selectedImageFile;


            /* Nothing entered */

            if (
                !message &&
                !imageFile
            ) {

                return;

            }


            /* ================= SHOW USER MESSAGE ================= */

            const userMessage =
                document.createElement("div");


            userMessage.className =
                "chat-message user-message";


            /* Text */

            if (message) {

                const textElement =
                    document.createElement("div");

                textElement.textContent =
                    message;

                userMessage.appendChild(
                    textElement
                );

            }


            /* Image */

            if (imageFile) {

                const imageURL =
                    URL.createObjectURL(
                        imageFile
                    );


                const imageElement =
                    document.createElement("img");


                imageElement.src =
                    imageURL;


                imageElement.alt =
                    getText("uploadedImageAlt");


                imageElement.style.maxWidth =
                    "220px";


                imageElement.style.maxHeight =
                    "220px";


                imageElement.style.borderRadius =
                    "10px";


                imageElement.style.display =
                    "block";


                imageElement.style.marginTop =
                    "8px";


                userMessage.appendChild(
                    imageElement
                );

            }


            chatMessages.appendChild(
                userMessage
            );


            chatMessages.scrollTop =
                chatMessages.scrollHeight;


            /* ================= CLEAR INPUT ================= */

            chatInput.value = "";


            /* ================= SEND TO AI ================= */

            await sendToAI(
                message,
                imageFile
            );


            /* ================= CLEAR IMAGE ================= */

            selectedImageFile = null;


            if (imageInput) {

                imageInput.value = "";

            }


            if (imagePreview) {

                imagePreview.innerHTML = "";

            }


            /* Focus input */

            chatInput.focus();

        }
    );

}



/* ================= SUGGESTION BUTTONS ================= */

const suggestionAnswers = {
    suggestApplyQuestion: "chatApply",
    suggestDocsQuestion: "chatDocuments",
    suggestOtpQuestion: "chatOtp",
    suggestStatusQuestion: "chatStatus"
};

document.querySelectorAll(".suggestion").forEach(button => {
    button.addEventListener("click", () => {
        const questionKey = button.dataset.questionKey;

        addChatMessage(getText(questionKey), "user");
        addChatMessage(getText(suggestionAnswers[questionKey]), "bot");
    });
});


/* ================= SIGN IN MODAL ================= */

const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const guestLogin = document.getElementById("guestLogin");


/* ================= OPEN SIGN IN ================= */

if (openLogin && loginModal) {
    openLogin.addEventListener("click", function () {
        loginModal.classList.add("show");
    });
}


/* ================= CLOSE SIGN IN ================= */

if (closeLogin && loginModal) {
    closeLogin.addEventListener("click", function () {
        loginModal.classList.remove("show");
    });
}


/* ================= CLICK OUTSIDE MODAL ================= */

if (loginModal) {
    loginModal.addEventListener("click", function (event) {

        if (event.target === loginModal) {
            loginModal.classList.remove("show");
        }

    });
}


/* ================= SIGN IN FORM ================= */

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = document.getElementById("loginEmail");
        const passwordInput = document.getElementById("loginPassword");

        const email = emailInput ? emailInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value.trim() : "";

        if (!email || !password) {
            alert(getText("loginNeedBoth"));
            return;
        }

        alert(getText("loginSuccess"));

        loginModal.classList.remove("show");

        loginForm.reset();

    });

}


/* ================= CONTINUE AS GUEST ================= */

if (guestLogin && loginModal) {

    guestLogin.addEventListener("click", function () {

        loginModal.classList.remove("show");

        console.log("Continued as Guest");

    });

}


/* ================= AUTO OPEN SIGN IN ================= */

window.addEventListener("load", function () {

    if (loginModal) {
        loginModal.classList.add("show");
    }

});

/* ================= FIRST PAGE LOAD ================= */

// Show the scheme cards when the page opens.
renderSchemes();
