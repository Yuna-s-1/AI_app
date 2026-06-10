export type PageType = 'home' | 'social' | 'spatial' | 'records' | 'profile';

export interface UserStatus {
  emotion: string;
  fatigueLevel: 'low' | 'medium' | 'high';
  fatigueScore: number;
}
