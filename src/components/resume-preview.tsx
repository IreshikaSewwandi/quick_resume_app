"use client"

import type { ResumeData } from "../../types/resume"
import Image from "next/image"

interface ResumePreviewProps {
  data: ResumeData
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const { personalInfo, experience, education, skills } = data

  // Split skills into soft skills and hard skills
  const softSkills = skills.filter((skill) => skill.level <= 3)
  const hardSkills = skills.filter((skill) => skill.level > 3)

  return (
    <div id="resume-preview-content" className="font-sans bg-white text-gray-800">
      {/* Header */}
      <div className="bg-gray-700 text-white p-6 flex items-center">
        {personalInfo.profileImage ? (
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white mr-6">
            <Image
              src={personalInfo.profileImage || "/placeholder.svg"}
              alt={personalInfo.name || "Profile"}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-500 mr-6 flex items-center justify-center text-white text-2xl font-bold">
            {personalInfo.name ? personalInfo.name.charAt(0) : "?"}
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold uppercase">{personalInfo.name || "NAME SURNAME"}</h1>
          <p className="text-gray-300">{personalInfo.title || "JOB TITLE"}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6">
          {/* Contact Section */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-3">Contact</h2>
            <ul className="space-y-2 text-sm">
              {personalInfo.phone && (
                <li className="flex items-start">
                  <span className="font-bold mr-2">📞</span>
                  <span>{personalInfo.phone}</span>
                </li>
              )}
              {personalInfo.email && (
                <li className="flex items-start">
                  <span className="font-bold mr-2">📬</span>
                  <span>{personalInfo.email}</span>
                </li>
              )}
              {personalInfo.linkedin && (
                <li className="flex items-start">
                  <span className="font-bold mr-2">in</span>
                  <span>{personalInfo.linkedin}</span>
                </li>
              )}
              {personalInfo.address && (
                <li className="flex items-start">
                  <span className="font-bold mr-2">🏠</span>
                  <span>{personalInfo.address}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Soft Skills Section */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-3">Soft Skills</h2>
            <ul className="space-y-1 text-sm">
              {softSkills.length > 0 ? (
                softSkills.map((skill) => <li key={skill.id}>• {skill.name}</li>)
              ) : (
                <>
                  <li>• Visionary Leadership</li>
                  <li>• Adaptability</li>
                  <li>• Integrity</li>
                </>
              )}
            </ul>
          </div>

          {/* Hard Skills Section */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-3">Hard Skills</h2>
            <ul className="space-y-1 text-sm">
              {hardSkills.length > 0 ? (
                hardSkills.map((skill) => <li key={skill.id}>• {skill.name}</li>)
              ) : (
                <>
                  <li>• Salesforce CRM</li>
                  <li>• SAP ERP</li>
                  <li>• Tableau</li>
                  <li>• Azure</li>
                </>
              )}
            </ul>
          </div>


        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 p-6">
          {/* Profile Summary */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b border-gray-700 pb-1 mb-3">Profile Summary</h2>
            <p className="text-sm">
              {personalInfo.summary ||
                "Strategic and results-driven executive with a proven track record of leading organizations to achieve and sustain business growth. Skilled in developing and implementing innovative strategies and fostering cross-functional collaboration."}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b border-gray-700 pb-1 mb-3">Professional Experience</h2>

            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <h3 className="font-bold">{exp.position || "Position Title"}</h3>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{exp.company || "Company Name"}</span>
                    <span className="text-gray-600">
                      {exp.startDate ? new Date(exp.startDate).getFullYear() : "Start"} -{" "}
                      {exp.current ? "Present" : exp.endDate ? new Date(exp.endDate).getFullYear() : "End"}
                    </span>
                  </div>
                  {exp.description && (
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {exp.description.split("\n").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <>
                <div className="mb-4">
                  <h3 className="font-bold">Chief Executive Officer</h3>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">XYZ Corporation</span>
                    <span className="text-gray-600">2020 - Present</span>
                  </div>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      Spearheaded a comprehensive business transformation initiative resulting in 30% revenue growth.
                    </li>
                    <li>Led the successful implementation of a company-wide digital transformation strategy.</li>
                    <li>
                      Forged strategic partnerships with key industry players, expanding market reach and increasing
                      market share by 15%.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold">Vice President of Operations</h3>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">ABC Technologies</span>
                    <span className="text-gray-600">2015 - 2020</span>
                  </div>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      Streamlined operations by implementing lean management principles, reducing operational costs by
                      22%.
                    </li>
                    <li>
                      Oversaw the successful launch of a new product line, contributing to a 40% increase in annual
                      revenue.
                    </li>
                    <li>Implemented an employee development program.</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase border-b border-gray-700 pb-1 mb-3">Education</h2>

            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <h3 className="font-bold">
                    {edu.degree} {edu.field}
                  </h3>
                  <div className="flex justify-between text-sm">
                    <span>{edu.institution}</span>
                    <span className="text-gray-600">
                      {edu.startDate ? new Date(edu.startDate).getFullYear() : ""}
                      {edu.endDate ? ` - ${new Date(edu.endDate).getFullYear()}` : edu.current ? " - Present" : ""}
                    </span>
                  </div>
                  {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
                </div>
              ))
            ) : (
              <>
                <div className="mb-3">
                  <h3 className="font-bold">MBA Business Administration</h3>
                  <div className="flex justify-between text-sm">
                    <span>Harvard Business School</span>
                    <span className="text-gray-600">2010 - 2012</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">BA Marketing</h3>
                  <div className="flex justify-between text-sm">
                    <span>University of California</span>
                    <span className="text-gray-600">2006 - 2010</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
