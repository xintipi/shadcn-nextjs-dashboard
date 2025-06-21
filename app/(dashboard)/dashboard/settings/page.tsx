"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SettingsSidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: {
		href: string;
		title: string;
	}[];
}

function SettingsSidebarNav({
	className,
	items,
	...props
}: SettingsSidebarNavProps) {
	const pathname = usePathname();

	return (
		<nav
			className={cn(
				"flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
				className,
			)}
			{...props}
		>
			{items.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"w-full",
						"inline-flex items-center justify-start whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
						"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
						pathname === item.href
							? "bg-muted hover:bg-muted"
							: "hover:bg-transparent hover:underline",
					)}
				>
					{item.title}
				</Link>
			))}
		</nav>
	);
}

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsProfilePage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Profile</h3>
				<p className="text-sm text-muted-foreground">
					This is how others will see you on the site.
				</p>
			</div>
			<Separator className="my-6" />
			<div className="space-y-8">
				<div className="space-y-2">
					<Label htmlFor="username">Username</Label>
					<Input id="username" placeholder="Enter your username" />
					<p className="text-sm text-muted-foreground">
						This is your public display name. It can be your real name or a
						pseudonym. You can only change this once every 30 days.
					</p>
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Select a verified email to display" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="user1@example.com">
								user1@example.com
							</SelectItem>
							<SelectItem value="user2@example.com">
								user2@example.com
							</SelectItem>
						</SelectContent>
					</Select>
					<p className="text-sm text-muted-foreground">
						You can manage verified email addresses in your email settings.
					</p>
				</div>
				<div className="space-y-2">
					<Label htmlFor="bio">Bio</Label>
					<Textarea id="bio" placeholder="Type your message here." />
					<p className="text-sm text-muted-foreground">
						You can @mention other users and organizations to link to them.
					</p>
				</div>
				<div className="space-y-2">
					<Label>URLs</Label>
					<div className="space-y-2">
						<Input placeholder="https://shadcn.com" />
						<Input placeholder="http://twitter.com/shadcn" />
					</div>
					<Button variant="outline" size="sm">
						Add URL
					</Button>
				</div>

				<Button>Update Profile</Button>
			</div>
		</div>
	);
}
