import { useRouter } from 'next/router';
import Layout from '@/components/template/Layout';
import projects from '@/data/projects/projects';
import CustomImage from '@/components/mollecules/CustomImage'; // You can store your project data in a separate file or fetch from an API

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the project by id
  const project = projects.find((proj) => proj.id === parseInt(id as string));

  // Fallback if project is not found
  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <Layout title={project.title} description={project.description}>
      <div className="project-details p-5">
        <h1 className="text-3xl">{project.title}</h1>
        <p className="mt-2 text-lg">{project.description}</p>
        <CustomImage
          display='responsive'
          src={project.src}
          alt={project.name}
          width={300}
          height={300}
          className="mt-4 max-w-full h-auto"
        />
        <p className="mt-5">{project.longDescription || "More details coming soon!"}</p>
      </div>
    </Layout>
  );
};

export default ProjectDetails;