import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { TodoService, Todo } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})

export class TodoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  private _searchTodo: string = '';
  timePassed: boolean = false;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    console.log('AppComponent: Constructor');
  }

  ngOnInit(): void {
    this.timePassed = this.route.snapshot.data['timePassed'] || false;
    if (!this.timePassed) {
      console.log('OnInit called_______________');
      this.todoService.getTodos().subscribe((data) => {
        this.todos = data;
        this.filteredTodos = this.todos;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTodo']) {
      this.filteredTodos = this.filterTodos();
      
    }
    console.log('OnChanges called --------------------', changes);
  }
  
  handleInputChange(event:any): void {
    this._searchTodo = event.target.value;
    this.filteredTodos = this.filterTodos();
  } 

  filterTodos(): Todo[] {
    console.log("=========filterTodos called===========")
    const searchTerm = this._searchTodo.trim();
    if (!searchTerm) {
      return this.todos;
    }
    return this.todos.filter(todo => {
      const titleMatch = todo.title.includes(searchTerm);
      return titleMatch;
    });
  }

  ngDoCheck(): void {
    console.log('DoCheck called ######################');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit called !!!!!!!!!!!!!!!!!!!!');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called %%%%%%%%%%%%%%%%%%%%%%%%%%%')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit called %%%%%%%%%%%%%%%%%%%%%%%%%%%')
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked called ^^^^^^^^^^^^^^^^^^^^^^^")
  }

  ngOnDestroy() : void {
    console.log("OnDestroy called &&&&&&&&&&&&&&&&&&&&")
  }
}
