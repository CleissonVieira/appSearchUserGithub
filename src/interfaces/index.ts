export interface User {
    avatar_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
    following: number;
    email: string;
    }

export interface RepositoriesState {
    list?: Repository[];
    order?: 'asc' | 'desc';
    details?: Repository | null;
}

export interface Repository {
    id: number;
    full_name: string;
    name: string;
    description: string;
    stargazers_count: number;
    language: string;
    html_url: string;
    watchers_count: number;
    forks_count: number;
    open_issues_count: number;
    created_at: string;
    updated_at: string;
    [key: string]: any;
}