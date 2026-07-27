export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Mobile Robots' | 'ROS2 Packages' | 'Computer Vision' | 'Simulation' | 'Embedded' | 'Hardware';
  tags: string[];
  featured: boolean;
  githubUrl: string;
  demoUrl?: string;
  paperUrl?: string;
  date: string;
  status: 'Completed' | 'Active Development' | 'Research Prototype';
  hardware?: string[];
  software: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  architectureOverview: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'ros2-learning-journey',
    title: 'ROS2 Learning Journey',
    shortDescription: 'Step-by-step hands-on implementation of ROS2 nodes, publishers, subscribers, custom interfaces, launch files, and TF2 transformations.',
    fullDescription: 'A comprehensive repository documenting hands-on ROS2 concepts from basic node creation and custom message interfaces to TF2 coordinate transformations, lifecycle nodes, and ros2_control hardware execution.',
    category: 'ROS2 Packages',
    tags: ['ROS2 Humble', 'C++', 'Python', 'TF2', 'rclcpp', 'Linux'],
    featured: true,
    githubUrl: 'https://github.com/akshatmdnr-glitch',
    date: '2025 - Present',
    status: 'Active Development',
    software: ['ROS2 Humble', 'C++20', 'Python', 'Linux', 'CMake'],
    keyFeatures: [
      'Custom C++ and Python node implementations for sensor publisher/subscriber streams.',
      'TF2 transform broadcaster and listener nodes for multi-link robot kinematics.',
      'Custom service and action server examples with non-blocking callbacks.',
    ],
    architectureOverview: 'ROS2 Nodes -> Custom Interfaces -> TF2 Broadcast -> Launch System',
  },
  {
    id: 'lidar-mapping-robot',
    title: 'LiDAR Mapping Robot',
    shortDescription: 'Autonomous mobile robot using 2D LiDAR and Cartographer SLAM to generate high-resolution occupancy grid maps in GPS-denied environments.',
    fullDescription: 'An autonomous mobile robot platform equipped with a 2D LiDAR and IMU. Features real-time Cartographer SLAM, costmap generation, and Nav2 waypoint navigation in indoor dynamic field environments.',
    category: 'Mobile Robots',
    tags: ['ROS2', 'Cartographer SLAM', '2D LiDAR', 'Nav2', 'C++'],
    featured: true,
    githubUrl: 'https://github.com/akshatmdnr-glitch',
    date: '2025 - Present',
    status: 'Active Development',
    hardware: ['2D LiDAR', '9-DOF IMU', 'Motor Controller', 'Differential Drive Chassis'],
    software: ['ROS2 Humble', 'Cartographer SLAM', 'Nav2', 'C++', 'Foxglove Studio'],
    metrics: [
      { label: 'Mapping Speed', value: '2.0 m²/sec' },
      { label: 'Obstacle Latency', value: '< 20 ms' },
    ],
    keyFeatures: [
      'Real-time 2D Cartographer SLAM tuned for low-drift indoor mapping.',
      'Nav2 stack integration for dynamic global and local path planning.',
      'LiDAR point cloud filtering for dynamic obstacle avoidance.',
    ],
    architectureOverview: '2D LiDAR + IMU -> Cartographer SLAM -> Nav2 Costmaps -> Motor Controller',
  },
  {
    id: 'drone-project',
    title: 'Drone Project',
    shortDescription: 'Autonomous quadcopter offboard trajectory tracking and navigation using PX4 Autopilot and companion computer communication.',
    fullDescription: 'Autonomous multi-rotor aerial system incorporating PX4 Autopilot, Micro XRCE-DDS bridge, and companion computer trajectory generation for offboard waypoint navigation.',
    category: 'Embedded',
    tags: ['PX4 Autopilot', 'ROS2', 'Micro XRCE-DDS', 'Gazebo', 'Python'],
    featured: true,
    githubUrl: 'https://github.com/akshatmdnr-glitch',
    date: '2024 - 2025',
    status: 'Active Development',
    hardware: ['PX4 Autopilot', 'Companion Computer', 'Quadcopter Frame'],
    software: ['PX4 Autopilot', 'ROS2 Humble', 'Micro XRCE-DDS', 'Gazebo'],
    keyFeatures: [
      'Micro XRCE-DDS bridge streaming vehicle telemetry and control setpoints.',
      'Offboard flight mode controller executing autonomous waypoint sequences.',
      'Gazebo simulation testbed for safe pre-flight software verification.',
    ],
    architectureOverview: 'Companion Computer -> ROS2 Offboard Node -> micro-DDS -> PX4 Flight Controller',
  },
  {
    id: 'esp32-robotics-projects',
    title: 'ESP32 Robotics Projects',
    shortDescription: 'Embedded robotics firmware for ESP32 microcontrollers controlling motor drivers, sensor telemetry, Wi-Fi streaming, and micro-ROS.',
    fullDescription: 'A collection of low-level embedded systems projects built on the ESP32 microcontroller, ranging from dual motor H-bridge speed control to micro-ROS sensor publishing over Wi-Fi/UART.',
    category: 'Embedded',
    tags: ['ESP32', 'FreeRTOS', 'Embedded C++', 'micro-ROS', 'PWM'],
    featured: true,
    githubUrl: 'https://github.com/akshatmdnr-glitch',
    date: '2024',
    status: 'Completed',
    hardware: ['ESP32 DevKit', 'L298N / BTS7960 Motor Drivers', 'Quadrature Encoders'],
    software: ['FreeRTOS', 'ESP-IDF / Arduino C++', 'micro-ROS Client Library'],
    keyFeatures: [
      'Hardware timer-based PWM motor control with PID feedback loop.',
      'Non-blocking FreeRTOS tasks for encoder decoding and sensor publishing.',
      'Micro-ROS integration for direct ROS2 network node communication from ESP32.',
    ],
    architectureOverview: 'Encoders / Sensors -> FreeRTOS Tasks -> PID Control -> PWM Motor Outputs',
  },
  {
    id: 'electronics-projects',
    title: 'Electronics Projects',
    shortDescription: 'Custom motor driver circuit design, power distribution boards, IMU sensor breakdown, and hardware schematics for mobile robots.',
    fullDescription: 'Hardware and circuit design projects focusing on robotics electronics, including LiPo power distribution management, level shifters, motor driver isolation, and IMU sensor interfacing.',
    category: 'Hardware',
    tags: ['Circuit Design', 'Motor Drivers', 'IMU Sensors', 'CAN Bus', 'LiPo Power'],
    featured: true,
    githubUrl: 'https://github.com/akshatmdnr-glitch',
    date: '2024',
    status: 'Completed',
    hardware: ['Custom Power Distribution PCB', 'MOSFET Motor Drivers', 'IMU Breakouts'],
    software: ['KiCad PCB', 'Breadboard Prototyping', 'Oscilloscope Debugging'],
    keyFeatures: [
      'Power distribution circuit with over-voltage and reverse-polarity protection.',
      'Dual H-Bridge motor driver board capable of handling high inductive loads.',
      'Clean signal routing for I2C/SPI IMU sensors minimizing electrical noise.',
    ],
    architectureOverview: 'LiPo Battery -> Power Distribution -> Isolation & Logic Level Shifters -> Microcontroller / Actuators',
  },
];
