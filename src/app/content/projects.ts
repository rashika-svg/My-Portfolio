export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  // Address shown in the browser frame around the screenshot.
  address?: string;
}

export interface CaseStudySection {
  heading: string;
  points: string[];
  // "index" sets short points as a large typographic list.
  style?: 'index';
}

export interface Project {
  id: string;
  title: string;
  context: string;
  summary: string;
  sections?: CaseStudySection[];
  stack: string[];
  note?: string;
  links: ProjectLink[];
  images?: ProjectImage[];
  // "lead": first image full width above the text. "pair": first two side by side.
  imageLayout?: 'lead' | 'pair';
}

const shot = (
  file: string,
  alt: string,
  caption: string,
  { width = 1440, height = 900, address = '' } = {},
): ProjectImage => ({
  src: `/images/work/${file}`,
  alt,
  caption,
  width,
  height,
  address,
});

export const featuredProjects: Project[] = [
  {
    id: 'lumina',
    title: 'Lumina UI',
    context: 'Personal project, 2026',
    summary:
      'A design system for Angular, built to work through how a product team would share one set of colours, spacing, type and components across several apps, with theming and accessibility built in from the start rather than added later.',
    sections: [
      {
        heading: 'What I built',
        points: [
          'A token pipeline. Values are written once in the DTCG format, in three tiers (primitive, semantic and component), and compiled by Style Dictionary into CSS variables and a typed TypeScript map.',
          'A signal-based theme engine with light, dark and high-contrast themes, system-preference detection, custom themes, and a saved choice that is applied before first paint.',
          'Accessible, signal-first Angular 21 components, from buttons and inputs to tabs, dialogs, menus and tables, with forms support through ControlValueAccessor.',
          "A documentation site with a component catalogue and a Component Lab for changing a component's inputs live.",
          'Vitest unit tests, Playwright end-to-end tests, Storybook, and a CI pipeline that only checks the projects a change affects.',
        ],
      },
      {
        heading: 'Decisions worth noting',
        points: [
          'Switching themes re-points CSS variables instead of re-rendering anything. Semantic tokens are references to primitive ones, so one attribute change restyles every component without JavaScript.',
          'Library boundaries are enforced by lint rules, so the token layer can never import from the components. The foundation stays framework-agnostic and can be published on its own.',
          'Components are native elements with attribute selectors, such as button[luiButton], so keyboard and screen-reader behaviour comes from the browser instead of being rebuilt.',
        ],
      },
    ],
    stack: ['Angular 21', 'Nx', 'Style Dictionary', 'Vitest', 'Playwright', 'Storybook'],
    links: [
      { label: 'Live site', url: 'https://lumina-ui-five.vercel.app' },
      { label: 'Source', url: 'https://github.com/rashika-svg/Lumina-UI' },
    ],
    imageLayout: 'lead',
    images: [
      shot(
        'lumina-home.webp',
        'Lumina UI home page in the dark theme, with its install command and a preview of its button, badge and avatar components.',
        'The documentation site, in the default dark theme',
        { address: 'lumina-ui-five.vercel.app' },
      ),
      shot(
        'lumina-component.webp',
        'Lumina UI Component Lab for the Button component: a live preview, controls for its inputs and the generated code.',
        'Component Lab: a live preview, the inputs and the generated code',
        { address: 'lumina-ui-five.vercel.app/components/button' },
      ),
      shot(
        'lumina-light.webp',
        'Lumina UI home page in the light theme.',
        'The same page in the light theme',
        { address: 'lumina-ui-five.vercel.app' },
      ),
    ],
  },
  {
    id: 'marivon',
    title: 'Marivon training website',
    context: 'Client project, 2026',
    summary:
      "The marketing site for Marivon's live, instructor-led maritime training. Visitors explore the course and its eight modules, enquire, download the brochure or sign up for updates, and each module's Book Now button takes them into the Marivon LMS to book.",
    sections: [
      {
        heading: 'What I built',
        points: [
          'The site in Angular with server-side rendering: the home page, the course page with its eight modules, enquiry and brochure requests, and a floating sign-up bar for updates.',
          "A hand-off to the LMS. Each module's Book Now button opens that module's programme there, and the Login button leads there too.",
          "A settings page behind an admin token, where the team sets each module's Book Now link and the LMS API key, live as soon as they save.",
          'A small .NET 10 API for the settings and the forms. Sign-ups go straight into the LMS, with an email to the admin as a backup.',
        ],
      },
      {
        heading: 'Decisions worth noting',
        points: [
          'There is no database. Enquiries arrive as email, sign-ups go to the LMS, and the site only stores its settings, in small files kept outside the deployed folder so a release cannot wipe them.',
          'Settings are validated before saving, written atomically, and the last twenty versions are kept.',
          'The first version took card payments through Stripe and had its own schedule editor. When booking moved into the LMS, I removed both and kept a single link per module.',
          'The LMS API key never goes back to the browser. The settings page only shows whether one is saved, and when.',
        ],
      },
    ],
    stack: ['Angular 22', 'server-side rendering', 'Tailwind CSS 4', '.NET 10'],
    links: [{ label: 'Live site', url: 'https://marivontraining.com' }],
    imageLayout: 'lead',
    images: [
      shot(
        'marivon-home.webp',
        'Marivon home page: a dark hero over a ship\'s bridge with the headline "Professional Maritime Learning. Practical Maritime Knowledge.", buttons to explore courses, enquire and subscribe, and a floating sign-up bar.',
        'The home page, with the floating sign-up bar',
        { address: 'marivontraining.com' },
      ),
      shot(
        'marivon-modules.webp',
        'Course page listing the eight modules at $300 each, with the first module open to show its summary and key learning areas.',
        'The course page: eight modules, each booked on its own',
        { address: 'marivontraining.com/courses/dynamic-positioning' },
      ),
    ],
  },
  {
    id: 'ashvad',
    title: 'Ashvad Tech website',
    context: 'Company website, 2026',
    summary:
      'The public website of Ashvad Tech, an enterprise product-engineering company. It presents the company and its products across twenty pages, and every page is generated as static HTML at build time, so it loads quickly on any connection.',
    sections: [
      {
        heading: 'What I built',
        points: [
          'The Angular front end: the home page, a solutions overview and a page for each of the fourteen solutions, plus careers and a blog.',
          'The visual design in plain CSS, without a utility framework: a dark home page and solutions overview, with lighter pages for each solution and for careers.',
          'A careers page whose role cards say when a position has been filled.',
          'An enquiry panel that takes the whole screen on phones, with its submit button fixed to the bottom.',
        ],
      },
      {
        heading: 'Decisions worth noting',
        points: [
          'Pages are prerendered, not rendered on request. The ASP.NET Core host only serves files and handles form posts.',
          'A strict asset budget. Photographs are compressed to WebP by build scripts, capped at the largest size they are shown at, and large ones ship as a srcset so phones never download desktop files.',
          'Scripts check every page for horizontal overflow at nine screen sizes, and flag any placeholder copy left in the markup.',
        ],
      },
    ],
    stack: ['Angular 22', 'static prerendering', 'CSS', 'ASP.NET Core 10'],
    links: [{ label: 'Live site', url: 'https://www.ashvad.com' }],
    imageLayout: 'lead',
    images: [
      shot(
        'ashvad-home.webp',
        'Ashvad Tech home page in a dark theme, with the headline "Engineering the Future of Products.", two calls to action, a consult-to-measure process diagram and a row of client logos.',
        'The home page',
        { address: 'www.ashvad.com' },
      ),
      shot(
        'ashvad-solutions.webp',
        'Solutions overview with cards for the Competency Management System, Planned Maintenance System and Crew Management Platform, each with a photo, a short description and feature tags.',
        'The solutions overview, one card per product',
        { address: 'www.ashvad.com/solutions' },
      ),
      shot(
        'ashvad-solution-page.webp',
        'Intelligent Digital Display solution page in a light theme, with a headline, a short description, three key figures and an illustration of screens around an office.',
        'A solution page, in the lighter inner-page style',
        { address: 'www.ashvad.com/solutions/intelligent-digital-display' },
      ),
    ],
  },
  {
    id: 'dashboards',
    title: 'Enterprise dashboards',
    context: 'Full-time role',
    summary:
      'Frontend work on enterprise dashboards: the screens where teams follow their key numbers, work through large sets of records and see data change as it happens, with each user shown what their role allows.',
    sections: [
      {
        heading: 'What I worked on',
        style: 'index',
        points: [
          'Charts and KPI summaries',
          'Large data tables',
          'Role-based views',
          'Live data updates',
        ],
      },
      {
        heading: 'The technical ground it covered',
        points: [
          'Sorting, filtering, search and pagination over large data sets',
          "Screens and actions shown according to the user's role",
          'Charts and tables that update without reloading the page',
          'Integration with .NET Core REST APIs',
        ],
      },
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    links: [],
  },
  {
    id: 'signage',
    title: 'Enterprise digital signage platform',
    context: 'Full-time role',
    summary:
      'Frontend work on an enterprise digital-signage product: the software businesses use to build, arrange and manage what plays on their screens.',
    sections: [
      {
        heading: 'What I worked on',
        style: 'index',
        points: [
          'Interactive dashboards',
          'Drag-and-drop screen layouts',
          'Media cropping and video playback',
          'Rich-text and code editors',
        ],
      },
      {
        heading: 'The technical ground it covered',
        points: [
          'Reactive data and state management with RxJS',
          'Reusable components shared across modules',
          'Responsive layouts',
          'Integration with .NET Core REST APIs',
        ],
      },
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    links: [],
  },
  {
    id: 'lms',
    title: 'Learning management system',
    context: 'Full-time role',
    summary:
      'Full-stack work on a learning management system: the platform an organisation uses to publish courses, enrol learners, test what they have learned and follow their progress.',
    sections: [
      {
        heading: 'What I worked on',
        style: 'index',
        points: [
          'Course and content management',
          'Quizzes and assessments',
          'Progress tracking and reports',
          'Users, roles and enrolment',
        ],
      },
      {
        heading: 'The technical ground it covered',
        points: [
          'Most of the build, front end and back end: Angular, an ASP.NET Core API, Entity Framework Core and PostgreSQL',
          'Role-based sign-in and permissions for learners, instructors and admins',
          'Admin dashboards with completion and score reports',
          'Localisation, so the interface can be shown in more than one language',
        ],
      },
    ],
    stack: ['Angular 21', 'Angular Material', 'Tailwind CSS', 'ASP.NET Core 10', 'PostgreSQL'],
    links: [],
    imageLayout: 'lead',
    images: [
      shot(
        'lms-dashboard.webp',
        'Learning management system admin dashboard in a dark theme: cards for sessions, cohorts, learners, users and programmes, a chart of total against active learners over twelve months, the completion rate, weekly enrolment, users by type and the top five courses.',
        'The admin dashboard: enrolment, completion and course reports, shown with sample data',
        { width: 1915, height: 944, address: 'app.marivontraining.com/dashboard' },
      ),
      shot(
        'lms-login.webp',
        'Learning management system sign-in page with an aerial photo of a ship, an email field, a language menu and a link to create an account.',
        'Sign-in, with the language menu in the corner',
        { address: 'app.marivontraining.com' },
      ),
    ],
  },
];

export const smallerProjects: Project[] = [
  {
    id: 'streaming',
    title: 'Streaming platform UI clone',
    context: 'Personal project, 2024',
    summary:
      'A streaming-service interface built to practise image-heavy responsive layouts: onboarding, side navigation, a featured carousel, browsable rows and a ranked top-10 row. Inspired by popular streaming platforms; not affiliated with any of them.',
    stack: ['Angular', 'Tailwind CSS', 'Angular Material', 'Firebase Hosting'],
    links: [
      { label: 'Live demo', url: 'https://disney-hotstar-clone-a0c89.web.app' },
      { label: 'Source', url: 'https://github.com/rashika-svg/disney-hotstar-clone' },
    ],
  },
];
