export interface Message {
  from: 'user' | 'app';
  text: string;
  date: Date;
}