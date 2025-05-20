"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-0.5 bg-accent/50 rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            I am a Sistem Informasi student at Universitas Singaperbangsa Karawang with a passion for Website
            Development. I successfully graduated from Dicoding Indonesia as a Certified Independent Study Student in
            Front End Web and Back End Development.
          </p>
        </motion.div>

        <motion.div style={{ opacity, scale }} className="grid md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full creative-card border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Bachelor of Sistem Informasi at Universitas Singaperbangsa Karawang with a GPA of 3.90/4.00.
                    Previously graduated from SMK Negeri 2 Kota Bekasi with a focus on Rekayasa Perangkat Lunak.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full creative-card border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Briefcase className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    Worked as a Website and Social Media Intern at OK OCE Indonesia, and served as the Lead of Front End
                    Team for the Soulution Capstone Project. Completed Studi Independen at Dicoding Indonesia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full creative-card border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                  <p className="text-muted-foreground">
                    Served as the Head of Education Division at Himpunan Mahasiswa Sistem Informasi Unsika, successfully
                    coordinating 4 work programs including a National Technopreneurship Webinar with 465 participants.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
