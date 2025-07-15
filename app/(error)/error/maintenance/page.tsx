'use client'

import { AlertCircle, Calendar, Clock, RefreshCw, Wrench } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function MaintenancePage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50'>
      <Card className='w-full max-w-md border-blue-200 text-center shadow-lg'>
        <CardHeader>
          <div className='mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-200 bg-blue-100'>
            <Wrench className='h-12 w-12 text-blue-600' />
          </div>
          <CardTitle className='text-2xl text-blue-800'>
            Under Maintenance
          </CardTitle>
          <CardDescription className='text-blue-700'>
            We&apos;re currently performing scheduled maintenance to improve
            your experience. We&apos;ll be back shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-600'>
            <div className='mb-3 flex items-center justify-center gap-2'>
              <Clock className='h-4 w-4' />
              <span className='font-medium'>
                Estimated downtime: 30 minutes
              </span>
            </div>
            <div className='space-y-1 text-xs'>
              <div className='flex items-center justify-center gap-2'>
                <Calendar className='h-3 w-3' />
                <span>Started at: 2:00 PM UTC</span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <Calendar className='h-3 w-3' />
                <span>Expected completion: 2:30 PM UTC</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <Button
              onClick={() => window.location.reload()}
              className='bg-blue-600 text-white hover:bg-blue-700'
            >
              <RefreshCw className='mr-2 h-4 w-4' />
              Check Status
            </Button>
          </div>
          <div className='border-t border-blue-200 pt-4'>
            <div className='mb-2 flex items-center justify-center gap-2 text-xs text-blue-600'>
              <AlertCircle className='h-3 w-3' />
              <span>For urgent matters, please contact our support team.</span>
            </div>
            <div className='text-xs text-blue-500'>
              <p>We apologize for any inconvenience.</p>
              <p>Thank you for your patience!</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
