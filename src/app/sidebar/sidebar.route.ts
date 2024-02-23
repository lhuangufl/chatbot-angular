import { Route } from "@angular/router";
import { ChatComponent } from "../chat/chat.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HubComponent } from "../hub/hub.component";
import { QueryComponent } from "../query/query.component";
import { KnowledgeComponent } from "../knowledge/knowledge.component";


export const SIDEBAR_ROUTE: Route[] = [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'chat', component: ChatComponent },
        { path: 'hub', component: HubComponent },
        { path: 'query', component: QueryComponent },
        { path: 'knowledge', component: KnowledgeComponent },
]
