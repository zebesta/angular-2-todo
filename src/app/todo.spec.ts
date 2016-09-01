/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should assign values to todo in constructor', () => {
    let todo = new Todo({
      title: 'Hello',
      complete: true
    });
    expect(todo.title).toEqual('Hello');
    expect(todo.complete).toEqual(true);
  });

});
