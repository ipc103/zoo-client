class Api {
  static get(url){
    return $.ajax({url: url, method: 'GET'})
  }

  static post(url, data){
    return $.ajax({url: url, method: 'POST', data: data})
  }
}
