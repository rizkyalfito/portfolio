"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Layout, Server, Users } from "lucide-react"

// Frontend skills with projects and experience
const frontendSkills = [
  {
    name: "HTML & CSS",
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

const SkillCard = ({ skill, type = "technical" }) => {
  return (
    <Card className="h-full hover:border-primary/20 transition-colors duration-300 subtle-shadow subtle-shadow-hover">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">{skill.name}</h3>
        <div className="space-y-3">
          {type === "technical" &&
            skill.projects.map((project, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-normal">
                    {project.name}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            ))}

          {type === "soft" &&
            skill.evidence.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-normal">
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
  return (
    <section id="skills" className="py-20">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <div className="w-20 h-0.5 bg-primary/20 rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            A showcase of my skills through real projects and experiences, demonstrating practical application rather
            than abstract metrics.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              <span className="hidden sm:inline">Frontend</span>
            </TabsTrigger>
            <TabsTrigger value="backend" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              <span className="hidden sm:inline">Backend</span>
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Database</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Tools</span>
            </TabsTrigger>
            <TabsTrigger value="soft" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Soft Skills</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <div className="grid md:grid-cols-2 gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend">
            <div className="grid md:grid-cols-2 gap-6">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="database">
            <div className="grid md:grid-cols-2 gap-6">
              {databaseSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <div className="grid md:grid-cols-2 gap-6">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft">
            <div className="grid md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard skill={skill} type="soft" />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="subtle-shadow subtle-shadow-hover">
              <CardContent className="p-6">
                <h4 className="font-medium">Front-End Web Developer Expert</h4>
                <p className="text-sm text-muted-foreground mt-1">Dicoding Indonesia (2023)</p>
              </CardContent>
            </Card>
            <Card className="subtle-shadow subtle-shadow-hover">
              <CardContent className="p-6">
                <h4 className="font-medium">Git with GitHub</h4>
                <p className="text-sm text-muted-foreground mt-1">Dicoding Indonesia (2023)</p>
              </CardContent>
            </Card>
            <Card className="subtle-shadow subtle-shadow-hover">
              <CardContent className="p-6">
                <h4 className="font-medium">Back-End App for Beginners</h4>
                <p className="text-sm text-muted-foreground mt-1">Dicoding Indonesia (2023)</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
