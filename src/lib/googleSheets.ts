import { Project } from "@/types/project";

/**
 * Google Sheets Configuration
 * 
 * To set up:
 * 1. Create a Google Sheet with columns: title, description, techStack, github, demo, image
 * 2. Go to File → Share → Publish to web
 * 3. Select the sheet and choose "CSV" format
 * 4. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
 * 5. Replace GOOGLE_SHEET_ID below with your Sheet ID
 * 
 * Example URL: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
 */
const GOOGLE_SHEET_ID = "1dRvBKLoR9kpgiJtGt5NyJQc0NDByhWHdMdhFy8ZBQ0Y";
// Using export format which works better with publicly shared sheets
// gid=0 refers to the first sheet tab. If you have a different tab, update the gid value
const CSV_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/export?format=csv&gid=0`;

/**
 * Parses CSV text into an array of objects
 */
function parseCSV(csvText: string): Project[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  // Parse header row (case-insensitive)
  const headers = lines[0].split(",").map((h) => h.trim());
  const headersLower = headers.map((h) => h.toLowerCase());
  
  // Find column indices (case-insensitive)
  const titleIdx = headersLower.indexOf("title");
  const descriptionIdx = headersLower.indexOf("description");
  const techStackIdx = headersLower.findIndex((h) => 
    h === "techstack" || h === "tech stack" || h === "tech"
  );
  const githubIdx = headersLower.indexOf("github");
  const demoIdx = headersLower.indexOf("demo");
  const imageIdx = headersLower.indexOf("image");

  // Validate required columns exist
  if (
    titleIdx === -1 ||
    descriptionIdx === -1 ||
    techStackIdx === -1 ||
    githubIdx === -1 ||
    demoIdx === -1 ||
    imageIdx === -1
  ) {
    throw new Error(
      "Missing required columns. Expected: title, description, techStack, github, demo, image"
    );
  }

  // Parse data rows
  const projects: Project[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    // CSV parsing (handles quoted values with commas)
    const values: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      const nextChar = j < line.length - 1 ? line[j + 1] : "";
      
      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          // Escaped quote
          current += '"';
          j++; // Skip next quote
        } else {
          // Toggle quote state
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        // Remove surrounding quotes if present
        let value = current.trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        values.push(value);
        current = "";
      } else {
        current += char;
      }
    }
    // Handle last value
    let lastValue = current.trim();
    if (lastValue.startsWith('"') && lastValue.endsWith('"')) {
      lastValue = lastValue.slice(1, -1);
    }
    values.push(lastValue);

    // Extract values
    const title = values[titleIdx] || "";
    const description = values[descriptionIdx] || "";
    const techStack = values[techStackIdx] || "";
    const github = values[githubIdx] || "";
    const demo = values[demoIdx] || "";
    const image = values[imageIdx] || "";

    // Skip empty rows
    if (!title) continue;

    projects.push({
      title,
      description,
      techStack,
      github,
      demo,
      image,
    });
  }

  return projects;
}

/**
 * Fetches projects from Google Sheets
 */
export async function fetchProjectsFromGoogleSheets(): Promise<Project[]> {
  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch Google Sheet: ${response.statusText}`);
    }

    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error("Error fetching projects from Google Sheets:", error);
    return [];
  }
}

