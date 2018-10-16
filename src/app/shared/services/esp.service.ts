import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()


export class EspService {
  
  private _httpHeaders;
  
  apiUrl:string=environment.apiUrl
  constructor(private http: HttpClient) {
    this._httpHeaders = {
      headers: new HttpHeaders({
        //    "x-auth-token": JSON.parse(sessionStorage.getItem('currentUser')).token,
        "Content-Type" : "application/json"
      })
    };
  }
  
  
  getData(){
    return this.http.get(this.apiUrl + '/notes');
  }
  
  postData(object){
    return this.http.post(this.apiUrl + '/notes', object, this._httpHeaders);
  }
  
  //   getOngoingMatch(){
  //     return this.http.get(this.apiUrl + '/get_ongoing_matches', this._httpHeaders);
  //   }
  
  //   getTeamId(newid){
  //     return this.http.get(this.apiUrl1 + '/get/' + newid, this._httpHeaders);
  //   }
  
  //   getMatchRate(newid){
  //     return this.http.get(this.apiUrl2 + '/get/' + newid, this._httpHeaders);
  //   }
  
  //   postSessionRate(sessionRate){
  //     return this.http.post(this.apiUrl1 + '/create', sessionRate, this._httpHeaders);
  //   }
  
  //   postMatchRate(matchRateDataSend){
  //     return this.http.post(this.apiUrl2 + '/create', matchRateDataSend, this._httpHeaders);
  //   }
  
}
