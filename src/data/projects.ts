export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Mobile Robots' | 'ROS2 Packages' | 'Computer Vision' | 'Simulation' | 'Embedded';
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
    id: 'autonomous-mobile-robot-nav2',
    title: 'AuraBot: Autonomous AMR with ROS2 Nav2 & Cartographer',
    shortDescription: 'Custom 4WD differential drive AMR featuring ROS2 Humble, 2D LiDAR SLAM, TEB Local Planner, and custom web telemetry dashboard.',
    fullDescription: 'AuraBot is a full-stack autonomous mobile robot built from scratch for dynamic indoor environments. It integrates real-time Cartographer SLAM, adaptive Nav2 costmaps with obstacle inflation, custom ROS2 C++ lifecycle nodes, and an onboard NVIDIA Jetson Orin Nano for zero-latency sensor processing.',
    category: 'Mobile Robots',
    tags: ['ROS2 Humble', 'C++', 'Cartographer SLAM', 'Nav2', 'NVIDIA Jetson', 'LiDAR'],
    featured: true,
    githubUrl: 'https://github.com/akshatmishra/aurabot-ros2',
    demoUrl: 'https://youtube.com',
    date: '2025 - Present',
    status: 'Active Development',
    hardware: ['NVIDIA Jetson Orin Nano 8GB', 'RPLiDAR A2M12 (12m range)', 'BNO055 9-DOF IMU', 'RoboClaw 2x15A Motor Controller', 'Custom 3D Printed Chassis'],
    software: ['ROS2 Humble', 'C++20', 'Nav2 TEB Planner', 'Cartographer', 'Foxglove Studio', 'Docker'],
    metrics: [
      { label: 'Localization Accuracy', value: '±1.8 cm' },
      { label: 'Mapping Speed', value: '2.5 m²/sec' },
      { label: 'Obstacle Latency', value: '< 15 ms' },
    ],
    keyFeatures: [
      'Custom ROS2 C++ hardware interface implementing ros2_control for closed-loop motor velocity control with quadrature encoders.',
      'Cartographer SLAM tuning with loop closure optimization for low-drift multi-room mapping.',
      'Dynamic costmap plugins filter out moving human obstacles using LiDAR clustering.',
      'Integrated telemetry bridge streaming TF tree, battery telemetry, and camera feed to Foxglove WebSocket server.',
    ],
    architectureOverview: 'Sensor data (LiDAR + IMU) -> EKF Node -> Cartographer SLAM -> Nav2 Planner Server -> ros2_control -> Motor Controller',
  },
  {
    id: 'cuda-lidar-slam-perception',
    title: 'PulseSLAM: GPU-Accelerated 3D LiDAR Point Cloud SLAM',
    shortDescription: 'C++/CUDA implementation of NDT point cloud registration and real-time map building for 32-channel 3D LiDAR sensors.',
    fullDescription: 'PulseSLAM accelerates 3D point cloud filtering, Normal Distributions Transform (NDT) alignment, and map updates using CUDA kernels on NVIDIA Jetson GPUs. Designed for high-speed micro-mobility vehicles navigating GPS-denied urban outdoor terrain.',
    category: 'Computer Vision',
    tags: ['CUDA', 'C++', 'PCL', '3D LiDAR', 'OpenCV', 'SLAM'],
    featured: true,
    githubUrl: 'https://github.com/akshatmishra/pulse-slam-cuda',
    date: '2025',
    status: 'Completed',
    hardware: ['Ouster OS1-32 3D LiDAR', 'NVIDIA Jetson Orin AGX'],
    software: ['C++17', 'CUDA 12.2', 'PCL (Point Cloud Library)', 'Eigen3', 'ROS2 Jazzy'],
    metrics: [
      { label: 'Point Throughput', value: '600k pts/sec' },
      { label: 'Registration Latency', value: '8.4 ms' },
      { label: 'GPU Memory Usage', value: '1.2 GB' },
    ],
    keyFeatures: [
      'Custom CUDA voxelization kernel achieving 14x speedup over CPU PCL downsampling.',
      'Parallelized NDT optimization solving rigid 6-DOF transformation matrix in under 9 ms per scan.',
      'Keyframe loop closure detection via global descriptor matching (Scan Context).',
      'Exportable 3D octree maps ready for motion planning.',
    ],
    architectureOverview: 'Raw 3D Scan -> CUDA Voxel Downsample -> CUDA NDT Align -> Pose Graph Optimization -> Octree Map',
  },
  {
    id: 'quadruped-robot-locomotion',
    title: 'TitanQuad: Quadruped Robot Locomotion & MPC Control',
    shortDescription: 'Simulation and physical prototype of a 12-DOF quadruped robot using Model Predictive Control (MPC) and Whole-Body Control.',
    fullDescription: 'TitanQuad investigates dynamic gait synthesis (trot, bound, gallop) and ground reaction force distribution using convex MPC combined with a Whole-Body Impulse Control framework running at 500 Hz on real-time Linux kernel.',
    category: 'Simulation',
    tags: ['Control Systems', 'MPC', 'Isaac Sim', 'Python', 'Pinocchio', 'Gazebo'],
    featured: true,
    githubUrl: 'https://github.com/akshatmishra/titanquad-mpc',
    paperUrl: 'https://arxiv.org',
    date: '2024 - 2025',
    status: 'Research Prototype',
    hardware: ['Custom Direct-Drive BLDC Motors', 'CAN Bus Transceivers', 'Teensy 4.1 MCU', 'Raspberry Pi 5'],
    software: ['Python', 'C++', 'Isaac Sim (Omniverse)', 'Pinocchio rigid body dynamics', 'OSQP Solver', 'PREEMPT_RT Linux'],
    metrics: [
      { label: 'Control Loop Frequency', value: '500 Hz' },
      { label: 'Max Trot Speed', value: '1.4 m/s' },
      { label: 'Disturbance Recovery', value: 'Up to 35N' },
    ],
    keyFeatures: [
      'Formulated convex Model Predictive Control for stance leg force optimization.',
      'Swing leg trajectory generation with cubic splines and ground contact sensing.',
      'High-fidelity Isaac Sim simulator model with friction, motor torque limits, and terrain noise.',
      'CAN bus protocol stack for simultaneous 12-actuator communication at 1 Mbit/s.',
    ],
    architectureOverview: 'State Estimator -> Convex MPC (Stance) + Spline (Swing) -> Whole-Body Controller -> CAN Bus Actuators',
  },
  {
    id: 'ros2-micro-stm32-actuator-node',
    title: 'micro-ROS STM32 Modular Motor Node Package',
    shortDescription: 'Open-source embedded micro-ROS driver for STM32 microcontrollers with CAN-FD and UART transports.',
    fullDescription: 'An efficient, low-overhead micro-ROS firmware stack enabling STM32 arm microcontrollers to natively publish sensor topics (encoders, IMU, temperature) and subscribe to ros2_control command topics over FreeRTOS.',
    category: 'ROS2 Packages',
    tags: ['micro-ROS', 'STM32', 'FreeRTOS', 'C++', 'Embedded C', 'CAN-FD'],
    featured: false,
    githubUrl: 'https://github.com/akshatmishra/microros-stm32-actuator',
    date: '2024',
    status: 'Completed',
    hardware: ['STM32F446RE Nucleo Board', 'CAN-FD Transceiver MCP2518FD'],
    software: ['micro-ROS Client Library', 'FreeRTOS', 'STM32CubeHAL', 'C++17'],
    metrics: [
      { label: 'RAM Footprint', value: '< 28 KB' },
      { label: 'Message Jitter', value: '< 0.4 ms' },
    ],
    keyFeatures: [
      'Native publication of sensor_msgs/msg/JointState directly from MCU.',
      'Supports FreeRTOS task queues for non-blocking sensor acquisition and motor PWM generation.',
      'Custom zero-copy dynamic buffer manager to maximize STM32 SRAM efficiency.',
    ],
    architectureOverview: 'STM32 Encoder Interrupt -> FreeRTOS Task -> micro-ROS Publisher -> CAN-FD / Agent -> ROS2 Graph',
  },
  {
    id: 'edge-perception-jetson-yolo',
    title: 'AegisVision: Real-Time Object Detection & Spatial Depth Fusion',
    shortDescription: 'NVIDIA DeepStream & TensorRT pipeline fusing YOLOv8 object detection with Stereo Depth for 3D bounding box tracking.',
    fullDescription: 'AegisVision combines custom-trained YOLOv8 object detection with OpenCV stereo calibration to compute 3D spatial coordinates (X, Y, Z relative to robot frame) for dynamic obstacle detection on autonomous inspection robots.',
    category: 'Computer Vision',
    tags: ['TensorRT', 'YOLOv8', 'DeepStream', 'Stereo Vision', 'Python', 'ROS2'],
    featured: false,
    githubUrl: 'https://github.com/akshatmishra/aegis-vision-jetson',
    date: '2024',
    status: 'Completed',
    hardware: ['Stereolabs ZED2i Camera', 'NVIDIA Jetson Orin Nano'],
    software: ['TensorRT 8.6', 'NVIDIA DeepStream SDK', 'OpenCV', 'ROS2 Humble'],
    metrics: [
      { label: 'Inference Speed', value: '45 FPS @ 1080p' },
      { label: '3D Depth Accuracy', value: '± 2.5 cm at 3m' },
    ],
    keyFeatures: [
      'TensorRT FP16 model optimization delivering 45 FPS on Jetson Orin Nano.',
      'Stereo depth point estimation mapped into 3D camera frame.',
      'ROS2 Vision-msgs publisher streaming 3D bounding boxes to Nav2 costmap overlay.',
    ],
    architectureOverview: 'Camera Stream -> GStreamer -> TensorRT YOLOv8 -> Stereo Depth Match -> ROS2 vision_msgs/Detection3DArray',
  },
  {
    id: 'drone-px4-offboard-control',
    title: 'AeroNav: Autonomous Quadcopter Swarm Offboard Control',
    shortDescription: 'ROS2 and PX4 Autopilot offboard control pipeline for autonomous waypoint navigation and precision landing on moving targets.',
    fullDescription: 'AeroNav provides robust offboard trajectory tracking for multi-rotor drones using PX4 Autopilot, Micro XRCE-DDS agent, and AprilTag visual feedback for precision autonomous perching.',
    category: 'Embedded',
    tags: ['PX4 Autopilot', 'ROS2', 'AprilTag', 'Gazebo Garden', 'C++'],
    featured: false,
    githubUrl: 'https://github.com/akshatmishra/aeronav-px4-offboard',
    date: '2024',
    status: 'Completed',
    hardware: ['Pixhawk 6C Autopilot', 'Raspberry Pi 4 Companion Computer', 'AprilTag Marker'],
    software: ['PX4 Autopilot', 'ROS2 Humble', 'Micro XRCE-DDS', 'Gazebo Harmonic'],
    metrics: [
      { label: 'Landing Precision', value: '± 3.0 cm' },
      { label: 'Command Loop Frequency', value: '50 Hz' },
    ],
    keyFeatures: [
      'Micro XRCE-DDS bridge transmitting trajectory setpoints between companion computer and Pixhawk.',
      'Visual AprilTag pose estimation for high-precision landing target locking.',
      'Failsafe state machine handling loss of vision, low battery, and geofence breaches.',
    ],
    architectureOverview: 'AprilTag Camera -> Visual Pose Node -> Offboard Controller -> micro-DDS -> Pixhawk 6C PX4',
  },
];
