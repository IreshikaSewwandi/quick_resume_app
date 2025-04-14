import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ExampleData {
  title: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  skills: string[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    image?: string;
  }[];
  education: {
    degree: string;
    school: string;
    year: string;
  };
}

const getExampleData = (id: string): ExampleData => {
  const examples: Record<string, ExampleData> = {
    "software-engineer": {
      title: "Software Engineer",
      name: "Alex Johnson",
      description: "A clean, professional resume for software engineering positions highlighting technical skills and project experience.",
      image: "/Software_Engineer.png?height=600&width=450",
      highlights: [
        "Clear organization of technical skills by proficiency level",
        "Project-focused work experience with measurable outcomes",
        "Clean, scannable format optimized for ATS systems",
        "Balance of technical expertise and soft skills",
      ],
      skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Git", "CI/CD", "Agile Methodologies"],
      experience: [
        {
          title: "Senior Software Engineer",
          company: "Tech Innovations Inc.",
          period: "2020 - Present",
          description: "Led development of cloud-based applications serving 50,000+ users. Improved system performance by 35% through code optimization.",
        },
        {
          title: "Software Developer",
          company: "Digital Solutions LLC",
          period: "2017 - 2020",
          description: "Developed and maintained web applications using React and Node.js. Collaborated with UX team to implement responsive designs.",
        },
      ],
      education: {
        degree: "B.S. Computer Science",
        school: "University of Technology",
        year: "2017",
      },
    },
    "marketing-specialist": {
      title: "Marketing Specialist",
      name: "Jamie Smith",
      description: "Creative resume format for marketing professionals that emphasizes campaign results and creative skills.",
      image: "/Marketing_Specialist.png?height=600&width=450",
      highlights: [
        "Results-focused descriptions with metrics and KPIs",
        "Showcase of creative campaign examples",
        "Emphasis on both digital and traditional marketing skills",
        "Clean design that demonstrates attention to branding",
      ],
      skills: [
        "Social Media Marketing",
        "Content Strategy",
        "SEO/SEM",
        "Email Campaigns",
        "Analytics",
        "Brand Development",
      ],
      experience: [
        {
          title: "Marketing Manager",
          company: "Brand Forward Agency",
          period: "2019 - Present",
          description: "Managed marketing campaigns for 12+ clients resulting in average engagement increase of 45%. Led rebranding initiatives that increased client conversion rates by 28%.",
        },
        {
          title: "Digital Marketing Specialist",
          company: "Growth Marketing Inc.",
          period: "2017 - 2019",
          description: "Executed social media strategies across platforms, growing audience by 10,000+ followers. Optimized PPC campaigns reducing cost-per-acquisition by 32%.",
        },
      ],
      education: {
        degree: "B.A. Marketing Communications",
        school: "State University",
        year: "2017",
      },
    },
    "default": {
      title: "Example Resume",
      name: "Sample Name",
      description: "A professional resume template example.",
      image: "/data-analyst.png?height=600&width=450",
      highlights: [
        "Clean, professional layout",
        "Well-organized sections",
        "Balanced white space",
        "ATS-friendly format",
      ],
      skills: ["Communication", "Leadership", "Problem Solving", "Teamwork", "Time Management"],
      experience: [
        {
          title: "Senior Position",
          company: "Example Company",
          period: "2020 - Present",
          description: "Accomplished professional with demonstrated success in this role.",
          image: "/Graphic_Designer.png?height=600&width=450",
        },
        {
          title: "Junior Position",
          company: "Previous Company",
          period: "2017 - 2020",
          description: "Developed key skills and contributed to team success through various projects.",
        },
      ],
      education: {
        degree: "Bachelor's Degree",
        school: "University Name",
        year: "2017",
      },
    },
  }

  return examples[id] || examples.default
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function ExampleDetailPage({ params }: PageProps) {
  const example = getExampleData(params.id)

  return (
    <div className="container py-8">
      <Link href="/examples" className="flex items-center text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Examples
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ... rest of your JSX remains exactly the same ... */}
      </div>
    </div>
  )
}