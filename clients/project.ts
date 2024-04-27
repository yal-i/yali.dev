import type { ProjectProps } from "~/types";

class ProjectClient {
  async getAll() {
    const { data } = await useFetch<ProjectProps[]>("/api/project");
    return data;
  }
}

export default ProjectClient;
