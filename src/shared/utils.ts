import { ENV } from '@env';
export default class Utils {

  static lookup(array) {
    var token = 'id';
    // Identify if it's an array of items (item._id) or category (category.id)
    if (array[0] && array[0].hasOwnProperty('_id'))
      token = '_id';
    return this.lookupByToken(array, token);
  }

  static lookupByToken(array, token) {
    var lookup = [];
    for (var i = 0, len = array.length; i < len; i++) {
      lookup[array[i][token]] = array[i];
    }
    return lookup;
  }

  static imgServerPrefix(src: string) {
    let onServer = false;
    for (let source in ENV.imgServer.sources) {
      const prefix = ENV.imgServer.sources[source].prefix;
      if (src.includes(prefix)) {
        const path = src.split(prefix);       
        src = `${source}${path[1]}`;
        console.log(src);
        onServer = true;
      } 
    }    
    return (onServer) ? ENV.imgServer.url + src : src;
  }
}