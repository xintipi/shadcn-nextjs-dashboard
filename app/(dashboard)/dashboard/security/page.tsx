'use client'

import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Lock,
  MapPin,
  Shield,
  Smartphone,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const securityEvents = [
  {
    id: 1,
    type: 'Login',
    description: 'Successful login from New York, NY',
    time: '2 minutes ago',
    status: 'success',
    icon: CheckCircle,
  },
  {
    id: 2,
    type: 'Failed Login',
    description: 'Failed login attempt from unknown location',
    time: '1 hour ago',
    status: 'warning',
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: 'Password Change',
    description: 'Password changed successfully',
    time: '3 hours ago',
    status: 'success',
    icon: Lock,
  },
  {
    id: 4,
    type: 'New Device',
    description: 'New device logged in from San Francisco, CA',
    time: '1 day ago',
    status: 'info',
    icon: Smartphone,
  },
]

const activeSessions = [
  {
    id: 1,
    device: 'MacBook Pro',
    location: 'New York, NY',
    ip: '192.168.1.100',
    lastActive: '2 minutes ago',
    current: true,
  },
  {
    id: 2,
    device: 'iPhone 15',
    location: 'San Francisco, CA',
    ip: '10.0.0.50',
    lastActive: '1 hour ago',
    current: false,
  },
  {
    id: 3,
    device: 'Windows PC',
    location: 'London, UK',
    ip: '172.16.0.25',
    lastActive: '3 days ago',
    current: false,
  },
]

export default function SecurityPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Security</h2>
        <p className='text-muted-foreground'>
          Manage your account security and monitor activity.
        </p>
      </div>

      {/* Security Overview */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Security Score
            </CardTitle>
            <Shield className='text-muted-foreground h-4 w-4' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>95/100</div>
            <p className='text-muted-foreground text-xs'>
              Excellent security posture
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Active Sessions
            </CardTitle>
            <Eye className='text-muted-foreground h-4 w-4' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>3</div>
            <p className='text-muted-foreground text-xs'>
              Across different devices
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Last Login</CardTitle>
            <Clock className='text-muted-foreground h-4 w-4' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>2 min ago</div>
            <p className='text-muted-foreground text-xs'>From New York, NY</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Threats Blocked
            </CardTitle>
            <AlertTriangle className='text-muted-foreground h-4 w-4' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12</div>
            <p className='text-muted-foreground text-xs'>This month</p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-6 lg:grid-cols-2'>
        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Shield className='h-5 w-5' />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label>Two-Factor Authentication</Label>
                <p className='text-muted-foreground text-sm'>
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label>Login Notifications</Label>
                <p className='text-muted-foreground text-sm'>
                  Get notified of new login attempts
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label>Session Timeout</Label>
                <p className='text-muted-foreground text-sm'>
                  Automatically log out after inactivity
                </p>
              </div>
              <Switch />
            </div>
            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label>Location Tracking</Label>
                <p className='text-muted-foreground text-sm'>
                  Track login locations for security
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label>Password History</Label>
                <p className='text-muted-foreground text-sm'>
                  Prevent reuse of recent passwords
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security Events */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Security Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {securityEvents.map((event) => {
                const Icon = event.icon
                return (
                  <div
                    key={event.id}
                    className='flex items-center gap-3 rounded-lg border p-3'
                  >
                    <Icon
                      className={cn(
                        'h-5 w-5',
                        event.status === 'success'
                          ? 'text-green-600'
                          : event.status === 'warning'
                            ? 'text-yellow-600'
                            : 'text-blue-600'
                      )}
                    />
                    <div className='flex-1'>
                      <div className='flex items-center gap-2'>
                        <h4 className='text-sm font-medium'>{event.type}</h4>
                        <Badge
                          variant={
                            event.status === 'success'
                              ? 'default'
                              : event.status === 'warning'
                                ? 'secondary'
                                : 'outline'
                          }
                          className='text-xs'
                        >
                          {event.status}
                        </Badge>
                      </div>
                      <p className='text-muted-foreground text-sm'>
                        {event.description}
                      </p>
                      <p className='text-muted-foreground text-xs'>
                        {event.time}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {activeSessions.map((session) => (
              <div
                key={session.id}
                className='flex items-center justify-between rounded-lg border p-4'
              >
                <div className='flex items-center gap-4'>
                  <div className='rounded-lg bg-gray-100 p-2'>
                    <Smartphone className='h-5 w-5 text-gray-600' />
                  </div>
                  <div>
                    <h4 className='font-medium'>{session.device}</h4>
                    <div className='text-muted-foreground flex items-center gap-4 text-sm'>
                      <span className='flex items-center gap-1'>
                        <MapPin className='h-3 w-3' />
                        {session.location}
                      </span>
                      <span>IP: {session.ip}</span>
                      <span>Last active: {session.lastActive}</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  {session.current && (
                    <Badge variant='default' className='text-xs'>
                      Current
                    </Badge>
                  )}
                  <Button variant='outline' size='sm'>
                    Revoke
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
