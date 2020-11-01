class Store {
    constructor() {
        this.state = {
            id: "",
            title: "",
            isCompleted: false,
        };
        this.subscribers = [];
    }

    dispatch = (action) => {
        this.reducer(this.state, action);
        this.notify();
    };

    subscribe = (func) => {
        this.subscribers.push(func);
    };

    notify = () => {
        this.subscribers.forEach((subscriber) => {
            subscriber(this.state);
        });
    };

    reducer = (state, action) => {
        switch (action.type) {
            case "ADD_TITLE":
                this.state = {
                    ...this.state,
                    id: Date.now(),
                    title: action.payload,
                    isCompleted: false,
                };
        }
    };
}

export default Store;
