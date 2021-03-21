export const state = () => ({
    books: [],
    token: null,
    name: 'hello this is my name',
    userId: null
  });
  
//   The mutations will alter the state. The actions can call state commit on the mutation to alter the global state
  export const mutations = {
    setBooks(state,books){
     let collection = Array.from(books);
     console.log(collection)
     collection.forEach((b) => {
         this.state.books.push(b)
     })
    },
    sayHello(state){
        console.log(state.books)
    },
    sendBooking(state, data){
      console.log('this is from the send booking dispatch', data)
    },
    setAuthState(state, data){
      this.state.userId = data.user._id;
      this.state.token = data.token;
    },
    addBook(state,data){
      state.books.push(data);
      console.log(data)
    }
  }

//   the action is triggering in the life cycle hook of the page. Fetches the booking request from the backend and sets state globally 
  export const actions = {
    getBooks(state){
      fetch('http://localhost:8000/booking').then((data) => {
          return data.json();
      }).then((books) => {
        state.commit('setBooks', books);
      })
    },
    checkToken(state){
      if(!this.state.token) {
        console.log('no token available')
        return false;
      }
      else return true;
    },
    setAuth(state,data) {
      console.log( 'this is from set auth ', data)
      state.commit('setAuthState', data);
    },
   
    sendBooking(state,data) {
    
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.state.token}`
        }
      }
      this.$axios.$post('http://localhost:8000/booking' ,{...data},headers).then((data) => {
       state.commit('addBook',data);
      })
    }
}