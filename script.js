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



/* ================= APP STATE ================= */

let selectedCategory = "All";
let currentSearch = "";
let currentLanguage = "English";


/* ================= DOM ELEMENTS ================= */

const schemeList = document.getElementById("schemeList");
const resultMessage = document.getElementById("resultMessage");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
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

    renderSchemes();

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

function getFilteredSchemes() {
    return schemes.filter(scheme => {
        const categoryMatches =
            selectedCategory === "All" ||
            scheme.category === selectedCategory;

        const searchableText =
            `${scheme.title} ${scheme.category} ${scheme.description}`.toLowerCase();

        const searchMatches =
            !currentSearch || searchableText.includes(currentSearch.toLowerCase());

        return categoryMatches && searchMatches;
    });
}

function renderSchemes() {
    clearElement(schemeList);

    const filteredSchemes = getFilteredSchemes();

    filteredSchemes.forEach(scheme => {
        const card = makeElement("article", "scheme-card");

        const top = makeElement("div", "scheme-card-top");
        const icon = makeElement("span", "scheme-icon", scheme.icon);
        const category = makeElement("span", "scheme-category", scheme.category);

        top.append(icon, category);

        const title = makeElement("h3", "", scheme.title);
        const description = makeElement("p", "", scheme.description);

        const actions = makeElement("div", "card-actions");

        const detailsButton = makeElement(
            "button",
            "details-button",
            "View Details"
        );

        detailsButton.type = "button";
        detailsButton.addEventListener("click", () => openDetails(scheme.id));

        const portalButton = makeElement(
            "a",
            "portal-button",
            "Official Portal ↗"
        );

        portalButton.href = scheme.url;
        portalButton.target = "_blank";
        portalButton.rel = "noopener noreferrer";

        actions.append(detailsButton, portalButton);
        card.append(top, title, description, actions);

        schemeList.appendChild(card);
    });

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
    const scheme = schemes.find(item => item.id === schemeId);

    if (!scheme) {
        return;
    }

    document.getElementById("detailsIcon").textContent = scheme.icon;
    document.getElementById("detailsCategory").textContent = scheme.category;
    document.getElementById("detailsTitle").textContent = scheme.title;
    document.getElementById("detailsDescription").textContent = scheme.description;
    document.getElementById("detailsEligibilityText").textContent = scheme.eligibility;
    document.getElementById("detailsBenefitsText").textContent = scheme.benefits;

    const documentsList = document.getElementById("detailsDocuments");
    clearElement(documentsList);

    scheme.documents.forEach(documentText => {
        documentsList.appendChild(makeElement("li", "", documentText));
    });

    const stepsList = document.getElementById("detailsSteps");
    clearElement(stepsList);

    scheme.steps.forEach(stepText => {
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

eligibilityForm.addEventListener("submit", event => {
    event.preventDefault();

    const state = document.getElementById("userState").value;
    const age = Number(document.getElementById("userAge").value);
    const category = document.getElementById("userCategory").value;
    const incomeValue = document.getElementById("userIncome").value;

    clearElement(eligibilityResult);
    eligibilityResult.classList.remove("hidden");

    if (!state) {
        eligibilityResult.textContent = getText("selectState");
        return;
    }

    if (!Number.isFinite(age) || age < 1 || age > 120) {
        eligibilityResult.textContent = getText("enterAge");
        return;
    }

    if (!category) {
        eligibilityResult.textContent = getText("chooseCategory");
        return;
    }

    // Income is collected for demonstration only. This simple checker
    // does not use income to make an eligibility decision.
    const matchingSchemes = schemes.filter(scheme => scheme.category === category);

    const heading = makeElement("h3", "", getText("possibleMatches"));
    const list = makeElement("ul");

    matchingSchemes.forEach(scheme => {
        const item = makeElement("li");
        const link = makeElement("a", "", scheme.title);

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

    const locationNote = makeElement(
        "p",
        "",
        `Selected state: ${state}. Age entered: ${age}.`
    );

    locationNote.style.marginTop = "8px";
    locationNote.style.fontSize = "0.9rem";

    eligibilityResult.append(heading, list, notice, locationNote);

    // Do not display or store the income value. Scheme rules vary and
    // this demonstration does not make an eligibility determination.
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

helpCards.forEach(card => {
    card.addEventListener("click", () => {
        const helpType = card.dataset.help;
        const content = helpContent[helpType];

        if (!content) {
            return;
        }

        helpAnswerTitle.textContent = getText(content.title);
        clearElement(helpAnswerText);

        const list = makeElement("ul");

        getText(content.text).forEach(line => {
            list.appendChild(makeElement("li", "", line));
        });

        helpAnswerText.appendChild(list);
        helpAnswer.classList.remove("hidden");

        helpAnswer.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
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

async function sendToAI(message) {

    if (!message) {
        return;
    }

    let loadingMessage = null;

    try {

        // Show thinking message
        loadingMessage = makeElement(
            "div",
            "chat-message bot-message",
            "Thinking..."
        );

        chatMessages.appendChild(loadingMessage);

        chatMessages.scrollTop =
            chatMessages.scrollHeight;


        // Send message to Node.js backend
        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });


        // Remove thinking message
        if (loadingMessage) {
            loadingMessage.remove();
        }


        // Check server response
        if (!response.ok) {

            throw new Error(
                `Server returned ${response.status}`
            );

        }


        // Convert response to JSON
        const data = await response.json();


        // Show AI response
        if (data.reply) {

            addChatMessage(
                data.reply,
                "bot"
            );

        } else {

            addChatMessage(
                "Sorry, I could not understand your question.",
                "bot"
            );

        }


    } catch (error) {

        console.error(
            "AI Assistant Error:",
            error
        );


        // Remove loading message if still present
        if (loadingMessage) {
            loadingMessage.remove();
        }


        // Show error message
        addChatMessage(

            "Sorry, I could not connect to the AI server. " +
            "Please make sure server.mjs is running.",

            "bot"

        );

    }

}


/* ================= CHAT FORM ================= */

if (chatForm && chatInput && chatMessages) {

    chatForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const message =
                chatInput.value.trim();


            // Empty message
            if (!message) {
                return;
            }


            // Show user message
            addChatMessage(
                message,
                "user"
            );


            // Clear input
            chatInput.value = "";


            // Send to backend
            await sendToAI(message);


            // Focus input again
            chatInput.focus();

        }
    );

}


/* ================= SUGGESTION BUTTONS ================= */

document
    .querySelectorAll(".suggestion")
    .forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                const question =
                    button.dataset.question;


                if (!question) {
                    return;
                }


                // Show question
                addChatMessage(
                    question,
                    "user"
                );


                // Send question to backend
                await sendToAI(question);

            }
        );

    });


/* ================= INITIAL AI GREETING ================= */

if (
    chatMessages &&
    chatMessages.children.length === 0
) {

    addChatMessage(
        getText("chatbotGreeting"),
        "bot"
    );

}

/* ================= FOOTER YEAR ================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

/* ================= INITIAL PAGE LOAD ================= */

// Show all scheme cards when the website first opens.
renderSchemes();


// =============== SIGN IN FUNCTIONALITY ===============

const loginModal = document.getElementById("loginModal");
const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");

// Sign In button click
openLogin.addEventListener("click", () => {
    loginModal.classList.add("show");
});

// Close button click
closeLogin.addEventListener("click", () => {
    loginModal.classList.remove("show");
});

// Popup ke bahar click karne par close
loginModal.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", function () {

    if (loginModal) {
        loginModal.classList.add("show");
    }

});

