export interface ResearchFocusTopic {
  title: string;
  description: string;
}

export interface ResearchPlaceholderCard {
  title: string;
  status: string;
  description: string;
}

export const RESEARCH_JOURNEY_DATA = {
  sectionTitle: 'Research Journey',
  statusMessage: 'Research portfolio currently under development.',
  subHeading: 'I am currently preparing for graduate research in Robotics with a focus on:',
  focusAreas: [
    { title: 'SLAM', description: 'Simultaneous Localization and Mapping using 2D/3D LiDAR, IMU, and stereo vision.' },
    { title: 'Robot Perception', description: 'Real-time 3D point cloud filtering, sensor fusion, and spatial environment modeling.' },
    { title: 'Computer Vision', description: 'Object detection, depth estimation, and feature tracking for autonomous systems.' },
    { title: 'Autonomous Navigation', description: 'Path planning, costmap generation, and obstacle avoidance using ROS2 Nav2.' },
    { title: 'Robot Learning', description: 'Sim-to-real transfer and policy learning for robotic locomotion and control.' },
    { title: 'Embedded Robotics', description: 'Low-latency firmware, micro-ROS drivers, and real-time motor control interfaces.' },
  ],
  placeholderCards: [
    {
      title: 'Publications',
      status: 'Coming Soon',
      description: 'Peer-reviewed academic journal and conference paper manuscripts will be listed here.',
    },
    {
      title: 'Technical Reports',
      status: 'Coming Soon',
      description: 'Detailed engineering benchmarks, hardware analysis, and system architecture reports.',
    },
    {
      title: 'Research Notes',
      status: 'Coming Soon',
      description: 'Exploratory mathematical derivations, algorithm breakdowns, and experimental field logs.',
    },
    {
      title: 'Conference Papers',
      status: 'Coming Soon',
      description: 'Accepted workshop papers and conference presentations in robotics and autonomy.',
    },
  ],
};

export const MASTERS_ASPIRATIONS = {
  targetDegree: 'M.S. in Robotics / Autonomous Systems',
  targetTimeline: 'Fall 2026 / 2027 Admission Cycle',
  preferredLabs: [
    { school: 'Carnegie Mellon University', lab: 'Robotics Institute (RI)' },
    { school: 'ETH Zürich', lab: 'Autonomous Systems Lab (ASL)' },
    { school: 'University of Michigan', lab: 'Robotics Institute' },
    { school: 'Georgia Tech', lab: 'Institute for Robotics and Intelligent Machines' },
  ],
};
