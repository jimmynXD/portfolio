import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | James Nguyen`,
    description: project.situation,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
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
          <div className='relative w-full h-96 mb-8 rounded-lg overflow-hidden'>
            <img
              src={project.imageUrl}
              alt={project.title}
              className='object-cover w-full h-full'
            />
          </div>
        )}
      </header>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='md:col-span-2 space-y-12'>
          <section>
            <h2 className='text-2xl font-semibold mb-4'>Situation</h2>
            <p className='text-lg text-gray-700'>{project.situation}</p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>Task</h2>
            <p className='text-lg text-gray-700'>{project.task}</p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>Action</h2>
            <ul className='space-y-4'>
              {project.action.map((item, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-primary mr-2'>•</span>
                  <span className='text-lg text-gray-700'>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>Result</h2>
            <ul className='space-y-4'>
              {project.result.map((item, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-primary mr-2'>•</span>
                  <span className='text-lg text-gray-700'>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className='md:col-span-1'>
          {project.metrics && (
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>Key Metrics</h3>
              <div className='space-y-4'>
                {project.metrics.map((metric, index) => (
                  <div key={index} className='space-y-2'>
                    <p className='font-medium'>{metric.kpi}</p>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600'>Before</span>
                      <span className='text-gray-600'>After</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-700'>{metric.before}</span>
                      <span className='text-primary font-semibold'>
                        {metric.after}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(project.demoUrl || project.githubUrl) && (
            <div className='mt-8 space-y-4'>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full text-center bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors'
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
