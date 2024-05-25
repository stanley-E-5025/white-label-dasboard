import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppLayout } from "@/components/app-layout";

export default function DashboardPage() {
  return (
    <AppLayout>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="assestments">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="assestments">Assestments</TabsTrigger>
              <TabsTrigger value="idioms" className="hidden sm:flex">
                Idioms
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="assestments">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle> Assestments </CardTitle>
                <CardDescription>
                  Manage your assestments here to customize your experience
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  SCHOLA playground
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="idioms">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle> Idioms </CardTitle>
                <CardDescription>
                  Manage your idioms here to customize your experience
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  SCHOLA playground
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </AppLayout>
  );
}
