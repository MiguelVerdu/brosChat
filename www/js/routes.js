angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('galeria', {
    url: '/galeria/:galeriaid',
    templateUrl: 'templates/galeria.html',    
    controller: 'galeriaCtrl'
  })

  .state('menu.filtro', {
    url: '/filtro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/filtro.html',
        controller: 'filtroCtrl'
      }
    }
  })

  .state('menu.acompanhantes', {
    url: '/acompanhantes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acompanhantes.html',
        controller: 'acompanhantesCtrl'
      }
    }
  })

  .state('menu.editarPerfil', {
    url: '/editperfil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editarPerfil.html',
        controller: 'editarPerfilCtrl'
      }
    }
  })

  .state('menu.perfil', {
    url: '/perfil/:perfilid',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu.notificaEs', {
    url: '/notificacoes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notificaEs.html',
        controller: 'notificaEsCtrl'
      }
    }
  })

  .state('menu.chat', {
    url: '/chat',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('menu.torneSeDestaque', {
    url: '/destaque',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torneSeDestaque.html',
        controller: 'torneSeDestaqueCtrl'
      }
    }
  })

  .state('menu.termosECondiEs', {
    url: '/termo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/termosECondiEs.html',
        controller: 'termosECondiEsCtrl'
      }
    }
  })

  .state('menu.sair', {
    url: '/sair',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sair.html',
        controller: 'sairCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/login')

  

});