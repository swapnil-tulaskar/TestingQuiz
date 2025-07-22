
    // Pool of unique 30 questions (replace with 200 later)
    const allQuestions = [
      {
        question: "What is manual testing?",
        options: ["Automated process", "Tool-based testing", "Human-executed testing", "AI-based testing", "Scriptless testing"],
        correct: 2
      },
      {
        question: "What is a test case?",
        options: ["A tool", "A code", "A test scenario", "Step-by-step test document", "A test plan"],
        correct: 3
      },
      {
        question: "What is black box testing?",
        options: ["Knowledge of code required", "Tests internal structure", "Tests system from outside", "Developer-only testing", "Data migration check"],
        correct: 2
      },
      {
        question: "What is white box testing?",
        options: ["Tests without knowing code", "Client-side testing", "UI-based testing", "Tests internal code logic", "Data-only testing"],
        correct: 3
      },
      {
        question: "Smoke testing is:",
        options: ["Testing after bug fixes", "High-level testing", "Full system test", "Testing internal code", "Database testing"],
        correct: 1
      },
      {
        question: "Sanity testing checks:",
        options: ["Basic functionality", "Detailed logic", "System load", "Database", "UI design"],
        correct: 0
      },
      {
        question: "Regression testing ensures:",
        options: ["Database speed", "New features", "Old features still work", "Documentation update", "Tool integration"],
        correct: 2
      },
      {
        question: "What is UAT?",
        options: ["User Acceptance Testing", "Unit Automation Tool", "User Access Tool", "Usage Analysis Tool", "Upload Automation Testing"],
        correct: 0
      },
      {
        question: "Goal of test planning?",
        options: ["To hire testers", "To code tests", "To define scope and strategy", "To test login only", "To find database size"],
        correct: 2
      },
      {
        question: "Alpha testing is done by:",
        options: ["End users", "Clients", "Internal testers", "Live customers", "Beta users"],
        correct: 2
      },
      {
        question: "What is exploratory testing?",
        options: ["Random UI testing", "Unscripted testing", "Automated testing", "Tool-based testing", "Load testing"],
        correct: 1
      },
      {
        question: "Boundary value analysis tests:",
        options: ["Middle values", "Limit values", "Random values", "Negative values", "UI flow"],
        correct: 1
      },
      {
        question: "What is a bug?",
        options: ["Test document", "User request", "Code error", "Database", "Test case"],
        correct: 2
      },
      {
        question: "When is retesting done?",
        options: ["After deployment", "After bug fix", "Before development", "During planning", "Never"],
        correct: 1
      },
      {
        question: "Who performs unit testing?",
        options: ["Testers", "Clients", "Developers", "Users", "Managers"],
        correct: 2
      },
      {
        question: "Beta testing is done by:",
        options: ["Internal team", "Developers", "End users", "Test lead", "Tools"],
        correct: 2
      },
      {
        question: "Load testing measures:",
        options: ["UI quality", "User feedback", "System response under load", "Manual errors", "Security level"],
        correct: 2
      },
      {
        question: "Test scenario means:",
        options: ["Step-by-step action", "High-level condition to test", "Bug report", "Test data", "Log files"],
        correct: 1
      },
      {
        question: "What is a test suite?",
        options: ["One test case", "A group of test cases", "Tool name", "Bug list", "Project module"],
        correct: 1
      },
      {
        question: "Defect lifecycle starts with:",
        options: ["Resolved", "Rejected", "New", "Closed", "Fixed"],
        correct: 2
      },
  {
    question: "Exploratory testing is:",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Beta testing is done by:",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by:",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "Beta testing is done by: (variant 505)",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "What is UAT?",
    options: [
      "User Acceptance Testing",
      "Unit Automation Tool",
      "User Access Tool",
      "Usage Analysis Tool",
      "Upload Automation Testing"
    ],
    correct: 0
  },
  {
    question: "What is manual testing?",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "Regression testing ensures:",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "What is UAT? (variant 403)",
    options: [
      "User Acceptance Testing",
      "Unit Automation Tool",
      "User Access Tool",
      "Usage Analysis Tool",
      "Upload Automation Testing"
    ],
    correct: 0
  },
  {
    question: "What is a test case?",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "Alpha testing is done by: (variant 539)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "Beta testing is done by: (variant 402)",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "What is black box testing?",
    options: [
      "Knowledge of code required",
      "Tests internal structure",
      "Tests system from outside",
      "Developer-only testing",
      "Data migration check"
    ],
    correct: 2
  },
  {
    question: "What is the goal of test planning?",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "What is white box testing?",
    options: [
      "Tests without knowing code",
      "Client-side testing",
      "UI-based testing",
      "Tests internal code logic",
      "Data-only testing"
    ],
    correct: 3
  },
  {
    question: "What is a test case? (variant 766)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "Regression testing ensures: (variant 225)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 991)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Boundary value analysis tests:",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "What is a bug?",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Sanity testing checks:",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "What is a test case? (variant 706)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "Alpha testing is done by: (variant 446)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "What is a test case? (variant 939)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "What is white box testing? (variant 924)",
    options: [
      "Tests without knowing code",
      "Client-side testing",
      "UI-based testing",
      "Tests internal code logic",
      "Data-only testing"
    ],
    correct: 3
  },
  {
    question: "What is a bug? (variant 514)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Sanity testing checks: (variant 561)",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "What is a test suite?",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "What is a test case? (variant 626)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "Beta testing is done by: (variant 646)",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "What is the goal of test planning? (variant 833)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "When is retesting done?",
    options: [
      "After deployment",
      "After bug fix",
      "Before development",
      "During planning",
      "Never"
    ],
    correct: 1
  },
  {
    question: "What is black box testing? (variant 273)",
    options: [
      "Knowledge of code required",
      "Tests internal structure",
      "Tests system from outside",
      "Developer-only testing",
      "Data migration check"
    ],
    correct: 2
  },
  {
    question: "Who performs unit testing?",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 221)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "What is a test case? (variant 718)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "Test scenario means:",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "Boundary value analysis tests: (variant 971)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "What is a test suite? (variant 355)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "Test scenario means: (variant 902)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "What is manual testing? (variant 244)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "Beta testing is done by: (variant 805)",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "What is manual testing? (variant 318)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "What is white box testing? (variant 570)",
    options: [
      "Tests without knowing code",
      "Client-side testing",
      "UI-based testing",
      "Tests internal code logic",
      "Data-only testing"
    ],
    correct: 3
  },
  {
    question: "Test scenario means: (variant 748)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "Exploratory testing is: (variant 485)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "What is a test suite? (variant 934)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "What is the goal of test planning? (variant 247)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Boundary value analysis tests: (variant 81)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "Exploratory testing is: (variant 472)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Beta testing is done by: (variant 615)",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "What is a test case? (variant 903)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "Exploratory testing is: (variant 72)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Boundary value analysis tests: (variant 315)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "What is white box testing? (variant 200)",
    options: [
      "Tests without knowing code",
      "Client-side testing",
      "UI-based testing",
      "Tests internal code logic",
      "Data-only testing"
    ],
    correct: 3
  },
  {
    question: "Test scenario means: (variant 121)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "Regression testing ensures: (variant 781)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "Sanity testing checks: (variant 531)",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "Defect lifecycle starts with:",
    options: [
      "Resolved",
      "Rejected",
      "New",
      "Closed",
      "Fixed"
    ],
    correct: 2
  },
  {
    question: "What is UAT? (variant 746)",
    options: [
      "User Acceptance Testing",
      "Unit Automation Tool",
      "User Access Tool",
      "Usage Analysis Tool",
      "Upload Automation Testing"
    ],
    correct: 0
  },
  {
    question: "What is a test case? (variant 822)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "Regression testing ensures: (variant 994)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "What is UAT? (variant 200)",
    options: [
      "User Acceptance Testing",
      "Unit Automation Tool",
      "User Access Tool",
      "Usage Analysis Tool",
      "Upload Automation Testing"
    ],
    correct: 0
  },
  {
    question: "Boundary value analysis tests: (variant 615)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "When is retesting done? (variant 74)",
    options: [
      "After deployment",
      "After bug fix",
      "Before development",
      "During planning",
      "Never"
    ],
    correct: 1
  },
  {
    question: "What is the goal of test planning? (variant 868)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Test scenario means: (variant 125)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "When is retesting done? (variant 745)",
    options: [
      "After deployment",
      "After bug fix",
      "Before development",
      "During planning",
      "Never"
    ],
    correct: 1
  },
  {
    question: "What is a test suite? (variant 741)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "What is black box testing? (variant 452)",
    options: [
      "Knowledge of code required",
      "Tests internal structure",
      "Tests system from outside",
      "Developer-only testing",
      "Data migration check"
    ],
    correct: 2
  },
  {
    question: "What is manual testing? (variant 137)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "Defect lifecycle starts with: (variant 495)",
    options: [
      "Resolved",
      "Rejected",
      "New",
      "Closed",
      "Fixed"
    ],
    correct: 2
  },
  {
    question: "Boundary value analysis tests: (variant 210)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "Regression testing ensures: (variant 919)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "What is a test suite? (variant 19)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "What is a test case? (variant 830)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "What is black box testing? (variant 776)",
    options: [
      "Knowledge of code required",
      "Tests internal structure",
      "Tests system from outside",
      "Developer-only testing",
      "Data migration check"
    ],
    correct: 2
  },
  {
    question: "What is white box testing? (variant 705)",
    options: [
      "Tests without knowing code",
      "Client-side testing",
      "UI-based testing",
      "Tests internal code logic",
      "Data-only testing"
    ],
    correct: 3
  },
  {
    question: "What is white box testing? (variant 781)",
    options: [
      "Tests without knowing code",
      "Client-side testing",
      "UI-based testing",
      "Tests internal code logic",
      "Data-only testing"
    ],
    correct: 3
  },
  {
    question: "Load testing measures:",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "What is a test suite? (variant 426)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "What is a bug? (variant 455)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 955)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "What is manual testing? (variant 737)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "Test scenario means: (variant 138)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "What is the goal of test planning? (variant 401)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 556)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "Beta testing is done by: (variant 443)",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 965)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "What is manual testing? (variant 683)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 996)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "Smoke testing is:",
    options: [
      "Testing after bug fixes",
      "High-level testing",
      "Full system test",
      "Testing internal code",
      "Database testing"
    ],
    correct: 1
  },
  {
    question: "Alpha testing is done by: (variant 98)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "What is the goal of test planning? (variant 89)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Defect lifecycle starts with: (variant 255)",
    options: [
      "Resolved",
      "Rejected",
      "New",
      "Closed",
      "Fixed"
    ],
    correct: 2
  },
  {
    question: "Who performs unit testing? (variant 787)",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 604)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 818)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 497)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "What is the goal of test planning? (variant 337)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 690)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "What is a test case? (variant 979)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "Exploratory testing is: (variant 699)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 775)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "Defect lifecycle starts with: (variant 601)",
    options: [
      "Resolved",
      "Rejected",
      "New",
      "Closed",
      "Fixed"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 2)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "Test scenario means: (variant 237)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "Load testing measures: (variant 628)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 430)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Who performs unit testing? (variant 232)",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 258)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "What is black box testing? (variant 926)",
    options: [
      "Knowledge of code required",
      "Tests internal structure",
      "Tests system from outside",
      "Developer-only testing",
      "Data migration check"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 720)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Smoke testing is: (variant 60)",
    options: [
      "Testing after bug fixes",
      "High-level testing",
      "Full system test",
      "Testing internal code",
      "Database testing"
    ],
    correct: 1
  },
  {
    question: "Regression testing ensures: (variant 958)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "What is UAT? (variant 364)",
    options: [
      "User Acceptance Testing",
      "Unit Automation Tool",
      "User Access Tool",
      "Usage Analysis Tool",
      "Upload Automation Testing"
    ],
    correct: 0
  },
  {
    question: "Exploratory testing is: (variant 245)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "What is black box testing? (variant 498)",
    options: [
      "Knowledge of code required",
      "Tests internal structure",
      "Tests system from outside",
      "Developer-only testing",
      "Data migration check"
    ],
    correct: 2
  },
  {
    question: "When is retesting done? (variant 400)",
    options: [
      "After deployment",
      "After bug fix",
      "Before development",
      "During planning",
      "Never"
    ],
    correct: 1
  },
  {
    question: "What is manual testing? (variant 399)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "What is a bug? (variant 879)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Sanity testing checks: (variant 442)",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "Boundary value analysis tests: (variant 697)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "Sanity testing checks: (variant 970)",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "Regression testing ensures: (variant 540)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 140)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "What is white box testing? (variant 538)",
    options: [
      "Tests without knowing code",
      "Client-side testing",
      "UI-based testing",
      "Tests internal code logic",
      "Data-only testing"
    ],
    correct: 3
  },
  {
    question: "Sanity testing checks: (variant 567)",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "Sanity testing checks: (variant 142)",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "What is a test suite? (variant 845)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "What is manual testing? (variant 453)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 437)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "Test scenario means: (variant 924)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "What is the goal of test planning? (variant 614)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Test scenario means: (variant 704)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "What is UAT? (variant 123)",
    options: [
      "User Acceptance Testing",
      "Unit Automation Tool",
      "User Access Tool",
      "Usage Analysis Tool",
      "Upload Automation Testing"
    ],
    correct: 0
  },
  {
    question: "Boundary value analysis tests: (variant 38)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "What is a bug? (variant 870)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Who performs unit testing? (variant 191)",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 772)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "Defect lifecycle starts with: (variant 354)",
    options: [
      "Resolved",
      "Rejected",
      "New",
      "Closed",
      "Fixed"
    ],
    correct: 2
  },
  {
    question: "What is the goal of test planning? (variant 832)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 679)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "Who performs unit testing? (variant 706)",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "Sanity testing checks: (variant 464)",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "Beta testing is done by: (variant 34)",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "Who performs unit testing? (variant 324)",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "Smoke testing is: (variant 242)",
    options: [
      "Testing after bug fixes",
      "High-level testing",
      "Full system test",
      "Testing internal code",
      "Database testing"
    ],
    correct: 1
  },
  {
    question: "What is black box testing? (variant 521)",
    options: [
      "Knowledge of code required",
      "Tests internal structure",
      "Tests system from outside",
      "Developer-only testing",
      "Data migration check"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 398)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "Boundary value analysis tests: (variant 460)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "Regression testing ensures: (variant 335)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "When is retesting done? (variant 678)",
    options: [
      "After deployment",
      "After bug fix",
      "Before development",
      "During planning",
      "Never"
    ],
    correct: 1
  },
  {
    question: "Regression testing ensures: (variant 125)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "What is a bug? (variant 907)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Regression testing ensures: (variant 959)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 351)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "What is manual testing? (variant 677)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "Who performs unit testing? (variant 474)",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "What is a test suite? (variant 956)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "What is a test case? (variant 232)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "What is the goal of test planning? (variant 940)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Who performs unit testing? (variant 415)",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "What is the goal of test planning? (variant 604)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "What is a bug? (variant 709)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Sanity testing checks: (variant 588)",
    options: [
      "Basic functionality",
      "Detailed logic",
      "System load",
      "Database",
      "UI design"
    ],
    correct: 0
  },
  {
    question: "Load testing measures: (variant 440)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "Beta testing is done by: (variant 562)",
    options: [
      "Internal team",
      "Developers",
      "End users",
      "Test lead",
      "Tools"
    ],
    correct: 2
  },
  {
    question: "Test scenario means: (variant 153)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "Who performs unit testing? (variant 673)",
    options: [
      "Testers",
      "Clients",
      "Developers",
      "Users",
      "Managers"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 180)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "What is white box testing? (variant 883)",
    options: [
      "Tests without knowing code",
      "Client-side testing",
      "UI-based testing",
      "Tests internal code logic",
      "Data-only testing"
    ],
    correct: 3
  },
  {
    question: "What is the goal of test planning? (variant 745)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "What is a test suite? (variant 269)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "Exploratory testing is: (variant 211)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "What is a test suite? (variant 763)",
    options: [
      "One test case",
      "A group of test cases",
      "Tool name",
      "Bug list",
      "Project module"
    ],
    correct: 1
  },
  {
    question: "What is black box testing? (variant 657)",
    options: [
      "Knowledge of code required",
      "Tests internal structure",
      "Tests system from outside",
      "Developer-only testing",
      "Data migration check"
    ],
    correct: 2
  },
  {
    question: "What is a test case? (variant 462)",
    options: [
      "A tool",
      "A code",
      "A test scenario",
      "Step-by-step test document",
      "A test plan"
    ],
    correct: 3
  },
  {
    question: "What is a bug? (variant 673)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 391)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "Boundary value analysis tests: (variant 176)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "Load testing measures: (variant 598)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 394)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "Load testing measures: (variant 249)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "Regression testing ensures: (variant 378)",
    options: [
      "Database speed",
      "New features",
      "Old features still work",
      "Documentation update",
      "Tool integration"
    ],
    correct: 2
  },
  {
    question: "Boundary value analysis tests: (variant 544)",
    options: [
      "Middle values",
      "Limit values",
      "Random values",
      "Negative values",
      "UI flow"
    ],
    correct: 1
  },
  {
    question: "Smoke testing is: (variant 877)",
    options: [
      "Testing after bug fixes",
      "High-level testing",
      "Full system test",
      "Testing internal code",
      "Database testing"
    ],
    correct: 1
  },
  {
    question: "Test scenario means: (variant 708)",
    options: [
      "Step-by-step action",
      "High-level condition to test",
      "Bug report",
      "Test data",
      "Log files"
    ],
    correct: 1
  },
  {
    question: "Defect lifecycle starts with: (variant 603)",
    options: [
      "Resolved",
      "Rejected",
      "New",
      "Closed",
      "Fixed"
    ],
    correct: 2
  },
  {
    question: "Alpha testing is done by: (variant 68)",
    options: [
      "End users",
      "Clients",
      "Internal testers",
      "Live customers",
      "Beta users"
    ],
    correct: 2
  },
  {
    question: "What is UAT? (variant 853)",
    options: [
      "User Acceptance Testing",
      "Unit Automation Tool",
      "User Access Tool",
      "Usage Analysis Tool",
      "Upload Automation Testing"
    ],
    correct: 0
  },
  {
    question: "Load testing measures: (variant 278)",
    options: [
      "UI quality",
      "User feedback",
      "System response under load",
      "Manual errors",
      "Security level"
    ],
    correct: 2
  },
  {
    question: "What is a bug? (variant 992)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 658)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "What is the goal of test planning? (variant 221)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "Smoke testing is: (variant 98)",
    options: [
      "Testing after bug fixes",
      "High-level testing",
      "Full system test",
      "Testing internal code",
      "Database testing"
    ],
    correct: 1
  },
  {
    question: "What is manual testing? (variant 967)",
    options: [
      "Automated process",
      "Tool-based testing",
      "Human-executed testing",
      "AI-based testing",
      "Scriptless testing"
    ],
    correct: 2
  },
  {
    question: "Exploratory testing is: (variant 932)",
    options: [
      "Automated testing",
      "Scripted testing",
      "Simultaneous learning and testing",
      "Regression testing",
      "White box testing"
    ],
    correct: 2
  },
  {
    question: "What is a bug? (variant 862)",
    options: [
      "Test document",
      "User request",
      "Code error",
      "Database",
      "Test case"
    ],
    correct: 2
  },
  {
    question: "What is the goal of test planning? (variant 800)",
    options: [
      "To hire testers",
      "To code tests",
      "To define scope and strategy",
      "To test login only",
      "To find database size"
    ],
    correct: 2
  },
  {
    question: "When is retesting done? (variant 465)",
    options: [
      "After deployment",
      "After bug fix",
      "Before development",
      "During planning",
      "Never"
    ],
    correct: 1
  }

      // Add more questions here up to 200
    ];

