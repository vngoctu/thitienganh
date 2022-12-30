import Home from './components/Home'
import User from './components/User'
import CauHoi from './components/CauHoi'
import Account from './components/Account'

export const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/user', name: 'user', component: User},
    {path: '/account', name: 'account', component: Account},
    {path: '/thi', name: 'thi', component: CauHoi}
]

    
