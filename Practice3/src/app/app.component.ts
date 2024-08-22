import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { TodoService, Todo } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  private _searchTodo: string = '';

  // @Input()
  // set searchTodo(value: string) {
  //   this._searchTodo = value;
  //   this.filteredTodos = this.filterTodos();
  //   console.log('~~~~~~~~SearchTodo changed:', value);
  //   // this.handleOnChanges();
  // }

  // get searchTodo(): string {
  //   return this._searchTodo;
  // }

  constructor(private todoService: TodoService) {
    console.log('AppComponent: Constructor');
  }

  ngOnInit(): void {
    console.log('OnInit called_______________');
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      this.filteredTodos = this.todos;
    });
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

  // handleOnChanges(): void {
  //   const changes: SimpleChanges = {
  //     searchTodo: {
  //       currentValue: this._searchTodo,
  //       previousValue: null,
  //       firstChange: true,
  //       isFirstChange: () => true
  //     }
  //   };
  //   this.ngOnChanges(changes);
  // }

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
