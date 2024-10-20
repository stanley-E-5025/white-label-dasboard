"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { notificationApi } from "@/resources";

export default function Notifications() {
  const { GetNotifications, SendNotification } = notificationApi();
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState<any>(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const fetchNotifications = async () => {
    try {
      const notifications: any = await GetNotifications();
      setNotifications(notifications.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendNotification = async () => {
    if (!selectedNotification) return;

    try {
      const channels = ["email", "sms"];
      await SendNotification(selectedNotification.id, channels, formData);
      fetchNotifications();
      setSelectedNotification(null); // Reset after sending
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle> Notifications </CardTitle>
        <CardDescription>
          Manage and send notifications to users
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="w-[100px]">UUID</TableHead>
              <TableHead className="w-[100px]">Send</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications?.map((notification: any) => (
              <TableRow key={notification.id}>
                <TableCell>{notification.name}</TableCell>
                <TableCell>{notification.id}</TableCell>
                <TableCell>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        onClick={() => setSelectedNotification(notification)}
                        className="btn btn-primary"
                      >
                        Send Notification
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Send Notification</SheetTitle>
                      </SheetHeader>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSendNotification();
                        }}
                        className="space-y-4"
                      >
                        <div>
                          <label htmlFor="email">Email:</label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone">Phone:</label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <Button type="submit" className="btn btn-primary">
                          Send
                        </Button>
                      </form>
                    </SheetContent>
                  </Sheet>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
