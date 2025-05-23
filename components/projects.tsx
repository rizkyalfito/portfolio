"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Soulution Stress Checker",
    description:
      "A web-based stress checker application using psychological PSS method to help users manage their stress levels.",
    image: "/stress-checker.png",
    tags: ["NextJS", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/rizkyalfito/soulution",
    demo: "https://nextjs-stress-checker.vercel.app/",
    year: "2023",
  },
  {
    id: 2,
    title: "Thesisprint.id",
    description: "A website for thesis printing services built with Next.js and modern UI components.",
    image: "/thesisprint.png",
    tags: ["NextJS", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/rizkyalfito/thesisprint",
    demo: "https://www.thesisprint.id/",
    year: "2024",
  },
  {
    id: 3,
    title: "Restaurant Catalog PWA",
    description: "A progressive web app that showcases restaurant catalogs with data fetched from an API.",
    image: "/projects/restaurant.png",
    tags: ["JavaScript", "PWA", "HTML", "CSS"],
    github: "https://github.com/rizkyalfito/easter",
    demo: "https://restaurant-catalog-pwa.vercel.app",
    year: "2023",
  },
  {
    id: 4,
    title: "Jayakerta Website",
    description: "A static website for a village when i was KKN",
    image: "/jayakerta.png",
    tags: ["HTML", "CSS", "JavaScript","React"],
    github: "https://github.com/rizkyalfito/desa-jayakerta",
    demo: "https://desa-jayakerta.vercel.app/",
    year: "2024",
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "A web-based inventory management system built with CodeIgniter 3.",
    image: "/projects/inventory.png",
    tags: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/rizkyalfito/inventory-system",
    year: "2018",
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-pattern opacity-30 -z-10"></div>

      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2 animated-border">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <div className="w-20 h-0.5 bg-accent/50 rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            A showcase of my projects and applications I've built throughout my journey as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card
                className={`h-full flex flex-col overflow-hidden creative-card border-0 ${
                  hoveredProject === project.id ? "ring-1 ring-accent/50" : ""
                }`}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-accent/80 text-accent-foreground">{project.year}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="skill-tag">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent/10 h-9 px-3 animated-border"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent hover:bg-accent/90 text-accent-foreground h-9 px-3"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}