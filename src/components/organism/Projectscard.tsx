
/* eslint-disable @typescript-eslint/ban-ts-comment */

// @typescript-eslint/ban-ts-comment


import Layout from "@/components/template/Layout";
import UnstyledLink from "../atoms/UnstyledLink";
import CustomImage from "../mollecules/CustomImage";

import React from "react";








// @ts-ignore
// @ts-ignore
export default function Projectscard({ project }) {
  



  
  return (
    <Layout as='div' title="projects" description="projects to showcase my skills">
      <div className="cardcontainer">
    <div className="thecard border-solid shadow-lg rounded-1 hover:shadow-xl dark:hover:shadow-white dark:border-white-2 border-2">
    <div className="box content-center text-center drop-shadow-sm">
    <CustomImage
      display="intrinsic"
      src={project.src}
      width={200}
      height={200}
      alt={project.name}/>
      <div className="content text-center">
        <h3 className="text-purple-400 dark:text-purple-200 mb-1">{project.title}</h3>
        <p className='m-1'>{project.description}</p>
        <UnstyledLink
        href={`projects/${project.id}`}
        >
          <button className='bg-fuchsia-700 m-3 text-white rounded-lg p-1 align-middle'>Check it Out</button>
          </UnstyledLink>
      </div>
    </div>
  </div>
  </div>
  </Layout>
   
  );
}







/*<div className="card max-w-sm rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
      
      <CustomImage
      display="intrinsic"
      src={project.src}
      width={200}
      height={200}
      alt={project.name}/>
    
    <div className="card-body">
      <h2 className="card-title text-lg font-semibold">{project.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      <div className="card-actions justify-end">
        <UnstyledLink href={project.href}>
          <button className="btn bg-fuchsia-900 text-white relative rounded-lg p-1.5 self-center">Check it Out</button>
        </UnstyledLink>
      </div>
    </div>
  </div> */


















     /*   <Layout as='main' {...meta}>
        <div className="card card-compact w-32 h-24 rounded-xl bg-slate-500 dark:bg-white">
  <figure>
    <CustomImage
      display="responsive"
      src={project.image}
      alt={project.name} 
      width="232px"
      height="432px">
    </CustomImage>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{project.title}</h2>
    <p>{project.description}</p>
    <div className="card-actions justify-end">
        <UnstyledLink href={project.href}>
      <button className="btn btn-primary">Check it Out</button>
      </UnstyledLink>
    </div>
  </div>
</div>
        </Layout>
    )
}

export default Projectscard */