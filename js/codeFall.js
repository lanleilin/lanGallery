			$(document).ready(function() {

				//判断移动端还是PC端
				function isPC() {
					var userAgentInfo = navigator.userAgent;
					var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
					var flag = true;
					for(var v = 0; v < Agents.length; v++) {
						if(userAgentInfo.indexOf(Agents[v]) > 0) {
							flag = false;
							break;
						}
					}
					return flag;
				}

				if(!isPC()) {
					// 手机
					var s = window.screen;
					console.log(s);
					var width = s.width;
					q.width=s.width;
					
					var height = q.height;
					var yPositions = Array(300).join(0).split('');
					var ctx = q.getContext('2d');
					var draw = function() {
						ctx.fillStyle = 'rgba(0,0,0,.05)';
						ctx.fillRect(0, 0, width, height);
						ctx.fillStyle = 'lightgreen';
						ctx.font = '1rem Georgia';
						yPositions.map(function(y, index) {
							text = String.fromCharCode(1e2 + Math.random() * 33);
							x = (index * 10) + 10; //x距离
							q.getContext('2d').fillText(text, x, y);
							if(y > Math.random() * 1e4) {
								yPositions[index] = 0;
							} else {
								yPositions[index] = y + 6;
							}
						});
					};
					RunMatrix();

					function RunMatrix() {
						Game_Interval = setInterval(draw, 40);
					}
				} else {
					var s = window.screen;
					//      var q=$('#q');
					console.log(typeof($("#q")));
					console.log(document.getElementById("q"));

					var width = q.width = s.width;
					q.height=600;
					var height = q.height;
					var yPositions = Array(300).join(0).split('');
					var ctx = q.getContext('2d');
					var draw = function() {
						ctx.fillStyle = 'rgba(0,0,0,.05)';
						ctx.fillRect(0, 0, width, height);
						ctx.fillStyle = 'lightgreen';
						ctx.font = '10pt Georgia';
						yPositions.map(function(y, index) {
							text = String.fromCharCode(1e2 + Math.random() * 33);
							x = (index * 10) + 10; //x距离
							q.getContext('2d').fillText(text, x, y);
							if(y > Math.random() * 1e4) {
								yPositions[index] = 0;
							} else {
								yPositions[index] = y + 10;
							}
						});
					};
					RunMatrix();

					function RunMatrix() {
						Game_Interval = setInterval(draw, 50);
					}
				}
				isPC();
			});