export type Chat = {
    id: string; name: string; preview: string; time: string;
    unread?: number; color: string; online?: boolean; voice?: boolean;
  };
  
  export const stories = [
    { id: '1', name: 'Mira', color: '#F3D9A6', online: true },
    { id: '2', name: 'Phill', color: '#B9A2E8', online: true },
    { id: '3', name: 'Mike', color: '#8FD9A0', online: false },
    { id: '4', name: 'Kierra', color: '#F5D76E', online: false },
  ];
  
  export const recentChats: Chat[] = [
    { id: '1', name: 'Phillip Geidt', preview: 'Phillip is typing...', time: '11:34', unread: 6, color: '#D9B8F5', online: true },
    { id: '2', name: 'Kierra from Match', preview: 'Voice message', time: '11:05', unread: 2, color: '#F5D76E', voice: true },
    { id: '3', name: 'Mike Smith', preview: 'Yes, put my name down in that list of the donations.', time: '10:31', color: '#8FD9A0' },
    { id: '4', name: 'Stacey Neighbor', preview: 'Hi! Her mom already used it', time: '08:12', color: '#E58FCB' },
  ];
  
  export const groupChat = {
    name: "Kevin's BP", preview: 'Kate and Ann are typing...', time: '12:32', unread: 6,
  };