import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Editor() {
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle> Template Editor </CardTitle>
        <CardDescription>
          Create and edit templates for notifications
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">Koloni playground</div>
      </CardFooter>
    </Card>
  );
}
