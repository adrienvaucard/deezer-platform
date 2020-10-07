import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	results = [];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		let searchButton = document.getElementById("search");
		searchButton.addEventListener("click", () => {
			let value = (<HTMLInputElement>document.getElementById('searchBar')).value;
			console.log(value);


			this.http.get("/api/search?q=" + value).subscribe(
				(data: any) => {
					console.log(data);
					// data.data.forEach(result => {
					// 	this.results.push(result)
					// });
					this.results = data.data;
					console.log(this.results);
				},
				error => {
					console.log(error);
				}
			);
		})
	}

}
