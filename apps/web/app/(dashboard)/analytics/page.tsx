'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  Download,
  Calendar,
} from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex items-center justify-between animate-slide-up">
        <div>
          <h1 className="text-3xl font-display font-semibold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Track performance and gain insights from your data
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Last 30 days
          </Button>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Users, label: 'Total Visitors', value: '24,503', change: '+12.3%' },
          { icon: TrendingUp, label: 'Conversion Rate', value: '3.24%', change: '+0.8%' },
          { icon: BarChart3, label: 'Avg. Session', value: '4m 32s', change: '+12s' },
          { icon: Globe, label: 'Page Views', value: '94,231', change: '+18.2%' },
        ].map((metric, i) => (
          <Card key={i} className={`animate-slide-up stagger-${i + 1}`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
              <metric.icon className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-semibold">{metric.value}</div>
              <p className="text-xs text-green-600 mt-2">{metric.change} from last period</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Traffic Overview</CardTitle>
          <CardDescription>Visitor trends and engagement metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="visitors" className="space-y-4">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
              <TabsTrigger value="pageviews">Page Views</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="bounce">Bounce Rate</TabsTrigger>
            </TabsList>
            <TabsContent value="visitors" className="pt-6">
              <div className="h-[300px] flex items-center justify-center bg-gradient-subtle rounded-lg border border-border">
                <p className="text-muted-foreground">Visitors chart visualization</p>
              </div>
            </TabsContent>
            <TabsContent value="pageviews" className="pt-6">
              <div className="h-[300px] flex items-center justify-center bg-gradient-subtle rounded-lg border border-border">
                <p className="text-muted-foreground">Page views chart visualization</p>
              </div>
            </TabsContent>
            <TabsContent value="sessions" className="pt-6">
              <div className="h-[300px] flex items-center justify-center bg-gradient-subtle rounded-lg border border-border">
                <p className="text-muted-foreground">Sessions chart visualization</p>
              </div>
            </TabsContent>
            <TabsContent value="bounce" className="pt-6">
              <div className="h-[300px] flex items-center justify-center bg-gradient-subtle rounded-lg border border-border">
                <p className="text-muted-foreground">Bounce rate chart visualization</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Geographic Data */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Top Countries</CardTitle>
            <CardDescription>Traffic by geographic location</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { country: 'United States', visitors: '8,234', percentage: 34 },
              { country: 'United Kingdom', visitors: '4,891', percentage: 20 },
              { country: 'Germany', visitors: '3,567', percentage: 15 },
              { country: 'Canada', visitors: '2,943', percentage: 12 },
              { country: 'Australia', visitors: '2,134', percentage: 9 },
            ].map((item) => (
              <div key={item.country} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.country}</span>
                  <span className="text-muted-foreground">{item.visitors} visitors</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>How users find your site</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { source: 'Organic Search', visits: '12,543', badge: 'SEO' },
              { source: 'Direct', visits: '6,789', badge: 'Direct' },
              { source: 'Social Media', visits: '3,421', badge: 'Social' },
              { source: 'Referral', visits: '1,987', badge: 'Referral' },
              { source: 'Email', visits: '763', badge: 'Email' },
            ].map((item) => (
              <div
                key={item.source}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono text-xs">
                    {item.badge}
                  </Badge>
                  <span className="font-medium text-sm">{item.source}</span>
                </div>
                <span className="text-sm font-semibold">{item.visits}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
