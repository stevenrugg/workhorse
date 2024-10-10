import { useRouter } from 'next/router';
import Layout from '@/components/template/Layout';
import projects from '@/data/projects/projects';
import CustomImage from '@/components/mollecules/CustomImage'; 
import UnstyledLink from '@/components/atoms/UnstyledLink';
import { twclsx } from '@/libs/twclsx';
import { ArrowLeft02Icon } from 'hugeicons-react';




const ProjectDetails = () => {
  // get the id part of the url (projects/1, .../2, .../3, ect.)
  const router = useRouter()
  const  id  = router.query.id
  

  // Find the project by id
  const project = projects.find((proj) => proj.id === id)

  
  // Fallback if project is not found
  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <Layout title={project.title} description={project.description}>
      <UnstyledLink
          href='/projects'
          className={twclsx(
            'group',
            'items-center space-x-1 font-medium',
            'hover:text-primary-3 dark:hover:text-primary-2'
          )}
        > <ArrowLeft02Icon
            className={twclsx(
              'inline-flex w-4 h-4 transition-all duration-200',
              '-translate-x-4 group-hover:translate-x-0',
              'opacity-0 group-hover:opacity-100'
            )}
          />
          <span>Back to Projects</span>
         
        </UnstyledLink>
      <div className="project-details p-5">
        <h1 className="text-3xl text-center text-purple-500 hover:scale-x-3 underline">{project.title}</h1>
        <div className="flex flex-row group">
        <p className="mt-2 text-lg text-justify text-slate-800 dark:text-cyan-200 mr-3">{project.longDescription || 'More Details Coming Soon!'}</p>
        <CustomImage
          display='intrinsic'
          src={project.src}
          alt={project.name}
          width={600}
          height={600}
          className="mt-4 max-w-full h-auto self-center snap-center text-center"
        />
        </div>
       <div className="text-center text-3xl focus:text-cyan-500 active:accent-violet-600 font-extrabold hover:scale-75">
        <UnstyledLink 
        href={project.href}
        className="text-purple-500"
        >Visit the Site  
        </UnstyledLink>
        </div>
      </div>
    </Layout>
  );
};

// pre-render the paths projects/1, .../2, .../3 ect.
export async function getStaticPaths(){
  const paths = projects.map(({ id }) => ({ params: { id  }}))
  
  return {
    fallback: true,
    paths
  }
}

// identifies the object by id and gives to the page as props
export async function getStaticProps() {
  const project = projects.find((proj) => proj.id)
  
  return {
    props: {
        project
      }
    }
  
  }


export default ProjectDetails;