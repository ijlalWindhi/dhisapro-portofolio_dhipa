import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserData from "@/mocks/user.json";

function RecentSales() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {UserData.map((user, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <Avatar>
                  {user?.avatar ? (
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                  ) : (
                    <AvatarFallback>{user?.name[0]}</AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              <p className="text-sm font-semibold">${user?.income}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default RecentSales;
