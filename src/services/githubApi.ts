import { BASE_URL } from "./config";
import { handleResponse } from './apiUtils';
import { Repository, User } from "../interfaces";

export const fetchUser = async (username: string): Promise<User> => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    return handleResponse(response, 'User not found')
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const fetchRepositories = async (username: string): Promise<Repository[]> => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    return handleResponse(response, 'Repositories not found')
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

export const fetchRepository = async (fullname: string): Promise<Repository> => {
  try {
    const response = await fetch(`${BASE_URL}/repos/${fullname}`);
    return handleResponse(response, 'Repository not found')
  } catch (error) {
    console.error(`Error fetching repository ${fullname}:`, error);
    throw error;
  }
};
