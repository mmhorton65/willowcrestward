export type Organization = {
  id: string
  name: string
  category: string
  description: string
  icon: string
  accentColor: string
  googleDocUrl: string
  meetingTime: string
  location: string
}

export const organizations: Organization[] = [
  {
    id: 'sacrament-meeting', name: 'Sacrament Meeting Programs', category: 'Worship',
    description: 'Gather together each Sunday to worship, learn, and renew our faith.', icon: '✦', accentColor: '#c77b55',
    googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vTvSCmA9DsKCbL7h8ODe4XuEaWsKOnVHq6ckhxl5wabaUKcsXGqM4mgLB5CfZqE6tsUFARlmBVByJk9/pub?embedded=true', meetingTime: 'Sundays', 
    location: 'Chapel',
  },
  {
    id: 'elders-quorum', name: 'Elders Quorum', category: 'Adults',
    description: 'Build faith and friendship through service, learning, and fellowship.', icon: '↗', accentColor: '#668b83',
    googleDocUrl: 'https://docs.google.com/document/d/1example-elders-quorum/preview', meetingTime: 'Sundays', 
    location: 'Stage',
  },
  {
    id: 'relief-society', name: 'Relief Society', category: 'Adults',
    description: 'Connect, serve, and strengthen one another in a caring community.', icon: '○', accentColor: '#9b7591',
    googleDocUrl: 'https://docs.google.com/document/d/1example-relief-society/preview', meetingTime: 'Sundays', 
    location: 'Relief Society Room',
  },
  {
    id: 'primary', name: 'Primary', category: 'Children',
    description: 'A loving place for children to learn about Jesus Christ and grow together.', icon: '✦', accentColor: '#e1a447',
    googleDocUrl: 'https://docs.google.com/document/d/1example-primary/preview', meetingTime: 'Sundays', 
    location: 'Primary Room',
  },
  {
    id: 'sunday-school', name: 'Sunday School', category: 'Learning',
    description: 'Explore scripture and strengthen your understanding through shared learning.', icon: '□', accentColor: '#7f986d',
    googleDocUrl: 'https://docs.google.com/document/d/1example-sunday-school/preview', meetingTime: 'Sundays', 
    location: 'Classrooms',
  },
  {
    id: 'young-mens', name: 'Young Mens', category: 'Youth',
    description: 'Grow in faith, friendship, and service with young men in the ward.', icon: '+', accentColor: '#5c82a0',
    googleDocUrl: 'https://docs.google.com/document/d/1example-young-mens/preview', meetingTime: 'Sundays and activities', 
    location: 'Meetinghouse',
  },
  {
    id: 'young-womens', name: 'Young Womens', category: 'Youth',
    description: 'Build lasting friendships and faith through learning, service, and fun.', icon: '◇', accentColor: '#b97865',
    googleDocUrl: 'https://docs.google.com/document/d/1example-young-womens/preview', meetingTime: 'Sundays and activities', 
    location: 'Meetinghouse',
  },
]
