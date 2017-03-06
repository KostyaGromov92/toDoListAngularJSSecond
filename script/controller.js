var app = angular.module('myApp',[]);

app.controller('ListController', function ($scope) {
$scope.todos = [
    {text:'Learn AngularJS', done:false},
    {text: 'Build an app', done:false}
  ];

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };


  $scope.addTodo = function () {

      if($scope.formTodoText == undefined) {
        return;
      } else {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
      }

  };

    $scope.clearCompleted = function () {
        angular.forEach($scope.todos, function (todo) {
          return todo.done = false;
        });
    };
 });