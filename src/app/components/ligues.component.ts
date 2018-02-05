import { Component, OnInit } from '@angular/core';
import {LiguesServices} from '../services/ligues.services'
import { ligueModel } from '../models/ligueModel'
@Component({
	selector:'ligues',
	templateUrl: '../templates/ligues.component.html',
	moduleId: module.id
})

export class liguesComponent implements OnInit{
	
	public liguesList : Array<ligueModel> = [];

	constructor(private service:LiguesServices){}
	
	ngOnInit(){
		this.service.getLigues().subscribe(
			data => {this.liguesList = data;},
			error =>{alert('Error');} 
	 )
		
	}
}