"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	LogIn,
	UserPlus,
	Lock,
	Mail,
	Shield,
	Key,
	ArrowRight,
} from "lucide-react";
import Link from "next/link";

const authPages = [
	{
		title: "Login",
		description: "A classic login form with email and password fields.",
		icon: LogIn,
		href: "/login",
		status: "Ready",
	},
	{
		title: "Register",
		description: "A registration form to sign up new users.",
		icon: UserPlus,
		href: "/register",
		status: "Ready",
	},
	{
		title: "Forgot Password",
		description: "A form for users to reset their password via email.",
		icon: Lock,
		href: "/forgot-password",
		status: "Ready",
	},
	{
		title: "Email Verification",
		description: "A page to inform users to check their email for a verification link.",
		icon: Mail,
		href: "/verify-email",
		status: "Ready",
	},
	{
		title: "Two-Factor Auth",
		description: "A page for users to set up two-factor authentication.",
		icon: Shield,
		href: "/setup-2fa",
		status: "Ready",
	},
	{
		title: "API Keys",
		description: "A page to manage API keys for applications and services.",
		icon: Key,
		href: "/dashboard/settings/api-keys",
		status: "Ready",
	},
];

export default function AuthHubPage() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Auth Pages</h2>
				<p className="text-muted-foreground">
					Links to the fullscreen authentication pages for your application.
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Available Auth Pages</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{authPages.map((page) => {
							const Icon = page.icon;
							return (
								<Link key={page.title} href={page.href} className="block">
									<Card className="hover:bg-muted/50 transition-colors h-full">
										<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
											<CardTitle className="text-sm font-medium">
												{page.title}
											</CardTitle>
											<Icon className="h-4 w-4 text-muted-foreground" />
										</CardHeader>
										<CardContent>
											<p className="text-sm text-muted-foreground">
												{page.description}
											</p>
											<div className="flex items-center justify-between mt-4">
												<Badge
													variant={
														page.status === "Ready" ? "default" : "secondary"
													}
													className="text-xs"
												>
													{page.status}
												</Badge>
												<ArrowRight className="h-4 w-4 text-muted-foreground" />
											</div>
										</CardContent>
									</Card>
								</Link>
							);
						})}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
