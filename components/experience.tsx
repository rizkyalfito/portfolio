"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Users } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-20 h-0.5 bg-primary/20 rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            My professional journey, educational background, and organizational experiences that have shaped my career.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="work" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Work</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="organization" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Organization</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="subtle-shadow subtle-shadow-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>Website and Social Media Intern</CardTitle>
                        <CardDescription>OK OCE Indonesia - Jakarta Selatan</CardDescription>
                      </div>
                      <Badge variant="outline">Sep 2024 - Dec 2024</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        Developed multiple websites using WordPress, including theme customization, layout, and
                        performance optimization.
                      </li>
                      <li>Wrote and published SEO-friendly blog articles.</li>
                      <li>Designed various social media content using Canva.</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="subtle-shadow subtle-shadow-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>Lead of Front End Team</CardTitle>
                        <CardDescription>Soulution Capstone Project</CardDescription>
                      </div>
                      <Badge variant="outline">Sep 2023 - Dec 2023</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        Successfully defined project plan with 4 other team members to facilitate project execution.
                      </li>
                      <li>Initiated team collaboration using Git and Github.</li>
                      <li>Led weekly team meetings and created work plans with job assignments.</li>
                      <li>
                        Successfully matched psychological methods in stress level measurement used in the project (PSS
                        method).
                      </li>
                      <li>Defined requirements and Minimum Viable Product for each page.</li>
                      <li>Implemented code based on established designs.</li>
                      <li>
                        Successfully created responsive landing page, stress check, and contact pages for various screen
                        devices.
                      </li>
                      <li>Translated PSS psychological method into JavaScript code.</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="subtle-shadow subtle-shadow-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>Studi Independen</CardTitle>
                        <CardDescription>Dicoding - Indonesia</CardDescription>
                      </div>
                      <Badge variant="outline">Aug 2023 - Dec 2023</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        Intensive learning of website development including HTML, CSS, Javascript, and Responsive Layout
                        Design.
                      </li>
                      <li>Successfully created a Dynamic Web App Restaurant Catalog by fetching API data.</li>
                      <li>Configured Progressive Web Apps.</li>
                      <li>Utilized screen reader and tab focus for visually impaired website users.</li>
                      <li>Successfully collaborated with 5 people in a Capstone Project development team using GIT.</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="subtle-shadow subtle-shadow-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>Bachelor of Sistem Informasi</CardTitle>
                        <CardDescription>Universitas Singaperbangsa Karawang - Indonesia</CardDescription>
                      </div>
                      <Badge variant="outline">Sep 2021 - Apr 2025 (Expected)</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium mb-2">GPA: 3.90/4.00</div>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        Developed UML projects for library information systems, ensuring efficiency and ease of access.
                      </li>
                      <li>Built static web for bookstores, enhancing user experience.</li>
                      <li>Created Business Model Canvas for Mie Ayam Yamin business.</li>
                      <li>
                        Completed BPMN mini project for JERMANI squeezed orange juice sales and successfully
                        demonstrated it.
                      </li>
                      <li>
                        Wrote and published scientific journal on the design of "Solution Stress Checker" website, a
                        solution for stress management.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="subtle-shadow subtle-shadow-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>High School Diploma in Rekayasa Perangkat Lunak</CardTitle>
                        <CardDescription>SMK Negeri 2 Kota Bekasi - Indonesia</CardDescription>
                      </div>
                      <Badge variant="outline">Jul 2018 - May 2021</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Developed goods storage information system using CodeIgniter 3.</li>
                      <li>Built desktop applications using .NET.</li>
                      <li>Completed Department Competency Certification.</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="organization">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="subtle-shadow subtle-shadow-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>Ketua Divisi Edukasi</CardTitle>
                        <CardDescription>Himpunan Mahasiswa Sistem Informasi Unsika</CardDescription>
                      </div>
                      <Badge variant="outline">Jan 2023 - Dec 2023</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Successfully coordinated education division members and executed 4 work programs.</li>
                      <li>
                        Successfully designed work programs:
                        <ul className="list-disc pl-5 mt-2">
                          <li>National Technopreneurship Webinar with 465 participants</li>
                          <li>React External API Workshop with 100 internal campus participants</li>
                          <li>IT Competition with 3 national level competition subjects</li>
                        </ul>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="subtle-shadow subtle-shadow-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>Anggota Divisi Edukasi</CardTitle>
                        <CardDescription>Himpunan Mahasiswa Sistem Informasi Unsika</CardDescription>
                      </div>
                      <Badge variant="outline">Jan 2022 - Dec 2022</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Became the chairman of the basic python workshop with 75 participants.</li>
                      <li>Became the chairman of the UI/UX Design workshop with 100 participants.</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
