import HomePage from '@/pages/HomePage'
import CommentPage from '@/pages/CommentPage'
import UserPage from '@/pages/UserPage'

export const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/comment/:id', component: CommentPage, name: 'comment' },
  { path: '/user/:user', component: UserPage, name: 'user' },
]