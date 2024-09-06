export default interface ExperienceProps {
  dateOfEmployment: string;
  position: string;
  company: string;
  workLocation: string;
  setup: string;
}

export const experience: ExperienceProps[] = [
  {
    dateOfEmployment: "Feb. 2024 - June. 2024",
    position: "Associate Software Developer",
    company: "Genii Hut Technologies Corporation",
    workLocation: "Lahug, Cebu City",
    setup: "Hybrid",
  },
  {
    dateOfEmployment: "Dec. 2019",
    position: "Computer Technician Intern",
    company: "Tep J's Computer Shop",
    workLocation: "Alaska Mambaling, Cebu City",
    setup: "On Site",
  },
];
