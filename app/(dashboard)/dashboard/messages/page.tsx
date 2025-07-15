'use client'

import {
  MoreHorizontal,
  Paperclip,
  Phone,
  Search,
  Send,
  Smile,
  Video,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const conversations = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: "Hey, how's the project going?",
    time: '2 min ago',
    unread: 2,
    avatar: '/avatar.png',
    online: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    lastMessage: 'Can we schedule a meeting?',
    time: '1 hour ago',
    unread: 0,
    avatar: '/avatar.png',
    online: false,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    lastMessage: 'The files have been uploaded',
    time: '3 hours ago',
    unread: 1,
    avatar: '/avatar.png',
    online: true,
  },
]

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    message: "Hey, how's the project going?",
    time: '2:30 PM',
    isOwn: false,
  },
  {
    id: 2,
    sender: 'You',
    message: "It's going well! We're on track to finish by Friday.",
    time: '2:32 PM',
    isOwn: true,
  },
  {
    id: 3,
    sender: 'John Doe',
    message: "That's great to hear! Can you send me the latest updates?",
    time: '2:33 PM',
    isOwn: false,
  },
]

export default function MessagesPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Messages</h2>
        <p className='text-muted-foreground'>
          Chat with your team and clients.
        </p>
      </div>

      <div className='grid gap-6 lg:grid-cols-3'>
        {/* Conversations List */}
        <Card className='lg:col-span-1'>
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <div className='relative'>
              <Search className='absolute top-2.5 left-2.5 h-4 w-4 text-gray-500' />
              <Input placeholder='Search conversations...' className='pl-8' />
            </div>
          </CardHeader>
          <CardContent className='space-y-2'>
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className='flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50'
              >
                <div className='relative'>
                  <Avatar className='h-10 w-10'>
                    <AvatarImage
                      src={conversation.avatar}
                      alt={conversation.name}
                    />
                    <AvatarFallback>
                      {conversation.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <div className='absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500' />
                  )}
                </div>
                <div className='min-w-0 flex-1'>
                  <div className='flex items-center justify-between'>
                    <h4 className='truncate text-sm font-medium'>
                      {conversation.name}
                    </h4>
                    <span className='text-muted-foreground text-xs'>
                      {conversation.time}
                    </span>
                  </div>
                  <p className='text-muted-foreground truncate text-sm'>
                    {conversation.lastMessage}
                  </p>
                </div>
                {conversation.unread > 0 && (
                  <Badge className='flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs'>
                    {conversation.unread}
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className='lg:col-span-2'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src='/avatar.png' alt='John Doe' />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className='font-medium'>John Doe</h3>
                  <p className='text-muted-foreground text-sm'>Online</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Button variant='ghost' size='icon'>
                  <Phone className='h-4 w-4' />
                </Button>
                <Button variant='ghost' size='icon'>
                  <Video className='h-4 w-4' />
                </Button>
                <Button variant='ghost' size='icon'>
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className='flex h-[400px] flex-col'>
              {/* Messages */}
              <div className='flex-1 space-y-4 overflow-y-auto p-4'>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${
                        message.isOwn
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className='text-sm'>{message.message}</p>
                      <p
                        className={`mt-1 text-xs ${
                          message.isOwn ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className='border-t p-4'>
                <div className='flex items-center gap-2'>
                  <Button variant='ghost' size='icon'>
                    <Paperclip className='h-4 w-4' />
                  </Button>
                  <Input placeholder='Type a message...' className='flex-1' />
                  <Button variant='ghost' size='icon'>
                    <Smile className='h-4 w-4' />
                  </Button>
                  <Button size='icon'>
                    <Send className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
