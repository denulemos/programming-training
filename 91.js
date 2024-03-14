class Queue {
    constructor(){
        this.dataStore = [];
        this.empty = true;
    }

    enqueue(element){
        this.dataStore.push(element);
        this.empty = false;
    }

    dequeue(){
        this.dataStore.shift();
        if(this.dataStore.length == 0){
            this.empty = true;
        }
    }

    isEmpty() {
        return this.empty;
    }

    print(){
        console.log(this.dataStore);
    }

    itemExists(element){
        return this.dataStore.indexOf(element) > -1;
    }
}