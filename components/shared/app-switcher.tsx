'use client'

import { useState } from 'react'
import {
  BarChart3,
  Calendar,
  Database,
  FileText,
  FolderKanban,
  Grid3X3,
  Mail,
  MessageSquare,
  Settings,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const apps = [
  {
    name: 'Dashboard',
    icon: Grid3X3,
    href: '/dashboard',
    description: 'Main dashboard overview',
  },
  {
    name: 'Mail',
    icon: Mail,
    href: '/mail',
    description: 'Email management',
  },
  {
    name: 'Calendar',
    icon: Calendar,
    href: '/calendar',
    description: 'Schedule and events',
  },
  {
    name: 'Documents',
    icon: FileText,
    href: '/documents',
    description: 'File management',
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
    description: 'Data insights',
  },
  {
    name: 'Users',
    icon: Users,
    href: '/users',
    description: 'User management',
  },
  {
    name: 'Projects',
    icon: FolderKanban,
    href: '/projects',
    description: 'Project tracking',
  },
  {
    name: 'Messages',
    icon: MessageSquare,
    href: '/messages',
    description: 'Team communication',
  },
  {
    name: 'Database',
    icon: Database,
    href: '/database',
    description: 'Data management',
  },
  {
    name: 'Settings',
    icon: Settings,
    href: '/settings',
    description: 'System configuration',
  },
]

export function AppSwitcher() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='h-8 w-8'
          aria-label='Switch applications'
        >
          <Grid3X3 className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-80 p-4'
        align='start'
        side='bottom'
        sideOffset={8}
      >
        <DropdownMenuLabel className='mb-3 text-sm font-medium text-gray-500'>
          Applications
        </DropdownMenuLabel>
        <div className='grid grid-cols-3 gap-2'>
          {apps.map((app) => {
            const Icon = app.icon
            return (
              <DropdownMenuItem
                key={app.name}
                className='flex cursor-pointer flex-col items-center rounded-lg p-3 hover:bg-gray-100'
                onClick={() => {
                  window.location.href = app.href
                  setIsOpen(false)
                }}
              >
                <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100'>
                  <Icon className='h-5 w-5 text-gray-600' />
                </div>
                <span className='text-center text-xs font-medium'>
                  {app.name}
                </span>
              </DropdownMenuItem>
            )
          })}
        </div>
        <DropdownMenuSeparator className='my-3' />
        <div className='text-center text-xs text-gray-500'>
          More apps coming soon...
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
