export type Chat = {
    id: string; name: string; preview: string; time: string;
    unread?: number; color: string; online?: boolean; voice?: boolean;
  };
  
  export const stories = [
    // { id: '1', name: 'Sam', color: '#F3D9A6', online: true },
    { id: '2', name: 'Sabelo', color: '#B9A2E8', online: true },
    { id: '3', name: 'Syamthada', color: '#8FD9A0', online: false },
    { id: '4', name: 'Fabian', color: '#F5D76E', online: false },
  ];
  
  export const recentChats: Chat[] = [
    // { id: '1', name: 'Sam', preview: 'Why are you not responding? 😅', time: '11:34', unread: 6, color: '#D9B8F5', online: true },
    { id: '2', name: 'Khethiwe', preview: 'Voice message', time: '11:05', unread: 2, color: '#F5D76E', voice: true },
    { id: '3', name: 'Neliswa', preview: 'Are you done with the shopping list app or not?', time: '10:31', unread: 1, color: '#8FD9A0' },
    { id: '4', name: 'Syanda', preview: 'Bro, this is just a UI, nothing is clickable 😂', time: '10:12', color: '#E58FCB' },
    { id: '5', name: 'Happy', preview: 'Did you push the hotel booking app admin dashboard changes yet?', time: '09:48', unread: 3, color: '#F3B98F' },
    { id: '6', name: 'Nondu', preview: 'Send me the React UI link, I want to see the hover colours', time: '09:20', color: '#9FD3F5' },
    { id: '7', name: 'Ntombi', preview: 'Task 1 is due tomorrow at 09:00, are you ready?', time: '08:55', unread: 1, color: '#F5A9B8' },
    { id: '8', name: 'Khethi', preview: 'Which Expo error was that? Mine says signed in as thulile', time: '08:30', color: '#C7E58F' },
    { id: '9', name: 'Ncane', preview: 'Does your mobile app have login or is it just the UI?', time: '08:12', color: '#D0B8F5' },
    { id: '10', name: 'Scelo', preview: 'Please share the shopping list repo, I got stuck', time: 'Yesterday', color: '#F5D0A0' },
    { id: '11', name: 'Nokphiwa', preview: 'Send the Google Drive build link when you are done 🙏', time: 'Yesterday', color: '#A0E5D0' },
  ];
  
  export const groupChat = {
    name: 'Mobile Apps Class',
    preview: 'Fabian, Sabelo and Syamthada are typing...',
    time: '12:32',
    unread: 14,
  };