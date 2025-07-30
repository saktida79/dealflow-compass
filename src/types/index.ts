export interface Deal {
  id: string;
  company: string;
  target?: string;
  value: string;
  status: DealStatus;
  progress: number;
  priority: Priority;
  advisor: string;
  expectedClose: string;
  type: DealType;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  industry: string;
  relationship: RelationshipStatus;
  tier: ClientTier;
  totalValue: string;
  dealCount: number;
  lastContact: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  status: TaskStatus;
  assignee: string;
  dealId?: string;
  dueDate: string;
  createdAt: string;
  completedAt?: string;
}

export interface Document {
  id: string;
  name: string;
  type: DocumentType;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
  dealId?: string;
  clientId?: string;
  url: string;
  status: DocumentStatus;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department: string;
  permissions: Permission[];
}

export interface Integration {
  id: string;
  dealId: string;
  department: Department;
  progress: number;
  status: IntegrationStatus;
  tasksTotal: number;
  tasksCompleted: number;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  targetDate: string;
  completedDate?: string;
  status: MilestoneStatus;
  department: Department;
}

export interface FinancialMetric {
  id: string;
  name: string;
  value: number;
  target?: number;
  variance?: number;
  period: string;
  category: FinancialCategory;
}

// Enums
export type DealStatus = 
  | "Prospecting" 
  | "Due Diligence" 
  | "Valuation" 
  | "Negotiation" 
  | "Closing" 
  | "Integration" 
  | "Completed" 
  | "Cancelled";

export type DealType = 
  | "Acquisition" 
  | "Merger" 
  | "Divestiture" 
  | "Joint Venture" 
  | "Partnership";

export type Priority = "High" | "Medium" | "Low";

export type RelationshipStatus = 
  | "Active" 
  | "Prospect" 
  | "Dormant" 
  | "Lost";

export type ClientTier = "Platinum" | "Gold" | "Silver" | "Bronze";

export type TaskStatus = 
  | "Not Started" 
  | "In Progress" 
  | "Review" 
  | "Completed" 
  | "Blocked";

export type DocumentType = 
  | "Financial Statement" 
  | "Legal Document" 
  | "Contract" 
  | "Due Diligence Report" 
  | "Valuation Model" 
  | "Presentation" 
  | "Other";

export type DocumentStatus = 
  | "Draft" 
  | "Under Review" 
  | "Approved" 
  | "Rejected" 
  | "Final";

export type UserRole = 
  | "Admin" 
  | "Senior Partner" 
  | "Partner" 
  | "Principal" 
  | "Associate" 
  | "Analyst" 
  | "Client";

export type Permission = 
  | "deals.read" 
  | "deals.write" 
  | "deals.delete" 
  | "clients.read" 
  | "clients.write" 
  | "clients.delete" 
  | "documents.read" 
  | "documents.write" 
  | "documents.delete" 
  | "financials.read" 
  | "financials.write" 
  | "analytics.read" 
  | "admin.read" 
  | "admin.write";

export type Department = 
  | "Legal" 
  | "Finance" 
  | "Technology" 
  | "Operations" 
  | "HR" 
  | "Strategy" 
  | "Risk";

export type IntegrationStatus = 
  | "Not Started" 
  | "Planning" 
  | "In Progress" 
  | "Testing" 
  | "Completed" 
  | "Delayed";

export type MilestoneStatus = 
  | "Upcoming" 
  | "In Progress" 
  | "Completed" 
  | "Overdue" 
  | "Cancelled";

export type FinancialCategory = 
  | "Revenue" 
  | "Cost" 
  | "Expense" 
  | "Investment" 
  | "Savings" 
  | "ROI";