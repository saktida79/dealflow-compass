import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search,
  Filter,
  Plus,
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal
} from "lucide-react";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const clients = [
    {
      id: "CLIENT-001",
      company: "TechCorp Solutions",
      industry: "Technology",
      contact: "John Smith",
      email: "j.smith@techcorp.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      relationship: "Active",
      dealsCount: 3,
      totalValue: "$680M",
      lastContact: "2024-01-12",
      tier: "Tier 1"
    },
    {
      id: "CLIENT-002", 
      company: "MediHealth Partners",
      industry: "Healthcare",
      contact: "Sarah Johnson",
      email: "sarah.j@medihealth.com",
      phone: "+1 (555) 234-5678", 
      location: "Chicago, IL",
      relationship: "Active",
      dealsCount: 2,
      totalValue: "$320M",
      lastContact: "2024-01-10",
      tier: "Tier 1"
    },
    {
      id: "CLIENT-003",
      company: "RetailChain Corp",
      industry: "Retail",
      contact: "Mike Wilson",
      email: "m.wilson@retailchain.com",
      phone: "+1 (555) 345-6789",
      location: "Los Angeles, CA", 
      relationship: "Active",
      dealsCount: 1,
      totalValue: "$890M",
      lastContact: "2024-01-08",
      tier: "Tier 1"
    },
    {
      id: "CLIENT-004",
      company: "FinServ Holdings",
      industry: "Financial Services",
      contact: "Lisa Chen",
      email: "l.chen@finserv.com", 
      phone: "+1 (555) 456-7890",
      location: "Boston, MA",
      relationship: "Prospect",
      dealsCount: 1,
      totalValue: "$200M",
      lastContact: "2024-01-05",
      tier: "Tier 2"
    },
    {
      id: "CLIENT-005",
      company: "EnergyFlow Inc",
      industry: "Energy",
      contact: "David Brown",
      email: "d.brown@energyflow.com",
      phone: "+1 (555) 567-8901",
      location: "Houston, TX",
      relationship: "Active", 
      dealsCount: 2,
      totalValue: "$750M",
      lastContact: "2024-01-15",
      tier: "Tier 1"
    },
    {
      id: "CLIENT-006",
      company: "ManufacturingCorp",
      industry: "Manufacturing",
      contact: "Emma Davis",
      email: "e.davis@mfgcorp.com",
      phone: "+1 (555) 678-9012",
      location: "Detroit, MI",
      relationship: "Inactive",
      dealsCount: 0,
      totalValue: "$0",
      lastContact: "2023-11-20",
      tier: "Tier 3"
    }
  ];

  const getRelationshipColor = (relationship: string): "default" | "secondary" | "outline" | "destructive" => {
    const colors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "Active": "default",
      "Prospect": "secondary", 
      "Inactive": "outline"
    };
    return colors[relationship] || "outline";
  };

  const getTierColor = (tier: string): "default" | "secondary" | "outline" | "destructive" => {
    const colors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      "Tier 1": "destructive",
      "Tier 2": "default",
      "Tier 3": "secondary"
    };
    return colors[tier] || "secondary";
  };

  const filteredClients = clients.filter(client => 
    client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Client Management
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage relationships with your M&A clients and prospects
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Client
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+8 new this month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Relationships</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">79% active rate</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Client Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12.4B</div>
            <p className="text-xs text-muted-foreground">Lifetime deal value</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">12-month retention</p>
          </CardContent>
        </Card>
      </div>

      {/* Clients Table */}
      <Card className="border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Clients</CardTitle>
              <CardDescription>Manage your client relationships and contact information</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search clients..."
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
                <TableHead>Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Relationship</TableHead>
                <TableHead>Deals</TableHead>
                <TableHead>Total Value</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs font-medium">
                          {client.company.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{client.company}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {client.location}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{client.contact}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        <span className="truncate max-w-32">{client.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{client.industry}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRelationshipColor(client.relationship)}>
                      {client.relationship}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">{client.dealsCount}</TableCell>
                  <TableCell className="font-medium">{client.totalValue}</TableCell>
                  <TableCell>
                    <Badge variant={getTierColor(client.tier)}>{client.tier}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {client.lastContact}
                  </TableCell>
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

export default Clients;