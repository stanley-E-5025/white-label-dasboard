import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppLayout } from "@/components/app-layout";
import Notifications from "@/components/notifications";
import Editor from "@/components/editor";

export default function DashboardPage() {
  return (
    <AppLayout>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="notifications">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="editor">Editor</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="notifications">
            <Notifications />
          </TabsContent>

          <TabsContent value="editor">
            <Editor />
          </TabsContent>
        </Tabs>
      </main>
    </AppLayout>
  );
}
