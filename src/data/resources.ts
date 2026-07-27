export interface ResourceItem {
  id: string;
  category: 'Electronics Tutorial' | 'ROS2 Guide' | 'Recommended Book' | 'Open Source Repo' | 'Hardware Guide';
  title: string;
  description: string;
  url?: string;
  tags: string[];
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  authorOrSource?: string;
}

export const RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    category: 'Electronics Tutorial',
    title: 'Selecting Motor Drivers: H-Bridge vs ESC vs CAN Servos',
    description: 'A comprehensive guide explaining current capacity, PWM frequencies, regenerative braking, optical encoder feedback, and thermal dissipation for robotics motor drivers.',
    tags: ['Electronics', 'Motors', 'H-Bridge', 'ESC', 'Hardware'],
    level: 'Beginner',
    authorOrSource: 'Akshat Mishra Robotics Lab Notes'
  },
  {
    id: 'res-2',
    category: 'Electronics Tutorial',
    title: 'IMU Noise Calibration & Madgwick Filter Tuning',
    description: 'Step-by-step walkthrough for measuring accelerometer noise covariance, gyro zero-rate bias offset, and configuring Madgwick/Mahony complementary filters on BNO055 / MPU6050.',
    tags: ['IMU', 'Sensor Calibration', 'Madgwick', 'Embedded'],
    level: 'Intermediate',
    authorOrSource: 'Akshat Mishra'
  },
  {
    id: 'res-3',
    category: 'ROS2 Guide',
    title: 'ROS2 Humble vs Jazzy Transition & Migration Guide',
    description: 'Summary of API changes, updated QoS policies, new CLI subcommands, and colcon build optimizations when moving ROS2 packages from Humble (LTS) to Jazzy Jalisco.',
    tags: ['ROS2', 'Migration', 'Humble', 'Jazzy', 'CMake'],
    level: 'Intermediate',
    authorOrSource: 'ROS2 Developer Community'
  },
  {
    id: 'res-4',
    category: 'Recommended Book',
    title: 'Probabilistic Robotics (Sebastian Thrun, Wolfram Burgard, Dieter Fox)',
    description: 'The definitive bible on robot state estimation, Bayes filters, Extended Kalman Filters, Particle Filters, and SLAM mathematics.',
    tags: ['Book', 'SLAM', 'Bayes Filters', 'Localization'],
    level: 'Advanced',
    authorOrSource: 'MIT Press'
  },
  {
    id: 'res-5',
    category: 'Recommended Book',
    title: 'Modern Robotics: Mechanics, Planning, and Control (Kevin M. Lynch)',
    description: 'Rigorous introduction to screw theory, Lie groups (SO(3), SE(3)), forward/inverse kinematics, and robot manipulator dynamics.',
    tags: ['Book', 'Kinematics', 'Manipulators', 'Control'],
    level: 'Intermediate',
    authorOrSource: 'Cambridge University Press'
  },
  {
    id: 'res-6',
    category: 'Open Source Repo',
    title: 'ros2_control Framework',
    description: 'The official ROS2 hardware control stack providing modular controllers, joint limits, and hardware interface abstractions.',
    tags: ['GitHub', 'ROS2', 'ros2_control', 'Actuators'],
    level: 'Intermediate',
    url: 'https://github.com/ros-controls/ros2_control',
    authorOrSource: 'ROS Controls Working Group'
  },
  {
    id: 'res-7',
    category: 'Hardware Guide',
    title: 'NVIDIA Jetson Orin Nano vs AGX Orin for Edge Robotics',
    description: 'Hardware selection guide weighing TOPS AI throughput, power consumption (7W-60W), PCIe expansion lanes, and camera inputs for AMR perception.',
    tags: ['NVIDIA Jetson', 'Edge AI', 'CUDA', 'Hardware'],
    level: 'Intermediate',
    authorOrSource: 'Akshat Mishra'
  }
];
