export type Chat = {
    id: string; name: string; preview: string; time: string;
    unread?: number; color: string; online?: boolean; voice?: boolean;
  };
  
  export const stories = [
    { id: '1', name: 'Sam', color: '#F3D9A6', online: true },
    { id: '2', name: 'Sabelo', color: '#B9A2E8', online: true },
    { id: '3', name: 'Syamthada', color: '#8FD9A0', online: false },
    { id: '4', name: 'Fabian', color: '#F5D76E', online: false },
  ];
  
  export const recentChats: Chat[] = [
    { id: '1', name: 'Sam', preview: 'Sam is typing...', time: '11:34', unread: 6, color: '#D9B8F5', online: true },
    { id: '2', name: 'Sabelo', preview: 'Voice message', time: '11:05', unread: 2, color: '#F5D76E', voice: true },
    { id: '3', name: 'Syamthada', preview: 'Bro, why are you not responding?', time: '10:31', color: '#8FD9A0' },
    { id: '4', name: 'Fabian', preview: 'This is a UI, nothing is clickable here, but the hover colour is working!, ', time: '08:12', color: '#E58FCB' },
  ];
  
  export const groupChat = {
    name: 'Dev Squad', preview: 'Sabelo and Fabian are typing...', time: '12:32', unread: 6,
  };