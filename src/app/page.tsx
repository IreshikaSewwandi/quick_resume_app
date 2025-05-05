import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create Your Professional Resume in Minutes
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our easy-to-use resume builder helps you create a personalized, professional resume that will
                    impress employers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/builder">
                    <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/templates">
                    <Button size="lg" variant="outline">
                      View Templates
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-auto">
                  <Image
                    src="./section_1.webp"
                    alt="Resume template preview"
                    width={750}
                    height={580}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to create a professional resume
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-gray-700">
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
                    className="h-8 w-8"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M8 13h2" />
                    <path d="M8 17h2" />
                    <path d="M14 13h2" />
                    <path d="M14 17h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Multiple Templates</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Choose from a variety of professional templates to make your resume stand out.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-gray-700">
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
                    className="h-8 w-8"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Easy Editing</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Simple and intuitive interface to edit your resume sections with real-time preview.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-gray-700">
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
                    className="h-8 w-8"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Export Options</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Download your resume as PDF, share via link, or print directly from the app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Choose Your Plan</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Get started for free or upgrade to Pro for unlimited resumes and premium features
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <div className="flex flex-col border rounded-lg overflow-hidden">
                <div className="p-6 bg-gray-50 dark:bg-gray-800">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">Basic resume building for starters</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$0</span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Create up to 2 resumes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Basic templates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Download as PDF</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800">
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/auth/signup">Select Plan</Link>
                  </Button>
                </div>
              </div>

              {/* Pro Monthly Plan */}
              <div className="flex flex-col border rounded-lg overflow-hidden">
                <div className="p-6 bg-primary text-white">
                  <h3 className="text-2xl font-bold">Pro Monthly</h3>
                  <p className="text-primary-foreground/80 mt-2">Professional resume building with unlimited access</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$5</span>
                    <span className="text-primary-foreground/80 ml-2">/month</span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Unlimited resumes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>All premium templates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Download in multiple formats</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>AI resume suggestions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Custom sections</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-primary/5">
                  <Button asChild className="w-full">
                    <Link href="/pricing">Select Plan</Link>
                  </Button>
                </div>
              </div>

              {/* Pro Annual Plan */}
              <div className="flex flex-col border rounded-lg overflow-hidden border-primary shadow-lg">
                <div className="p-6 bg-primary text-white">
                  <h3 className="text-2xl font-bold">Pro Annual</h3>
                  <p className="text-primary-foreground/80 mt-2">Save 17% with annual billing</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$50</span>
                    <span className="text-primary-foreground/80 ml-2">/year</span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Everything in Pro Monthly</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>2 months free</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Resume analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Early access to new features</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-primary/5">
                  <Button asChild className="w-full">
                    <Link href="/pricing">Select Plan</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">© 2023 QuickResume. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
