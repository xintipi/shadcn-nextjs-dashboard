'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ShieldCheck } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

const formSchema = z.object({
  code: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
})

export default function TwoFactorAuthPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Two-Factor Authentication enabled!', {
      description: 'Your account is now protected with 2FA.',
    })
  }

  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='text-center'>
        <ShieldCheck className='mx-auto h-12 w-12 text-gray-400' />
        <CardTitle className='mt-4 text-2xl'>
          Two-Factor Authentication
        </CardTitle>
        <CardDescription>
          Enhance your security by enabling 2FA.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col items-center space-y-4'>
          <p className='text-muted-foreground text-sm'>
            1. Scan the QR code with your authenticator app.
          </p>
          <div className='rounded-lg border-2 border-dashed p-4'>
            {/* QR Code Placeholder */}
            <div className='flex h-32 w-32 animate-pulse items-center justify-center bg-gray-200'>
              <p className='text-muted-foreground text-xs'>QR Code</p>
            </div>
          </div>
          <p className='text-muted-foreground text-sm'>
            2. Enter the 6-digit code from your app.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mt-6 space-y-6'
          >
            <FormField
              control={form.control}
              name='code'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-Time Password</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field} className='mx-auto'>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription className='text-center'>
                    Please enter the one-time password from your authenticator
                    app.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Verify & Enable
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
