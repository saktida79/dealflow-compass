import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Users, 
  Building2, 
  Computer, 
  DollarSign, 
  FileText, 
  Shield,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const Integration = () => {
  const [selectedDeal] = useState("merger-tech-solutions");

  const departmentProgress = [
    { name: "IT Systems", icon: Computer, progress: 75, status: "in-progress", tasks: 12, completed: 9 },
    { name: "Human Resources", icon: Users, progress: 90, status: "nearly-complete", tasks: 8, completed: 7 },
    { name: "Finance", icon: DollarSign, progress: 60, status: "in-progress", tasks: 15, completed: 9 },
    { name: "Legal", icon: Shield, progress: 45, status: "behind", tasks: 10, completed: 4 },
    { name: "Operations", icon: Building2, progress: 85, status: "on-track", tasks: 20, completed: 17 },
    { name: "Compliance", icon: FileText, progress: 30, status: "behind", tasks: 6, completed: 2 },
  ];

  const itIntegrationTasks = [
    { id: 1, system: "ERP Integration", priority: "High", status: "In Progress", deadline: "2024-02-15", owner: "John Smith" },
    { id: 2, system: "CRM Migration", priority: "High", status: "Completed", deadline: "2024-01-30", owner: "Sarah Wilson" },
    { id: 3, system: "Email Systems", priority: "Medium", status: "Planning", deadline: "2024-02-28", owner: "Mike Johnson" },
    { id: 4, system: "Security Protocols", priority: "High", status: "In Progress", deadline: "2024-02-10", owner: "Lisa Chen" },
    { id: 5, system: "Data Warehouse", priority: "Medium", status: "Not Started", deadline: "2024-03-15", owner: "David Brown" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
      case "nearly-complete":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "in-progress":
      case "on-track":
        return <Clock className="h-5 w-5 text-warning" />;
      case "behind":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "Completed": "default",
      "In Progress": "secondary",
      "Planning": "outline",
      "Not Started": "outline"
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const variants: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "High": "destructive",
      "Medium": "default",
      "Low": "secondary"
    };
    return <Badge variant={variants[priority] || "secondary"}>{priority}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              M&A Integration Management
            </h1>
            <p className="text-muted-foreground mt-2">
              Track and manage post-merger integration across all departments
            </p>
          </div>
          <Button variant="default" className="gap-2">
            <Calendar className="h-4 w-4" />
            Schedule Review
          </Button>
        </div>

        {/* Deal Selection */}
        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Active Integration: TechCorp Merger
            </CardTitle>
            <CardDescription>
              Integration timeline: 180 days | Started: Jan 1, 2024 | Target completion: Jun 30, 2024
            </CardDescription>
          </CardHeader>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="it-systems">IT Systems</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Overall Progress */}
            <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader>
                <CardTitle>Integration Progress</CardTitle>
                <CardDescription>Overall completion across all departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">69%</span>
                  </div>
                  <Progress value={69} className="h-3" />
                  <div className="grid grid-cols-4 gap-4 text-center text-sm">
                    <div>
                      <div className="font-semibold text-success">23</div>
                      <div className="text-muted-foreground">Completed</div>
                    </div>
                    <div>
                      <div className="font-semibold text-warning">28</div>
                      <div className="text-muted-foreground">In Progress</div>
                    </div>
                    <div>
                      <div className="font-semibold text-muted-foreground">12</div>
                      <div className="text-muted-foreground">Pending</div>
                    </div>
                    <div>
                      <div className="font-semibold text-destructive">8</div>
                      <div className="text-muted-foreground">At Risk</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentProgress.map((dept) => (
                <Card key={dept.name} className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <dept.icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">{dept.name}</CardTitle>
                      </div>
                      {getStatusIcon(dept.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{dept.progress}%</span>
                      </div>
                      <Progress value={dept.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Tasks</span>
                      <span>{dept.completed}/{dept.tasks}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader>
                <CardTitle>Department Integration Status</CardTitle>
                <CardDescription>Detailed view of integration progress by department</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Department</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Tasks</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Next Milestone</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {departmentProgress.map((dept) => (
                      <TableRow key={dept.name}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <dept.icon className="h-4 w-4" />
                            <span className="font-medium">{dept.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={dept.progress} className="h-2 w-20" />
                            <span className="text-sm">{dept.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{dept.completed}/{dept.tasks}</TableCell>
                        <TableCell>{getStatusIcon(dept.status)}</TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">Feb 15, 2024</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="it-systems" className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader>
                <CardTitle>IT Systems Integration</CardTitle>
                <CardDescription>Track technical integration tasks and system migrations</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>System</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Owner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {itIntegrationTasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.system}</TableCell>
                        <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                        <TableCell>{getStatusBadge(task.status)}</TableCell>
                        <TableCell>{task.deadline}</TableCell>
                        <TableCell>{task.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader>
                <CardTitle>Integration Timeline</CardTitle>
                <CardDescription>Key milestones and deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-success/20 bg-success/5">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-medium">Legal Entity Merger - Completed</div>
                      <div className="text-sm text-muted-foreground">January 15, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-warning/20 bg-warning/5">
                    <Clock className="h-5 w-5 text-warning" />
                    <div>
                      <div className="font-medium">IT Systems Integration - In Progress</div>
                      <div className="text-sm text-muted-foreground">Target: February 28, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-muted/20 bg-muted/5">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Employee Integration - Upcoming</div>
                      <div className="text-sm text-muted-foreground">March 15, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-muted/20 bg-muted/5">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Full Integration Complete - Target</div>
                      <div className="text-sm text-muted-foreground">June 30, 2024</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Integration;