import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamental concepts of computer science and programming, including algorithms, data structures, and software development principles.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "PHY201",
    name: "Quantum Mechanics",
    department: "Physics",
    description: "An introduction to the principles of quantum mechanics, covering wave-particle duality, the Schrödinger equation, and atomic structure.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "HIS301",
    name: "Modern World History",
    department: "History",
    description: "An overview of major historical events from the 20th century to the present, focusing on global conflicts, social movements, and political changes.",
    createdAt: new Date().toISOString(),
  },
];
