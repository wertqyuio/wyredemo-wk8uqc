import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { 
  }
try(data){ 
  return this.http.post('https://api.testwyre.com/v3/swaps?masqueradeAs=user:US_L2RX9FEELY4',data,{
    headers: {
      "Authorization": "Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA",
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}  
// ?masqueradeAs=user:US_HTRLTLDCHG3
try2(data){ 
  return this.http.post('https://api.testwyre.com/v3/transfers',data,{
headers: {
      "Authorization": "Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA"
    }
  });
}
try3(data){ 
  return this.http.post('https://api.testwyre.com/v2/wallets',data,{
headers: {
      "Authorization": "Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA"
    }
  });
}

try4(data){ 
  return this.http.post('https://api.testwyre.com/v3/users',data,{
headers: {
      "Authorization": "Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA"
    }
  });
}

try5(data){ 
  return this.http.post('https://api.testwyre.com/v3/rates',data,{
headers: {
      "Authorization": "Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA"
    }
  });
}

createPaymentMethod(data){ 
  return this.http.post('https://api.testwyre.com/v2/paymentMethods',data,{
headers: {
      "Authorization": "Bearer SK-ZMPEY2V3-3NTVDDZ9-PDAECALF-9PYZWUXA"
    }
  });
}



getSingle(id){ 
  return this.http.get('https://jsonplaceholder.typicode.com/posts/');
}
getUpdateUser(data){ 
  console.log(data);
  return this.http.put('https://jsonplaceholder.typicode.com/posts/'+data,{
headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
}
}