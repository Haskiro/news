import VueRouter from 'vue-router';
import ArticlesList from '../pages/ArticlesList';
import MainPage from '../pages/MainPage';
import ArticleDetails from '../pages/ArticleDetails';
import GalleryPage from '../pages/GalleryPage';
import MyProfile from '../pages/MyProfile';
import EditProfilePage from '../pages/EditProfilePage';
import RegistrationPage from '../pages/RegistrationPage';
import AuthenticationPage from '../pages/AuthenticationPage';

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
        {
            path: '/gallery',
            component: GalleryPage,
            name: 'GalleryPage',
        },
        {
            path: '/profile',
            component: MyProfile,
            name: 'MyProfile',
        },
        {
            path: '/edit-profile',
            component: EditProfilePage,
            name: 'EditProfilePage',
        },
        {
            path: '/reg',
            component: RegistrationPage,
            name: 'RegistrationPage',
        },
        {
            path: '/auth',
            component: AuthenticationPage,
            name: 'AuthenticationPage',
        },
    ]
})

export default router;