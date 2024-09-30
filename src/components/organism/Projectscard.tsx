/* eslint-disable @typescript-eslint/ban-ts-comment */

// @typescript-eslint/ban-ts-comment

import CustomImage from "@/components/mollecules/CustomImage";
import Layout from "@/components/template/Layout";
import UnstyledLink from "../atoms/UnstyledLink";



// @ts-ignore
// @ts-ignore
function Projectscard({ project }) {

  const meta = {
    "title": "Projects Page",
    "description": "Showcase of projects I have built"
  }
  return (
    <Layout as='div' {...meta}>
    <div className="card max-w-sm rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
      <figure className="w-96 h-48">
        <CustomImage
          display="responsive"
          src={project.src}
          alt={project.name}
          height={300}
          width={300}
        
          
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="card-actions justify-end">
          <UnstyledLink href={project.href}>
            <button className="btn bg-fuchsia-900 text-white">Check it Out</button>
          </UnstyledLink>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Projectscard;























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