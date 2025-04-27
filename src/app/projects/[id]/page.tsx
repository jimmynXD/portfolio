import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | James Nguyen`,
    description: project.challenge,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='mb-8'>
        <Link href='/'>
          <Button variant='ghost' className='gap-2'>
            <ChevronLeft className='h-4 w-4' />
            Back to Projects
          </Button>
        </Link>
      </div>

      <header className='mb-12'>
        <h1 className='text-4xl font-bold mb-4'>{project.title}</h1>
        {project.imageUrl && (
          <div className='bg-gray-700/50 rounded-lg'>
            <div className='relative w-full h-96 mb-8 rounded-lg overflow-hidden'>
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className='object-contain'
                sizes='(max-width: 768px) 100vw, 700px'
                priority
              />
            </div>
          </div>
        )}
      </header>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='md:col-span-2 space-y-12'>
          <section>
            <h2 className='text-2xl font-semibold mb-4'>The Challenge</h2>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              {project.challenge}
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>The Solution</h2>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              {project.solution}
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>The Impact</h2>
            <ul className='space-y-4'>
              {project.impact.map((item, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-primary mr-2'>•</span>
                  <span className='text-lg text-gray-700 dark:text-gray-300'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Impact section hidden until auth is set up
          <section>
            <h2 className='text-2xl font-semibold mb-4'>The Impact</h2>
            <ul className='space-y-4'>
              {project.impact.map((item, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-primary mr-2'>•</span>
                  <span className='text-lg text-gray-700'>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          */}
        </div>

        <div className='md:col-span-1'>
          {(project.team || project.toolkit) && (
            <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-lg space-y-4'>
              {project.team && (
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Team</h3>
                  <p className='text-gray-700 dark:text-gray-300'>
                    {project.team}
                  </p>
                </div>
              )}
              {project.toolkit && (
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Toolkit</h3>
                  <p className='text-gray-700 dark:text-gray-300'>
                    {project.toolkit}
                  </p>
                </div>
              )}
            </div>
          )}

          {(project.demoUrl || project.githubUrl) && (
            <div className='mt-8 space-y-4'>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full text-center bg-primary dark:bg-blue-900 dark:hover:bg-blue-800 text-white py-2 px-4 rounded-lg shadow-lg transition-colors'
                >
                  View Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full text-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors'
                >
                  View on GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
