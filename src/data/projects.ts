export type Project = {
  title: string
  context: string
  description: string
  tags: string[]
  award?: boolean
  link: string
  skills: string[]
}

// These are all my projects!!
export const projects: Project[] = [
  {
    title: 'Custom Stepper Controller PCB',
    context: 'UCF STORM · University Rover Challenge',
    description:
      "This PCB is a part of my ongoing University Rover Challenge team and it is a smart CAN-networked stepper controller for different subsystems of our rover. It uses a TMC5160 driver to regulate current and micro stepping, and a STM32G474 as the MCU for stall detection and improving accuracy of the controller. The PCB utilized FDCAN for communications from our jetson which allows the board to remain modular in our distributed system.",
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
  //   link: '#',
  // },
  {
    title: 'storm_teleop',
    context: 'UCF STORM · University Rover Challenge',
    description:
      'A modular ROS2 teleoperation node that captures joystick input, translates it into motion commands, and publishes them to drive the rover over ROS2.',
    tags: ['ROS2', 'Python', 'C++', 'Robotics'],
    link: '#',
    skills: ['Python', 'C++', 'ROS2'],
  },
  {
    title: 'CarrickMarine',
    context: 'FoundationsIT · Internship',
    description:
      'Carrick Marine is a cross platform React Native app that shipped to the Apple App store and the Google play store. I built the main feature of the app including, background-GPS anchor-drift alarm which runs even while the app is killed with a lock screen audio player. I also owned the CI/CD release pipelines through multiple production releases.',
    tags: ['React Native', 'Expo', 'TypeScript', 'CI/CD', 'Azure DevOps'],
    link: '#',
    skills: ['React', 'TypeScript', 'CI/CD']
  },
]
