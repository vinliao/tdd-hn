import HomePage from '@/pages/HomePage'
import CommentPage from '@/pages/CommentPage'
import ExampleComponent from '@/components/Example'

export const routes = [
  { path: '/', component: HomePage },
  { path: '/comment/:id', component: CommentPage },
  { path: '/example', component: ExampleComponent },
]