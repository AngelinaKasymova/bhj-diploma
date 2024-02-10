class Account extends Entity {
  static URL = '/account'; 

  static get(id = '', callback){
    const url = `${this.URL}/${id}`;
    this.createRequest('GET', url, null, callback);
  }
}
