import { 
  Monitor, Laptop, Apple, Cpu, Keyboard, 
  PackageOpen, Projector, Wrench, PcCase,
  Flame, Server, Network, Building2, 
  Database, Car 
} from 'lucide-react';

export const serviceCategories = [
  {
    icon: PcCase,
    title: "Computer Repairs",
    description: "Expert diagnosis and repair services for desktop computers",
    features: [
      "Hardware diagnostics and repair",
      "Software troubleshooting",
      "Virus and malware removal",
      "System optimization",
      "Component upgrades"
    ],
    pricing: "Starting from £50/hour"
  },
  {
    icon: Laptop,
    title: "Laptop Repairs",
    description: "Professional laptop repair and maintenance services",
    features: [
      "Screen replacement",
      "Keyboard repair",
      "Battery replacement",
      "Data recovery",
      "Performance optimization"
    ],
    pricing: "Starting from £45/hour"
  },
  {
    icon: Apple,
    title: "Apple Systems and Repairs",
    description: "Specialized support for all Apple devices and systems",
    features: [
      "Mac repairs",
      "iOS device support",
      "System upgrades",
      "Data migration",
      "iCloud setup"
    ],
    pricing: "Starting from £60/hour"
  },
  {
    icon: Cpu,
    title: "Computer and Laptop Components",
    description: "Quality components and expert installation services",
    features: [
      "CPU upgrades",
      "RAM installation",
      "Storage solutions",
      "Graphics card upgrades",
      "Power supply replacement"
    ],
    pricing: "Component cost + £40/hour labor"
  },
  {
    icon: Keyboard,
    title: "Peripherals and Consumables",
    description: "Wide range of computer accessories and supplies",
    features: [
      "Keyboard and mouse",
      "Printers and scanners",
      "Cables and adapters",
      "External storage",
      "Networking equipment"
    ],
    pricing: "Varies by product"
  },
  {
    icon: PackageOpen,
    title: "Software",
    description: "Software installation, updates, and troubleshooting",
    features: [
      "OS installation",
      "Software updates",
      "Driver installation",
      "Application setup",
      "License management"
    ],
    pricing: "Starting from £40/hour"
  },
  {
    icon: Monitor,
    title: "Monitors and Projectors",
    description: "Sales and support for displays and projection systems",
    features: [
      "Monitor calibration",
      "Projector setup",
      "Display troubleshooting",
      "Cable management",
      "Multi-display configuration"
    ],
    pricing: "Starting from £45/hour"
  },
  {
    icon: Wrench,
    title: "Computer Upgrades",
    description: "Performance upgrades and system improvements",
    features: [
      "RAM upgrades",
      "SSD installation",
      "Graphics card upgrades",
      "CPU upgrades",
      "Cooling system improvements"
    ],
    pricing: "Component cost + £45/hour labor"
  },
  {
    icon: PcCase,
    title: "Custom Built Computers",
    description: "Tailored desktop solutions built to your specifications",
    features: [
      "Custom PC building",
      "Gaming computers",
      "Workstations",
      "Media centers",
      "Server builds"
    ],
    pricing: "Components + £150 build fee"
  },
  {
    icon: Flame,
    title: "Bespoke Enthusiast Systems",
    description: "High-performance custom builds for gaming and content creation",
    features: [
      "Overclocking",
      "Custom water cooling",
      "RGB lighting",
      "Cable management",
      "Performance tuning"
    ],
    pricing: "Custom quote based on requirements"
  },
  {
    icon: Server,
    title: "Tailor Built Servers",
    description: "Custom server solutions for business needs",
    features: [
      "Server assembly",
      "RAID configuration",
      "Virtualization setup",
      "Backup solutions",
      "Remote management"
    ],
    pricing: "Custom quote based on specifications"
  },
  {
    icon: Network,
    title: "Networking",
    description: "Network setup, maintenance, and troubleshooting",
    features: [
      "Network design",
      "WiFi optimization",
      "Security setup",
      "VPN configuration",
      "Network monitoring"
    ],
    pricing: "Starting from £60/hour"
  },
  {
    icon: Building2,
    title: "Business to Business IT Support",
    description: "Comprehensive IT support for businesses",
    features: [
      "24/7 support",
      "Remote assistance",
      "System maintenance",
      "Security management",
      "Cloud services"
    ],
    pricing: "Custom monthly contracts available"
  },
  {
    icon: Database,
    title: "Backup Solutions",
    description: "Secure data backup and recovery services",
    features: [
      "Cloud backup",
      "Local backup",
      "Disaster recovery",
      "Data migration",
      "Automated backups"
    ],
    pricing: "Starting from £50/month"
  },
  {
    icon: Car,
    title: "Call Outs Home and Work",
    description: "On-site support at your home or workplace",
    features: [
      "Emergency response",
      "On-site repairs",
      "System setup",
      "Network installation",
      "Hardware support"
    ],
    pricing: "£80/hour + travel expenses"
  }
];