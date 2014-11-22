function commentController($scope) {
            //initalize default values
        
			$scope.commentList = [{"fullName":"John Doe", "usrComment":"Lorem ipsum dolor sit amet, commodo viverra aliquam dis, sollicitudin varius lacus turpis amet mauris sem. Porta purus molestie ", "count":4}, {"fullName":"Jane Doe", "usrComment":"Lorem ipsum dolor sit amet, commodo viverra aliquam dis, sollicitudin varius lacus Lorem ipsum dolor sit amet, iverra aliquam dis, sollicitudin varius lacus turpis amet.", "count":6}];

			$scope.commentAdd = function(){
				$scope.commentList.push({fullName:$scope.fullName, usrComment:$scope.usrComment, count:$scope.count});
				$scope.fullName = "";
				$scope.usrComment = "";
				$scope.count = "";
			};
            }