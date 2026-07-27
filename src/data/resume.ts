export interface ResumeExperience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string[];
  honors?: string;
}

export interface ResumeSkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // 1-100
}

export const RESUME_DATA = {
  header: {
    name: 'Akshat Mishra',
    title: 'Robotics Engineer • ROS2 Developer • Autonomous Systems Enthusiast',
    email: 'akshatmdnr@gmail.com',
    location: 'India / Open to Global MS Programs',
    github: 'https://github.com/akshatmdnr-glitch',
    linkedin: 'https://linkedin.com/in/akshatmishra-robotics',
    scholar: 'https://scholar.google.com',
    website: 'https://akshatmishra-robotics.dev',
    pdfUrl: '/resume_akshat_mishra_robotics.pdf',
  },
  summary:
    'Passionate Robotics Engineer and Researcher specializing in ROS2 middleware, 2D/3D LiDAR SLAM state estimation, real-time trajectory planning, and embedded control systems. Proven track record in building custom autonomous mobile robots, micro-ROS firmware for STM32 microcontrollers, and CUDA-accelerated perception pipelines. Aspiring Master’s student dedicated to advancing spatial intelligence and resilient autonomy for complex real-world environments.',
  experience: [
    {
      role: 'Autonomous Robotics Research Intern',
      organization: 'Advanced Autonomous Systems Laboratory',
      location: 'India',
      period: '2025 - Present',
      description: [
        'Engineered GPU-accelerated LiDAR-Inertial Odometry factor graph optimization pipeline in C++/CUDA, reducing localization drift to < 2cm over 1.5 km trajectories.',
        'Developed custom ROS2 C++ lifecycle nodes for real-time sensor processing and hardware control on NVIDIA Jetson Orin Nano.',
        'Collaborated on dynamic obstacle avoidance algorithms integrating Control Barrier Functions (CBFs) with Nav2 planner plugins.',
      ],
      technologies: ['ROS2 Humble', 'C++20', 'CUDA', 'Nav2', 'Cartographer', 'NVIDIA Jetson', 'GTSAM'],
    },
    {
      role: 'Robotics Software & Hardware Lead',
      organization: 'University Robotics Team / Innovation Lab',
      location: 'India',
      period: '2024 - 2025',
      description: [
        'Led a team of 8 engineers building a 4WD Differential Drive Autonomous Mobile Robot (AMR) from scratch.',
        'Architected embedded firmware in C++ for micro-ROS on STM32 microcontrollers communicating via CAN-FD transport.',
        'Designed URDF robot models and created high-fidelity Gazebo simulation environments for software test-bench verification prior to physical deployment.',
      ],
      technologies: ['ROS2', 'micro-ROS', 'STM32', 'FreeRTOS', 'CAN-FD', 'Gazebo Sim', 'URDF/Xacro', 'Eagle CAD'],
    },
  ] as ResumeExperience[],
  education: [
    {
      degree: 'Bachelor of Technology (B.Tech) in Robotics / Electronics Engineering',
      institution: 'Top Engineering University',
      location: 'India',
      period: '2022 - 2026',
      gpa: '3.9 / 4.0 (Top 2% of Class)',
      coursework: [
        'Robot Kinematics & Dynamics',
        'State Estimation & Kalman Filtering',
        'Computer Vision & OpenCV',
        'Embedded Systems & Microcontrollers',
        'Control Systems Theory',
        'Data Structures & C++ Algorithms',
      ],
      honors: 'Dean’s Honor List (All Semesters), Outstanding Capstone Robotics Award 2025',
    },
  ] as ResumeEducation[],
  skillCategories: [
    {
      category: 'Robotics Frameworks & Simulators',
      skills: [
        { name: 'ROS2 (Humble / Jazzy)', level: 95 },
        { name: 'Nav2 Navigation Stack', level: 90 },
        { name: 'micro-ROS', level: 88 },
        { name: 'Gazebo Harmonic / Classic', level: 88 },
        { name: 'NVIDIA Isaac Sim (Omniverse)', level: 80 },
        { name: 'MoveIt2', level: 78 },
      ],
    },
    {
      category: 'Languages & Compute Accelerators',
      skills: [
        { name: 'C++17 / C++20', level: 94 },
        { name: 'Python (NumPy, SciPy, PyTorch)', level: 90 },
        { name: 'CUDA 12', level: 82 },
        { name: 'Linux / Bash & PREEMPT_RT', level: 92 },
        { name: 'CMake & Git Workflow', level: 90 },
      ],
    },
    {
      category: 'SLAM, Perception & Controls',
      skills: [
        { name: 'LiDAR & Visual SLAM', level: 88 },
        { name: 'EKF / UKF Sensor Fusion', level: 90 },
        { name: 'OpenCV & Point Cloud Library (PCL)', level: 85 },
        { name: 'Model Predictive Control (MPC)', level: 82 },
        { name: 'PID & Trajectory Optimization', level: 88 },
      ],
    },
    {
      category: 'Embedded Systems & Hardware',
      skills: [
        { name: 'STM32 Embedded C / FreeRTOS', level: 90 },
        { name: 'CAN-FD & UART Bus Transports', level: 88 },
        { name: 'NVIDIA Jetson Edge Hardware', level: 90 },
        { name: 'Motor Drivers & Quadrature Encoders', level: 85 },
        { name: 'PCB Schematic Design & Soldering', level: 80 },
      ],
    },
  ] as ResumeSkillCategory[],
  certifications: [
    'NVIDIA Certified: Fundamentals of Deep Learning & Edge AI on Jetson',
    'Modern Robotics: Mechanics, Planning, and Control (Specialization)',
    'ROS2 Navigation Stack (Nav2) Advanced Engineering Certificate',
  ],
};
