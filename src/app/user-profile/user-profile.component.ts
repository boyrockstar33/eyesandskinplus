import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EspService } from '../shared/services/esp.service';
import { Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';


@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
	
	
	patientdata: any = {};
	response: any = {};
	
	constructor(private _router: Router, private _EspService: EspService) {
	}
	
	ngOnInit(){}
	
	
	
	onSubmit() {
		if(this.patientdata){
			// console.log(this.patientdata)
			
			
			
			this._EspService.postData(this.patientdata).subscribe(response=>{
				this.response=response
				console.log(this.patientdata)
				
				if(this.response.success){
					swal(
						'Success!',
						// this.enquiryData.message,
						'success'
					)
					//   this._router.navigate(['/matches/' + this.id])
				}
				else{
					swal(
						'Error!',
						// this.enquiryData.message,
						'error'
					)
				}
			})
			
			
			// this.patientdata = {};
		}
	}
}
