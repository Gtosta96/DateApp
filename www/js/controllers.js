var app = angular.module('starter.controllers', []);

function wrongAnswer($ionicPopup) {
	$ionicPopup.alert({
		okType: 'button-royal',
	     title: 'Errou!',
	     template: 'Resposta errada amor, pensa melhor poxa! :('
   });
}

app.controller('pg1', function($scope, $state, $ionicPopup) {

	$scope.help = function(){
		$ionicPopup.alert({
			 okType: 'button-royal',
		     title: 'Oi meu amor! &#9829;',
		     template: '<p>Não sabia como fazer uma surpresa diferente para voc&ecirc;, então, resolvi usar meu conhecimento NERD e fazer isso aqui, <b>espero que goste!</b></p>' +
		    	 	   '<p>O objetivo &eacute; simples, montei um jogo de perguntas e respostas, voc&ecirc; responde se souber, sen&atilde;o, segue as pistas para encontrar as respostas!</p>' +
		    	 	   '<p style="text-align:center"><b>Vamos come&ccedil;ar!</b></p>'
		});
	};
	
	$scope.help();
	
	$scope.submit = function (carolResposta) {
		
		if (carolResposta){
			var respostaCerta = ["03/01/2016", "03/01/16", "3/1/2016", "3/1/16", "03-01-2016", "03-01-16", "3-1-2016", "3-1-16"];
			var ok = false;
			for (var i = 0; i < respostaCerta.length; i++) {
				ok = (carolResposta == respostaCerta[i] ? true : false);
				if (ok) break;
			}
			
			if (ok) {
				$state.go("pg2");
			} else {
				wrongAnswer($ionicPopup);
			}
		}
	}
})

app.controller('pg2', function($scope, $state, $ionicPopup) {
	
	$scope.help = function(){
		$ionicPopup.alert({
			 okType: 'button-royal',
		     title: 'Acertou! &#9829;',
		     template: '<p>Você não era ruim com datas? kkk</p>' +
		     		   '<p>A primeira pergunta não teve pista, pois era sua <b>OBRIGA&Ccedil;&Atilde;O</b> saber!</p>' +
		     		   '<p>A partir de agora haver&atilde;o pistas, vamos l&aacute;!</p>' +
		     		   '<p><b>Pista</b>: Vá para a <b>cozinha</b>!</p>'
		});
	};
	
	$scope.help();
	
	$scope.submit = function (carolResposta) {
		
		if (carolResposta){
			var respostaCerta = "aturo"; 
			var ok = (carolResposta.toLowerCase() == respostaCerta) ? true : false;
			if (ok) {
				$state.go("pg3")
			} else {
				wrongAnswer($ionicPopup);
			}
		}
	}
})

app.controller('pg3', function($scope, $state, $ionicPopup) {
	
	$scope.help = function(){
		$ionicPopup.alert({
			 okType: 'button-royal',
		     title: 'Acertou! &#9829;',
		     template: '<p>Eu te <b>ATURO</b>!</p>' +
		     		   '<p>hahaha, n&atilde;o fique brava, &eacute; apenas uma <b>BRINCADEIRA</b>...</p>' +
		     		   '<p><b>Pista</b>: Vá para a <b>sala</b>!</p>'
		});
	};
	
	$scope.help();
		
	$scope.submit = function (carolResposta) {
		
		if (carolResposta){
			var respostaCerta = "mundo"; 
			var ok = (carolResposta.toLowerCase() == respostaCerta) ? true : false;
			if (ok) {
				$state.go("pg4")
			} else {
				wrongAnswer($ionicPopup);
			}
		}
	}
})

app.controller('pg4', function($scope, $state, $ionicPopup) {
	
	$scope.help = function(){
		$ionicPopup.alert({
			 okType: 'button-royal',
		     title: 'Acertou! &#9829;',
		     template: '<p>Sim, voc&ecirc; &eacute; meu <b>mundo</b> e sabe disso, <b>n&atilde;o sabe</b>?</p>' +
		     		   '<p><b>Pista</b>: Vá para a <b>piscina</b>!</p>'
		});
	}
	
	$scope.help();
	
	$scope.submit = function (carolResposta) {
		
		if (carolResposta){
			var respostaCerta = ["cor", "pele"];
			
			var ok = false;
			for(var i = 0; i < respostaCerta.length; i++){
				ok = (carolResposta.toLowerCase()).indexOf(respostaCerta[i]) >= 0;
				if (ok) break;
			}
			
			if (ok) {
				$state.go("pg5")
			} else {
				wrongAnswer($ionicPopup);
			}
		}
	}
});

app.controller('pg5', function($scope, $state, $ionicPopup) {
	
	$scope.help = function(){
		$ionicPopup.alert({
			 okType: 'button-royal',
		     title: 'Acertou! &#9829;',
		     template: '<p><b>Siiiiim</b>, sua cor de piche, pele de carv&atilde;ozinho, (&#9829;) sua cor/pele &eacute; <b>linda</b>!</p>' +
		     		   '<p><b>Pista</b>: Vá para o <b>banheiro</b>!</p>'
		});
	};
	
	$scope.help();
	
	$scope.submit = function (carolResposta) {
		
		if (carolResposta){
			var respostaCerta = "carinho";
			var ok = (carolResposta.toLowerCase()).indexOf(respostaCerta) >= 0;
			
			if (ok) {
				$state.go("pg6")
			} else {
				wrongAnswer($ionicPopup);
			}
		}
	}
});

var firstTime = true;
app.controller('pg6', function($scope, $state, $ionicPopup) {
	
	$scope.help = function(){
		$ionicPopup.alert({
			 okType: 'button-royal',
		     template: '<p>Por mais que eu n&atilde;o diga, voc&ecirc; &eacute; muito carinhosa comigo, eu adoro seu jeito!</p>' +
		     		   '<p><b>Voc&ecirc; respondeu todas as quest&otilde;es, gostou?</b>!</p>'
		});
	};
	
	$scope.help();
	
	$scope.submit = function () {
		if(firstTime){
			$ionicPopup.alert({
				 okType: 'button-royal',
			     template: '<p>T&aacute; fazendo o que ai parada <b>AMOR<b/>?</p>' +
			     		   '<p class="center"><b>CORRE LOGO PRO MEU QUARTO!</b></p>' +
			     		   '<p class="center"><img style="width: 50%" src="img/img20.png"></img></p>'
			});
		}
		firstTime = false;
		$state.go("pg7")
	}
});

app.controller('pg7', function($scope, $state, $ionicPopup, $timeout) {

    $timeout(function() {
    	$scope.extraGame = true;
    }, 20000);
	
	$scope.submit = function (carolResposta) {
		if (carolResposta){
			var respostaCerta = ["você quer ser o amor da minha vida?", "você quer ser o amor da minha vida", "voce quer ser o amor da minha vida?", "voce quer ser o amor da minha vida"];
			var ok = false;
			for (var i = 0; i < respostaCerta.length; i++){
				ok = (carolResposta.toLowerCase() == respostaCerta[i]) ? true : false;
				if (ok) break;
			}
			
			if (ok) {
				$ionicPopup.alert({
					 okType: 'button-royal',
					 title: 'Acertou! &#9829;',
				     template: '<p class="center">A chave está no meu <b>bolso</b>!</p>'
				});
			} else {
				wrongAnswer($ionicPopup);
			}
		}
	}
	
	$scope.go = function () {
		$state.go("pg1")
	}
});