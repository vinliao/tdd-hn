import HomePage from '@/pages/HomePage'
import CommentPage from '@/pages/CommentPage'

export const routes = [
  { path: '/', component: HomePage },
  { path: '/comment/:id', component: CommentPage },
]