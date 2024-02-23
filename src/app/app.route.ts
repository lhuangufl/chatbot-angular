import { Route } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";


export const APP_ROUTE: Route[] = [
        {
                path: '',
                component: SidebarComponent,
                loadChildren: () => import('./sidebar/sidebar.route').then((m) => m.SIDEBAR_ROUTE),
        },
];
