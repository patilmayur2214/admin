export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'student',
        data: {
          menu: {
            title: 'Students',
            icon: 'fa-user',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          
          {
            path: '',
            data: {
              menu: {
                title: 'Add Student',
              }
            }
          },
            {
            path: 'smarttables',
            data: {
              menu: {
                title: 'View Student',
              }
            }
          }
        ]
      },
      
      {
        path: 'Professor',
        data: {
          menu: {
            title: 'Proffessor',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Add Professor',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'View Professor',
              }
            }
          }
        ]  
      },
      
    
      
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      }
    ]
  }
];
