export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  status: 'Published' | 'In Review' | 'Preprint' | 'In Preparation';
  abstract: string;
  pdfUrl?: string;
  codeUrl?: string;
  doi?: string;
  bibtex?: string;
  tags: string[];
}

export interface ResearchInterest {
  title: string;
  description: string;
  iconName: string;
  keyTopics: string[];
  currentFocus: string;
}

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: 'Visual-Inertial SLAM & State Estimation',
    description: 'Resilient sensor fusion combining 3D LiDAR, stereo cameras, and high-frequency IMUs for GPS-denied autonomous navigation in dynamic environments.',
    iconName: 'Compass',
    keyTopics: ['Factor Graph Optimization', 'EKF / UKF Fusion', 'LiDAR-Inertial Odometry', 'Loop Closure Detection'],
    currentFocus: 'Investigating GPU-accelerated non-linear factor graph optimization using GTSAM on edge hardware.',
  },
  {
    title: 'Real-Time Motion Planning & Control',
    description: 'Model Predictive Control (MPC) and trajectory generation algorithms operating under non-holonomic constraints and unpredictable dynamic obstacles.',
    iconName: 'Cpu',
    keyTopics: ['Convex MPC', 'TEB Local Planner', 'Trajectory Optimization', 'Control Barrier Functions (CBF)'],
    currentFocus: 'Formulating safety-critical Control Barrier Functions integrated with ROS2 Nav2 local trajectory planner.',
  },
  {
    title: 'Sim-to-Real Transfer & Reinforcement Learning',
    description: 'Leveraging photorealistic physics simulations (NVIDIA Isaac Sim / Gazebo) to train robust locomotion and manipulation policies deployable directly onto physical platforms.',
    iconName: 'Layers',
    keyTopics: ['Domain Randomization', 'Physics Simulation', 'Isaac Gym / Sim', 'Policy Optimization'],
    currentFocus: 'Training domain-randomized quadruped gait controllers in Isaac Sim for zero-shot deployment on physical micro-quadrupeds.',
  },
  {
    title: 'Hardware-Software Co-Design for Robotics',
    description: 'Optimizing low-latency ROS2 node pipelines, custom micro-controllers, and CAN-bus telemetry architectures for embedded real-time robotics.',
    iconName: 'Zap',
    keyTopics: ['ros2_control', 'micro-ROS', 'STM32 Embedded C++', 'Real-time Linux (PREEMPT_RT)'],
    currentFocus: 'Developing a zero-copy micro-ROS hardware transport layer for CAN-FD buses in joint-level motor nodes.',
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-lidar-slam-factor-graph-2026',
    title: 'GPU-Accelerated LiDAR-Inertial Odometry with Tight-Coupled Factor Graph Optimization for Edge Robotics',
    authors: ['Akshat Mishra', 'Dr. Research Mentor', 'Lab Collaborator'],
    venue: 'IEEE International Conference on Robotics and Automation (ICRA 2026)',
    year: '2026',
    status: 'In Review',
    abstract: 'In this paper, we present a GPU-accelerated LiDAR-Inertial Odometry framework engineered specifically for resource-constrained edge platforms such as the NVIDIA Jetson Orin. By parallelizing scan matching and factor graph optimization across CUDA streams, our method achieves sub-10ms state updates with under 2 cm spatial drift across long-range GPS-denied datasets.',
    pdfUrl: '/papers/icra2026_lidar_slam_preprint.pdf',
    codeUrl: 'https://github.com/akshatmdnr-glitch/gpu-lio-sam',
    doi: '10.1109/ICRA.2026.10492026',
    tags: ['LiDAR-Inertial SLAM', 'CUDA', 'Factor Graphs', 'Jetson Edge AI'],
    bibtex: `@inproceedings{mishra2026gpulio,
  title={GPU-Accelerated LiDAR-Inertial Odometry with Tight-Coupled Factor Graph Optimization for Edge Robotics},
  author={Mishra, Akshat and Mentor, Research and Collaborator, Lab},
  booktitle={IEEE International Conference on Robotics and Automation (ICRA)},
  year={2026}
}`,
  },
  {
    id: 'pub-quadruped-mpc-cbf-2025',
    title: 'Robust Quadruped Locomotion on Compliant Terrains Using Convex MPC with Adaptive Ground Impedance Sensing',
    authors: ['Akshat Mishra', 'Robotics Research Group'],
    venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025 Workshop)',
    year: '2025',
    status: 'Published',
    abstract: 'We introduce a dynamic gait controller for quadruped robots traversing uneven and compliant surfaces. The system combines high-rate ground contact detection with convex MPC optimization, significantly mitigating slippage and foot-placement disturbance.',
    pdfUrl: '/papers/iros2025_quadruped_mpc.pdf',
    codeUrl: 'https://github.com/akshatmdnr-glitch/titanquad-mpc',
    tags: ['Quadruped Locomotion', 'Convex MPC', 'Isaac Sim', 'Control Systems'],
    bibtex: `@inproceedings{mishra2025quadruped,
  title={Robust Quadruped Locomotion on Compliant Terrains Using Convex MPC with Adaptive Ground Impedance Sensing},
  author={Mishra, Akshat},
  booktitle={IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) Workshop},
  year={2025}
}`,
  },
  {
    id: 'pub-microros-canfd-transport-2025',
    title: 'Performance Analysis of Micro-ROS Transport Layer Protocols on Embedded STM32 CAN-FD Bus',
    authors: ['Akshat Mishra'],
    venue: 'Open-Source Robotics Foundation Technical Note / Preprint',
    year: '2025',
    status: 'Preprint',
    abstract: 'A comparative benchmark study measuring message throughput, latency jitter, and CPU utilization across UART, SPI, and CAN-FD transports for micro-ROS running on STM32 microcontrollers in joint-level motor actuation tasks.',
    pdfUrl: '/papers/microros_canfd_benchmark.pdf',
    codeUrl: 'https://github.com/akshatmdnr-glitch/microros-stm32-actuator',
    tags: ['micro-ROS', 'STM32', 'CAN-FD', 'Embedded Robotics'],
    bibtex: `@article{mishra2025microros,
  title={Performance Analysis of Micro-ROS Transport Layer Protocols on Embedded STM32 CAN-FD Bus},
  author={Mishra, Akshat},
  journal={arXiv preprint arXiv:2504.09123},
  year={2025}
}`,
  },
];

export const MASTERS_ASPIRATIONS = {
  targetDegree: "Master of Science in Robotics / Autonomous Systems",
  targetTimeline: "Fall 2026 / 2027 Admissions",
  researchStatementSummary: "My objective as a graduate student is to investigate resilient spatial intelligence, real-time factor graph SLAM, and hardware-accelerated control systems to enable autonomous field robots to operate reliably in harsh, unmapped, and dynamic environments.",
  preferredLabs: [
    { school: "CMU Robotics Institute", lab: "Field Robotics Center / Spatial AI Lab" },
    { school: "ETH Zürich", lab: "Robotic Systems Lab (RSL) / Autonomous Systems Lab" },
    { school: "MIT", lab: "Marine Robotics / Biomimetic Robotics Lab" },
    { school: "University of Michigan", lab: "Robotics Department / Biped Lab" },
  ]
};
