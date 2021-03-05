# SipmpleCrm

## for Lazy Loading component command
`ng g module payments --route payments --module app.module`

To guard any route we can try this cmd:-  
`ng g guard auth`
then use the guard in the route as:-

`  
  {    
    path: 'clients',    
    component: ClientsComponent,   
    canActivate: [AuthGuard]    
  }    
`  

