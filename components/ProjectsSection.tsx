import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Online Internship Application for Students at PT. Angkasa Pura 1 Juanda",
    description:
      "A website that can be used by students who want to apply for an internship at PT. Angkasa Pura 1 Juanda.",
    image: "/angkasapura.png",
    github: "https://github.com/IceManbrz/web-pkl.git",
    link: "https://pklangkasapura1.vercel.app/",
  },
  {
    name: "Kampus Gratis",
    description: "A website that can be used to acquire knowledge according to each individual's preferences freely.",
    image: "/kampusgratis.png",
    github: "https://github.com/icemanbrz",
    link: "https://kampusgratis.id",
  },
  {
    name: "The selection test for majors at SMA 1 Kedungwaru Tulungagung",
    description:
      "A website aimed at new students of SMA 1 Kedungwaru Tulungagung to choose majors according to their interests and talents.",
    image: "/testsma.png",
    github: "https://github.com/IceManbrz/testdeploy.git",
    link: "https://testminatbakat.vercel.app/",
  },
  {
    name: "Fullstack Programmer",
    description:
      "As a fullstack developer at top4 for some project.",
    image: "/image.png",
    github: "",
    link: "https://www.top4marketing.co.id/",
  },
  {
    name: "Export Company",
    description:
      "Create landing page for export company in indonesia using next.js. Equipped with nodemailer, google analytics.",
    image: "/webekspor.png",
    github: "",
    link: "https://webeksporsukses.vercel.app/",
  },
  {
    name: "Office Management Platform",
    description:
      "Currently working on a Next.js-powered web platform for office management, supporting roles such as Superadmin, Director, Manager, Accountant, and Staff.Each role comes with specific features like user & staff management, salary processing, daily reports, internal chat.",
    image: "/kantorku.png",
    github: "",
    link: "https://kantorku-management.vercel.app/login",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {[...projects].reverse().map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
