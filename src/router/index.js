import VueRouter from 'vue-router'
import ArticlesList from '../pages/ArticlesList'
import MainPage from '../pages/MainPage'
import ArticleDetails from '../pages/ArticleDetails'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/articles',
            component: ArticlesList
        },
        {
            path: '/articles/:id',
            component: ArticleDetails,
            name: 'ArticleDetails',
            props: true
        },
    ]
})

export default router;