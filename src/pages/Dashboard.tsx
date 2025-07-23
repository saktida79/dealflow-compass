import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  Briefcase, 
  Users, 
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowRight,
  PiggyBank,
  Target,
  CreditCard,
  TrendingDown as Savings
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const metrics = [
    {
      title: "Active Deals",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Briefcase,
      description: "vs last month"
    },
    {
      title: "Total Deal Value",
      value: "$2.4B",
      change: "+8%",
      trend: "up", 
      icon: DollarSign,
      description: "portfolio value"
    },
    {
      title: "Active Clients",
      value: "156",
      change: "+5%",
      trend: "up",
      icon: Users,
      description: "client relationships"
    },
    {
      title: "Documents Processed",
      value: "1,247",
      change: "-3%",
      trend: "down",
      icon: FileText,
      description: "this quarter"
    }
  ];

  const recentDeals = [
    { 
      id: "DEAL-001", 
      company: "TechCorp Acquisition", 
      value: "$340M", 
      status: "Due Diligence", 
      progress: 65,
      priority: "High"
    },
    { 
      id: "DEAL-002", 
      company: "MediHealth Merger", 
      value: "$120M", 
      status: "Negotiation", 
      progress: 40,
      priority: "Medium"
    },
    { 
      id: "DEAL-003", 
      company: "RetailChain Buyout", 
      value: "$890M", 
      status: "Integration", 
      progress: 85,
      priority: "High"
    },
    { 
      id: "DEAL-004", 
      company: "FinServ Partnership", 
      value: "$200M", 
      status: "Valuation", 
      progress: 25,
      priority: "Low"
    }
  ];

  const upcomingTasks = [
    { task: "Complete TechCorp financial analysis", deadline: "Today", priority: "High" },
    { task: "Review MediHealth legal documents", deadline: "Tomorrow", priority: "Medium" },
    { task: "Schedule RetailChain integration meeting", deadline: "Dec 15", priority: "High" },
    { task: "Update FinServ valuation model", deadline: "Dec 18", priority: "Low" }
  ];

  const financialMetrics = [
    {
      title: "Monthly Budget",
      value: "$3.2M",
      spent: "$2.8M",
      remaining: "$400K",
      progress: 87,
      icon: Target,
      trend: "up",
      change: "+15%"
    },
    {
      title: "Cost Savings",
      value: "$840K",
      description: "Achieved this quarter",
      icon: PiggyBank,
      trend: "up",
      change: "+22%"
    },
    {
      title: "Operating Expenses",
      value: "$1.9M",
      description: "This month",
      icon: CreditCard,
      trend: "down",
      change: "-8%"
    },
    {
      title: "ROI",
      value: "24.5%",
      description: "Portfolio average",
      icon: TrendingUp,
      trend: "up",
      change: "+3.2%"
    }
  ];

  const departmentSpending = [
    { department: "Legal", budgeted: 500000, actual: 480000, variance: -20000 },
    { department: "Due Diligence", budgeted: 800000, actual: 850000, variance: 50000 },
    { department: "Integration", budgeted: 600000, actual: 520000, variance: -80000 },
    { department: "Technology", budgeted: 400000, actual: 390000, variance: -10000 },
    { department: "Consulting", budgeted: 700000, actual: 720000, variance: 20000 }
  ];

  const getStatusColor = (status: string): "default" | "secondary" | "outline" | "destructive" => {
    const colors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "Due Diligence": "default",
      "Negotiation": "secondary", 
      "Integration": "default",
      "Valuation": "outline"
    };
    return colors[status] || "outline";
  };

  const getPriorityColor = (priority: string): "default" | "secondary" | "outline" | "destructive" => {
    const colors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "High": "destructive",
      "Medium": "default",
      "Low": "secondary"
    };
    return colors[priority] || "secondary";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            M&A Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Monitor your deals, track progress, and manage client relationships
          </p>
        </div>
        <Link to="/deals">
          <Button className="gap-2">
            <Briefcase className="h-4 w-4" />
            New Deal
          </Button>
        </Link>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-success" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={metric.trend === "up" ? "text-success" : "text-destructive"}>
                  {metric.change}
                </span>
                <span>{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Deals */}
        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Deals</CardTitle>
              <CardDescription>Your most active transactions</CardDescription>
            </div>
            <Link to="/deals">
              <Button variant="ghost" size="sm" className="gap-1">
                View All
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDeals.map((deal) => (
                <div key={deal.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-background/50">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{deal.company}</span>
                      <Badge variant={getPriorityColor(deal.priority)}>{deal.priority}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{deal.value}</span>
                      <span>•</span>
                      <Badge variant={getStatusColor(deal.status)}>{deal.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={deal.progress} className="h-2 w-24" />
                      <span className="text-xs text-muted-foreground">{deal.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Items requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-background/50">
                  <div className="flex-shrink-0">
                    {task.deadline === "Today" ? (
                      <AlertCircle className="h-4 w-4 text-destructive" />
                    ) : (
                      <Clock className="h-4 w-4 text-warning" />
                    )}
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="text-sm font-medium">{task.task}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{task.deadline}</span>
                      <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Analysis */}
      <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <CardHeader>
          <CardTitle>Financial Analysis</CardTitle>
          <CardDescription>Budget tracking, cost analysis, and savings overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {financialMetrics.map((metric) => (
              <div key={metric.title} className="p-4 rounded-lg border border-border/50 bg-background/50">
                <div className="flex items-center justify-between mb-3">
                  <metric.icon className="h-5 w-5 text-primary" />
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
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {metric.description || `${metric.spent} spent`}
                  </div>
                  {metric.progress && (
                    <div className="space-y-1">
                      <Progress value={metric.progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {metric.remaining} remaining
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Department Spending Analysis</h4>
            <div className="rounded-lg border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead className="text-right">Budgeted</TableHead>
                    <TableHead className="text-right">Actual</TableHead>
                    <TableHead className="text-right">Variance</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departmentSpending.map((dept) => (
                    <TableRow key={dept.department}>
                      <TableCell className="font-medium">{dept.department}</TableCell>
                      <TableCell className="text-right">
                        ${(dept.budgeted / 1000).toFixed(0)}K
                      </TableCell>
                      <TableCell className="text-right">
                        ${(dept.actual / 1000).toFixed(0)}K
                      </TableCell>
                      <TableCell className="text-right">
                        <span className={dept.variance < 0 ? "text-success" : "text-destructive"}>
                          {dept.variance < 0 ? "-" : "+"}${Math.abs(dept.variance / 1000).toFixed(0)}K
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant={dept.variance <= 0 ? "default" : "destructive"}>
                          {dept.variance <= 0 ? "Under Budget" : "Over Budget"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deal Pipeline Overview */}
      <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <CardHeader>
          <CardTitle>Deal Pipeline Overview</CardTitle>
          <CardDescription>Track deals through each stage of the process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { stage: "Prospecting", count: 8, value: "$420M" },
              { stage: "Due Diligence", count: 5, value: "$1.2B" },
              { stage: "Negotiation", count: 3, value: "$340M" },
              { stage: "Closing", count: 2, value: "$280M" },
              { stage: "Integration", count: 6, value: "$1.1B" }
            ].map((stage) => (
              <div key={stage.stage} className="text-center p-4 rounded-lg border border-border/50 bg-background/50">
                <div className="text-2xl font-bold text-primary">{stage.count}</div>
                <div className="text-sm font-medium">{stage.stage}</div>
                <div className="text-xs text-muted-foreground mt-1">{stage.value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;