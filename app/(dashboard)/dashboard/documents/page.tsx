"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Search,
	Plus,
	Upload,
	FileText,
	Image,
	File,
	Folder,
	MoreHorizontal,
	Download,
	Trash2,
	Edit,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const documents = [
	{
		id: 1,
		name: "Project Proposal.pdf",
		type: "PDF",
		size: "2.4 MB",
		lastModified: "2024-03-15",
		icon: FileText,
	},
	{
		id: 2,
		name: "Design Mockups",
		type: "Folder",
		size: "15 items",
		lastModified: "2024-03-14",
		icon: Folder,
	},
	{
		id: 3,
		name: "logo.png",
		type: "Image",
		size: "1.2 MB",
		lastModified: "2024-03-13",
		icon: Image,
	},
	{
		id: 4,
		name: "Data Analysis.xlsx",
		type: "Excel",
		size: "3.1 MB",
		lastModified: "2024-03-12",
		icon: File,
	},
	{
		id: 5,
		name: "Meeting Notes.docx",
		type: "Word",
		size: "856 KB",
		lastModified: "2024-03-11",
		icon: FileText,
	},
];

export default function DocumentsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Documents</h2>
					<p className="text-muted-foreground">
						Manage and organize your files and documents.
					</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline" className="flex items-center gap-2">
						<Upload className="h-4 w-4" />
						Upload
					</Button>
					<Button className="flex items-center gap-2">
						<Plus className="h-4 w-4" />
						New Folder
					</Button>
				</div>
			</div>

			{/* Search */}
			<Card>
				<CardContent className="p-6">
					<div className="relative">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
						<Input placeholder="Search documents..." className="pl-8" />
					</div>
				</CardContent>
			</Card>

			{/* Documents Grid */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{documents.map((doc) => {
					const Icon = doc.icon;
					return (
						<Card
							key={doc.id}
							className="hover:shadow-lg transition-shadow cursor-pointer"
						>
							<CardContent className="p-4">
								<div className="flex items-start justify-between">
									<div className="flex items-center gap-3">
										<div className="p-2 bg-gray-100 rounded-lg">
											<Icon className="h-6 w-6 text-gray-600" />
										</div>
										<div className="flex-1 min-w-0">
											<p className="font-medium text-sm truncate">{doc.name}</p>
											<p className="text-xs text-muted-foreground">
												{doc.size}
											</p>
										</div>
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="icon" className="h-6 w-6">
												<MoreHorizontal className="h-4 w-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem className="flex items-center gap-2">
												<Download className="h-4 w-4" />
												Download
											</DropdownMenuItem>
											<DropdownMenuItem className="flex items-center gap-2">
												<Edit className="h-4 w-4" />
												Rename
											</DropdownMenuItem>
											<DropdownMenuItem className="flex items-center gap-2 text-red-600">
												<Trash2 className="h-4 w-4" />
												Delete
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
								<div className="mt-3 flex items-center justify-between">
									<Badge variant="outline" className="text-xs">
										{doc.type}
									</Badge>
									<span className="text-xs text-muted-foreground">
										{new Date(doc.lastModified).toLocaleDateString()}
									</span>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
