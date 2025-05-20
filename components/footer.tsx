import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Rizky Alfito Hadi</h3>
            <p className="text-sm text-muted-foreground">&copy; {currentYear} All rights reserved.</p>
          </div>

          <div className="flex gap-2">
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
        </div>
      </div>
    </footer>
  )
}
