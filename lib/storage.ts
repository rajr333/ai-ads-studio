import fs from "fs";
import path from "path";
import { INITIAL_PROJECTS, Project, Inquiry } from "./data";

const DATA_DIR = path.join(process.cwd(), "data");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

function ensureDirectory() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (e) {
    // Ignore in read-only environment
  }
}

export function getProjects(): Project[] {
  try {
    if (fs.existsSync(PROJECTS_FILE)) {
      const raw = fs.readFileSync(PROJECTS_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    // Fallback to in-memory initial projects
  }
  return INITIAL_PROJECTS;
}

export function saveProjects(projects: Project[]): void {
  try {
    ensureDirectory();
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2), "utf-8");
  } catch (e) {
    console.warn("Storage warning: unable to save projects to disk (read-only filesystem)", e);
  }
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  const projects = getProjects();
  return projects.find((p) => p.id === id);
}

export function addProject(project: Project): void {
  const projects = getProjects();
  projects.unshift(project);
  saveProjects(projects);
}

export function updateProject(id: string, updated: Partial<Project>): Project | null {
  const projects = getProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...updated };
  saveProjects(projects);
  return projects[index];
}

export function deleteProject(id: string): boolean {
  const projects = getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) return false;
  saveProjects(filtered);
  return true;
}

export function getInquiries(): Inquiry[] {
  try {
    if (fs.existsSync(INQUIRIES_FILE)) {
      const raw = fs.readFileSync(INQUIRIES_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    // Ignore read errors
  }
  return [];
}

export function saveInquiry(inquiry: Inquiry): void {
  try {
    ensureDirectory();
    const inquiries = getInquiries();
    inquiries.unshift(inquiry);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  } catch (e) {
    console.warn("Storage warning: unable to save inquiry to disk (read-only filesystem)", e);
  }
}
