"use client";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppSwitcher } from "./app-switcher";

export function Topbar() {
	return (
		<div className="flex h-14 items-center justify-between border-b px-4">
			{/* Search */}
			<div className="flex items-center max-w-xl">
				<div className="relative flex-1">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
					<Input
						type="search"
						placeholder="Search..."
						className="pl-8 bg-gray-50/50"
					/>
				</div>
			</div>

			{/* Right Section */}
			<div className="flex items-center gap-4">
				{/* App Switcher */}
				<AppSwitcher />

				{/* Notifications */}
				<Button
					variant="ghost"
					size="icon"
					className="relative"
					aria-label="Notifications"
				>
					<Bell className="h-5 w-5" />
					<span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
				</Button>

				{/* Profile */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="relative h-8 w-8 rounded-full">
							<Avatar className="h-8 w-8">
								<AvatarImage src="/avatar.png" alt="User" />
								<AvatarFallback>UN</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">User Name</p>
								<p className="text-xs leading-none text-muted-foreground">
									user@example.com
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-red-600">
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
