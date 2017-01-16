import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = 'd7ec519bcf38037d9708';
    private client_secret ='9b8aec9162e36a700eceba197c33f194923f5010';

    constructor(private _http: Http){

    }

    getUser(){
        return this._http.get('http://api.github.com/users/'
            +this.username
            +'?client_id='+this.client_id
            +'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'
            +this.username
            +'/repos?client_id='+this.client_id
            +'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }
}