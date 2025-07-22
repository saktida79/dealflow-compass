import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  Filter,
  Plus,
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  FileText,
  MoreHorizontal
} from "lucide-react";

const Deals = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const deals = [
    {
      id: "DEAL-001",
      company: "TechCorp Solutions",
      target: "CloudServ Inc.",
      type: "Acquisition",
      value: "$340M",
      status: "Due Diligence",
      progress: 65,
      priority: "High",
      startDate: "2024-01-15",
      expectedClose: "2024-03-30",
      advisor: "John Mitchell",
      sector: "Technology"
    },
    {
      id: "DEAL-002", 
      company: "MediHealth Partners",
      target: "RegionalCare LLC",
      type: "Merger",
      value: "$120M",
      status: "Negotiation",
      progress: 40,
      priority: "Medium",
      startDate: "2024-02-01",
      expectedClose: "2024-04-15",
      advisor: "Sarah Chen",
      sector: "Healthcare"
    },
    {
      id: "DEAL-003",
      company: "RetailChain Corp",
      target: "LocalMart Group", 
      type: "Acquisition",
      value: "$890M",
      status: "Integration",
      progress: 85,
      priority: "High",
      startDate: "2023-10-20",
      expectedClose: "2024-01-31",
      advisor: "Mike Johnson",
      sector: "Retail"
    },
    {
      id: "DEAL-004",
      company: "FinServ Holdings",
      target: "CreditPlus Bank",
      type: "Joint Venture",
      value: "$200M", 
      status: "Valuation",
      progress: 25,
      priority: "Low",
      startDate: "2024-02-10",
      expectedClose: "2024-05-20",
      advisor: "Lisa Wong",
      sector: "Financial"
    },
    {
      id: "DEAL-005",
      company: "EnergyFlow Inc",
      target: "GreenPower Solutions",
      type: "Acquisition",
      value: "$450M",
      status: "Due Diligence", 
      progress: 55,
      priority: "High",
      startDate: "2024-01-25",
      expectedClose: "2024-04-10",
      advisor: "David Brown",
      sector: "Energy"
    }
  ];

  const getStatusColor = (status: string): "default" | "secondary" | "outline" | "destructive" => {
    const colors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "Prospecting": "outline",
      "Due Diligence": "default",
      "Negotiation": "secondary",
      "Closing": "default", 
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

  const filteredDeals = deals.filter(deal => 
    deal.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deal.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deal.advisor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Deal Management
          </h1>
          <p className="text-muted-foreground mt-2">
            Track and manage all M&A transactions from prospect to completion
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Deal
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pipeline Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.0B</div>
            <p className="text-xs text-muted-foreground">+12% from last quarter</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">5 closing this quarter</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Deal Size</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$340M</div>
            <p className="text-xs text-muted-foreground">6 months avg duration</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">Above industry avg</p>
          </CardContent>
        </Card>
      </div>

      {/* Deals Table */}
      <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Deals</CardTitle>
              <CardDescription>Comprehensive view of your deal pipeline</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search deals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-64"
                />
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deal</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Advisor</TableHead>
                <TableHead>Expected Close</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDeals.map((deal) => (
                <TableRow key={deal.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{deal.company}</div>
                      <div className="text-sm text-muted-foreground">{deal.target}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{deal.type}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{deal.value}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(deal.status)}>{deal.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={deal.progress} className="h-2 w-16" />
                      <span className="text-sm text-muted-foreground">{deal.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getPriorityColor(deal.priority)}>{deal.priority}</Badge>
                  </TableCell>
                  <TableCell>{deal.advisor}</TableCell>
                  <TableCell>{deal.expectedClose}</TableCell>
                  <TableCell>
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
    </div>
  );
};

export default Deals;