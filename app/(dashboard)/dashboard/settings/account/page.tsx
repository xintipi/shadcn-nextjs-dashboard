import { Separator } from '@/components/ui/separator'

export default function SettingsAccountPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Account</h3>
        <p className='text-muted-foreground text-sm'>
          Manage your account settings.
        </p>
      </div>
      <Separator />
      <div>
        {/* Account form will go here */}
        <p className='text-muted-foreground text-sm'>
          Account settings content goes here.
        </p>
      </div>
    </div>
  )
}
