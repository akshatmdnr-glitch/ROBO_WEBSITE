export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  keyTopics: string[];
  recommendedResources: { name: string; url: string; type: 'Book' | 'Course' | 'Repo' | 'Doc' }[];
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedMonths: string;
  steps: RoadmapStep[];
}

export interface SkillChecklistItem {
  id: string;
  category: 'Math & Controls' | 'ROS2 & Middleware' | 'Embedded & Hardware' | 'C++ & Python' | 'Simulation & Perception';
  title: string;
  description: string;
}

export const ROADMAPS: Roadmap[] = [
  {
    id: 'robotics-engineer-roadmap-2026',
    title: 'Complete Robotics Engineer Roadmap 2026',
    description: 'A structured, step-by-step learning pathway from linear algebra & C++ to ROS2 autonomous mobile robots and hardware integration.',
    level: 'Beginner',
    estimatedMonths: '6 - 9 Months',
    steps: [
      {
        id: 'step-1-math-cpp',
        title: 'Phase 1: Math Foundations & Modern C++',
        description: 'Master vectors, matrices, rigid body transformations (SO(3), SE(3)), and modern C++17/C++20 object-oriented practices.',
        duration: '6 Weeks',
        keyTopics: ['Linear Algebra & Matrices', 'Eigen3 C++ Library', 'Modern C++ Pointers & Memory', 'CMake & Build Tools', 'Git Version Control'],
        recommendedResources: [
          { name: '3Blue1Brown Linear Algebra', url: 'https://youtube.com', type: 'Course' },
          { name: 'Modern C++ for Computer Vision & Robotics', url: 'https://github.com', type: 'Repo' },
        ]
      },
      {
        id: 'step-2-ros2-fundamentals',
        title: 'Phase 2: ROS2 Core Architecture',
        description: 'Learn ROS2 nodes, topics, publishers, subscribers, custom interfaces, launch files, and param servers.',
        duration: '8 Weeks',
        keyTopics: ['ROS2 Humble / Jazzy CLI', 'rclcpp C++ & rclpy Python', 'Custom msg/srv/action files', 'Launch Files', 'ros2 control'],
        recommendedResources: [
          { name: 'Official ROS2 Documentation', url: 'https://docs.ros.org', type: 'Doc' },
          { name: 'ConstructSim ROS2 Basics in 5 Days', url: 'https://theconstructsim.com', type: 'Course' },
        ]
      },
      {
        id: 'step-3-kinematics-simulation',
        title: 'Phase 3: Robot Modeling & Simulation',
        description: 'Build URDF/Xacro models, set up Gazebo Harmonic & RViz2, and simulate differential drive & ackermann steering robots.',
        duration: '6 Weeks',
        keyTopics: ['URDF / Xacro', 'TF2 Transformation Tree', 'Gazebo Harmonic Simulation', 'RViz2 Visualization', 'ros2_control Sim Bridges'],
        recommendedResources: [
          { name: 'Mastering URDF in ROS2', url: 'https://github.com', type: 'Repo' },
          { name: 'Gazebo Sim Tutorials', url: 'https://gazebosim.org', type: 'Doc' },
        ]
      },
      {
        id: 'step-4-slam-nav2',
        title: 'Phase 4: SLAM, Navigation & Motion Planning',
        description: 'Implement 2D/3D LiDAR SLAM, configure ROS2 Nav2 costmaps, local planners, and behavior trees.',
        duration: '8 Weeks',
        keyTopics: ['Cartographer & Slam Toolbox', 'Nav2 Architecture', 'Costmap2D Plugins', 'TEB & Regulated Pure Pursuit', 'Behavior Trees (BT)'],
        recommendedResources: [
          { name: 'Nav2 Documentation & Hands-On Labs', url: 'https://navigation.ros.org', type: 'Doc' },
          { name: 'Probabilistic Robotics Book', url: 'https://mitpress.mit.edu', type: 'Book' },
        ]
      },
      {
        id: 'step-5-embedded-hardware',
        title: 'Phase 5: Embedded Systems & Hardware Integration',
        description: 'Connect hardware sensors (LiDAR, IMU, Encoders) to micro-ROS on STM32 microcontrollers and NVIDIA Jetson edge computers.',
        duration: '8 Weeks',
        keyTopics: ['STM32 Embedded C++', 'micro-ROS FreeRTOS', 'CAN Bus Transports', 'Motor Driver H-Bridges', 'NVIDIA Jetson Setup'],
        recommendedResources: [
          { name: 'micro-ROS Hardware Tutorials', url: 'https://micro.ros.org', type: 'Doc' },
          { name: 'STM32 Microcontroller Fundamentals', url: 'https://st.com', type: 'Course' },
        ]
      }
    ]
  },
  {
    id: 'ros2-mastery-track',
    title: 'ROS2 Humble to Jazzy Master Track',
    description: 'Deep dive into advanced ROS2 C++ lifecycle nodes, custom ros2_control hardware interfaces, intra-process zero-copy communication, and multi-robot domain bridging.',
    level: 'Intermediate',
    estimatedMonths: '3 - 4 Months',
    steps: [
      {
        id: 'ros2-step-1',
        title: 'C++ Lifecycle Nodes & Composable Nodes',
        description: 'Understand managed node states (Unconfigured, Inactive, Active, Finalized) and dynamic plugin component loading for zero-copy IPC.',
        duration: '3 Weeks',
        keyTopics: ['rclcpp_lifecycle', 'Component Containers', 'Zero-copy IPC', 'LoanedMessages API'],
        recommendedResources: [
          { name: 'ROS2 Composable Nodes Guide', url: 'https://docs.ros.org', type: 'Doc' }
        ]
      },
      {
        id: 'ros2-step-2',
        title: 'ros2_control System Hardware Interfaces',
        description: 'Write custom C++ SystemInterface plugins for low-level motor drivers and CAN controllers.',
        duration: '4 Weeks',
        keyTopics: ['hardware_interface::SystemInterface', 'Joint State Handles', 'Command Handles', 'Controller Manager'],
        recommendedResources: [
          { name: 'ros2_control Documentation', url: 'https://control.ros.org', type: 'Doc' }
        ]
      }
    ]
  }
];

export const SKILL_CHECKLIST: SkillChecklistItem[] = [
  { id: 'c1', category: 'C++ & Python', title: 'C++17/20 Modern Features', description: 'Smart pointers, lambda functions, std::optional, constexpr, move semantics.' },
  { id: 'c2', category: 'C++ & Python', title: 'CMake & Build Systems', description: 'Writing CMakeLists.txt, linking target libraries, finding ROS2 dependencies.' },
  { id: 'c3', category: 'ROS2 & Middleware', title: 'ROS2 CLI Mastery', description: 'ros2 topic, ros2 service, ros2 action, ros2 node, ros2 param, ros2 bag, ros2 doctor.' },
  { id: 'c4', category: 'ROS2 & Middleware', title: 'TF2 Transformation Tree', description: 'Broadcasting and listening to static and dynamic TF transforms in C++.' },
  { id: 'c5', category: 'ROS2 & Middleware', title: 'Nav2 Costmaps & Planners', description: 'Configuring costmap layers, footprint parameters, global/local planners.' },
  { id: 'c6', category: 'Math & Controls', title: 'Rigid Body Kinematics', description: 'Quaternions, Euler angles, SE(3) transformation matrices, forward/inverse kinematics.' },
  { id: 'c7', category: 'Math & Controls', title: 'Kalman Filtering (EKF)', description: 'State prediction and sensor measurement updates for IMU + encoder fusion.' },
  { id: 'c8', category: 'Embedded & Hardware', title: 'micro-ROS on STM32/ESP32', description: 'Configuring micro-ROS agent, FreeRTOS tasks, and transport layers.' },
  { id: 'c9', category: 'Embedded & Hardware', title: 'CAN Bus Communication', description: 'CAN 2.0B / CAN-FD message frames, identifiers, and motor driver protocols.' },
  { id: 'c10', category: 'Simulation & Perception', title: 'Gazebo Harmonic Simulation', description: 'URDF robot spawns, sensor plugins (LiDAR, IMU, Camera), physics tuning.' },
  { id: 'c11', category: 'Simulation & Perception', title: 'OpenCV & PCL Processing', description: 'Image filtering, stereo camera calibration, point cloud downsampling, voxel grids.' },
];

export const ROS2_CHEAT_SHEET = [
  { command: 'ros2 topic list -t', description: 'List all active topics with their message types.' },
  { command: 'ros2 topic echo /odom', description: 'Print live data coming on /odom topic.' },
  { command: 'ros2 run tf2_tools view_frames', description: 'Generate a PDF diagram of the current TF tree.' },
  { command: 'ros2 launch aura_bringup robot.launch.py', description: 'Launch a ROS2 Python launch file with params.' },
  { command: 'colcon build --symlink-install --packages-select aura_nav', description: 'Build specific ROS2 package in workspace.' },
  { command: 'ros2 pkg create --build-type ament_cmake aura_control', description: 'Create a new C++ ROS2 package template.' },
];
