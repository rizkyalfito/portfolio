"use client"

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
    image: "/projects/stress-checker.png",
    tags: ["NextJS", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/rizkyalfito/soulution",
    demo: "https://soulution.vercel.app",
    year: "2023",
  },
  {
    id: 2,
    title: "Thesisprint.id",
    description: "A website for thesis printing services built with Next.js and modern UI components.",
    image: "/projects/thesisprint.png",
    tags: ["NextJS", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/rizkyalfito/thesisprint",
    demo: "https://thesisprint.vercel.app",
    year: "2024",
  },
  {
    id: 3,
    title: "Restaurant Catalog PWA",
    description: "A progressive web app that showcases restaurant catalogs with data fetched from an API.",
    image: "/projects/restaurant.png",
    tags: ["JavaScript", "PWA", "HTML", "CSS"],
    github: "https://github.com/rizkyalfito/restaurant-catalog",
    demo: "https://restaurant-catalog-pwa.vercel.app",
    year: "2023",
  },
  {
    id: 4,
    title: "Bookstore Website",
    description: "A static website for a bookstore with a clean and user-friendly interface.",
    image: "/projects/bookstore.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rizkyalfito/bookstore",
    demo: "https://bookstore-static.vercel.app",
    year: "2022",
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
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <div className="w-20 h-0.5 bg-primary/20 rounded mb-6"></div>
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
            >
              <Card className="h-full flex flex-col overflow-hidden group subtle-shadow subtle-shadow-hover">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{project.year}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
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
