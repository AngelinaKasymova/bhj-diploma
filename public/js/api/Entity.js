class Entity {
  static URL = '';

  static list(data, callback){
    this.createRequest('GET', this.URL, data, callback);
  }

  static create(data, callback) {
    this.createRequest('PUT', this.URL, data, callback);
  }

  static remove(data, callback ) {
    this.createRequest('DELETE', this.URL, data, callback);
  }
}
