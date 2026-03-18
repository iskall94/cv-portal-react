export function getRepoPath(project) {
  if (project.repo) {
    return project.repo;
  }

  if (!project.github) {
    return null;
  }

  const match = project.github.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!match) {
    return null;
  }

  return `${match[1]}/${match[2].replace(/\.git$/i, "")}`;
}

export async function fetchGithubRepoMap(projects) {
  const repoPaths = [...new Set(projects.map((p) => getRepoPath(p)).filter(Boolean))];

  const repoResults = await Promise.all(
    repoPaths.map(async (path) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${path}`);
        if (!response.ok) {
          return null;
        }

        const { name, html_url, description, updated_at } = await response.json();

        return [
          path,
          {
            name,
            htmlUrl: html_url,
            description,
            updatedAt: updated_at,
          },
        ];
      } catch {
        return null;
      }
    })
  );

  return Object.fromEntries(repoResults.filter(Boolean));
}