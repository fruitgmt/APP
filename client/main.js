/* The first debugging task of Assignment II

	 Basic Linguistic Web Application Development
	 Fall 2018, Dept. Foreign Languages and Literature

	 National Tsing Hua University, Taiwan */

/*	 進行步驟 
	 1. 建立一個新的Meteor應用程式
	 2. 刪除client資料夾下的main.html與main.css
	 3. 將每一個作業js檔案個別改名為main.js放到client資料夾下
	 4. 啟動Meteor應用程式，測試Meteor應用程式及JavaScript執行是否正常              */

/*	本段JavaScript的程式碼的目的是在10次的迴圈裡面，每一次隨機產生兩組0~1之間的
	的數字，然後判斷乘積是否小於0.25，印出對應的訊息								*/

var randomNum1 = 0, /*bug*/ randomNum2 = 0;

for(let cycle = 0 ; cycle <10; cycle++) {
	randomNum1 = Math.random();	//產生第一組隨機數字，此行沒有bug
	randomNum2 = Math.random(); //產生第二組隨機數字，此行沒有bug

	let product = randomNum1*/*bug*/randomNum2;

	if(product < 0.25) //bug
	 {
		console.log("The number "+product+" from Cycle "+cycle+/*bug*/" is very small!");
	}
	else {
		console.log("The number "+product+" from Cycle "+cycle+" is NOT small!");//bug
		
	}
}