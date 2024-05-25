import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Idioms() {
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle> Idioms </CardTitle>
        <CardDescription>
          Manage your idioms here to customize your experience
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">SCHOLA playground</div>
      </CardFooter>
    </Card>
  );
}
