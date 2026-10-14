export type MockupKind = 'signage' | 'streaming' | 'contacts';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  kind: 'Full-time role' | 'Personal project';
  summary: string;
  highlights: string[];
  stack: string[];
  note?: string;
  links: ProjectLink[];
  mockup: MockupKind;
  visualNote: string;
  // Set to show a real screenshot instead of the illustrated mockup.
  image?: ProjectImage;
}

export const projects: Project[] = [
  {
    id: 'signage',
    title: 'Enterprise digital signage platform',
    kind: 'Full-time role',
    summary:
      'Frontend work on an enterprise digital-signage product: the software businesses use to build, arrange and manage the content shown on their screens.',
    highlights: [
      'Interactive dashboards and admin modules',
      'Drag-and-drop layout editing for screen content',
      'Media cropping and video playback',
      'Rich-text and code editors inside the app',
      'Integration with .NET Core REST APIs',
      'Reusable components shared across modules',
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    note: 'Built as part of my full-time role. Client names, screens and code are confidential, so this is a summary of the work.',
    links: [],
    mockup: 'signage',
    visualNote: 'Illustration. Product screens are confidential.',
  },
  {
    id: 'streaming',
    title: 'Streaming platform UI clone',
    kind: 'Personal project',
    summary:
      'A streaming-service interface I built to practise large, image-heavy responsive layouts in Angular. Inspired by popular streaming platforms; not affiliated with any of them.',
    highlights: [
      'Onboarding screen and side navigation',
      'Featured carousel with browsable title rows',
      'Movie grid and a ranked top-10 row',
      'Deployed on Firebase Hosting',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    links: [
      { label: 'Live demo', url: 'https://disney-hotstar-clone-a0c89.web.app' },
      { label: 'Source code', url: 'https://github.com/rashika-svg/disney-hotstar-clone' },
    ],
    mockup: 'streaming',
    visualNote: 'Illustration, not a screenshot',
  },
  {
    id: 'contacts',
    title: 'Contact management app',
    kind: 'Personal project',
    summary:
      'A CRUD application for managing contacts, with a recycle-bin workflow so deleted contacts can be reviewed and restored.',
    highlights: [
      'Add, view, edit and delete contacts',
      'Deleted items view with restore',
      'Mock REST API powered by JSON Server',
      'Angular Material components with Tailwind styling',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'JSON Server'],
    links: [{ label: 'Source code', url: 'https://github.com/rashika-svg/Contact-App' }],
    mockup: 'contacts',
    visualNote: 'Illustration, not a screenshot',
  },
];
