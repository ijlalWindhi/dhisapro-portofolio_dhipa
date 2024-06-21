import type { Metadata } from "next";
import { DollarSign, ShoppingBasket, Users, ScanBarcode } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DatePickerWithRange } from "@/components/ui/datepicker";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Overview from "@/components/pages/dashboard/Overview";
import RecentSales from "@/components/pages/dashboard/RecentSales";
import { METADATA } from "@/constants/metadata";
import { MenuItem } from "@/constants/dashboard";

export const metadata: Metadata = {
  title: `Dashboard ${METADATA.exTitle}`,
  description: `Page dashboard ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}`,
  },
};

export default function Home() {
  // initial variables
  const MenuOverview: MenuOverview[] = [
    {
      title: "Total Revenue",
      icon: DollarSign,
      value: "$ 1,000",
      description: "+20.1% from last month",
    },
    {
      title: "Total Orders",
      icon: ScanBarcode,
      value: "200",
      description: "+10.1% from last month",
    },
    {
      title: "Total Customers",
      icon: Users,
      value: "100",
      description: "+5.1% from last month",
    },
    {
      title: "Total Products",
      icon: ShoppingBasket,
      value: "50",
      description: "+2.1% from last month",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full md:max-w-72"
        />
        <div className="flex flex-wrap xs:flex-nowrap gap-2">
          <DatePickerWithRange className="w-full" />
          <Button variant="default" className="w-full xs:w-fit">
            Download
          </Button>
        </div>
      </div>
      <Tabs defaultValue={MenuItem[0]} className="w-full">
        <TabsList className="max-w-full overflow-auto w-full xs:w-fit">
          {MenuItem.map((item) => (
            <TabsTrigger key={item} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Overview">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-between gap-2 md:gap-6">
              {MenuOverview.map((menu) => (
                <Card key={menu.title} className="w-full">
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle className="text-sm">{menu.title}</CardTitle>
                      <menu.icon className="h-4 w-4 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl">{menu.value}</p>
                  </CardContent>
                  <CardFooter className="text-xs text-gray-400">
                    <p>{menu.description}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
              <Overview />
              <RecentSales />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
