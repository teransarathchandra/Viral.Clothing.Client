export interface Route {
    path: string;
    component: any;
    isPrivate: boolean;
    forEmployeeOnly: boolean;
}