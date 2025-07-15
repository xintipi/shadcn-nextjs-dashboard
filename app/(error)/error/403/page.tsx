'use client'

import Link from 'next/link'
import { AlertTriangle, ArrowLeft, Home, Lock, UserCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function ForbiddenPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-pink-50'>
      <Card className='w-full max-w-md border-red-200 text-center shadow-lg'>
        <CardHeader>
          <div className='mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-200 bg-red-100'>
            <Lock className='h-12 w-12 text-red-500' />
          </div>
          <CardTitle className='text-2xl text-red-800'>
            Access Forbidden
          </CardTitle>
          <CardDescription className='text-red-700'>
            You don&apos;t have permission to access this resource. Please
            contact your administrator if you believe this is an error.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600'>
            <div className='flex items-center justify-center gap-2'>
              <AlertTriangle className='h-4 w-4' />
              <span>Error 403 - Forbidden</span>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <Button asChild className='bg-red-600 text-white hover:bg-red-700'>
              <Link href='/dashboard'>
                <Home className='mr-2 h-4 w-4' />
                Go to Dashboard
              </Link>
            </Button>
            <Button
              variant='outline'
              onClick={() => window.history.back()}
              className='border-red-300 text-red-700 hover:bg-red-50'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Go Back
            </Button>
          </div>
          <div className='border-t border-red-200 pt-4'>
            <Button
              variant='ghost'
              size='sm'
              asChild
              className='text-red-600 hover:bg-red-50 hover:text-red-800'
            >
              <Link href='/dashboard/settings'>
                <UserCheck className='mr-2 h-4 w-4' />
                Check Permissions
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
