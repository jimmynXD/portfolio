import Link from 'next/link';

export function Navigation() {
  return (
    <nav className='fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='text-xl font-bold'>
              James Nguyen
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            <Link
              href='/#work'
              className='text-sm font-medium hover:text-gray-900 dark:hover:text-white'
            >
              Work
            </Link>
            <Link
              href='/#about'
              className='text-sm font-medium hover:text-gray-900 dark:hover:text-white'
            >
              About
            </Link>
            <Link
              href='https://www.linkedin.com/in/jamesnpro/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-medium hover:text-gray-900 dark:hover:text-white'
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
