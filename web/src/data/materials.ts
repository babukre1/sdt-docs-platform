export type MaterialType =
  | 'docs'
  | 'pdf'
  | 'pptx'
  | 'docx'
  | 'xlsx'
  | 'zip'
  | 'link'
  | 'github'
  | 'video';

export type Material = {
  id: string;
  title: string;
  description?: string;
  type: MaterialType;
  size?: string;
  href: string;
};

export type MaterialGroup = {
  day: string;
  date: string;
  materials: Material[];
};

/*
 * Add real workshop files to web/public/materials/day-X/
 * and add their metadata here.
 *
 * Example PDF:
 * {
 *   id: 'git-slides',
 *   title: 'Git & GitHub Slides',
 *   type: 'pdf',
 *   size: '3.2 MB',
 *   href: '/materials/day-1/git-github-slides.pdf',
 * }
 */
export const materialGroups: MaterialGroup[] = [
  {
    day: 'Day 1',
    date: 'Saturday, 19 September 2026',
    materials: [
      {
        id: 'git-guide',
        title: 'Git & GitHub Workshop Guide',
        description: 'Step-by-step workshop documentation.',
        type: 'docs',
        href: '/docs/day-1/git-github/',
      },
      {
        id: 'html-css-guide',
        title: 'HTML & CSS Workshop Guide',
        description: 'HTML and CSS notes with examples.',
        type: 'docs',
        href: '/docs/day-1/html-css/',
      },
    ],
  },
  {
    day: 'Day 2',
    date: 'Sunday, 20 September 2026',
    materials: [
      {
        id: 'javascript-guide',
        title: 'JavaScript Fundamentals',
        description: 'JavaScript workshop documentation.',
        type: 'docs',
        href: '/docs/day-2/javascript/',
      },
    ],
  },
  {
    day: 'Day 3',
    date: 'Monday, 21 September 2026',
    materials: [
      {
        id: 'react-guide',
        title: 'React Fundamentals',
        description: 'React workshop documentation and examples.',
        type: 'docs',
        href: '/docs/day-3/react/',
      },
    ],
  },
  {
    day: 'Day 4',
    date: 'Tuesday, 22 September 2026',
    materials: [],
  },
  {
    day: 'Day 5',
    date: 'Wednesday, 23 September 2026',
    materials: [],
  },
  {
    day: 'Day 6',
    date: 'Thursday, 24 September 2026',
    materials: [],
  },
];
