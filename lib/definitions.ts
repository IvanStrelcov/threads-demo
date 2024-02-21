export type User = {
  id: number;
  email: string;
  name: string;
  username: string;
  onboarded: boolean;
  bio: string | null;
  image: string | null;
  password?: string;
};
