class Animal {
  static all(){
    return Api.get(this.BASE_URL)
  }

  static create(opts){
    return Api.post(this.BASE_URL, opts)
  }
}

Animal.BASE_URL = 'http://localhost:3000/api/v1/animals'
