'use client'

import Link from 'next/link'
import { MailCheck } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function handleResend() {
  toast.info('Verification email resent!', {
    description: 'Please check your inbox for the new verification link.',
  })
}

export default function VerifyEmailPage() {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='text-center'>
        <MailCheck className='mx-auto h-12 w-12 text-gray-400' />
        <CardTitle className='mt-4 text-2xl'>Verify your email</CardTitle>
        <CardDescription>
          We&apos;ve sent an email to your address. Please click the link inside
          to verify your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='text-muted-foreground text-center text-sm'>
          <p>
            Didn&apos;t receive the email? Check your spam folder or click below
            to resend.
          </p>
        </div>
      </CardContent>
      <CardFooter className='flex flex-col gap-4'>
        <Button onClick={handleResend} className='w-full'>
          Resend verification email
        </Button>
        <Button variant='link' asChild>
          <Link href='/login'>Back to login</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
