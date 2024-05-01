export const COLUMN_OPTIONS = [
  { value: "", label: "Select Status", isDisabled: true },
  
  { value: "todo", label: "TODO" },
  { value: "doing", label: "In Progress" },
  { value: "done", label: "Complete" },
];

export const ASSIGNEE_OPTIONS = [
  { value: "", label: "Select an assignee", isDisabled: true },
  { value: "harikrishna", label: "hari kitti" },
  { value: "anil", label: "anil kumar" },
  { value: "naveen", label: "P naveen" },
];

export const DEFAULT_CARDS = [
  
  // TODO
  {
    title: "Practice HTML",
    id: "1",
    column: "todo",
    assignee: "harikrishna",
    description:
      "Learn Html and build more web pages",
  },
  {
    title: "Practice CSS",
    id: "2",
    column: "todo",
    assignee: "anil",
    description:
      "Learn css and styles the  more web pages",
  },
  {
    title: "Practice JavaScript",
    id: "3",
    column: "todo",
    assignee: "naveen",
    description:
      "Practice javascript to improve user experiance and make web pages more interactive.",
  },

  // DOING
  {
    title: "Genco preparation ongoing",
    id: "4",
    column: "doing",
    assignee: "naveen",
    description:
      "Which is core job so I want to test my knowledge by writing Genco exam.",
  },
  {
    title: "DSA prepaaration ongoing",
    id: "5",
    column: "doing",
    assignee: "anil",
    description:
      "I am learning DSA and want to be in a good position",
  },

  // DONE
  {
    title: "Interview preparation done",
    id: "6",
    column: "done",
    assignee: "harikrishna",
    description:
      "I have completed my mock interview preparation",
  },
];
