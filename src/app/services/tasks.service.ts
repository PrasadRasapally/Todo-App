import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {
    constructor(private http: Http){}

    getTasks(url : string) : Promise<any>{
        
        return this.http.get(url + "/tasks")
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(this.handleError);
    }

    handleError(error:any){
        console.log("something went wrong" , error);
    }

    addNewTask(url, task: any, headers: Headers): Promise<any>{
        return this.http.post(url + "/tasks", task, headers)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(this.handleError);
    }

    getTaskWithId(url: string , id: any){
        return this.http.get(url + "/tasks")
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(this.handleError);
    };

    updateTaskWithId(url, request : any, headers: Headers){
        return this.http.put(url + "/tasks/"+request.taskId , request, headers)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(this.handleError);
    }

    deleteTaskWithId(url : any, taskId : any){
        return this.http.delete(url + "/tasks/"+taskId)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(this.handleError);
    }
}