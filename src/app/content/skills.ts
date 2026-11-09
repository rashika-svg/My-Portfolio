export interface SkillGroup {
  label: string;
  items: string[];
}

export const coreSkills = ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'REST APIs'];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['Angular 16 to 22', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  { label: 'UI and styling', items: ['Tailwind CSS', 'Bootstrap', 'Angular Material'] },
  { label: 'Data and state', items: ['RxJS', 'Reactive state management', 'REST APIs'] },
  {
    label: 'Interface work',
    items: [
      'Dashboards',
      'Data tables',
      'Drag and drop',
      'Media cropping',
      'Rich-text editors',
      'Video players',
    ],
  },
  { label: 'Backend exposure', items: ['ASP.NET Core', 'SQL Server', 'PostgreSQL', 'Redis'] },
];
