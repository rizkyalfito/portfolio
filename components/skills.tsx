"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, Users, Star, Zap, Sparkles } from "lucide-react"

// Frontend skills with projects and experience
const frontendSkills = [
  {
    name: "HTML & CSS",
    icon: <Layout className="h-5 w-5" />,
    projects: [
      {
        name: "Soulution Stress Checker",
        description: "Built responsive layouts with modern CSS techniques",
      },
      {
        name: "Thesisprint.id",
        description: "Implemented responsive design with Tailwind CSS",
      },
    ],
  },
  {
    name: "JavaScript",
    icon: <Code className="h-5 w-5" />,
    projects: [
      {
        name: "Restaurant Catalog PWA",
        description: "Developed interactive features and API integration",
      },
      {
        name: "Stress Checker Algorithm",
        description: "Implemented PSS psychological method in JavaScript",
      },
    ],
  },
  {
    name: "React & Next.js",
    icon: <Zap className="h-5 w-5" />,
    projects: [
      {
        name: "Thesisprint.id",
        description: "Built with Next.js and modern React patterns",
      },
      {
        name: "React Workshop",
        description: "Led workshop on React External API for 100 participants",
      },
    ],
  },
  {
    name: "UI/UX Design",
    icon: <Sparkles className="h-5 w-5" />,
    projects: [
      {
        name: "UI/UX Design Workshop",
        description: "Organized and led workshop with 100 participants",
      },
      {
        name: "Soulution Stress Checker",
        description: "Designed user-friendly interface for stress assessment",
      },
    ],
  },
]

// Backend skills with projects and experience
const backendSkills = [
  {
    name: "Node.js & Express",
    icon: <Server className="h-5 w-5" />,
    projects: [
      {
        name: "Back-End Certification",
        description: "Completed Dicoding certification for back-end development",
      },
      {
        name: "REST API Development",
        description: "Built RESTful APIs for web applications",
      },
    ],
  },
  {
    name: "PHP & CodeIgniter",
    icon: <Code className="h-5 w-5" />,
    projects: [
      {
        name: "Inventory Management System",
        description: "Developed using CodeIgniter 3 framework",
      },
      {
        name: "Goods Storage System",
        description: "Built with PHP and MySQL during high school",
      },
    ],
  },
]

// Database skills with projects and experience
const databaseSkills = [
  {
    name: "MySQL",
    icon: <Database className="h-5 w-5" />,
    projects: [
      {
        name: "Library Information System",
        description: "Designed database schema for efficient data retrieval",
      },
      {
        name: "Inventory Management",
        description: "Implemented relational database with complex queries",
      },
    ],
  },
  {
    name: "Database Design",
    icon: <Database className="h-5 w-5" />,
    projects: [
      {
        name: "UML Projects",
        description: "Created entity-relationship diagrams for information systems",
      },
      {
        name: "SQL Query Optimization",
        description: "Improved database performance through query optimization",
      },
    ],
  },
]

// Tools and methodologies
const toolsSkills = [
  {
    name: "Git & GitHub",
    icon: <Code className="h-5 w-5" />,
    projects: [
      {
        name: "Capstone Project",
        description: "Led team collaboration using Git for version control",
      },
      {
        name: "Git Certification",
        description: "Completed Dicoding certification for Git with GitHub",
      },
    ],
  },
  {
    name: "Design Tools",
    icon: <Sparkles className="h-5 w-5" />,
    projects: [
      {
        name: "Social Media Content",
        description: "Created designs using Canva during OK OCE internship",
      },
      {
        name: "UI Prototyping",
        description: "Designed interfaces for web applications",
      },
    ],
  },
]

// Soft skills with evidence
const softSkills = [
  {
    name: "Leadership",
    icon: <Users className="h-5 w-5" />,
    evidence: [
      {
        role: "Head of Education Division",
        description: "Led division with 4 successful work programs",
      },
      {
        role: "Lead of Front End Team",
        description: "Managed team of 5 developers for Capstone Project",
      },
    ],
  },
  {
    name: "Communication",
    icon: <Users className="h-5 w-5" />,
    evidence: [
      {
        role: "Webinar Presenter",
        description: "Presented at National Technopreneurship Webinar with 465 participants",
      },
      {
        role: "Workshop Facilitator",
        description: "Led technical workshops on Python and UI/UX Design",
      },
    ],
  },
  {
    name: "Project Management",
    icon: <Users className="h-5 w-5" />,
    evidence: [
      {
        role: "Project Lead",
        description: "Defined project plans and coordinated team members",
      },
      {
        role: "Event Organizer",
        description: "Organized IT Competition with 3 national level competition subjects",
      },
    ],
  },
]

const SkillCard = ({ skill, type = "technical", isActive = false }) => {
  return (
    <Card className={`h-full creative-card border-0 ${isActive ? "ring-1 ring-accent/50" : ""}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">{skill.icon}</div>
          <h3 className="text-lg font-medium">{skill.name}</h3>
        </div>

        <div className="space-y-4">
          {type === "technical" &&
            skill.projects.map((project, index) => (
              <div key={index} className="space-y-1 creative-border pl-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-normal skill-tag">
                    {project.name}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            ))}

          {type === "soft" &&
            skill.evidence.map((item, index) => (
              <div key={index} className="space-y-1 creative-border pl-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-normal skill-tag">
                    {item.role}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const categories = [
    { id: "frontend", label: "Frontend", icon: <Layout className="h-4 w-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="h-4 w-4" /> },
    { id: "database", label: "Database", icon: <Database className="h-4 w-4" /> },
    { id: "tools", label: "Tools", icon: <Code className="h-4 w-4" /> },
    { id: "soft", label: "Soft Skills", icon: <Users className="h-4 w-4" /> },
  ]

  const getSkills = () => {
    switch (activeCategory) {
      case "frontend":
        return frontendSkills
      case "backend":
        return backendSkills
      case "database":
        return databaseSkills
      case "tools":
        return toolsSkills
      case "soft":
        return softSkills
      default:
        return []
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50 -z-10"></div>

      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2 animated-border">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <div className="w-20 h-0.5 bg-accent/50 rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            A showcase of my skills through real projects and experiences, demonstrating practical application rather
            than abstract metrics.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {getSkills().map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <SkillCard
                skill={skill}
                type={activeCategory === "soft" ? "soft" : "technical"}
                isActive={hoveredSkill === skill.name}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="creative-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-medium">Front-End Web Developer Expert</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Dicoding Indonesia (2023)</p>
              </CardContent>
            </Card>
            <Card className="creative-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-medium">Git with GitHub</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Dicoding Indonesia (2023)</p>
              </CardContent>
            </Card>
            <Card className="creative-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-medium">Back-End App for Beginners</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Dicoding Indonesia (2023)</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
