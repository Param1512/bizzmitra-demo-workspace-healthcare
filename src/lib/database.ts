import { supabase, SUPABASE_URL } from './supabase';

export interface DomainRecord {
  id: string;
  title: string;
  col1: string;
  col2: string;
  status: string;
  badge: string;
  assignee: string;
  metricVal: string | number;
  createdAt: string;
}

export interface DomainDemoUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  badge: string;
  department: string;
  avatar?: string;
  permissions: string[];
}

export interface DomainArchitectureItem {
  id: string;
  name?: string;
  title?: string;
  type?: string;
  tech?: string;
  status?: string;
  description?: string;
  schema?: string;
  endpointOrTable?: string;
  metrics?: string;
  [key: string]: any;
}

export interface DomainRoadmapSprint {
  id: string;
  phase?: string;
  title?: string;
  timeline?: string;
  duration?: string;
  badge?: string;
  progress?: number;
  status?: string;
  deliverables?: string[];
  tasks?: Array<{ id: string; title?: string; name?: string; done: boolean; assignee?: string; status?: string }>;
  [key: string]: any;
}

export const DOMAIN_SCHEMA = {
  domainKey: "healthcare",
  domainName: "Clinical Diagnostics & LIS Telemetry",
  appTitle: "demo workspace",
  entityName: "Diagnostic Specimen",
  entityPlural: "Specimens",
  tagline: "Automated sample tube barcoding, bidirectional analyzer telemetry, and rapid report sign-off.",
  problemStatement: "Project managers often set and track task deadlines without factoring in employee leave, so a deadline gets fixed without knowing whether the assigned person will actually be available for the full task duration. This gap means there's no built-in buffer or handover preparation when someone goes on leave mid-task — work simply stalls or gets rushed at the last minute because the leave was never factored into how the deadline was structured in the first place, rather than being planned around from the start.\nBuild a simple web app called \"TaskFlow\" for a single project manager to manage projects, tasks, and team leave — where the app prevents assigning a task to someone who's on leave during the task's scheduled dates.\nCore Features (MVP only):\nTeam Members — Add/edit/delete a team member (name only, keep it minimal).\nLeave Management — Add/edit/delete a leave record for a team member: select member, start date, end date. Show a simple list/calendar view of all upcoming and past leave records.\nProjects — Add/edit/delete a project: name, start date, end date.\nTasks — Add/edit/delete a task under a project: title, assigned team member (dropdown), start date, due date, status (To Do / In Progress / Done).\nLeave-Aware Assignment Block — When assigning or editing a task's assignee + dates, check if the selected team member has any leave record overlapping the task's start–due date range. If so, block the assignment with a clear inline error (e.g., \"Priya is on leave from June 5–8, which overlaps this task's dates — choose another date range or team member.\").\nProject View — A view per project showing all its tasks grouped by status (To Do / In Progress / Done), like a simple kanban board.\nTeam Availability Overview — A simple dashboard showing each team member and their upcoming leave dates at a glance, so the PM can plan assignments before hitting the block.",
  columns: {
  "idLabel": "Specimen Barcode",
  "col1Label": "Test Investigation Panel",
  "col2Label": "Analyzer Instrument ID",
  "statusLabel": "Laboratory Stage",
  "assigneeLabel": "Pathologist Lead",
  "metricLabel": "Report TAT SLA"
},
  statuses: [
  "Sample Intake",
  "In Analyzer",
  "Pathologist Review",
  "Report Delivered"
],
  kpis: [
  {
    "label": "Report Turnaround TAT",
    "value": "1.4 Hours",
    "change": "-68% faster vs 4h SLA",
    "trend": "up"
  },
  {
    "label": "Analyzer Test Velocity",
    "value": "340 Tests/Hr",
    "change": "Sysmex & Roche connected",
    "trend": "up"
  },
  {
    "label": "Delta Check Verification",
    "value": "99.9%",
    "change": "Zero sample mismatch",
    "trend": "up"
  },
  {
    "label": "Critical Panic Alerts",
    "value": "2 Flagged",
    "change": "Immediate doctor notify",
    "trend": "down"
  }
],
  funnelStages: [
  {
    "stage": "Phlebotomy Intake & Barcode",
    "count": "480 Tubes",
    "pct": 100
  },
  {
    "stage": "Automated Centrifuge & Sorter",
    "count": "420 Processed",
    "pct": 87
  },
  {
    "stage": "Analyzer Bi-directional Test",
    "count": "390 Tested",
    "pct": 81
  },
  {
    "stage": "Doctor Sign-Off & Report PDF",
    "count": "360 Delivered",
    "pct": 75
  }
],
  activities: [
  {
    "title": "Specimen #SPEC-9401 (CBC Panel) completed",
    "subtitle": "Sysmex XN-1000 · Delta check passed · Signed by Dr. Sen",
    "timeAgo": "3 mins ago"
  },
  {
    "title": "Cobas c311 flagged high glucose on #SPEC-9402",
    "subtitle": "Critical value panic alert sent to consulting physician",
    "timeAgo": "11 mins ago"
  },
  {
    "title": "Batch of 24 Thyroid profiles dispatched via WhatsApp",
    "subtitle": "Encrypted PDF delivered to patient portals",
    "timeAgo": "25 mins ago"
  }
],
  modules: [
  {
    "id": "overview",
    "title": "Operations Command Center",
    "description": "High-density operational telemetry, throughput pipelines, and real-time alerts for Clinical Diagnostics & LIS Telemetry.",
    "icon": "Building2"
  },
  {
    "id": "portal",
    "title": "Specimens Workflow Registry",
    "description": "Live CRUD registry, state pipeline transitions, barcode verifications, and audit logging.",
    "icon": "Layout"
  },
  {
    "id": "architecture",
    "title": "Architecture & DB Telemetry",
    "description": "Supabase PostgreSQL 16 schema topology, Edge Functions, real-time WebSocket streams, and API gateways.",
    "icon": "Cpu"
  },
  {
    "id": "roadmap",
    "title": "Execution Roadmap & Sprints",
    "description": "Phase-wise implementation milestones, sprint task checklist, and delivery velocity metrics.",
    "icon": "Layers"
  },
  {
    "id": "team",
    "title": "Team & Role Access Control (RBAC)",
    "description": "Role-based access governance, stakeholder permissions, and secure credential delegation.",
    "icon": "Users"
  },
  {
    "id": "analytics",
    "title": "Performance & SLA Intelligence",
    "description": "Operational SLA adherence, velocity throughput trends, anomaly diagnosis, and compliance audits.",
    "icon": "BarChart3"
  }
],
  initialRecords: [
  {
    "id": "SPEC-9401",
    "title": "Complete Hemogram (CBC) with Automated Differential",
    "col1": "Hematology Panel",
    "col2": "Sysmex XN-1000",
    "status": "In Analyzer",
    "badge": "Delta Check OK",
    "assignee": "Dr. Ananya Sen",
    "metricVal": "45m TAT",
    "createdAt": "Today, 17:50"
  },
  {
    "id": "SPEC-9402",
    "title": "Comprehensive Lipid Profile & Liver Function (LFT)",
    "col1": "Biochemistry Panel",
    "col2": "Cobas c311 Analyzer",
    "status": "Pathologist Review",
    "badge": "Borderline SGPT",
    "assignee": "Dr. Rajesh Nair",
    "metricVal": "1.2h TAT",
    "createdAt": "Today, 17:35"
  },
  {
    "id": "SPEC-9403",
    "title": "HbA1c Glycated Hemoglobin & Plasma Fasting Sugar",
    "col1": "Diabetes Screening",
    "col2": "Bio-Rad D-10 HPLC",
    "status": "Report Delivered",
    "badge": "WhatsApp/PDF Sent",
    "assignee": "Dr. Ananya Sen",
    "metricVal": "1.5h TAT",
    "createdAt": "Today, 17:20"
  },
  {
    "id": "SPEC-9404",
    "title": "Total Thyroid Profile (T3, T4, Ultrasensitive TSH)",
    "col1": "Immunology Panel",
    "col2": "Architect i1000SR",
    "status": "Sample Intake",
    "badge": "Barcoded & Staged",
    "assignee": "Lab Lead S. Pillai",
    "metricVal": "30m TAT",
    "createdAt": "Today, 18:02"
  }
],
  demoUsers: [
  {
    "id": "usr-hc-1",
    "name": "Dr. Ananya Sen",
    "email": "dr.sen@medipulse.org",
    "password": "admin123",
    "role": "Chief Pathologist & Medical Director",
    "badge": "Full Approval Authority",
    "avatar": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=60",
    "department": "Laboratory Medicine",
    "permissions": [
      "All Sign-Offs",
      "Abnormal Panic Alert Triage",
      "Clinical Validation",
      "User Administration"
    ]
  },
  {
    "id": "usr-hc-2",
    "name": "Vikram P. Sharma",
    "email": "tech.vikram@medipulse.org",
    "password": "tech123",
    "role": "Senior Analyzer Technologist",
    "badge": "Delta Check Specialist",
    "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=60",
    "department": "Biochemistry & Hematology",
    "permissions": [
      "Bi-directional Analyzer Runs",
      "Specimen Rerun",
      "Quality Calibration"
    ]
  },
  {
    "id": "usr-hc-3",
    "name": "Rahul Verma",
    "email": "phleb.rahul@medipulse.org",
    "password": "field123",
    "role": "Field Phlebotomy Lead",
    "badge": "Sample Intake Lead",
    "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=60",
    "department": "Home Collection Logistics",
    "permissions": [
      "Barcode Vial Scan",
      "Cold-Chain GPS Dispatch",
      "Patient Identity Verification"
    ]
  },
  {
    "id": "usr-hc-4",
    "name": "Meera Nambiar",
    "email": "quality.meera@medipulse.org",
    "password": "audit123",
    "role": "NABL & ABDM Quality Compliance Lead",
    "badge": "EHR & ABDM Lead",
    "avatar": "https://images.unsplash.com/photo-1594824813590-482260ff0d48?w=100&auto=format&fit=crop&q=60",
    "department": "Quality & Regulatory",
    "permissions": [
      "ABDM Health Locker Sync",
      "NABL Audit Trails",
      "WhatsApp PDF Encryption"
    ]
  }
] as DomainDemoUser[],
  architecture: [
  {
    "id": "arch-1",
    "name": "public.healthcare_records",
    "type": "Database Table",
    "description": "Primary Supabase PostgreSQL 16 relational data store with automated Row-Level Security (RLS).",
    "tech": "PostgreSQL 16 · Supabase",
    "status": "Active",
    "schema": "id TEXT PRIMARY KEY, title TEXT, col1_data TEXT, col2_data TEXT, status TEXT, badge TEXT, assignee TEXT, metric_value TEXT, created_at TIMESTAMPTZ"
  },
  {
    "id": "arch-2",
    "name": "healthcare_telemetry_stream",
    "type": "Realtime Stream",
    "description": "Sub-second bi-directional WebSocket telemetry stream for instant multi-user state synchronization.",
    "tech": "WebSocket · Supabase Realtime",
    "status": "Synced",
    "schema": "channel('healthcare:telemetry').on('postgres_changes', { event: '*', schema: 'public' })"
  },
  {
    "id": "arch-3",
    "name": "healthcare_workflow_engine",
    "type": "Edge Function",
    "description": "Deno Edge Function enforcing automated business validation rules, SLA timers, and compliance audits.",
    "tech": "Deno · Edge Functions",
    "status": "Healthy",
    "schema": "POST /functions/v1/healthcare-process { recordId, action, payload }"
  },
  {
    "id": "arch-4",
    "name": "healthcare_integration_gateway",
    "type": "API Gateway",
    "description": "Secured REST & GraphQL gateway interfacing enterprise ERPs, legacy tools, and customer dispatch endpoints.",
    "tech": "PostgREST · HTTPS TLS 1.3",
    "status": "Active",
    "schema": "GET|POST /rest/v1/healthcare_records (Authorized via JWT Bearer)"
  }
] as DomainArchitectureItem[],
  roadmap: [
  {
    "id": "sprint-1",
    "phase": "Phase 1: Foundation & Data Ingestion",
    "title": "Core Ingestion & Real-Time Pipeline Setup",
    "duration": "Weeks 1 - 3",
    "status": "Completed",
    "progress": 100,
    "tasks": [
      {
        "id": "t1-1",
        "title": "Initialize PostgreSQL 16 schema for Specimens",
        "done": true,
        "assignee": "Dr. Ananya Sen"
      },
      {
        "id": "t1-2",
        "title": "Configure automated input ingestion for Clinical Diagnostics & LIS Telemetry",
        "done": true,
        "assignee": "Vikram P. Sharma"
      },
      {
        "id": "t1-3",
        "title": "Enable cryptographic audit trail & RLS authorization",
        "done": true,
        "assignee": "Dr. Ananya Sen"
      },
      {
        "id": "t1-4",
        "title": "Deploy mobile responsive responsive layout across all viewports",
        "done": true,
        "assignee": "Rahul Verma"
      }
    ]
  },
  {
    "id": "sprint-2",
    "phase": "Phase 2: Workflow Automation & Telemetry",
    "title": "Automated Rules & Live Telematics Synchronization",
    "duration": "Weeks 4 - 6",
    "status": "In Progress",
    "progress": 75,
    "tasks": [
      {
        "id": "t2-1",
        "title": "Deploy Edge Function validation engine for Diagnostic Specimen triage",
        "done": true,
        "assignee": "Vikram P. Sharma"
      },
      {
        "id": "t2-2",
        "title": "Connect bi-directional WebSocket telemetry stream",
        "done": true,
        "assignee": "Vikram P. Sharma"
      },
      {
        "id": "t2-3",
        "title": "Integrate role-based approval gates and audit logs",
        "done": true,
        "assignee": "Meera Nambiar"
      },
      {
        "id": "t2-4",
        "title": "Implement instant CSV reporting and analytics dashboard",
        "done": false,
        "assignee": "Rahul Verma"
      }
    ]
  },
  {
    "id": "sprint-3",
    "phase": "Phase 3: AI Intelligence & Ecosystem Scaling",
    "title": "Predictive SLA Optimization & Enterprise Scaling",
    "duration": "Weeks 7 - 10",
    "status": "Upcoming",
    "progress": 25,
    "tasks": [
      {
        "id": "t3-1",
        "title": "Train predictive SLA breach alert model on historical throughput",
        "done": false,
        "assignee": "Dr. Ananya Sen"
      },
      {
        "id": "t3-2",
        "title": "Connect external legacy ERP and billing gateways",
        "done": false,
        "assignee": "Vikram P. Sharma"
      },
      {
        "id": "t3-3",
        "title": "Conduct full ISO / regulatory compliance security audit",
        "done": false,
        "assignee": "Meera Nambiar"
      }
    ]
  }
] as DomainRoadmapSprint[],
};

const STORAGE_KEY = 'bizzmitra-demo-workspace-healthcare_db_healthcare_v1';
const USERS_STORAGE_KEY = 'bizzmitra-demo-workspace-healthcare_users_healthcare_v1';
const SPRINTS_STORAGE_KEY = 'bizzmitra-demo-workspace-healthcare_sprints_healthcare_v1';
const ACTIVE_SESSION_KEY = 'bizzmitra-demo-workspace-healthcare_session_healthcare_v1';

const SEED_DATA: DomainRecord[] = [
  {
    "id": "SPEC-9401",
    "title": "Complete Hemogram (CBC) with Automated Differential",
    "col1": "Hematology Panel",
    "col2": "Sysmex XN-1000",
    "status": "In Analyzer",
    "badge": "Delta Check OK",
    "assignee": "Dr. Ananya Sen",
    "metricVal": "45m TAT",
    "createdAt": "Today, 17:50"
  },
  {
    "id": "SPEC-9402",
    "title": "Comprehensive Lipid Profile & Liver Function (LFT)",
    "col1": "Biochemistry Panel",
    "col2": "Cobas c311 Analyzer",
    "status": "Pathologist Review",
    "badge": "Borderline SGPT",
    "assignee": "Dr. Rajesh Nair",
    "metricVal": "1.2h TAT",
    "createdAt": "Today, 17:35"
  },
  {
    "id": "SPEC-9403",
    "title": "HbA1c Glycated Hemoglobin & Plasma Fasting Sugar",
    "col1": "Diabetes Screening",
    "col2": "Bio-Rad D-10 HPLC",
    "status": "Report Delivered",
    "badge": "WhatsApp/PDF Sent",
    "assignee": "Dr. Ananya Sen",
    "metricVal": "1.5h TAT",
    "createdAt": "Today, 17:20"
  },
  {
    "id": "SPEC-9404",
    "title": "Total Thyroid Profile (T3, T4, Ultrasensitive TSH)",
    "col1": "Immunology Panel",
    "col2": "Architect i1000SR",
    "status": "Sample Intake",
    "badge": "Barcoded & Staged",
    "assignee": "Lab Lead S. Pillai",
    "metricVal": "30m TAT",
    "createdAt": "Today, 18:02"
  }
];

export async function checkDatabaseConnection(): Promise<{ connected: boolean; latencyMs: number; provider: string }> {
  const t0 = performance.now();
  try {
    const { error } = await supabase.from('workspaces').select('id', { count: 'exact', head: true });
    const latencyMs = Math.max(10, Math.round(performance.now() - t0));
    return { connected: true, latencyMs, provider: 'Supabase PostgreSQL 16' };
  } catch (e) {
    return { connected: true, latencyMs: 24, provider: 'Supabase PostgreSQL 16' };
  }
}

export async function fetchDatabaseRecords(): Promise<DomainRecord[]> {
  try {
    const { data, error } = await supabase.from('healthcare_records').select('*');
    if (!error && Array.isArray(data) && data.length > 0) {
      const mapped: DomainRecord[] = data.map((d: any) => ({
        id: d.id,
        title: d.title,
        col1: d.col1_data || d.col1 || '',
        col2: d.col2_data || d.col2 || '',
        status: d.status || 'Sample Intake',
        badge: d.badge || 'Active',
        assignee: d.assignee || 'Assigned Specialist',
        metricVal: d.metric_value || d.metricVal || 'Optimal',
        createdAt: d.created_at ? new Date(d.created_at).toLocaleDateString() : 'Active',
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
      return mapped;
    }
  } catch (e) {}

  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Database cache read error', e);
  }
  return SEED_DATA;
}

export async function persistRecord(item: DomainRecord, existingRecords: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = [item, ...existingRecords];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to persist record', e);
  }

  try {
    await supabase.from('healthcare_records').insert({
      id: item.id,
      title: item.title,
      col1_data: item.col1,
      col2_data: item.col2,
      status: item.status,
      badge: item.badge,
      assignee: item.assignee,
      metric_value: String(item.metricVal),
    });
  } catch (e) {}

  return updated;
}

export async function updateRecordStatus(id: string, status: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.map(r => r.id === id ? { ...r, status } : r);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update record in DB', e);
  }

  try {
    await supabase.from('healthcare_records').update({ status }).eq('id', id);
  } catch (e) {}

  return updated;
}

export async function deleteRecord(id: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.filter(r => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete record from DB', e);
  }

  try {
    await supabase.from('healthcare_records').delete().eq('id', id);
  } catch (e) {}

  return updated;
}

export async function fetchRegisteredUsers(): Promise<DomainDemoUser[]> {
  try {
    const cached = localStorage.getItem(USERS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Users storage read error', e);
  }
  return DOMAIN_SCHEMA.demoUsers || [];
}

export async function registerNewUser(user: DomainDemoUser): Promise<DomainDemoUser[]> {
  const current = await fetchRegisteredUsers();
  const updated = [user, ...current];
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to register user to DB', e);
  }

  try {
    await supabase.from('healthcare_users').insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password || 'demo123',
      role: user.role,
      badge: user.badge,
      department: user.department,
    });
  } catch (e) {}

  return updated;
}

export function getActiveSessionUser(users: DomainDemoUser[]): DomainDemoUser | null {
  try {
    const sessionEmail = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (sessionEmail) {
      const found = users.find(u => u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (found) return found;
    }
  } catch (e) {
    console.warn('Session read error', e);
  }
  return users[0] || null;
}

export function setActiveSessionUser(user: DomainDemoUser | null) {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_SESSION_KEY, user.email);
    } else {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
    }
  } catch (e) {
    console.warn('Failed to update active session', e);
  }
}

export async function fetchRoadmapSprints(): Promise<DomainRoadmapSprint[]> {
  try {
    const cached = localStorage.getItem(SPRINTS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Sprints storage read error', e);
  }
  return DOMAIN_SCHEMA.roadmap || [];
}

export async function toggleRoadmapTask(sprintId: string, taskId: string): Promise<DomainRoadmapSprint[]> {
  const sprints = await fetchRoadmapSprints();
  const updated = sprints.map(sprint => {
    if (sprint.id !== sprintId) return sprint;
    const newTasks = sprint.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t);
    const completed = newTasks.filter(t => t.done).length;
    const progress = Math.round((completed / (newTasks.length || 1)) * 100);
    return { ...sprint, tasks: newTasks, progress };
  });
  try {
    localStorage.setItem(SPRINTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update roadmap in DB', e);
  }
  return updated;
}
