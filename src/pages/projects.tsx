
//import Layout from "@/components/template/Layout";
import Projectscard from "@/components/organism/Projectscard";







const Projects = () => {
 // const meta = {
 //   title: "Projects Page",
 //   description: "Showcase of projects that exemplify my frontend wizardry",
 //   children: ""
  //};

  const projects = [
    {
      id: 1,
      name: 'Animated Animals',
      title: 'Animated Animals',
      src: '/static/animatedanimalsthumb.png',
      description: 'HTML5, CSS3, and vanilla JavaScript. A cat, deer, wolf, and bear split up into SVG segments and animated.',
      href: 'https://stevenrugg.github.io/animated-animals'
    },
    {
      id: 2,
      name: 'iOS Calculator Clone',
      title: 'iOS Calculator',
      src: '/static/calcthumb.png',
      description: 'A working clone of the iOS calculator using HTML, CSS, and JavaScript.',
      href: 'https://github.com/stevenrugg/ioscalculator'
    },
    {
      id: 3,
      name: 'seattlesupergeek',
      title: 'seattlesupergeek',
      src: '/static/seattlesupergeekthumb.png',
      description: 'My blog and personal corner of the web.',
      href: 'https://seattlesupergeek.io'
    },
    {
      id: 4,
      name: 'WebRTC Video Chat',
      title: 'WebRTC Video Chat',
      src: '/static/webrtc.png',
      description: 'A WebRTC Video Chat app using Socket.io for signaling.',
      href: 'https://github.com/stevenrugg/WebRTC-VideoChat'
    },
    {
      id: 5,
      name: 'Sunsauna',
      title: 'Sunsauna',
      src: '/static/sunsaunathumb.png',
      description: 'Website for a local small business selling infrared in-home saunas.',
      href: 'https://sunsauna.com'
    },
    {
      id: 6,
      name: 'Art of the Table',
      title: 'Art of the Table',
      src: '/static/artthumb.png',
      description: 'Website for a fine dining restaurant with a constantly changing menu.',
      href: 'https://artofthetable.net'
    },
  ];

  return (
   // <Layout as="div" {...meta}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 px-4 py-4">
        {projects.map((project) => (
          <Projectscard key={project.id} project={project} />
        ))}
      </div>
   // </Layout>
  );
};

export default Projects;
