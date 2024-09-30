/* eslint-disable @typescript-eslint/ban-ts-comment */

// @typescript-eslint/ban-ts-comment


import Layout from "@/components/template/Layout";
import UnstyledLink from "../atoms/UnstyledLink";
import CustomImage from "../mollecules/CustomImage";




// @ts-ignore
// @ts-ignore
function Projectscard({ project }) {

  const meta = {
    "title": "Projects Page",
    "description": "Showcase of projects I have built"
  }
  return (
    <Layout as='main' {...meta}>
      <div className="cardcontainer">
    <div className="thecard border-solid shadow-md rounded-1 hover:shadow-lg dark:hover:shadow-white border-2">
    <div className="box content-center text-center shadow-sm">
    <CustomImage
      display="intrinsic"
      src={project.src}
      width={200}
      height={200}
      alt={project.name}/>
      <div className="content text-center">
        <h3>{project.title}</h3>
        <p className='m-1'>{project.description}</p>
        <UnstyledLink
        href='/project/[id].tsx'
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

export default Projectscard;




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