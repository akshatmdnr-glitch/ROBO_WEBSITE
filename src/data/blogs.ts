export interface BlogPlaceholderCard {
  title: string;
  category: string;
  status: string;
  description: string;
}

export const BLOG_SECTION_DATA = {
  sectionTitle: 'Notes & Articles',
  introMessage: 'Technical articles, tutorials, project write-ups and research notes will be published here as I continue my robotics journey.',
  placeholderCards: [
    {
      title: 'ROS2 Tutorials',
      category: 'ROS2 & Navigation',
      status: 'Coming Soon',
      description: 'Hands-on tutorials covering ROS2 node creation, launch files, TF2 transforms, and Nav2 costmap configuration.',
    },
    {
      title: 'Project Documentation',
      category: 'System Architecture',
      status: 'Coming Soon',
      description: 'In-depth architecture breakdowns, hardware schematics, and code walkthroughs for physical robot builds.',
    },
    {
      title: 'Research Notes',
      category: 'Spatial Intelligence',
      status: 'Coming Soon',
      description: 'Summaries of robotics research papers, mathematical derivations for SLAM, and trajectory control notes.',
    },
  ],
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [];
