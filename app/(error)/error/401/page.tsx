'use client'

import Link from 'next/link'
import { ArrowLeft, Lock, LogIn, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function UnauthorizedPage() {
  return (
    <div className='from-amber-25 to-orange-25 flex min-h-screen items-center justify-center bg-gradient-to-br'>
      <Card className='w-full max-w-md border-amber-100 text-center shadow-lg'>
        <CardHeader>
          <div className='mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-amber-100 bg-amber-50'>
            <Shield className='h-12 w-12 text-amber-500' />
          </div>
          <CardTitle className='text-2xl text-amber-700'>
            Access Denied
          </CardTitle>
          <CardDescription className='text-amber-600'>
            You need to be authenticated to access this page. Please log in to
            continue.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-amber-25 rounded-lg border border-amber-100 p-3 text-sm text-amber-600'>
            <div className='flex items-center justify-center gap-2'>
              <Lock className='h-4 w-4' />
              <span>Error 401 - Unauthorized</span>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <Button
              asChild
              className='bg-amber-500 text-white hover:bg-amber-600'
            >
              <Link href='/login'>
                <LogIn className='mr-2 h-4 w-4' />
                Log In
              </Link>
            </Button>
            <Button
              variant='outline'
              onClick={() => window.history.back()}
              className='hover:bg-amber-25 border-amber-200 text-amber-600'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Go Back
            </Button>
          </div>
          <div className='border-t border-amber-100 pt-4'>
            <p className='text-xs text-amber-500'>
              Don&apos;t have an account?
              <Link
                href='/register'
                className='ml-1 underline hover:text-amber-700'
              >
                Sign up here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
