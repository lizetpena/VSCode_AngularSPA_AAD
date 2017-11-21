'use strict';
angular.module('todoApp')
.factory('todoListSvc', ['$http', function ($http) {
    return {
        getItems : function(){
            return $http.get('https://localhost:44321/api/TodoList');
        },
        getItem : function(id){
            return $http.get('https://localhost:44321/api/TodoList/' + id);
        },
        postItem : function(item){
            return $http.post('https://localhost:44321/api/TodoList/',item);
        },
        putItem : function(item){
            return $http.put('https://localhost:44321/api/TodoList/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: 'https://localhost:44321/api/TodoList/' + id
            });
        }
    };
}]);