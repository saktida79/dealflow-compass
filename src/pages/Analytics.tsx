import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Target,
  Users,
  Clock,
  Download,
  RefreshCw
} from "lucide-react";

const Analytics = () => {
  const performanceMetrics = [
    {
      title: "Deal Conversion Rate",
      value: "68%",
      target: "70%",
      change: "+5%",
      trend: "up",
      description: "Prospects to closed deals"
    },
    {
      title: "Average Deal Size",
      value: "$127M",
      target: "$120M",
      change: "+12%", 
      trend: "up",
      description: "Across all deal types"
    },
    {
      title: "Time to Close",
      value: "4.2 months",
      target: "4.0 months",
      change: "+0.3m",
      trend: "down",
      description: "Average deal duration"
    },
    {
      title: "Client Retention",
      value: "94%",
      target: "90%",
      change: "+2%",
      trend: "up",
      description: "Annual retention rate"
    }
  ];

  const dealPipeline = [
    { stage: "Prospecting", count: 23, value: 840, percentage: 15 },
    { stage: "Due Diligence", count: 12, value: 1250, percentage: 25 },
    { stage: "Valuation", count: 8, value: 980, percentage: 35 },
    { stage: "Negotiation", count: 5, value: 670, percentage: 55 },
    { stage: "Closing", count: 3, value: 430, percentage: 85 },
  ];

  const teamPerformance = [
    { name: "Alexandra Chen", deals: 8, value: 420, success: 87 },
    { name: "Michael Rodriguez", deals: 6, value: 380, success: 92 },
    { name: "Sarah Johnson", deals: 7, value: 290, success: 79 },
    { name: "David Kim", deals: 5, value: 340, success: 85 },
    { name: "Emily Watson", deals: 4, value: 280, success: 88 }
  ];

  const industryBreakdown = [
    { industry: "Technology", deals: 12, value: 1.2, percentage: 35 },
    { industry: "Healthcare", deals: 8, value: 0.8, percentage: 23 },
    { industry: "Financial Services", deals: 6, value: 0.9, percentage: 18 },
    { industry: "Manufacturing", deals: 5, value: 0.6, percentage: 15 },
    { industry: "Retail", deals: 3, value: 0.3, percentage: 9 }
  ];

  const riskMetrics = [
    { metric: "Deal Quality Score", value: 8.4, max: 10, status: "good" },
    { metric: "Due Diligence Risk", value: 3.2, max: 10, status: "low" },
    { metric: "Market Risk Factor", value: 6.1, max: 10, status: "medium" },
    { metric: "Integration Risk", value: 4.7, max: 10, status: "medium" }
  ];

  const getRiskColor = (status: string) => {
    switch (status) {
      case "good":
      case "low":
        return "text-success";
      case "medium":
        return "text-warning";
      case "high":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Analytics & Reporting
          </h1>
          <p className="text-muted-foreground mt-2">
            Advanced insights and performance analytics for M&A operations
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Data
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric) => (
          <Card key={metric.title} className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 text-xs">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={metric.trend === "up" ? "text-success" : "text-destructive"}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Target: {metric.target}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="pipeline" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="industry">Industry</TabsTrigger>
          <TabsTrigger value="risk">Risk</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Deal Pipeline Analysis</CardTitle>
                <CardDescription>Current deals by stage with conversion probability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dealPipeline.map((stage) => (
                    <div key={stage.stage} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{stage.stage}</span>
                          <span className="text-sm text-muted-foreground ml-2">
                            {stage.count} deals • ${stage.value}M
                          </span>
                        </div>
                        <span className="text-sm font-medium">{stage.percentage}%</span>
                      </div>
                      <Progress value={stage.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Pipeline Velocity</CardTitle>
                <CardDescription>Average time spent in each stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Prospecting</span>
                    <span className="font-medium">2.3 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Due Diligence</span>
                    <span className="font-medium">6.8 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Valuation</span>
                    <span className="font-medium">3.2 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Negotiation</span>
                    <span className="font-medium">4.1 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Closing</span>
                    <span className="font-medium">2.7 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Team Performance Dashboard</CardTitle>
              <CardDescription>Individual performance metrics and deal success rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamPerformance.map((member) => (
                  <div key={member.name} className="p-4 rounded-lg border border-border/50 bg-background/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{member.name}</span>
                      <Badge variant="outline">{member.success}% Success Rate</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Active Deals: </span>
                        <span className="font-medium">{member.deals}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Total Value: </span>
                        <span className="font-medium">${member.value}M</span>
                      </div>
                    </div>
                    <Progress value={member.success} className="mt-3 h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industry" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Industry Breakdown</CardTitle>
                <CardDescription>Deal distribution across industries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {industryBreakdown.map((industry) => (
                    <div key={industry.industry} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{industry.industry}</span>
                        <div className="text-sm text-muted-foreground">
                          {industry.deals} deals • ${industry.value}B
                        </div>
                      </div>
                      <Progress value={industry.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Market Trends</CardTitle>
                <CardDescription>Industry performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Technology Sector Growth</span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="text-success font-medium">+24%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Healthcare M&A Volume</span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="text-success font-medium">+18%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Financial Services Consolidation</span>
                    <div className="flex items-center gap-1">
                      <TrendingDown className="h-4 w-4 text-destructive" />
                      <span className="text-destructive font-medium">-8%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Manufacturing Integration</span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="text-success font-medium">+12%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>Current risk metrics across all active deals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskMetrics.map((risk) => (
                    <div key={risk.metric} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{risk.metric}</span>
                        <span className={`font-medium ${getRiskColor(risk.status)}`}>
                          {risk.value}/{risk.max}
                        </span>
                      </div>
                      <Progress value={(risk.value / risk.max) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Risk Alerts</CardTitle>
                <CardDescription>Items requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border border-warning/20 bg-warning/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-warning" />
                      <span className="font-medium text-warning">Due Diligence Delay</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      TechCorp acquisition behind schedule by 2 weeks
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-destructive/20 bg-destructive/5">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingDown className="h-4 w-4 text-destructive" />
                      <span className="font-medium text-destructive">Valuation Concern</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      RetailChain valuation disputed, negotiation stalled
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-warning/20 bg-warning/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-4 w-4 text-warning" />
                      <span className="font-medium text-warning">Resource Constraint</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Legal team overallocated across 3 concurrent deals
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Revenue Impact</CardTitle>
                <CardDescription>Expected revenue from active deals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$47.3M</div>
                <div className="flex items-center gap-1 text-sm mt-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-success">+15% vs target</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Cost Efficiency</CardTitle>
                <CardDescription>Cost per successful deal closure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$280K</div>
                <div className="flex items-center gap-1 text-sm mt-2">
                  <TrendingDown className="h-4 w-4 text-success" />
                  <span className="text-success">-8% vs last quarter</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>ROI Analysis</CardTitle>
                <CardDescription>Return on investment for completed deals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">340%</div>
                <div className="flex items-center gap-1 text-sm mt-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-success">+12% vs industry avg</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;