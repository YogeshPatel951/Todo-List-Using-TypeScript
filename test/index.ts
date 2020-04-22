import { expect } from 'chai'
import TodoModel from '../src/todoModel'
import TodoCollection from '../src/todoCollection'


describe('Todo Model',()=>{
    it('It Should Return an Object that Contains following fields like : ID, Title, Company',()=>{
        const newTodo = TodoModel(0,'create app');
        expect(newTodo).to.eql({
            id:0,
            title:'create app',
            completed:false
        })
    });
});




describe('Todo Collection',()=>{

    it('It Should return an array of 3 items ',()=>{
        const newTodoCollection = TodoCollection('create app','reat','gym');
        expect(newTodoCollection.get().length).to.equal(3);
    });

    

    it('It Should Correct ToDo Object ',()=>{
        const newTodoCollection = TodoCollection('create app','react','gym');
        expect(newTodoCollection.get()[1]).to.eql({
            id:1,
            title:'react',
            completed:false

        });
    });

   
    it('It Should Add Todo Object ',()=>{
        const newTodoCollection = TodoCollection();
        newTodoCollection.add('learn something');
        expect(newTodoCollection.get()[0]).to.eql({
            id:0,
            title:'learn something',
            completed:false
        });
    });

     
    it('It Should Remove Todo Object ',()=>{
        const newTodoCollection = TodoCollection('create app');
        newTodoCollection.remove(0);
        expect(newTodoCollection.get().length).to.equal(0);
    });

     

    it('It Should Toggle Todo Object ',()=>{
        const newTodoCollection = TodoCollection('create app');
        newTodoCollection.toggleCompleted(0)
        expect(newTodoCollection.get()[0]).to.eql({
            id:0,
            title:'create app',
            completed:true
        });
    });



});


