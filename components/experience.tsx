"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Users } from "lucide-react"

const categories = [
  { id: "work", label: "Work", icon: <Briefcase className="h-5 w-5" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
  { id: "organization", label: "Organization", icon: <Users className="h-5 w-5" /> },
]

const workExperience = [
  {
    id: 1,
    title: "Website and Social Media Intern",
    company: "OK OCE Indonesia - Jakarta Selatan",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Developed multiple websites using WordPress, including theme customization, layout, and performance optimization.",
      "Wrote and published SEO-friendly blog articles.",
      "Designed various social media content using Canva.",
    ],
  },
  {
    id: 2,
    title: "Lead of Front End Team",
    company: "Soulution Capstone Project",
    period: "Sep 2023 - Dec 2023",
    description: [
      "Successfully defined project plan with 4 other team members to facilitate project execution.",
      "Initiated team collaboration using Git and Github.",
      "Led weekly team meetings and created work plans with job assignments.",
      "Successfully matched psychological methods in stress level measurement used in the project (PSS method).",
      "Defined requirements and Minimum Viable Product for each page.",
      "Implemented code based on established designs.",
      "Successfully created responsive landing page, stress check, and contact pages for various screen devices.",
      "Translated PSS psychological method into JavaScript code.",
    ],
  },
  {
    id: 3,
    title: "Studi Independen",
    company: "Dicoding - Indonesia",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Intensive learning of website development including HTML, CSS, Javascript, and Responsive Layout Design.",
      "Successfully created a Dynamic Web App Restaurant Catalog by fetching API data.",
      "Configured Progressive Web Apps.",
      "Utilized screen reader and tab focus for visually impaired website users.",
      "Successfully collaborated with 5 people in a Capstone Project development team using GIT.",
    ],
  },
]

const educationExperience = [
  {
    id: 1,
    title: "Bachelor of Sistem Informasi",
    company: "Universitas Singaperbangsa Karawang - Indonesia",
    period: "Sep 2021 - Apr 2025 (Expected)",
    gpa: "3.90/4.00",
    description: [
      "Developed UML projects for library information systems, ensuring efficiency and ease of access.",
      "Built static web for bookstores, enhancing user experience.",
      "Created Business Model Canvas for Mie Ayam Yamin business.",
      "Completed BPMN mini project for JERMANI squeezed orange juice sales and successfully demonstrated it.",
      'Wrote and published scientific journal on the design of "Solution Stress Checker" website, a solution for stress management.',
    ],
  },
  {
    id: 2,
    title: "High School Diploma in Rekayasa Perangkat Lunak",
    company: "SMK Negeri 2 Kota Bekasi - Indonesia",
    period: "Jul 2018 - May 2021",
    description: [
      "Developed goods storage information system using CodeIgniter 3.",
      "Built desktop applications using .NET.",
      "Completed Department Competency Certification.",
    ],
  },
]

const organizationExperience = [
  {
    id: 1,
    title: "Ketua Divisi Edukasi",
    company: "Himpunan Mahasiswa Sistem Informasi Unsika",
    period: "Jan 2023 - Dec 2023",
    description: [
      "Successfully coordinated education division members and executed 4 work programs.",
      "Successfully designed work programs:",
      "National Technopreneurship Webinar with 465 participants",
      "React External API Workshop with 100 internal campus participants",
      "IT Competition with 3 national level competition subjects",
    ],
  },
  {
    id: 2,
    title: "Anggota Divisi Edukasi",
    company: "Himpunan Mahasiswa Sistem Informasi Unsika",
    period: "Jan 2022 - Dec 2022",
    description: [
      "Became the chairman of the basic python workshop with 75 participants.",
      "Became the chairman of the UI/UX Design workshop with 100 participants.",
    ],
  },
]

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("work")
  const [hoveredItem, setHoveredItem] = useState(null)

  const getExperience = () => {
    switch (activeCategory) {
      case "work":
        return workExperience
      case "education":
        return educationExperience
      case "organization":
        return organizationExperience
      default:
        return []
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 -z-10"></div>

      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2 animated-border">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-20 h-0.5 bg-accent/50 rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            My professional journey, educational background, and organizational experiences that have shaped my career.
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
          className="space-y-6"
        >
          {getExperience().map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Card className={`creative-card border-0 ${hoveredItem === item.id ? "ring-1 ring-accent/50" : ""}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="animated-border">
                      {item.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {item.gpa && <div className="font-medium mb-2">GPA: {item.gpa}</div>}
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
