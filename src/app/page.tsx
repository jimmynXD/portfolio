import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projects, externalProjects } from '@/lib/projects';

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center h-[60vh] text-center px-4'>
        <h1 className='text-5xl font-bold mb-6'>James Nguyen</h1>
        <h2 className='text-2xl text-gray-300 mb-8'>Senior UX Engineer</h2>
        <p className='text-xl max-w-2xl mb-8'>
          I build exceptional user experiences through thoughtful design and
          technical innovation.
        </p>
        <div className='space-x-4'>
          <Link href='https://www.linkedin.com/in/jamesnpro/' target='_blank'>
            <Button size='lg'>Connect on LinkedIn</Button>
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-20 bg-slate-950'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className='group block bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-700'
              >
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 mb-4 line-clamp-3'>
                    {project.challenge}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className='py-20 bg-slate-950'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-2xl font-bold mb-6'>Other Projects</h2>
          <ul className='space-y-2'>
            {externalProjects.map((proj) => (
              <li key={proj.url} className='flex flex-col'>
                <span>
                  <a
                    href={proj.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline'
                  >
                    <span className='font-semibold'>{proj.name}</span>
                  </a>
                  <span className='ml-2'>({proj.type})</span>
                </span>
                <span className=''>{proj.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
