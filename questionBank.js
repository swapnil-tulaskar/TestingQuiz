

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
    question: "How does risk-based testing help?",
    options: [
      "It delays testing",
      "It helps identify low-priority bugs",
      "It prioritizes testing based on impact and likelihood",
      "It skips regression testing"
    ],
    correct: 3
  },
  {
    question: "Which of the following is not included in failure costs?",
    options: [
      "rework",
      "repair",
      "failure mode analysis",
      "none of the mentioned"
    ],
    correct: 4
  },
  {
    question: "Which requirements are the foundation from which quality is measured?",
    options: [
      "Hardware",
      "Software",
      "Programmers",
      "None of the mentioned"
    ],
    correct: 2
  },
  {
    question: "Which of the following is not a SQA plan for a project?",
    options: [
      "evaluations to be performed",
      "amount of technical work",
      "audits and reviews to be performed",
      "documents to be produced by the SQA group"
    ],
    correct: 2
  },
  {
    question: "Degree to which design specifications are followed in manufacturing the product is called",
    options: [
      "Quality Control",
      "Quality of conformance",
      "Quality Assurance",
      "None of the mentioned"
    ],
    correct: 2
  },
  {
    question: "Which of the following is not included in External failure costs?",
    options: [
      "testing",
      "help line support",
      "warranty work",
      "complaint resolution"
    ],
    correct: 1
  },
  {
    question: "Which of the following is not an appraisal cost in SQA?",
    options: [
      "inter-process inspection",
      "maintenance",
      "quality planning",
      "testing"
    ],
    correct: 3
  },
  {
    question: "Who identifies, documents, and verifies that corrections have been made to the software?",
    options: [
      "Project manager",
      "Project team",
      "SQA group",
      "All of the mentioned"
    ],
    correct: 3
  },
  {
    question: "The primary objective of formal technical reviews is to find _________ during the process so that they do not become defects after release of the software",
    options: [
      "errors",
      "equivalent faults",
      "failure cause",
      "none of the mentioned"
    ],
    correct: 1
  },
  {
    question: "What is not included in prevention costs?",
    options: [
      "quality planning",
      "formal technical reviews",
      "test equipment",
      "equipment calibration and maintenance"
    ],
    correct: 4
  },
  {
    question: "Software quality assurance consists of the auditing and reporting functions of management",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },
  {
    question: "Quality Management in software engineering is also known as",
    options: ["SQA", "SQM", "SQI", "SQA and SQM"],
    correct: 1
  },
  {
    question: "Quality also can be looked at in terms of user satisfaction which includes",
    options: [
      "A compliant product",
      "Good quality output",
      "Delivery within budget and schedule",
      "All of the mentioned"
    ],
    correct: 4
  },
  {
    question: "Inspections and testing are what kinds of Quality Costs?",
    options: ["Prevention", "Internal Failure", "External Failure", "Appraisal"],
    correct: 1
  },
  {
    question: "What is Six Sigma?",
    options: [
      "It is the most widely used strategy for statistical quality assurance",
      "The “Six Sigma” refers to six standard deviations",
      "It is the most widely used strategy for statistical quality assurance AND The “Six Sigma” refers to six standard deviations",
      "A Formal Technical Review(FTR) guideline for quality walkthrough or inspection"
    ],
    correct: 3
  },
  {
    question: "Which of the following is not a core step of Six Sigma?",
    options: ["Define", "Control", "Measure", "Analyse"],
    correct: 2
  },
  {
    question: "Non-conformance to software requirements is known as",
    options: ["Software availability", "Software reliability", "Software failure", "None of the mentioned"],
    correct: 3
  },
  {
    question: "Software safety is equivalent to software reliability",
    options: ["True", "False"],
    correct: 2
  },
  {
    question: "Misinterpretation of customer communication is a sample of possible cause defects",
    options: ["True", "False"],
    correct: 1
  },
  {
    question: "What kind of quality cost is incurred when an error is detected in a product prior to shipment?",
    options: ["Prevention", "Internal Failure", "External Failure", "Appraisal"],
    correct: 2
  },
  {
    question: "The degree to which the design specifications are followed during manufacturing is known as",
    options: ["Quality of design", "Quality of conformance", "Quality of testing", "None of the mentioned"],
    correct: 2
  },
  {
    question: "Quality of design encompasses requirements and specifications of the system",
    options: ["True", "False"],
    correct: 1
  },
  {
    question: "According to ISO 9001, inspection and testing comes under which management responsibility?",
    options: ["Process control", "Document control", "Control of nonconforming products", "Servicing"],
    correct: 1
  },
  {
    question: "Alpha testing is done at",
    options: ["Developer‟s end", "User‟s end", "Developer‟s & User‟s end", "None of the mentioned"],
    correct: 1
  },
  {
    question: "Boundary value analysis belong to?",
    options: ["White Box Testing", "Black Box Testing", "White Box & Black Box Testing", "None of the mentioned"],
    correct: 2
  },
  {
    question: "What are the various Testing Levels?",
    options: ["Unit Testing", "System Testing", "Integration Testing", "All of the mentioned"],
    correct: 4
  },
  {
    question: "Which of the following is/are White box technique?",
    options: ["Statement Testing", "Decision Testing", "Condition Coverage", "All of the mentioned"],
    correct: 4
  },
  {
    question: "Exhaustive testing is",
    options: ["always possible", "practically possible", "impractical but possible", "impractical and impossible"],
    correct: 3
  },
  {
    question: "White Box techniques are also classified as",
    options: ["Design based testing", "Structural testing", "Error guessing technique", "None of the mentioned"],
    correct: 2
  },
  {
    question: "Which of the following term describes testing?",
    options: ["Finding broken code", "Evaluating deliverable to find errors", "A stage of all projects", "None of the mentioned"],
    correct: 2
  },
  {
    question: "The testing in which code is checked",
    options: ["Black box testing", "White box testing", "Red box testing", "Green box testing"],
    correct: 2
  },
  {
    question: "Acceptance testing is also known as",
    options: ["Grey box testing", "White box testing", "Alpha Testing", "Beta testing"],
    correct: 4
  },
  {
    question: "Which of the following is non-functional testing?",
    options: ["Black box testing", "Performance testing", "Unit testing", "None of the mentioned"],
    correct: 2
  },
  {
    question: "Beta testing is done at",
    options: ["User‟s end", "Developer‟s end", "User‟s & Developer‟s end", "None of the mentioned"],
    correct: 1
  },
  {
    question: "Unit testing is done by",
    options: ["Users", "Developers", "Customers", "None of the mentioned"],
    correct: 2
  },
  {
    question: "Behavioral testing is",
    options: ["White box testing", "Black box testing", "Grey box testing", "None of the mentioned"],
    correct: 2
  },
  {
    question: "Which of the following is black box testing",
    options: ["Basic path testing", "Boundary value analysis", "Code path analysis", "None of the mentioned"],
    correct: 2
  },
  {
    question: "Validation refers to the set of tasks that ensure that software correctly implements a specific function",
    options: ["True", "False"],
    correct: 2
  },
  {
    question: "In which testing level the focus is on customer usage?",
    options: ["Alpha Testing", "Beta Testing", "Validation Testing", "Both Alpha and Beta"],
    correct: 4
  },
  {
    question: "Which testing is an integration testing approach that is commonly used when “shrink-wrapped” software products are being developed?",
    options: ["Regression Testing", "Integration testing", "Smoke testing", "Validation testing"],
    correct: 3
  },
  {
    question: "What is normally considered as an adjunct to the coding step?",
    options: ["Integration testing", "Unit testing", "Completion of Testing", "Regression Testing"],
    correct: 2
  },
  {
    question: "What is the main purpose of integration testing?",
    options: ["Design errors", "Interface errors", "Procedure errors", "None of the above"],
    correct: 2
  },
  {
    question: "Testing of individual components by the developers comes under which type of testing?",
    options: ["Integration testing", "Validation testing", "Unit testing", "None of the above"],
    correct: 3
  },
  {
    question: "What is the main purpose of a Requirement Traceability Matrix (RTM)?",
    options: ["To record test results", "To trace defects", "To map requirements to test cases", "To manage team roles", "To automate test cases"],
    correct: 2
  },
  {
    question: "Which type of testing ensures that new code changes do not break existing functionality?",
    options: ["Smoke Testing", "Sanity Testing", "Regression Testing", "Exploratory Testing", "Alpha Testing"],
    correct: 2
  },
  {
    question: "What is the key difference between severity and priority in defect management?",
    options: ["Severity is about business need, priority is about impact", "Severity is technical impact, priority is business urgency", "Both are same", "Priority is set by tester", "Severity is always low"],
    correct: 1
  },
  {
    question: "In which phase of the STLC is the test plan created?",
    options: ["Test Execution", "Test Design", "Test Closure", "Test Planning", "Requirement Analysis"],
    correct: 3
  },
  {
    question: "What is exploratory testing?",
    options: ["Automated testing technique", "Testing based on pre-written scripts", "Simultaneous learning, test design, and execution", "Only UI testing", "Only backend testing"],
    correct: 2
  },
  {
    question: "Which document is used to determine when to stop testing?",
    options: ["Test Plan", "Test Case", "Defect Report", "Traceability Matrix", "Test Summary Report"],
    correct: 0
  },
  {
    question: "Why is boundary value analysis useful in manual testing?",
    options: ["To skip validations", "To test edge conditions", "To automate logic", "To generate test scripts", "To ignore defects"],
    correct: 1
  },
  {
    question: "What is smoke testing?",
    options: ["Testing each function thoroughly", "Basic testing to check system stability", "Database testing", "Security testing", "Performance testing"],
    correct: 1
  },
  {
    question: "When is a defect considered as 'Deferred'?",
    options: ["When it's rejected", "When it's fixed", "When it's postponed to future release", "When it's reopened", "When it is retested"],
    correct: 2
  },
  {
    question: "What is the goal of a test closure activity?",
    options: ["Open new defects", "Update test scripts", "Summarize and archive testing deliverables", "Automate all cases", "Release product"],
    correct: 2
  },
  {
    question: "Which testing technique is most suitable when requirements are not clear?",
    options: ["Unit Testing", "Smoke Testing", "Exploratory Testing", "Automation Testing", "Sanity Testing"],
    correct: 2
  },
  {
    question: "What does 'Test Coverage' refer to?",
    options: ["Number of users", "Lines of code tested", "Extent to which testing covers requirements", "Test automation rate", "Execution speed"],
    correct: 2
  },
  {
    question: "Which type of testing focuses on user-friendliness and interface?",
    options: ["Integration Testing", "System Testing", "Usability Testing", "Load Testing", "Security Testing"],
    correct: 2
  },
  {
    question: "Why is negative testing important?",
    options: ["To test normal flows", "To increase code size", "To verify system handles invalid inputs gracefully", "To avoid automation", "To add features"],
    correct: 2
  },
  {
    question: "What is the best practice for maintaining test cases?",
    options: ["Never change them", "Write once and forget", "Update regularly with requirement changes", "Only use for automation", "Delete old test cases"],
    correct: 2
  },
  {
    question: "Which type of testing is conducted without planning and documentation?",
    options: ["Sanity Testing", "Exploratory Testing", "Regression Testing", "System Testing", "Smoke Testing"],
    correct: 1
  },
  {
    question: "What is the key advantage of using a defect tracking tool?",
    options: ["More meetings", "Faster coding", "Effective defect lifecycle management", "Harder communication", "Less visibility"],
    correct: 2
  },
  {
    question: "What should a tester do if a requirement is unclear?",
    options: ["Guess the logic", "Start writing test cases", "Skip it", "Ask BA or stakeholders for clarification", "Write code"],
    correct: 3
  },
  {
    question: "What is the role of test data in manual testing?",
    options: ["It's not needed", "Used to simulate real inputs for testing", "Only for automation", "For writing code", "Used to train testers"],
    correct: 1
  },
  {
    question: "How is retesting different from regression testing?",
    options: ["Retesting is for checking fixed defects, regression is for checking impact on other areas", "Both are same", "Regression is not required", "Retesting is faster", "Retesting is always automated"],
    correct: 0
  }



      // Add more questions here up to 200
    ];

