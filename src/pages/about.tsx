import { TypeAnimation } from 'react-type-animation';
import Layout from '@/components/template/Layout';
import CustomImage from '@/components/mollecules/CustomImage';



function About () {

    const meta = {
        "title": "About Page",
        "description": "Page about me, as an engineer. Get to know me.... ect.",
        "children": ""
    }
    return (
       <Layout as='div' {...meta}>
            <h1 className="text-black dark:text-white pt-4 mt-4 mb-2 text-center">Welcome</h1>
            <div className="container place-content-start pb-5 pt-2 mb-3">
            <TypeAnimation
      sequence={[
        
        "I'm a software engineer",
        2000, 
        "I'm a frontend wizard",
        2000,
        "I'm an experienced web developer",
        2000,
        "I'm a graphic designer",
        2000,
        "I'm an open source contributor",
        2000,
        "I'm a UI/UX Designer",
        2000,
        "I'm a gaymer",
        2000,
        "I'm a geek!",
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </div>
            
            <p className="text-black dark:text-white mt-3 mb-3">
                This is my corner of the WWW. My blog, portfolio and digital backyard. I am currently living
                in Seattle, WA with my dog Nipsey Hussle. He is the best dog in the world
            </p>
            
              
            <div className="flex flex-row content-center hover:shadow-lg dark:hover:shadow-white mb-6">
            <CustomImage
                alt="nipsey hussle"
                display='intrinsic'
                src='/static/nipseythreepng.png'
                width={300}
                height={300}
                className='mx-1'
               />
                 <CustomImage
                alt="nipsey hussle"
                display='intrinsic'
                src='/static/nipseytwopng.png'
                width={300}
                height={300}
                className='mx-1'
               />
                 <CustomImage
                alt="nipsey hussle"
                display='intrinsic'
                src='/static/nipseyonepng.png'
                width={300}
                height={300}
                className="mx-1 mb-6"
               />
            </div>
           <div className='text-center'> <h3 className='text-fuchsia-600 dark:text-fuchsia-300 font-semibold'>I am open to opportunities</h3></div>
           <p className='text-black dark:text-white mt-7'>I am currently looking for a new position, one that will challenge me both professionally and intrapersonally. 
            I am a team player who can heuristically solve complex problems quickly and effectively. I have experience with the AGILE & scrum
            methodology of sotware development. I am fluent in: 
            <div className='mt-4 font-bold mb-3 hover:drop-shadow-lg dark:hover:drop-shadow-white'>
            <ul>
              <li>Python</li>
              <li>Javascript</li>
              <li>Ruby</li>
              <li>PHP</li>
              <li>C#</li>
              <li>CSS3 & HTML5</li>
              <li>POSIX Shell (bash)</li>
              <li>Windows Powershell</li> 
              </ul>
              </div>
              I am also very experienced and fluent in fontend technologies like:
            <div className='mt-3 font-bold mb-4 hover:drop-shadow-lg dark:hover:drop-shadow-white'> 
              <ul>
                <li>React</li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>Angular</li>
                <li>Vue</li>
                <li>Vite</li>
                <li>Nuxt</li>
                <li>Astro</li>
              </ul>
              </div> 
              My specialty is frontend devlopement, however, I consider myself a fullstack software engineer.
              I am comfortable coding on the backend (creating APIs, programming server logic, ect.) just the same as 
              the frontend. In the past 5 years I have experienced traumatic hardship. I was forced into homelessness and then
              had to find a way to escape the streets. I accomplished that goal, and now I am living in my own apartment.
              I am very grateful for the people in my life who have helped me stay on the right path. I have a neuro-divergent 
              brain and I would not be where I am today without it. You could say that I have the ultimate problem solving brain. 
           </p>
         
    </Layout>
    );
};

export default About


