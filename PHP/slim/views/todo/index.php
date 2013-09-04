<div class="btn-group pull-left">
	<button class="btn btn-primary" ng-click="doneFilter = null" ng-disabled="!doneFilter">Get All</button> <!-- ng-click="resetDoneFilter()" -->
	<button class="btn btn-warning" ng-click="filterByDone()" ng-disabled="doneFilter">Get Done</button>
	<button class="btn btn-info" ng-click="checkAll()">Mark all as done</button>
</div>
<input type="text" ng-model="searchFilter" placeholder="search for todo here">

<form class="form-inline pull-right" ng-submit="addTodo()">
	<input ng-model="newTodo.title" type="text" placeholder="what do you want to do ?" id="newTodoInput">
	<input type="submit" class="btn btn-success" value="Add new todo">
</form>

<div class="clear"></div>

<table class="table table-striped table-hover table-bordered">
	<thead>
		<tr class="graybg">
			<td>Title</td>
			<td>Done</td>
			<td>Action</td>
		</tr>
	</thead>
	<tbody>
        <tr ng-repeat="todo in todos | filter: searchFilter | filter : doneFilter">
            <td>{{todo.title}}</td>
            <td><input type="checkbox" ng-checked="todo.done" ng-model="todo.done" ng-change="toggleTodo(todo)"></td>
            <td><button class="btn btn-danger" ng-click="deleteTodo(todo)">delete</button></td>
        </tr>
    </tbody>
</table>