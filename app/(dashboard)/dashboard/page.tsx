"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const stats = [
	{
		title: "Total Revenue",
		value: "$45,231.89",
		icon: DollarSign,
		description: "+20.1% from last month",
	},
	{
		title: "Subscriptions",
		value: "+2350",
		icon: Users,
		description: "+180.1% from last month",
	},
	{
		title: "Sales",
		value: "+12,234",
		icon: CreditCard,
		description: "+19% from last month",
	},
	{
		title: "Active Now",
		value: "+573",
		icon: Activity,
		description: "+201 since last hour",
	},
];

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat) => {
					const Icon = stat.icon;

					return (
						<Card key={stat.title}>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									{stat.title}
								</CardTitle>
								<Icon className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">{stat.value}</div>
								<p className="text-xs text-muted-foreground">
									{stat.description}
								</p>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
