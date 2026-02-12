'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  ArrowUpRight,
  MoreVertical,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Sales',
    value: '1,234',
    change: '-4.2%',
    trend: 'down',
    icon: ShoppingCart,
  },
  {
    title: 'Performance',
    value: '89.2%',
    change: '+2.4%',
    trend: 'up',
    icon: Activity,
  },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'Olivia Martin', status: 'Completed', amount: '$254.00', date: '2 hours ago' },
  { id: 'ORD-002', customer: 'Jackson Lee', status: 'Processing', amount: '$142.50', date: '5 hours ago' },
  { id: 'ORD-003', customer: 'Isabella Martinez', status: 'Pending', amount: '$321.00', date: '1 day ago' },
  { id: 'ORD-004', customer: 'William Kim', status: 'Completed', amount: '$189.00', date: '2 days ago' },
  { id: 'ORD-005', customer: 'Sofia Davis', status: 'Completed', amount: '$412.00', date: '3 days ago' },
];

const topProducts = [
  { name: 'Premium Subscription', sales: 1234, revenue: '$49,360', growth: '+12%' },
  { name: 'Basic Plan', sales: 892, revenue: '$26,760', growth: '+8%' },
  { name: 'Enterprise License', sales: 456, revenue: '$91,200', growth: '+24%' },
  { name: 'Add-on Services', sales: 234, revenue: '$7,020', growth: '+6%' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex items-center justify-between animate-slide-up">
        <div>
          <h1 className="text-3xl font-display font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <Button className="gap-2">
          <ArrowUpRight className="w-4 h-4" />
          View Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card
              key={stat.title}
              className={`animate-slide-up stagger-${index + 1} hover:shadow-lg transition-all duration-300 border-border/50`}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-display font-semibold">{stat.value}</div>
                <p className={`flex items-center gap-1 text-xs mt-2 ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-destructive'
                }`}>
                  <TrendIcon className="w-3 h-3" />
                  <span>{stat.change} from last month</span>
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts & Tables */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="lg:col-span-4 animate-fade-in">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>You have {recentOrders.length} orders this week</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-muted/50 cursor-pointer">
                    <TableCell className="font-mono text-sm">{order.id}</TableCell>
                    <TableCell className="font-medium">{order.customer}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === 'Completed'
                            ? 'default'
                            : order.status === 'Processing'
                            ? 'secondary'
                            : 'outline'
                        }
                        className={
                          order.status === 'Completed'
                            ? 'bg-green-100 text-green-700 hover:bg-green-100'
                            : ''
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{order.amount}</TableCell>
                    <TableCell className="text-right text-muted-foreground text-sm">
                      {order.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="lg:col-span-3 animate-fade-in">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best performing items this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="space-y-1">
                  <p className="font-medium text-sm">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.sales} sales
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">{product.revenue}</p>
                  <p className="text-xs text-green-600">{product.growth}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
          <CardDescription>Detailed performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-6 rounded-lg bg-gradient-subtle border border-border">
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-3xl font-display font-semibold mt-2">3.24%</p>
                  <p className="text-xs text-green-600 mt-2">+0.8% from last week</p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-subtle border border-border">
                  <p className="text-sm text-muted-foreground">Avg. Session Duration</p>
                  <p className="text-3xl font-display font-semibold mt-2">4m 32s</p>
                  <p className="text-xs text-green-600 mt-2">+12s from last week</p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-subtle border border-border">
                  <p className="text-sm text-muted-foreground">Bounce Rate</p>
                  <p className="text-3xl font-display font-semibold mt-2">42.3%</p>
                  <p className="text-xs text-destructive mt-2">+2.1% from last week</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Analytics data visualization would appear here
              </p>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Generated reports and exports would appear here
              </p>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                System notifications and alerts would appear here
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
