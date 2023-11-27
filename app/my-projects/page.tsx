import React from 'react'
import { Projects } from '@/constants'
import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-center bg-cover' style={{backgroundImage: 'url(/mountains.jpg)'}}>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
         { Projects.map((project, index)=>(
            < ProjectCard
               key={index}
               title= {project.title}
               text={project.text}
               image={project.src}
            />
         )) }
      </div>
    </div>
  )
}

export default page 