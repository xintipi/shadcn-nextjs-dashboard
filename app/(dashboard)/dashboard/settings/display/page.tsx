import { Separator } from "@/components/ui/separator";

export default function SettingsDisplayPage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Display</h3>
				<p className="text-sm text-muted-foreground">
					Turn items on or off to control what's displayed in the app.
				</p>
			</div>
			<Separator />
			<div>
				{/* Display form will go here */}
				<p className="text-sm text-muted-foreground">
					Display settings content goes here.
				</p>
			</div>
		</div>
	);
}
