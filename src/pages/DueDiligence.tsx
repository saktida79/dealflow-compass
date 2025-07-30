import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  FileText, 
  Upload, 
  Download, 
  Eye, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Search,
  Filter,
  Plus
} from "lucide-react";

const DueDiligence = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: "doc-1",
      name: "Financial Statements 2023",
      type: "Financial Statement",
      status: "Under Review",
      uploadedBy: "John Smith",
      uploadedAt: "2024-01-15",
      size: "2.4 MB",
      dealId: "DEAL-001"
    },
    {
      id: "doc-2", 
      name: "Legal Due Diligence Report",
      type: "Due Diligence Report",
      status: "Approved",
      uploadedBy: "Sarah Johnson",
      uploadedAt: "2024-01-14",
      size: "8.7 MB",
      dealId: "DEAL-001"
    },
    {
      id: "doc-3",
      name: "IT Infrastructure Assessment",
      type: "Due Diligence Report", 
      status: "Draft",
      uploadedBy: "Mike Chen",
      uploadedAt: "2024-01-13",
      size: "5.2 MB",
      dealId: "DEAL-002"
    },
    {
      id: "doc-4",
      name: "HR Compliance Checklist",
      type: "Legal Document",
      status: "Final",
      uploadedBy: "Lisa Wang",
      uploadedAt: "2024-01-12",
      size: "1.8 MB",
      dealId: "DEAL-001"
    }
  ];

  const checklists = [
    {
      category: "Financial Due Diligence",
      items: [
        { item: "Audited Financial Statements (3 years)", completed: true },
        { item: "Management Financial Reports", completed: true },
        { item: "Cash Flow Analysis", completed: false },
        { item: "Debt Schedule Review", completed: false },
        { item: "Working Capital Analysis", completed: true }
      ]
    },
    {
      category: "Legal Due Diligence", 
      items: [
        { item: "Corporate Structure Review", completed: true },
        { item: "Material Contracts Analysis", completed: true },
        { item: "Litigation History", completed: true },
        { item: "Intellectual Property Audit", completed: false },
        { item: "Regulatory Compliance Check", completed: false }
      ]
    },
    {
      category: "Commercial Due Diligence",
      items: [
        { item: "Market Analysis", completed: true },
        { item: "Customer Concentration Study", completed: false },
        { item: "Competitive Landscape", completed: true },
        { item: "Revenue Quality Assessment", completed: false },
        { item: "Growth Strategy Evaluation", completed: false }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "Draft": "outline",
      "Under Review": "default", 
      "Approved": "default",
      "Rejected": "destructive",
      "Final": "default"
    };
    return colors[status] || "outline";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
      case "Final":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "Under Review":
        return <Clock className="h-4 w-4 text-warning" />;
      case "Rejected":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Due Diligence
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage document workflows and track due diligence progress
          </p>
        </div>
        <Button className="gap-2">
          <Upload className="h-4 w-4" />
          Upload Document
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">186</div>
            <p className="text-xs text-muted-foreground">Ready for next stage</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="checklists">Checklists</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle>Document Repository</CardTitle>
                  <CardDescription>Manage and review due diligence documents</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search documents..."
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
                    <TableHead>Document</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Uploaded By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(doc.status)}
                          <span className="font-medium">{doc.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(doc.status)}>{doc.status}</Badge>
                      </TableCell>
                      <TableCell>{doc.uploadedBy}</TableCell>
                      <TableCell>{doc.uploadedAt}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="checklists" className="space-y-6">
          <div className="grid gap-6">
            {checklists.map((checklist) => {
              const completedItems = checklist.items.filter(item => item.completed).length;
              const totalItems = checklist.items.length;
              const progressPercentage = (completedItems / totalItems) * 100;

              return (
                <Card key={checklist.category} className="border-border/50 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{checklist.category}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {completedItems}/{totalItems} completed
                      </div>
                    </div>
                    <Progress value={progressPercentage} className="mt-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {checklist.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-background/50">
                          <div className="flex-shrink-0">
                            {item.completed ? (
                              <CheckCircle className="h-4 w-4 text-success" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                            )}
                          </div>
                          <span className={`flex-grow ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {item.item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Document Processing Time</CardTitle>
                <CardDescription>Average time for document review and approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Financial Documents</span>
                    <span className="font-medium">3.2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Legal Documents</span>
                    <span className="font-medium">5.1 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Commercial Reports</span>
                    <span className="font-medium">4.7 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Technical Assessments</span>
                    <span className="font-medium">6.3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Team Performance</CardTitle>
                <CardDescription>Documents reviewed by team member this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Sarah Johnson</span>
                    <span className="font-medium">42 docs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mike Chen</span>
                    <span className="font-medium">38 docs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Lisa Wang</span>
                    <span className="font-medium">35 docs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>John Smith</span>
                    <span className="font-medium">31 docs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DueDiligence;