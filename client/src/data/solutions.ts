export const solutions = [
  {
    id: 'embedded',
    tabTitle: 'Embedded Systems',
    title: 'Custom Embedded Solutions',
    description: 'We craft resilient embedded systems that bridge the physical and digital worlds. Our tight-knit squad of engineers specializes in low-latency firmware, RTOS implementation, and seamless hardware integration for mission-critical applications.',
    features: [
      'Low-latency firmware development with C/C++',
      'Real-Time Operating System (RTOS) implementation',
      'Power-optimized solutions for battery-powered devices',
      'Full hardware lifecycle management from concept to production',
      'Rapid 2-week prototyping for proof-of-concepts'
    ],
    image: new URL("../assets/others/embedded.jpeg", import.meta.url).href,
    backgroundColor: 'bg-primary/10',
    color: 'primary',
    buttonText: 'Discuss Your Project',
    icon: 'fa-microchip',
  },
  {
    id: 'iot',
    tabTitle: 'IoT & Edge',
    title: 'Edge-to-Cloud IoT Solutions',
    description: 'Connect your physical devices to the digital realm with our comprehensive IoT solutions. We specialize in seamless integration from edge devices to cloud backends, creating unified systems that deliver real-time insights and control.',
    features: [
      'Multi-protocol connectivity (BLE, LoRaWAN, NB-IoT, MQTT)',
      'Edge gateway development and management',
      'Real-time data processing at the edge',
      'Secure device-to-cloud communication',
      'Custom dashboards and control interfaces'
    ],
    image: new URL("../assets/others/iot.webp", import.meta.url).href,
    backgroundColor: 'bg-secondary/10',
    color: 'secondary',
    buttonText: 'Explore IoT Solutions',
    icon: 'fa-satellite-dish',
  },
  {
    id: 'mobile',
    tabTitle: 'Mobile & Dashboards',
    title: 'Mobile Apps & IoT Dashboards',
    description: 'Control your smart devices with intuitive mobile applications and real-time dashboards. Our cross-platform solutions for iOS and Android provide seamless user experiences and actionable insights from your connected systems.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'Real-time data visualization and analytics',
      'Custom control interfaces for IoT devices',
      'Push notifications and alerts integration'
    ],
    image: new URL("../assets/others/mob.png", import.meta.url).href,
    backgroundColor: 'bg-accent/10',
    color: 'accent',
    buttonText: 'Request Demo',
    icon: 'fa-mobile-alt',
  },
  {
    id: 'ai',
    tabTitle: 'AI & Edge Intelligence',
    title: 'AI/ML & Edge Intelligence',
    description: 'Bring intelligence to your edge devices with our AI and machine learning solutions. We specialize in deploying sophisticated algorithms on resource-constrained hardware, enabling real-time inferencing and smart decision-making at the edge.',
    features: [
      'TinyML for resource-constrained devices',
      'TensorFlow Lite optimization and deployment',
      'Large language model integration and fine-tuning',
      'Computer vision and object detection',
      'Predictive maintenance and anomaly detection'
    ],
    image: new URL("../assets/others/ai.jpg", import.meta.url).href,
    backgroundColor: 'bg-primary/10',
    color: 'primary',
    buttonText: 'Explore AI Solutions',
    icon: 'fa-brain',
  },
  
];
