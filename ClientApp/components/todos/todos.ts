import Vue from 'vue';
import { Component } from 'vue-property-decorator';
 
interface TodoItem {
    description: string;
    done: boolean;
    id: string;
}
 
@Component
export default class TodoComponent extends Vue {
    todos: TodoItem[];
    newItemDescription: string;
 
    data() {
        return {
            todos: [],
            newItemDescription: null
        };
    }
}