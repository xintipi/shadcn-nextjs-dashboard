"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Calendar, Users, Target } from "lucide-react";

const projects = [
	{
		id: 1,
		name: "Website Redesign",
		description: "Complete redesign of the company website with modern UI/UX",
		status: "In Progress",
		progress: 75,
		team: ["John Doe", "Jane Smith", "Bob Johnson"],
		dueDate: "2024-04-15",
		priority: "High",
	},
	{
		id: 2,
		name: "Mobile App Development",
		description: "iOS and Android app for customer engagement",
		status: "Planning",
		progress: 25,
		team: ["Alice Brown", "Charlie Wilson"],
		dueDate: "2024-06-30",
		priority: "Medium",
	},
	{
		id: 3,
		name: "Database Migration",
		description: "Migrate from MySQL to PostgreSQL with zero downtime",
		status: "Completed",
		progress: 100,
		team: ["David Lee", "Emma Davis"],
		dueDate: "2024-03-01",
		priority: "High",
	},
	{
		id: 4,
		name: "Marketing Campaign",
		description: "Q2 marketing campaign for new product launch",
		status: "In Progress",
		progress: 60,
		team: ["Frank Miller", "Grace Taylor"],
		dueDate: "2024-05-20",
		priority: "Low",
	},
];

export default function ProjectsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Projects</h2>
					<p className="text-muted-foreground">
						Manage and track your project progress.
					</p>
				</div>
				<Button className="flex items-center gap-2">
					<Plus className="h-4 w-4" />
					New Project
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<Card key={project.id} className="hover:shadow-lg transition-shadow">
						<CardHeader>
							<div className="flex items-center justify-between">
								<CardTitle className="text-lg">{project.name}</CardTitle>
								<Badge
									variant={
										project.status === "Completed"
											? "default"
											: project.status === "In Progress"
												? "secondary"
												: "outline"
									}
								>
									{project.status}
								</Badge>
							</div>
							<p className="text-sm text-muted-foreground">
								{project.description}
							</p>
						</CardHeader>
						<CardContent className="space-y-4">
							{/* Progress */}
							<div className="space-y-2">
								<div className="flex items-center justify-between text-sm">
									<span>Progress</span>
									<span>{project.progress}%</span>
								</div>
								<Progress value={project.progress} className="h-2" />
							</div>

							{/* Team */}
							<div className="flex items-center gap-2">
								<Users className="h-4 w-4 text-muted-foreground" />
								<div className="flex -space-x-2">
									{project.team.slice(0, 3).map((member, index) => (
										<Avatar
											key={index}
											className="h-6 w-6 border-2 border-white"
										>
											<AvatarFallback className="text-xs">
												{member
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</AvatarFallback>
										</Avatar>
									))}
									{project.team.length > 3 && (
										<div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">
											+{project.team.length - 3}
										</div>
									)}
								</div>
							</div>

							{/* Due Date and Priority */}
							<div className="flex items-center justify-between text-sm">
								<div className="flex items-center gap-1 text-muted-foreground">
									<Calendar className="h-4 w-4" />
									<span>
										Due {new Date(project.dueDate).toLocaleDateString()}
									</span>
								</div>
								<Badge
									variant={
										project.priority === "High"
											? "destructive"
											: project.priority === "Medium"
												? "default"
												: "secondary"
									}
								>
									{project.priority}
								</Badge>
							</div>

							{/* Actions */}
							<div className="flex gap-2">
								<Button variant="outline" size="sm" className="flex-1">
									View Details
								</Button>
								<Button size="sm" className="flex-1">
									Edit
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
