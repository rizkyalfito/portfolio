"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-10"
        style={{
          opacity: Math.min(scrollY / 500, 0.6),
        }}
      />

      <div className="grid lg:grid-cols-2 gap-8 items-center container z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary">Rizky Alfito Hadi</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-muted-foreground h-16">
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "Back-End Developer",
                1000,
                "Full-Stack Developer",
                1000,
                "UI/UX Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-md">
            A passionate web developer specializing in creating modern, responsive, and user-friendly web applications.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Button asChild>
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/Rizky_Alfito_Hadi_CV.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4 mt-4">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="https://linkedin.com/in/rizkyalfito" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="https://github.com/rizkyalfito" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="mailto:ikyalf21@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl opacity-20" />
            <img
              src="/profile.png"
              alt="Rizky Alfito Hadi"
              className="rounded-full object-cover border-4 border-primary/10 shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(0, 0, 0, 0.01) 0%, transparent 70%)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Button variant="ghost" size="sm" asChild className="rounded-full">
          <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            <span className="sr-only">Scroll Down</span>
          </a>
        </Button>
      </div>
    </section>
  )
}
