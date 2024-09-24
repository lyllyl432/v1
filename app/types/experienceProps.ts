export default interface ExperienceProps {
  dateOfEmployment: string;
  position: string;
  company: string;
  workLocation: string;
  setup: string;
  desc: string;
}

export const experience: ExperienceProps[] = [
  {
    dateOfEmployment: "Feb. 2024 - June. 2024",
    position: "Software Developer Intern",
    company: "Payruler",
    workLocation: "Lahug, Cebu City",
    setup: "Hybrid",
    desc: " Developed Web Applications: Collaborated with the development team to design, implement and deploy web applications using HTML5, CSS3, JavaScript,jQuery,PostgreSQL,PHP AND Codeigniter framework.  Analyzed and optimized existing codebases to improve performance and efficiency. Assisted to normalize database design and management using PostgreSQL, ensuring data integrity and optimizing query performance. Identified and resolve bugs in the software, improving the user experience and functionality",
  },
  {
    dateOfEmployment: "Dec. 2019 ",
    position: "Computer Technician",
    company: "Tep J's Computer Shop",
    workLocation: "Alaska Mambaling, Cebu City",
    setup: "On Site",
    desc: "Assist customers with inquiries about products and services. Assist in setting up and troubleshooting home or small business networks. Gain hands-on experience with hardware installation.",
  },
];
