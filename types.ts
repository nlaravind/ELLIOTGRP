import { LucideIcon } from 'lucide-react';

export interface Vertical {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}