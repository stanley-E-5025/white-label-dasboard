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
import Assestments from "@/components/assestments";
import Idioms from "@/components/idioms";

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
            <Assestments />
          </TabsContent>

          <TabsContent value="idioms">
            <Idioms />
          </TabsContent>
        </Tabs>
      </main>
    </AppLayout>
  );
}
