
    // Pool of unique 30 questions (replace with 200 later)
    const allQuestions = [
      {
        question: "What is manual testing?",
        options: ["Automated process", "Tool-based testing", "Human-executed testing", "AI-based testing", "Scriptless testing"],
        correct: 2
      },
  {
    question: "What is the purpose of entry and exit criteria in a test plan?",
    options: [
      "To define test tools",
      "To identify team roles",
      "To set the conditions for starting and stopping testing",
      "To write code",
      "To assign bugs"
    ],
    correct: 2
  },
  {
    question: "What is the best way to test complex business logic manually?",
    options: [
      "Unit testing",
      "Ad-hoc testing",
      "Data-driven test cases",
      "Code walkthrough",
      "UI testing only"
    ],
    correct: 2
  },
  {
    question: "How do you ensure full test coverage in a manual testing project?",
    options: [
      "Testing only UI",
      "Writing automated tests",
      "Mapping test cases to requirements via RTM",
      "Relying on developer notes",
      "Running regression once"
    ],
    correct: 2
  },
  {
    question: "Which testing technique is ideal when there is minimal documentation?",
    options: [
      "Boundary testing",
      "Equivalence partitioning",
      "Exploratory testing",
      "Unit testing",
      "Security testing"
    ],
    correct: 2
  },
  {
    question: "Why is defect severity different from priority?",
    options: [
      "They are the same",
      "Severity is based on functionality impact; priority is based on business urgency",
      "Severity is assigned by clients",
      "Priority is based on UI",
      "None of the above"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of peer review in test artifacts?",
    options: [
      "Reduce test execution",
      "Enhance test coverage",
      "Identify gaps or improvements in test cases early",
      "Skip walkthroughs",
      "Change requirements"
    ],
    correct: 2
  },
  {
    question: "Which activity is done after test execution is complete?",
    options: [
      "Requirement analysis",
      "Defect lifecycle",
      "Test closure",
      "Code review",
      "Build deployment"
    ],
    correct: 2
  },
  {
    question: "What is the significance of exploratory testing in Agile?",
    options: [
      "To automate faster",
      "To skip documentation",
      "To test features quickly without waiting for scripts",
      "To build user stories",
      "To fix bugs"
    ],
    correct: 2
  },
  {
    question: "In defect triage meetings, QA is responsible for?",
    options: [
      "Writing code",
      "Analyzing severity and impact of defects",
      "Fixing bugs",
      "Maintaining CI/CD pipeline",
      "Creating user stories"
    ],
    correct: 1
  },
  {
    question: "How does a tester ensure traceability from test cases to requirements?",
    options: [
      "Test Plan",
      "Bug report",
      "Traceability Matrix",
      "Mind map",
      "Wireframe"
    ],
    correct: 2
  },

  // Questions 11–50 (examples for format continuation)
  {
    question: "What is the benefit of reviewing requirements before test case design?",
    options: [
      "It delays test case writing",
      "It improves traceability matrix",
      "It helps understand scope and detect ambiguities early",
      "It makes test data reusable",
      "It improves defect logging"
    ],
    correct: 2
  },
  {
    question: "Which of the following techniques is most suitable for validating boundary conditions?",
    options: [
      "Exploratory testing",
      "Regression testing",
      "Boundary Value Analysis",
      "Smoke testing",
      "UI testing"
    ],
    correct: 2
  },
  {
    question: "What is a blocker bug?",
    options: [
      "Minor UI issue",
      "Bug with low severity",
      "Bug that prevents further testing",
      "Outdated test case",
      "False positive"
    ],
    correct: 2
  },
  {
    question: "How is retesting different from regression testing?",
    options: [
      "Retesting tests new features, regression tests old ones",
      "Retesting is optional",
      "Retesting is done for failed cases only, regression for all existing cases",
      "They are the same",
      "Regression requires client approval"
    ],
    correct: 2
  },
  {
    question: "How do you manage test data for complex scenarios?",
    options: [
      "Use real customer data always",
      "Ignore and proceed",
      "Design structured and reusable test data sets",
      "Let developers decide",
      "Use random values every time"
    ],
    correct: 2
  },
  {
    question: "Which type of testing ensures that all modules work together correctly?",
    options: [
      "System Testing",
      "Unit Testing",
      "Integration Testing",
      "Acceptance Testing",
      "Sanity Testing"
    ],
    correct: 2
  },
  {
    question: "What is the goal of root cause analysis in defect management?",
    options: [
      "To retest bugs",
      "To find who wrote the defect",
      "To prevent recurrence by identifying underlying issue",
      "To blame developer",
      "To update test data"
    ],
    correct: 2
  },
  {
    question: "Why is version control important for test documents?",
    options: [
      "To fix bugs faster",
      "To store test data securely",
      "To track changes and maintain consistency",
      "To help CI pipeline",
      "To schedule test runs"
    ],
    correct: 2
  },
  {
    question: "Which phase involves deciding test estimation and resource planning?",
    options: [
      "Test Execution",
      "Requirement Analysis",
      "Test Planning",
      "Bug Triage",
      "UAT"
    ],
    correct: 2
  },
  {
    question: "How does risk-based testing help?",
    options: [
      "It delays testing",
      "It helps identify low-priority bugs",
      "It prioritizes testing based on impact and likelihood",
      "It skips regression testing",
      "It automates only high-level scenarios"
    ],
    correct: 2
  },
{
    question: "Which of the following is not included in failure costs?",
    options: [
      "rework",
      "repair",
      "failure mode analysis",
      "none of the mentioned"
    ],
    correct: "none of the mentioned"
  },
  {
    question: "Which requirements are the foundation from which quality is measured?",
    options: [
      "Hardware",
      "Software",
      "Programmers",
      "None of the mentioned"
    ],
    correct: "Software"
  },
  {
    question: "Which of the following is not a SQA plan for a project?",
    options: [
      "evaluations to be performed",
      "amount of technical work",
      "audits and reviews to be performed",
      "documents to be produced by the SQA group"
    ],
    correct: "amount of technical work"
  },
{
    question: "Degree to which design specifications are followed in manufacturing the product is called",
    options: [
      "Quality Control",
      "Quality of conformance",
      "Quality Assurance",
      "None of the mentioned"
    ],
    correct: "Quality of conformance"
  },
  {
    question: "Which of the following is not included in External failure costs?",
    options: [
      "testing",
      "help line support",
      "warranty work",
      "complaint resolution"
    ],
    correct: "testing"
  },
  {
    question: "Which of the following is not an appraisal cost in SQA?",
    options: [
      "inter-process inspection",
      "maintenance",
      "quality planning",
      "testing"
    ],
    correct: "quality planning"
  },
         {
    question: "Who identifies, documents, and verifies that corrections have been made to the software?",
    options: [
      "Project manager",
      "Project team",
      "SQA group",
      "All of the mentioned"
    ],
    correct: "SQA group"
  },
  {
    question: "The primary objective of formal technical reviews is to find _________ during the process so that they do not become defects after release of the software",
    options: [
      "errors",
      "equivalent faults",
      "failure cause",
      "none of the mentioned"
    ],
    correct: "errors"
  },
  {
    question: "What is not included in prevention costs?",
    options: [
      "quality planning",
      "formal technical reviews",
      "test equipment",
      "equipment calibration and maintenance"
    ],
    correct: "equipment calibration and maintenance"
  },
  {
    question: "Software quality assurance consists of the auditing and reporting functions of management",
    options: [
      "True",
      "False"
    ],
    correct: "True"
  },
        {
    question: "Quality Management in software engineering is also known as",
    options: ["SQA", "SQM", "SQI", "SQA and SQM"],
    correct: "SQA"
  },
  {
    question: "Quality also can be looked at in terms of user satisfaction which includes",
    options: [
      "A compliant product",
      "Good quality output",
      "Delivery within budget and schedule",
      "All of the mentioned"
    ],
    correct: "All of the mentioned"
  },
  {
    question: "Inspections and testing are what kinds of Quality Costs?",
    options: ["Prevention", "Internal Failure", "External Failure", "Appraisal"],
    correct: "Prevention"
  },
  {
    question: "What is Six Sigma?",
    options: [
      "It is the most widely used strategy for statistical quality assurance",
      "The “Six Sigma” refers to six standard deviations",
      "It is the most widely used strategy for statistical quality assurance AND The “Six Sigma” refers to six standard deviations",
      "A Formal Technical Review(FTR) guideline for quality walkthrough or inspection"
    ],
    correct: "It is the most widely used strategy for statistical quality assurance AND The “Six Sigma” refers to six standard deviations"
  },
  {
    question: "Which of the following is not a core step of Six Sigma?",
    options: ["Define", "Control", "Measure", "Analyse"],
    correct: "Control"
  },
  {
    question: "Non-conformance to software requirements is known as",
    options: ["Software availability", "Software reliability", "Software failure", "None of the mentioned"],
    correct: "Software failure"
  },
  {
    question: "Software safety is equivalent to software reliability",
    options: ["True", "False"],
    correct: "False"
  },
  {
    question: "Misinterpretation of customer communication is a sample of possible cause defects",
    options: ["True", "False"],
    correct: "True"
  },
  {
    question: "What kind of quality cost is incurred when an error is detected in a product prior to shipment?",
    options: ["Prevention", "Internal Failure", "External Failure", "Appraisal"],
    correct: "Internal Failure"
  },
  {
    question: "The degree to which the design specifications are followed during manufacturing is known as",
    options: ["Quality of design", "Quality of conformance", "Quality of testing", "None of the mentioned"],
    correct: "Quality of conformance"
  },{
    question: "Quality of design encompasses requirements and specifications of the system",
    options: ["True", "False"],
    correct: "True"
  },
  {
    question: "According to ISO 9001, inspection and testing comes under which management responsibility?",
    options: ["Process control", "Document control", "Control of nonconforming products", "Servicing"],
    correct: "Process control"
  },
  {
    question: "Alpha testing is done at",
    options: ["Developer‟s end", "User‟s end", "Developer‟s & User‟s end", "None of the mentioned"],
    correct: "Developer‟s end"
  },
  {
    question: "Boundary value analysis belong to?",
    options: ["White Box Testing", "Black Box Testing", "White Box & Black Box Testing", "None of the mentioned"],
    correct: "Black Box Testing"
  },
  {
    question: "What are the various Testing Levels?",
    options: ["Unit Testing", "System Testing", "Integration Testing", "All of the mentioned"],
    correct: "All of the mentioned"
  },
  {
    question: "Which of the following is/are White box technique?",
    options: ["Statement Testing", "Decision Testing", "Condition Coverage", "All of the mentioned"],
    correct: "All of the mentioned"
  },
  {
    question: "Exhaustive testing is",
    options: ["always possible", "practically possible", "impractical but possible", "impractical and impossible"],
    correct: "impractical but possible"
  },
  {
    question: "White Box techniques are also classified as",
    options: ["Design based testing", "Structural testing", "Error guessing technique", "None of the mentioned"],
    correct: "Structural testing"
  },
  {
    question: "Which of the following term describes testing?",
    options: ["Finding broken code", "Evaluating deliverable to find errors", "A stage of all projects", "None of the mentioned"],
    correct: "Evaluating deliverable to find errors"
  },
  {
    question: "The testing in which code is checked",
    options: ["Black box testing", "White box testing", "Red box testing", "Green box testing"],
    correct: "White box testing"
  },
  {
    question: "Acceptance testing is also known as",
    options: ["Grey box testing", "White box testing", "Alpha Testing", "Beta testing"],
    correct: "Beta testing"
  },
  {
    question: "Which of the following is non-functional testing?",
    options: ["Black box testing", "Performance testing", "Unit testing", "None of the mentioned"],
    correct: "Performance testing"
  },
  {
    question: "Beta testing is done at",
    options: ["User‟s end", "Developer‟s end", "User‟s & Developer‟s end", "None of the mentioned"],
    correct: "User‟s end"
  },
  {
    question: "Unit testing is done by",
    options: ["Users", "Developers", "Customers", "None of the mentioned"],
    correct: "Developers"
  },
  {
    question: "Behavioral testing is",
    options: ["White box testing", "Black box testing", "Grey box testing", "None of the mentioned"],
    correct: "Black box testing"
  },
  {
    question: "Which of the following is black box testing",
    options: ["Basic path testing", "Boundary value analysis", "Code path analysis", "None of the mentioned"],
    correct: "Boundary value analysis"
  },
  {
    question: "Validation refers to the set of tasks that ensure that software correctly implements a specific function",
    options: ["True", "False"],
    correct: "False"
  },
  {
    question: "In which testing level the focus is on customer usage?",
    options: ["Alpha Testing", "Beta Testing", "Validation Testing", "Both Alpha and Beta"],
    correct: "Both Alpha and Beta"
  },
  {
    question: "Which testing is an integration testing approach that is commonly used when “shrink-wrapped” software products are being developed?",
    options: ["Regression Testing", "Integration testing", "Smoke testing", "Validation testing"],
    correct: "Smoke testing"
  },{
    question: "What is normally considered as an adjunct to the coding step?",
    options: ["Integration testing", "Unit testing", "Completion of Testing", "Regression Testing"],
    correct: "Unit testing"
  },
  {
    question: "What is the main purpose of integration testing?",
    options: ["Design errors", "Interface errors", "Procedure errors", "None of the above"],
    correct: "Interface errors"
  },
  {
    question: "Testing of individual components by the developers comes under which type of testing?",
    options: ["Integration testing", "Validation testing", "Unit testing", "None of the above"],
    correct: "Unit testing"
  },
  {
    question: "_____ is a white-box testing technique first proposed by Tom McCabe",
    options: ["Equivalence Partitioning", "Basis Path Testing", "Boundary Value Analysis", "None of the above"],
    correct: "Basis Path Testing"
  },
  {
    question: "When are Testing Principles useful while building the Software Product?",
    options: ["During testing", "During execution", "During review", "Throughout life-cycle"],
    correct: "Throughout life-cycle"
  },
  {
    question: "When different combinations of input require different combinations of actions, which of the following technique is used?",
    options: ["Boundary Value Analysis", "Equivalence Partition", "Decision Table", "Decision Coverage"],
    correct: "Decision Table"
  },
  {
    question: "Which of the following is not a part of Performance Testing?",
    options: ["Measuring Transaction Rate", "Measuring Response Time", "Measuring the LOC", "None of the above"],
    correct: "Measuring the LOC"
  },
  {
    question: "Finding Defect is not a major goal of Acceptance Testing",
    options: ["True", "False"],
    correct: "True"
  },
  {
    question: "Which of the following is the form of Alpha and Beta Testing?",
    options: ["Acceptance Testing", "System Testing", "Unit Testing", "Integration Testing"],
    correct: "Acceptance Testing"
  },
  {
    question: "Which of the following is a myth in testing?",
    options: ["Tester can find bugs", "Any user can test software", "Missed defects are not due to testers", "Complete testing is not possible"],
    correct: "Any user can test software"
  },
  {
    question: "SDLC stands for ________",
    options: ["Software development life cycle", "System development life cycle", "Software design life cycle", "System design life cycle"],
    correct: "Software development life cycle"
  },
  {
    question: "Which of the following divides the input domain into classes containing data?",
    options: ["Equivalent partitioning", "Environment partitioning", "Procedure division", "Compilation division"],
    correct: "Equivalent partitioning"
  },
  {
    question: "-------- is not a Test Document",
    options: ["Test Policy", "Test Case", "PIN (Project Initiation Note)", "RTM (requirement Traceability matrix)"],
    correct: "PIN (Project Initiation Note)"
  },
  {
    question: "Continual (Continuous) improvement cycle is based on systematic sequence of -------------- activities",
    options: ["SDLC", "PDCA", "waterfall model"],
    correct: "PDCA"
  },
  {
    question: "----------- is the application of quality principles to all facets and business processes of an organization",
    options: ["TQM", "Software Testing", "Software tools"],
    correct: "TQM"
  },
  {
    question: "The cost incurred in first time reviews and testing is called ---------",
    options: ["Red money", "Green money", "Blue money"],
    correct: "Blue money"
  },
  {
    question: "Innovation is the --------------- activity leading to changes",
    options: ["Planned", "Accidental", "Virtual"],
    correct: "Planned"
  },
  {
    question: "Inventions may lead to major changes in technology, way of doing work",
    options: ["true", "false"],
    correct: "true"
  },
  {
    question: "„Q‟ organizations are less quality conscious organizations",
    options: ["true", "false"],
    correct: "false"
  },
  {
    question: "Quality management system of an organization is based on which pillars?",
    options: [
      "Test plans, Test conditions & decisions",
      "Quality processes, Guidelines and standards & Formats and templates",
      "Quality policy, objectives and manuals"
    ],
    correct: "Quality processes, Guidelines and standards & Formats and templates"
  },{
    question: "Requirement Traceability Matrix is a way of doing complete mapping of software",
    options: ["true", "false"],
    correct: "true"
  },
  {
    question: "V-model uses -------- test models",
    options: [
      "Component testing, integration testing, system testing and acceptance testing",
      "Alpha testing, beta testing, acceptance testing and user testing",
      "Black box testing, white box testing and gray box testing"
    ],
    correct: "Component testing, integration testing, system testing and acceptance testing"
  }
      // Add more questions here up to 200
    ];

