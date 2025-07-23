
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
  }


      // Add more questions here up to 200
    ];

