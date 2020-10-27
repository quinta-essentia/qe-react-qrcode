class LocalStorageMock {
    constructor() {
      this.storage = {};
    }

    clear() {  
      this.storage = {};
    }
  
    getItem(key) { 
      return this.storage[key] || null;
    }
  
    setItem(key, value) {
      this.storage[key] = value.toString();
    }
    
    removeItem(key) {
      delete this.storage[key];
    }
  };
    
  global.localStorage = new LocalStorageMock;