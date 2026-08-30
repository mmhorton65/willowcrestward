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
    id: 'announcements', name: 'Announcements', category: 'Information',
    description: 'Stay informed with the latest news, events, and updates from our ward.', icon: '!', accentColor: '#e74c3c',
    googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vSe0_27CnXqZMxURa3JX104qtsegHwFaXLM4kD54jCa1Z7OzXlv7Nmukcv0L4I_EHNP525Kv50Gfa8v/pub?embedded=true', meetingTime: 'Sundays', 
    location: 'Chapel',
  },
  {
    id: 'sign-ups', name: 'Sign Ups', category: 'Information',
    description: 'Sign up for various activities and events in our ward.', icon: '✓', accentColor: '#8b9d83',
    googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vT8jMo92-aRT43aSQFq57UnuakA_deQJ5FRtTRtdfuOQZKJDjvKpi_aEmSAsIxhPVV_4r_-RLmcdi0V/pub?embedded=true', meetingTime: 'Sundays', 
    location: 'Chapel',
  },  
  {
    id: 'relief-society', name: 'Relief Society', category: 'Adults',
    description: 'Connect, serve, and strengthen one another in a caring community.', icon: '○', accentColor: '#9b7591',
    googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vQeQ2LrTq5YZS9JrWVVPVjJZlG3h-j7Kv3XKckiZYY3x8tBua4z91cfpwdluAfqsNkcnPJWJRxUc62S/pub?embedded=true', meetingTime: 'Sundays', 
    location: 'Relief Society Room',
  },
  {
    id: 'young-mens', name: 'Young Mens', category: 'Youth',
    description: 'Grow in faith, friendship, and service with young men in the ward.', icon: '+', accentColor: '#5c82a0',
    googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vS1taw_SwziPsby8pB9Qn6EacqwQLLtKIwDbhPwqYoValDOxDGjl-nHHOXrn9wNRtCPAb2poYPQcD6a/pub?embedded=true', meetingTime: 'Sundays and activities', 
    location: 'Meetinghouse',
  },
  {
    id: 'young-womens', name: 'Young Womens', category: 'Youth',
    description: 'Build lasting friendships and faith through learning, service, and fun.', icon: '◇', accentColor: '#b97865',
    googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vQUBBZdYjq7UuxGf7-p7mZ9pBJhMmBya2XxokZ1JCQ6M9efLXbo_HzVXoctIscGA3hrw-zaV95K_aNm/pub?embedded=true', meetingTime: 'Sundays and activities', 
    location: 'Meetinghouse',
  },
  {
    id: 'sunday-school', name: 'Sunday School', category: 'Learning',
    description: 'Explore scripture and strengthen your understanding through shared learning.', icon: '□', accentColor: '#7f986d',
    googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vR17nHDABSGPcEoblWk3ifIhEMU4XQi8VjaMcV0cmzisx7VYkfAzTj0a857OiyBAsoHO7TbAwwk3dAr/pub?embedded=true', meetingTime: 'Sundays', 
    location: 'Classrooms',
  },
  {
    id: 'elders-quorum', name: 'Elders Quorum', category: 'Adults',
    description: 'Build faith and friendship through service, learning, and fellowship.', icon: '↗', accentColor: '#6b4423',
    googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vSR0CLnmepaL1L-QkNKdSBA0OIi8Kyi1Tpx2tWH4v4q73JvYuPBX6TiaF_a7n76RvhgPF7r8nUdlsJK/pub?embedded=true', meetingTime: 'Sundays', 
    location: 'Stage',
  },
  {
  id: 'primary', name: 'Primary', category: 'Children',
  description: 'A loving place for children to learn about Jesus Christ and grow together.', icon: '✦', accentColor: '#e1a447',
  googleDocUrl: 'https://docs.google.com/document/d/e/2PACX-1vQghqDYh6fSV5Swyuo99C8pH8z_h5b6gj8tWYLGlZU2nWsbBAMbFt23ci-xTK38hhzwsDtkzc1j6p_c/pub?embedded=true', meetingTime: 'Sundays', 
  location: 'Primary Room',
  },
]
