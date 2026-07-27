export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: 'ROS2' | 'SLAM & Math' | 'Embedded C++' | 'Computer Vision' | 'Control Theory';
  tags: string[];
  featured: boolean;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'mastering-ros2-nav2-costmap-plugins-cpp',
    title: 'Mastering Custom ROS2 Nav2 Costmap Plugins in C++',
    excerpt: 'Step-by-step guide to writing custom Nav2 Layer plugins in C++ for dynamic obstacle filtering, steep gradient avoidance, and custom sensor clearance zones.',
    date: 'July 15, 2026',
    readTime: '8 min read',
    category: 'ROS2',
    tags: ['ROS2 Humble', 'Nav2', 'C++', 'Costmap2D', 'Navigation'],
    featured: true,
    author: {
      name: 'Akshat Mishra',
      avatar: '/avatars/akshat.jpg',
      role: 'Robotics Engineer',
    },
    content: `
# Mastering Custom ROS2 Nav2 Costmap Plugins in C++

When building autonomous mobile robots for complex environments, standard static and obstacle costmap layers are often not enough. You might need to enforce custom clearance zones around sensitive payloads, avoid high-temperature zones based on thermal sensors, or apply custom cost gradients.

In this guide, we will write a custom **Nav2 Costmap2D Layer Plugin** in C++20 for ROS2 Humble/Jazzy.

---

## 1. Nav2 Costmap Layer Architecture

Nav2 relies on pluginlib to load costmap layers at runtime. Every custom layer inherits from \`nav2_costmap_2d::Layer\` and overrides key lifecycle methods:

\`\`\`cpp
#include <nav2_costmap_2d/layer.hpp>
#include <nav2_costmap_2d/costmap_layer.hpp>
#include <pluginlib/class_list_macro.hpp>

namespace aura_costmap
{
class GradientZoneLayer : public nav2_costmap_2d::CostmapLayer
{
public:
  GradientZoneLayer() = default;
  virtual void onInitialize() override;
  virtual void updateBounds(
    double robot_x, double robot_y, double robot_yaw,
    double * min_x, double * min_y, double * max_x, double * max_y) override;
  virtual void updateCosts(
    nav2_costmap_2d::Costmap2D & master_grid,
    int min_i, int min_j, int max_i, int max_j) override;
  virtual void reset() override;
};
} // namespace aura_costmap
\`\`\`

---

## 2. Implementing \`updateCosts\`

The \`updateCosts\` method receives the master costmap grid and modifies cell costs within the bounding box computed in \`updateBounds\`.

\`\`\`cpp
void GradientZoneLayer::updateCosts(
  nav2_costmap_2d::Costmap2D & master_grid,
  int min_i, int min_j, int max_i, int max_j)
{
  if (!enabled_) return;

  for (int j = min_j; j < max_j; ++j) {
    for (int i = min_i; i < max_i; ++i) {
      unsigned int index = master_grid.getIndex(i, j);
      unsigned char old_cost = master_grid.getCost(i, j);

      // Skip already lethal obstacles
      if (old_cost == nav2_costmap_2d::LETHAL_OBSTACLE) continue;

      // Compute distance from designated safety origin
      double wx, wy;
      master_grid.mapToWorld(i, j, wx, wy);
      double dist = std::hypot(wx - 2.0, wy - 3.0);

      if (dist < 1.5) {
        unsigned char added_cost = static_cast<unsigned char>(150 * (1.0 - dist / 1.5));
        unsigned char new_cost = std::max(old_cost, added_cost);
        master_grid.setCost(i, j, new_cost);
      }
    }
  }
}
\`\`\`

---

## 3. Registering the Plugin with Pluginlib

At the bottom of your source file, export the plugin class:

\`\`\`cpp
PLUGINLIB_EXPORT_CLASS(aura_costmap::GradientZoneLayer, nav2_costmap_2d::Layer)
\`\`\`

And add a \`custom_layer_plugins.xml\` file for ROS2 package indexing:

\`\`\`xml
<library path="aura_costmap_plugins">
  <class name="aura_costmap/GradientZoneLayer" type="aura_costmap::GradientZoneLayer" base_class_type="nav2_costmap_2d::Layer">
    <description>Applies a custom radial gradient cost penalty zone.</description>
  </class>
</library>
\`\`\`

---

## Conclusion & Key Takeaways

Custom costmap layers give you full programmatic control over global and local planner behavior in ROS2 Nav2 without modifying core Nav2 source code.
`,
  },
  {
    slug: 'demystifying-extended-kalman-filter-imu-wheel-odometry',
    title: 'Demystifying EKF State Estimation: Fusing IMU & Encoder Odometry',
    excerpt: 'An intuitive mathematical breakdown and C++ implementation of 6-DOF Extended Kalman Filter (EKF) state estimation using robot_localization.',
    date: 'June 28, 2026',
    readTime: '12 min read',
    category: 'SLAM & Math',
    tags: ['EKF', 'Sensor Fusion', 'State Estimation', 'C++', 'Math'],
    featured: true,
    author: {
      name: 'Akshat Mishra',
      avatar: '/avatars/akshat.jpg',
      role: 'Robotics Engineer',
    },
    content: `
# Demystifying EKF State Estimation: Fusing IMU & Encoder Odometry

Sensor fusion is the beating heart of mobile robot localization. Wheel encoders provide excellent short-term displacement measurements but accumulate unbounded position drift over time due to wheel slip. IMUs provide high-rate angular velocity and linear acceleration estimates but suffer from accelerometer bias integration noise.

Combining both using an **Extended Kalman Filter (EKF)** gives us the best of both worlds: smooth, drift-resistant pose estimates.

---

## 1. The EKF Motion Model Equations

The robot state vector at time step $k$ is defined as:

$$x_k = \begin{bmatrix} x & y & z & \phi & \theta & \psi & \dot{x} & \dot{y} & \dot{z} & \dot{\phi} & \dot{\theta} & \dot{\psi} \end{bmatrix}^T$$

### Prediction Step:
$$\hat{x}_k^- = f(\hat{x}_{k-1}, u_k)$$
$$P_k^- = F_k P_{k-1} F_k^T + Q_k$$

Where:
- $F_k$ is the Jacobian matrix of the motion model evaluation.
- $Q_k$ is the process noise covariance matrix representing model uncertainty.

---

## 2. Measurement Update Step

When a new IMU or encoder measurement arrives:

$$K_k = P_k^- H_k^T (H_k P_k^- H_k^T + R_k)^{-1}$$
$$\hat{x}_k = \hat{x}_k^- + K_k (z_k - h(\hat{x}_k^-))$$
$$P_k = (I - K_k H_k) P_k^-$$

---

## 3. Configuring \`robot_localization\` in ROS2

Here is an optimal \`ekf.yaml\` configuration for a 4WD differential drive mobile robot:

\`\`\`yaml
ekf_filter_node:
  ros__parameters:
    frequency: 50.0
    two_d_mode: true
    publish_tf: true
    map_frame: map
    odom_frame: odom
    base_link_frame: base_footprint
    world_frame: odom

    # Wheel Odometry input
    odom0: /diff_drive_controller/odom
    odom0_config: [true,  true,  false,
                  false, false, true,
                  true,  true,  false,
                  false, false, true,
                  false, false, false]

    # IMU input
    imu0: /imu/data
    imu0_config: [false, false, false,
                 true,  true,  true,
                 false, false, false,
                 true,  true,  true,
                 true,  false, false]
\`\`\`

---

## Summary
Properly tuning $Q$ (process noise) and $R$ (measurement noise) covariance matrices is critical. Set $R$ slightly higher for encoders if operating on carpet or loose gravel to prevent slip errors from corrupting pose state.
`,
  },
  {
    slug: 'building-microros-stm32-freertos-from-scratch',
    title: 'Building micro-ROS for STM32 Microcontrollers on FreeRTOS',
    excerpt: 'Detailed tutorial on integrating micro-ROS client library into STM32CubeIDE projects over FreeRTOS and DMA-assisted UART/CAN communication.',
    date: 'May 14, 2026',
    readTime: '10 min read',
    category: 'Embedded C++',
    tags: ['micro-ROS', 'STM32', 'FreeRTOS', 'Embedded C++', 'Hardware'],
    featured: false,
    author: {
      name: 'Akshat Mishra',
      avatar: '/avatars/akshat.jpg',
      role: 'Robotics Engineer',
    },
    content: `
# Building micro-ROS for STM32 Microcontrollers on FreeRTOS

Micro-ROS brings native ROS2 communication directly to embedded microcontrollers (MCUs) like the STM32 family, ESP32, and Teensy. Instead of implementing custom brittle serial protocols, micro-ROS allows your microcontrollers to publish topics, host services, and respond to action requests using standard ROS2 types.

In this tutorial, we will configure micro-ROS on an **STM32F446RE** Nucleo board using **FreeRTOS** and DMA UART transport.

---

## Key Hardware Setup
- Board: STM32F446RE Nucleo-64
- Communication: USART2 with DMA RX/TX
- OS: FreeRTOS V10

\`\`\`cpp
// FreeRTOS Task Entry Point for micro-ROS Execution
void StartMicroROSTask(void *argument)
{
  rmw_uros_set_custom_transport(
    true,
    (void *) &huart2,
    cubemx_transport_open,
    cubemx_transport_close,
    cubemx_transport_write,
    cubemx_transport_read
  );

  rcl_allocator_t allocator = rcl_get_default_allocator();
  rclc_support_t support;

  // Initialize micro-ROS support structure
  rclc_support_init(&support, 0, NULL, &allocator);

  // Create ROS2 Node
  rcl_node_t node;
  rclc_node_init_default(&node, "stm32_motor_node", "", &support);

  // Publisher setup...
  for(;;) {
    rclc_executor_spin_some(&executor, RCL_MS_TO_NS(10));
    vTaskDelay(pdMS_TO_TICKS(10));
  }
}
\`\`\`

This pattern turns any STM32 board into a true zero-overhead ROS2 participant!
`,
  },
  {
    slug: 'isaac-sim-vs-gazebo-harmonic-robotics-simulation-2026',
    title: 'Gazebo Harmonic vs NVIDIA Isaac Sim: Modern Robotics Benchmark',
    excerpt: 'Comprehensive comparison of Gazebo Harmonic (Ignition) and NVIDIA Isaac Sim for GPU physics simulation, synthetic data generation, and ROS2 integration.',
    date: 'April 02, 2026',
    readTime: '9 min read',
    category: 'ROS2',
    tags: ['Isaac Sim', 'Gazebo', 'Simulation', 'ROS2', 'NVIDIA'],
    featured: false,
    author: {
      name: 'Akshat Mishra',
      avatar: '/avatars/akshat.jpg',
      role: 'Robotics Engineer',
    },
    content: `
# Gazebo Harmonic vs NVIDIA Isaac Sim: Modern Robotics Benchmark

Simulation tools have undergone a radical transformation. Gazebo Classic (Gazebo 11) reached End of Life in 2025, leaving roboticists choosing between **Gazebo Harmonic (GZ)** and **NVIDIA Isaac Sim (Omniverse)**.

Here is an architectural comparison across performance, ROS2 integration, and hardware requirements.

---

| Feature | Gazebo Harmonic | NVIDIA Isaac Sim |
|---|---|---|
| Physics Engine | DART / Bullet | PhysX 5 (GPU Accelerated) |
| Rendering | Ignition Rendering (Ogre2 / Filament) | RTX Real-Time Ray Tracing (Omniverse) |
| Parallel Environments | CPU Multi-threading | Thousands of envs on GPU (Isaac Gym) |
| Hardware Req | Mid-tier CPU & integrated graphics | RTX 3070+ GPU (8GB+ VRAM) |
| Synthetic Data / Vision | Basic RGB-D camera | Photo-realistic domain randomization |
| ROS2 Integration | \`ros_gz_bridge\` | Built-in ROS2 Omniverse extension |

---

## Verdict & Recommendation

- **Choose Gazebo Harmonic** if you need lightweight, open-source multi-robot simulation running inside CI/CD pipelines or standard laptops.
- **Choose NVIDIA Isaac Sim** if you are training Reinforcement Learning gait policies, simulating complex 3D LiDAR point clouds, or performing vision-based synthetic data training.
`,
  },
];
