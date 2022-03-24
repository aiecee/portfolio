export type License = {
  name: string;
  spdx_id: string;
  url: string;
};

export type BasicRepoDetails = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  topics: Array<string>;
  is_template: boolean;
  language: string;
  license?: License;
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
