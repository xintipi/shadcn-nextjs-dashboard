'use client'

import {
  Activity,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const metrics = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+180.1%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Sales',
    value: '12,234',
    change: '+19%',
    trend: 'up',
    icon: Activity,
  },
  {
    title: 'Conversion Rate',
    value: '2.4%',
    change: '-4.3%',
    trend: 'down',
    icon: TrendingDown,
  },
]

export default function AnalyticsPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Analytics</h2>
        <p className='text-muted-foreground'>
          View detailed analytics and insights about your business performance.
        </p>
      </div>

      {/* Metrics Cards */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {metrics.map((metric) => {
          const Icon = metric.icon
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown

          return (
            <Card key={metric.title}>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  {metric.title}
                </CardTitle>
                <Icon className='text-muted-foreground h-4 w-4' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>{metric.value}</div>
                <div className='text-muted-foreground flex items-center text-xs'>
                  <TrendIcon
                    className={cn(
                      'mr-1 h-3 w-3',
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    )}
                  />
                  {metric.change} from last month
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts Tabs */}
      <Tabs defaultValue='overview' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='revenue'>Revenue</TabsTrigger>
          <TabsTrigger value='users'>Users</TabsTrigger>
        </TabsList>
        <TabsContent value='overview' className='space-y-4'>
          <Card>
            <CardHeader>
              <CardTitle>Overview Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-gray-200'>
                <p className='text-muted-foreground'>
                  Chart placeholder - Overview data visualization
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='revenue' className='space-y-4'>
          <Card>
            <CardHeader>
              <CardTitle>Revenue Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-gray-200'>
                <p className='text-muted-foreground'>
                  Chart placeholder - Revenue data visualization
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='users' className='space-y-4'>
          <Card>
            <CardHeader>
              <CardTitle>Users Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-gray-200'>
                <p className='text-muted-foreground'>
                  Chart placeholder - Users data visualization
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
