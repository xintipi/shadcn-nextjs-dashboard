import Link from 'next/link'
import {
  ArrowRight,
  Code,
  Github,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Index = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Navigation */}
      <nav className='fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between py-4'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500'>
                <Sparkles className='h-5 w-5 text-white' />
              </div>
              <span className='text-xl font-bold text-white'>DashboardOS</span>
            </div>
            <div className='hidden items-center space-x-8 md:flex'>
              <a
                href='#features'
                className='text-gray-300 transition-colors hover:text-white'
              >
                Features
              </a>
              <a
                href='#demo'
                className='text-gray-300 transition-colors hover:text-white'
              >
                Demo
              </a>
              <a
                href='#about'
                className='text-gray-300 transition-colors hover:text-white'
              >
                About
              </a>
              <Button
                variant='outline'
                className='border-purple-500 bg-purple-500 text-white hover:bg-purple-500 hover:text-white'
                asChild
              >
                <Link href='https://github.com/naveenda/shadcn-nextjs-dashboard'>
                  <Github className='mr-2 h-4 w-4' />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl text-center'>
          <Badge className='mb-6 border-purple-500/30 bg-purple-500/20 text-purple-300'>
            <Star className='mr-1 h-3 w-3' />
            Open Source & Free Forever
          </Badge>

          <h1 className='mb-6 text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl'>
            Beautiful
            <span className='block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Dashboard
            </span>
            Template
          </h1>

          <p className='mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-300'>
            A modern, responsive dashboard UI built with Next.js 14, shadcn/ui,
            and Tailwind CSS. Ready-to-use admin panel with beautiful components
            and layouts.
          </p>

          <div className='mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Button
              size='lg'
              className='border-0 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 text-lg text-white hover:from-purple-700 hover:to-pink-700'
              asChild
            >
              <Link href='/dashboard'>
                View Demo
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button size='lg' variant='outline' className='' asChild>
              <a href='https://github.com/naveenda/shadcn-nextjs-dashboard'>
                <Github className='mr-2 h-5 w-5' />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className='mx-auto grid max-w-md grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>
                <iframe
                  src='https://ghbtns.com/github-btn.html?user=naveenda&repo=shadcn-nextjs-dashboard&type=star&count=true&size=large'
                  frameBorder='0'
                  scrolling='0'
                  width='170'
                  height='30'
                  title='GitHub'
                ></iframe>
              </div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>
                <iframe
                  src='https://ghbtns.com/github-btn.html?user=naveenda&repo=shadcn-nextjs-dashboard&type=fork&count=true&size=large'
                  frameBorder='0'
                  scrolling='0'
                  width='170'
                  height='30'
                  title='GitHub'
                ></iframe>
              </div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>
                <iframe
                  src='https://ghbtns.com/github-btn.html?user=naveenda&repo=shadcn-nextjs-dashboard&type=watch&count=true&size=large&v=2'
                  frameBorder='0'
                  scrolling='0'
                  width='170'
                  height='30'
                  title='GitHub'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              Everything You Need to Build
            </h2>
            <p className='mx-auto max-w-2xl text-xl text-gray-300'>
              Powerful features that make dashboard development a breeze
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='border-gray-700 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50'>
              <CardContent className='p-6'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500'>
                  <Zap className='h-6 w-6 text-white' />
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Lightning Fast
                </h3>
                <p className='text-gray-400'>
                  Built with Next.js 14 and optimized for performance. Get
                  blazing fast load times out of the box.
                </p>
              </CardContent>
            </Card>

            <Card className='border-gray-700 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50'>
              <CardContent className='p-6'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500'>
                  <Shield className='h-6 w-6 text-white' />
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Enterprise Ready
                </h3>
                <p className='text-gray-400'>
                  Production-ready with built-in authentication, role
                  management, and security best practices.
                </p>
              </CardContent>
            </Card>

            <Card className='border-gray-700 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50'>
              <CardContent className='p-6'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500'>
                  <Code className='h-6 w-6 text-white' />
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Developer First
                </h3>
                <p className='text-gray-400'>
                  Clean APIs, TypeScript support, and extensive documentation.
                  Built by developers, for developers.
                </p>
              </CardContent>
            </Card>

            <Card className='border-gray-700 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50'>
              <CardContent className='p-6'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500'>
                  <Users className='h-6 w-6 text-white' />
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Community Driven
                </h3>
                <p className='text-gray-400'>
                  Join thousands of developers contributing to the future of
                  dashboard development.
                </p>
              </CardContent>
            </Card>

            <Card className='border-gray-700 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50'>
              <CardContent className='p-6'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500'>
                  <Sparkles className='h-6 w-6 text-white' />
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Modern Design
                </h3>
                <p className='text-gray-400'>
                  Beautiful components built with shadcn/ui and Tailwind CSS.
                  Responsive and accessible by default.
                </p>
              </CardContent>
            </Card>

            <Card className='border-gray-700 bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50'>
              <CardContent className='p-6'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-rose-500'>
                  <Github className='h-6 w-6 text-white' />
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Open Source
                </h3>
                <p className='text-gray-400'>
                  Completely free and open source. No vendor lock-in, no hidden
                  fees. Use it however you want.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section id='demo' className='bg-black/20 px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              Get Started in Seconds
            </h2>
            <p className='mx-auto max-w-2xl text-xl text-gray-300'>
              Install and run your first dashboard with just a few commands
            </p>
          </div>

          <div className='mx-auto max-w-4xl'>
            <Card className='border-gray-700 bg-gray-900'>
              <CardContent className='p-6'>
                <div className='mb-4 flex items-center justify-between'>
                  <div className='flex space-x-2'>
                    <div className='h-3 w-3 rounded-full bg-red-500'></div>
                    <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                  </div>
                  <Badge className='border-purple-500/30 bg-purple-500/20 text-purple-300'>
                    Terminal
                  </Badge>
                </div>
                <div className='space-y-2 font-mono text-sm'>
                  <div className='text-gray-400'># Clone the repository</div>
                  <div className='text-green-400'>
                    git clone
                    https://github.com/NaveenDA/shacn-nextjs-dashboard.git
                  </div>
                  <div className='text-gray-400'># Install dependencies</div>
                  <div className='text-green-400'>npm install</div>
                  <div className='text-gray-400'>
                    # Start development server
                  </div>
                  <div className='text-green-400'>npm run dev</div>
                  <div className='text-purple-400'>
                    🚀 Your dashboard is ready at http://localhost:3000
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-6 text-3xl font-bold text-white md:text-4xl'>
            Ready to Build Something Amazing?
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-300'>
            Join thousands of developers who are already building incredible
            dashboards with DashboardOS.
          </p>

          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Button
              size='lg'
              className='border-0 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 text-lg text-white hover:from-purple-700 hover:to-pink-700'
              asChild
            >
              <Link href='/dashboard'>
                View Demo
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-gray-600 px-8 py-6 text-lg text-black hover:border-black hover:bg-black hover:text-white'
              asChild
            >
              <Link href='https://github.com/naveenda/shadcn-nextjs-dashboard'>
                <Github className='mr-2 h-5 w-5' />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id='about'
        className='border-t border-gray-800 bg-black/30 px-4 py-12 sm:px-6 lg:px-8'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
            <div className='md:col-span-2'>
              <div className='mb-4 flex items-center space-x-2'>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500'>
                  <Sparkles className='h-5 w-5 text-white' />
                </div>
                <span className='text-xl font-bold text-white'>
                  DashboardOS
                </span>
              </div>
              <p className='mb-4 max-w-md text-gray-400'>
                The open-source dashboard framework that makes building admin
                panels a joy. Created with ❤️ by NaveenDA and the community.
              </p>
              <div className='flex space-x-4'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-gray-400 hover:bg-black hover:text-white'
                  asChild
                >
                  <Link href='https://github.com/naveenda/shadcn-nextjs-dashboard'>
                    <Github className='h-5 w-5' />
                  </Link>
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-gray-400 hover:bg-black hover:text-white'
                  asChild
                >
                  <Link href='https://github.com/naveenda/shadcn-nextjs-dashboard'>
                    <Star className='h-5 w-5' />
                  </Link>
                </Button>
              </div>
            </div>

            <div></div>

            <div></div>
          </div>

          <div className='mt-8 border-t border-gray-800 pt-8 text-center text-gray-400'>
            <p>
              &copy; 2024 DashboardOS. Built by NaveenDA. Open source under MIT
              License.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
