import axios from 'axios'

export const state = () => ({
  books: [],
  userBooks: null,
  token: null,
  userId: null,
  isAdmin: false,
  name: '',
  phonenumber: '',
  firstname: '',
  lastname: '',
  email: ''
});

//   The mutations will alter the state. The actions can call state commit on the mutation to alter the global state
export const mutations = {
  setBooks(state, books) {
    let collection = Array.from(books);
    console.log(collection)
    collection.forEach((b) => {
      this.state.books.push(b)
    })
  },
  setUserBooks(state, books) {
    state.userBooks = books;
  },
  sayHello(state) {
    console.log(state.books)
  },
  sendBooking(state, data) {
    console.log('this is from the send booking dispatch', data)
  },
  setAuthState(state, data) {
    console.log('====================================')
    console.log(data.user)
    this.state.userId = data.user.userId;
    this.state.token = data.token;
    this.state.isAdmin = data.user.isAdmin;
    this.state.firstname = data.user.firstname;
    this.state.phonenumber = data.user.phonenumber;
    this.state.lastname = data.user.lastname;
    this.state.email = data.user.email;
  },
  setAuthStateLogin(state, data) {
    this.state.firstname = data.firstname;
    this.state.lastname = data.lastname;
    this.state.email = data.email;
    this.state.phonenumber = data.phonenumber;
    this.state.userId = data.userId;
    this.state.token = data.token;
    this.state.isAdmin = data.isAdmin;

  },
  addBook(state, data) {
    state.books.push(data);
    console.log(data)
  },
  getUserBooks(state, data){
    console.log(data, "======= this is the get user books function");
    state.userBooks = data;
  }
}

//   the action is triggering in the life cycle hook of the page. Fetches the booking request from the backend and sets state globally 
export const actions = {
  getBooks(state) {
    fetch('http://localhost:8000/booking').then((data) => {
      return data.json();
    }).then((books) => {
      state.commit('setBooks', books);
    })
  },

  checkToken(state) {
    if (!this.state.token) {
      console.log('no token available')
      return false;
    } else return true;
  },
  setAuth(state, data) {
    state.commit('setAuthState', data);
  },
  async setAuthLogin(state, data) {
    await state.commit('setAuthStateLogin', data);
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.token}`
      }
    }
    // make conditional. Check if user is admin
    if(data.isAdmin) {
      this.$axios.$get('http://localhost:8000/booking/',headers).then((data) => {
      state.commit('setBooks',data)
    });
    }
    this.$axios.$post('http://localhost:8000/booking/finduserbooking', {
      userId: data.userId
    }, headers).then((data) => {
      state.commit('getUserBooks',data)
    });
  },

  sendBooking(state, data) {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.token}`
      }
    }
    this.$axios.$post('http://localhost:8000/booking', {
      ...data
    }, headers).then((data) => {
      state.commit('addBook', data);
    })
  }
}
