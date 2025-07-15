'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, LogIn, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Login successful!', {
      description: 'Welcome back! You have been logged in successfully.',
    })
  }

  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='text-center'>
        <LogIn className='mx-auto h-12 w-12 text-gray-400' />
        <CardTitle className='mt-4 text-2xl'>Welcome back</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Mail className='absolute top-3 left-3 h-4 w-4 text-gray-400' />
                      <Input
                        placeholder='Enter your email'
                        className='pl-10'
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Lock className='absolute top-3 left-3 h-4 w-4 text-gray-400' />
                      <Input
                        type='password'
                        placeholder='Enter your password'
                        className='pl-10'
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='flex flex-col gap-4'>
        <div className='text-center text-sm'>
          <Link
            href='/forgot-password'
            className='text-blue-600 underline hover:text-blue-800'
          >
            Forgot your password?
          </Link>
        </div>
        <div className='text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link
            href='/register'
            className='text-blue-600 underline hover:text-blue-800'
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
