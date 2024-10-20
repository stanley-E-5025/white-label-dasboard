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

export default function SettingsPage() {
  return (
    <AppLayout>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="general">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="subscription" className="hidden sm:flex">
                Subscription
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="general">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle> General Settings </CardTitle>
                <CardDescription>
                  Manage your general settings here to customize your experience
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Koloni playground
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="subscription">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle> Subscription Settings </CardTitle>
                <CardDescription>
                  Manage your subscription settings here to customize your
                  experience
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Koloni playground
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </AppLayout>
  );
}
