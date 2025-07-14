'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AlertCircle,
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Database,
  FileText,
  FolderKanban,
  HelpCircle,
  LayoutDashboard,
  LogIn,
  MessageSquare,
  Settings,
  Shield,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const sidebarGroups = [
  {
    title: 'General',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
      },
      {
        title: 'Analytics',
        href: '/dashboard/analytics',
        icon: BarChart3,
      },
      {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: Settings,
      },
    ],
  },
  {
    title: 'Pages',
    items: [
      {
        title: 'Users',
        href: '/dashboard/users',
        icon: Users,
      },
      {
        title: 'Projects',
        href: '/dashboard/projects',
        icon: FolderKanban,
      },
      {
        title: 'Documents',
        href: '/dashboard/documents',
        icon: FileText,
      },
      {
        title: 'Calendar',
        href: '/dashboard/calendar',
        icon: Calendar,
      },
      {
        title: 'Auth Pages',
        href: '/dashboard/auth',
        icon: LogIn,
      },
      {
        title: 'Error Pages',
        href: '/dashboard/errors',
        icon: AlertCircle,
      },
    ],
  },
  {
    title: 'Others',
    items: [
      {
        title: 'Messages',
        href: '/dashboard/messages',
        icon: MessageSquare,
      },
      {
        title: 'Database',
        href: '/dashboard/database',
        icon: Database,
      },
      {
        title: 'Security',
        href: '/dashboard/security',
        icon: Shield,
      },
      {
        title: 'Help',
        href: '/dashboard/help',
        icon: HelpCircle,
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        'flex h-full flex-col border-r bg-gray-50/50 transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className='flex h-14 items-center justify-between border-b px-4'>
        {!isCollapsed && (
          <Link href='/dashboard' className='flex items-center gap-2'>
            <span className='text-xl font-bold'>Dashboard</span>
          </Link>
        )}
        <Button
          variant='ghost'
          size='icon'
          className='h-6 w-6'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className='h-4 w-4' />
          ) : (
            <ChevronLeft className='h-4 w-4' />
          )}
        </Button>
      </div>

      {/* Navigation Groups */}
      <nav className='flex-1 space-y-6 p-4'>
        {sidebarGroups.map((group) => (
          <div key={group.title} className='space-y-2'>
            {/* Group Title */}
            {!isCollapsed && (
              <h3 className='px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>
                {group.title}
              </h3>
            )}

            {/* Group Items */}
            <div className='space-y-1'>
              {group.items.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-gray-100',
                      isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      isCollapsed && 'justify-center px-2 py-3'
                    )}
                    title={isCollapsed ? item.title : undefined}
                  >
                    <Icon
                      className={cn(
                        'transition-all',
                        isCollapsed ? 'h-6 w-6' : 'h-4 w-4'
                      )}
                    />
                    {!isCollapsed && item.title}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}
