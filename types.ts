
// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export type PageKey = 
  | 'home' 
  | 'mission' 
  | 'charter' 
  | 'structure' 
  | 'board' 
  | 'announcement' 
  | 'news' 
  | 'industry' 
  | 'seminar' 
  | 'events' 
  | 'join' 
  | 'login';

export interface PageData {
  title: string;
  content: React.ReactNode;
  breadcrumb?: string;
}

export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  type: 'association' | 'industry';
}
