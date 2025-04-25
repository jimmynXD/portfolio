import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center h-[60vh] text-center px-4'>
        <h1 className='text-5xl font-bold mb-6'>James Nguyen</h1>
        <h2 className='text-2xl text-gray-600 mb-8'>Senior UX Engineer</h2>
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
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className='group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {project.situation}
                  </p>
                  {project.metrics && (
                    <div className='flex justify-between items-center text-sm'>
                      <span className='text-gray-500'>Key Achievement</span>
                      <span className='font-medium text-primary'>
                        {project.metrics[0].after}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
