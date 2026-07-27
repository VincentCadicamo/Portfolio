export type Project = {
  title: string
  context: string
  description: string
  tags: string[]
  award?: boolean
  link: string
  skills: string[]
}

// These are all my project!!
export const projects: Project[] = [
  {
    title: 'Custom Stepper Controller PCB',
    context: 'UCF STORM · University Rover Challenge',
    description:
      "A smart, CAN-networked stepper controller for the rover's arm. A TMC5160A driver handles current regulation and microstepping in silicon, an AS5047P 14-bit absolute encoder gives local position feedback, and an STM32G474 closes an outer loop for stall detection and accuracy. FDCAN exposes each board as a modular ROS2 node.",
    tags: ['C', 'STM32G474', 'TMC5160A', 'AS5047P', 'FDCAN', 'ROS2', 'PCB Design'],
    link: 'https://github.com/RoboticsClubatUCF/storm-motor-controller',
    skills: ['Embedded Systems', 'STM32', 'ROS2', 'PCB Design', 'Control Systems'],
  },
  // {
  //   title: 'QuadSim',
  //   context: 'Personal Project',
  //   description:
  //     'A real-time C++ quadcopter flight simulator with rigid-body dynamics and attitude control, plus a standalone linear-algebra / physics library (vectors, quaternions, matrices) packaged as its own reusable CMake target.',
  //   tags: ['C++', 'CMake', 'Controls', 'Simulation'],
  //   link: 'https://github.com/YOUR-USERNAME/REPO',
  // },
  {
    title: 'storm_teleop',
    context: 'UCF STORM · University Rover Challenge',
    description:
      'A modular ROS2 teleoperation node that captures joystick input, translates it into motion commands, and publishes them to drive the rover over ROS2.',
    tags: ['ROS2', 'Python', 'C++', 'Robotics'],
    link: 'https://github.com/YOUR-USERNAME/REPO',
    skills: ['Python', 'C++', 'ROS2'],
  },
  {
    title: 'CarrickMarine',
    context: 'FoundationsIT · Internship',
    description:
      'A cross-platform React Native app shipped to the App Store and Google Play. I built the flagship background-GPS anchor-drift alarm (runs with the app killed, with lock-screen audio) and owned the CI/CD release pipeline through two production releases.',
    tags: ['React Native', 'Expo', 'TypeScript', 'CI/CD', 'Azure DevOps'],
    link: '#',
    skills: ['React', 'TypeScript', 'CI/CD']
  },
]
