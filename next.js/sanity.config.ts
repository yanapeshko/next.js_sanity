import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./app/sanity/schemas/project-schema";

const config = defineConfig({
  projectId: "5q9psij4",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-06-06",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project] },
});

export default config;
