"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Camera, X } from "lucide-react"
import type { PersonalInfo } from "../../types/resume"
import Image from "next/image"

interface PersonalInfoFormProps {
  data: PersonalInfo
  updateData: (data: PersonalInfo) => void
}

export function PersonalInfoForm({ data, updateData }: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<PersonalInfo>(data)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updatedData = { ...formData, [name]: value }
    setFormData(updatedData)
    updateData(updatedData)
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const updatedData = { ...formData, profileImage: reader.result as string }
        setFormData(updatedData)
        updateData(updatedData)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    const updatedData = { ...formData, profileImage: "" }
    setFormData(updatedData)
    updateData(updatedData)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Personal Information</h3>

      {/* Profile Image Upload */}
      <div className="flex flex-col items-center mb-6">
        <Label htmlFor="profileImage" className="mb-2">
          Profile Image
        </Label>
        <div className="relative">
          {formData.profileImage ? (
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={formData.profileImage || "/placeholder.svg"}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                aria-label="Remove image"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div
              onClick={handleImageClick}
              className="w-32 h-32 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600"
            >
              <Camera size={32} className="text-gray-400" />
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            id="profileImage"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        {!formData.profileImage && (
          <Button type="button" variant="outline" size="sm" className="mt-2" onClick={handleImageClick}>
            Upload Photo
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Software Engineer"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">linkedin</Label>
          <Input
            id="linkedin"
            name="linkedin"
            type="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="linkedin.com/in/your-name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(123) 456-7890" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St, City, State, Zip"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="A brief summary of your professional background and career goals..."
            rows={4}
          />
        </div>
      </div>
    </div>
  )
}
