import { IMenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<IMenuItem> = [
    {
        text: 'Dashboard',
        icon: '',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Settings',
        icon: '',
        route: '/settings',
        submenu: null
    }
]