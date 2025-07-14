'use client'

import Link from 'next/link'
import { Clock, Home, Mail, RefreshCw, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function ServerErrorPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-50'>
      <Card className='w-full max-w-md border-red-200 text-center shadow-lg'>
        <CardHeader>
          <div className='mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-200 bg-red-100'>
            <Server className='h-12 w-12 text-red-500' />
          </div>
          <CardTitle className='text-2xl text-red-800'>Server Error</CardTitle>
          <CardDescription className='text-red-700'>
            We&apos;re experiencing technical difficulties on our end. Our team
            has been notified and is working to fix the issue.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600'>
            <div className='mb-2 flex items-center justify-center gap-2'>
              <Server className='h-4 w-4' />
              <span>Error 500 - Internal Server Error</span>
            </div>
            <div className='flex items-center justify-center gap-2 text-xs'>
              <Clock className='h-3 w-3' />
              <span>Please try again in a few minutes</span>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <Button
              onClick={() => window.location.reload()}
              className='bg-red-600 text-white hover:bg-red-700'
            >
              <RefreshCw className='mr-2 h-4 w-4' />
              Refresh Page
            </Button>
            <Button
              variant='outline'
              asChild
              className='border-red-300 text-red-700 hover:bg-red-50'
            >
              <Link href='/dashboard'>
                <Home className='mr-2 h-4 w-4' />
                Go Home
              </Link>
            </Button>
          </div>
          <div className='space-y-2 border-t border-red-200 pt-4'>
            <p className='text-xs font-medium text-red-600'>
              Still having issues?
            </p>
            <div className='flex justify-center gap-2'>
              <Button
                variant='ghost'
                size='sm'
                asChild
                className='text-red-600 hover:bg-red-50 hover:text-red-800'
              >
                <Link href='/dashboard/help'>
                  <Mail className='mr-2 h-4 w-4' />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
