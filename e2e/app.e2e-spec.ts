import { TodoListProjectPage } from './app.po';

describe('todo-list-project App', () => {
  let page: TodoListProjectPage;

  beforeEach(() => {
    page = new TodoListProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
