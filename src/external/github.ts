export type BasicRepoDetails = {
  id: number;
  full_name: string;
  html_url: string;
  description?: string;
};

export const latestRepos = async (
  user: string,
  limit = 6
): Promise<Array<BasicRepoDetails>> => {
  const results = await fetch(
    `https://api.github.com/users/${user}/repos?sort=created&per_page=${limit}`
  );
  return results.json();
};
