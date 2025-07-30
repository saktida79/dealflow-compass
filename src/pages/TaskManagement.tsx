import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Plus,
  Search,
  Filter,
  Calendar,
  User,
  Briefcase,
  MoreHorizontal
} from "lucide-react";

const TaskManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedView, setSelectedView] = useState("all");

  const tasks = [
    {
      id: "task-1",
      title: "Complete financial analysis for TechCorp",
      description: "Review Q3 financial statements and prepare summary",
      priority: "High",
      status: "In Progress",
      assignee: "Alexandra Chen",
      dealId: "DEAL-001",
      dealName: "TechCorp Acquisition",
      dueDate: "2024-01-16",
      progress: 65,
      category: "Financial"
    },
    {
      id: "task-2",
      title: "Legal document review - MediHealth",
      description: "Review and approve merger agreement terms",
      priority: "High",
      status: "Under Review",
      assignee: "Sarah Johnson",
      dealId: "DEAL-002",
      dealName: "MediHealth Merger",
      dueDate: "2024-01-17",
      progress: 30,
      category: "Legal"
    },
    {
      id: "task-3",
      title: "IT integration assessment",
      description: "Evaluate IT infrastructure compatibility",
      priority: "Medium",
      status: "Not Started",
      assignee: "Mike Chen",
      dealId: "DEAL-003",
      dealName: "RetailChain Buyout",
      dueDate: "2024-01-20",
      progress: 0,
      category: "Technology"
    },
    {
      id: "task-4",
      title: "Customer retention analysis",
      description: "Analyze customer churn patterns and retention strategies",
      priority: "Medium",
      status: "Completed",
      assignee: "Lisa Wang",
      dealId: "DEAL-001",
      dealName: "TechCorp Acquisition",
      dueDate: "2024-01-15",
      progress: 100,
      category: "Commercial"
    },
    {
      id: "task-5",
      title: "Regulatory compliance check",
      description: "Ensure all regulatory requirements are met",
      priority: "High",
      status: "Blocked",
      assignee: "David Kim",
      dealId: "DEAL-002",
      dealName: "MediHealth Merger",
      dueDate: "2024-01-18",
      progress: 15,
      category: "Legal"
    }
  ];

  const teamMembers = [
    { name: "Alexandra Chen", initials: "AC", activeTasks: 5, completedTasks: 12 },
    { name: "Sarah Johnson", initials: "SJ", activeTasks: 3, completedTasks: 8 },
    { name: "Mike Chen", initials: "MC", activeTasks: 4, completedTasks: 15 },
    { name: "Lisa Wang", initials: "LW", activeTasks: 2, completedTasks: 10 },
    { name: "David Kim", initials: "DK", activeTasks: 6, completedTasks: 9 }
  ];

  const milestones = [
    {
      id: "milestone-1",
      title: "TechCorp Due Diligence Complete",
      targetDate: "2024-01-20",
      progress: 75,
      tasksTotal: 12,
      tasksCompleted: 9,
      status: "In Progress"
    },
    {
      id: "milestone-2", 
      title: "MediHealth Legal Review",
      targetDate: "2024-01-25",
      progress: 40,
      tasksTotal: 8,
      tasksCompleted: 3,
      status: "In Progress"
    },
    {
      id: "milestone-3",
      title: "RetailChain Valuation Model",
      targetDate: "2024-02-01",
      progress: 10,
      tasksTotal: 15,
      tasksCompleted: 2,
      status: "Planning"
    }
  ];

  const getStatusColor = (status: string): "default" | "secondary" | "outline" | "destructive" => {
    const colors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "Completed": "default",
      "In Progress": "default",
      "Under Review": "secondary",
      "Not Started": "outline",
      "Blocked": "destructive"
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "In Progress":
      case "Under Review":
        return <Clock className="h-4 w-4 text-warning" />;
      case "Blocked":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.dealName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Task Management
          </h1>
          <p className="text-muted-foreground mt-2">
            Track tasks, milestones, and team collaboration across deals
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Task
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+3 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Team performance</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <Progress value={87} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tasks" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle>Task Management</CardTitle>
                  <CardDescription>Track and manage all deal-related tasks</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search tasks..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-[300px]"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Deal</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(task.status)}
                          <div>
                            <div className="font-medium">{task.title}</div>
                            <div className="text-sm text-muted-foreground">{task.description}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{task.dealName}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {task.assignee.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{task.assignee}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getPriorityColor(task.priority)}>{task.priority}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(task.status)}>{task.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{task.dueDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={task.progress} className="h-2 w-16" />
                          <span className="text-xs text-muted-foreground">{task.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-6">
          <div className="grid gap-6">
            {milestones.map((milestone) => (
              <Card key={milestone.id} className="border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      <CardDescription>Target: {milestone.targetDate}</CardDescription>
                    </div>
                    <Badge variant={milestone.status === "In Progress" ? "default" : "outline"}>
                      {milestone.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {milestone.tasksCompleted} of {milestone.tasksTotal} tasks completed
                      </span>
                      <span className="text-sm font-medium">{milestone.progress}%</span>
                    </div>
                    <Progress value={milestone.progress} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Individual task completion and workload</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-background/50">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {member.activeTasks} active tasks
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{member.completedTasks} completed</div>
                      <div className="text-xs text-muted-foreground">this month</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Tasks and milestones by date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-destructive pl-4">
                  <div className="font-medium">Today - January 16</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Complete financial analysis for TechCorp
                  </div>
                </div>
                <div className="border-l-4 border-warning pl-4">
                  <div className="font-medium">Tomorrow - January 17</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Legal document review - MediHealth
                  </div>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <div className="font-medium">January 18</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Regulatory compliance check
                  </div>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <div className="font-medium">January 20</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    IT integration assessment • TechCorp Due Diligence Complete
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TaskManagement;