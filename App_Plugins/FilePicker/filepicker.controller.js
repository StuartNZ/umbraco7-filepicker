angular.module("umbraco").controller("uComponents.FilePickerController",
	function ($scope, dialogService) {
	    $scope.openPicker = function (folder) {
	        dialogService.open({
	            template: "/App_Plugins/FilePicker/filepickerdialog.html",
	            scope: $scope,
	            callback: populate
	        });
	    };
        function populate(data){
			$scope.model.value = $scope.model.config.folder + data;
		};
	   
	});

angular.module("umbraco").controller("uComponents.FolderPickerController", 
	function($scope, dialogService){
		$scope.openPicker = function(){
			dialogService.open({
				template: "/App_Plugins/FilePicker/folderpickerdialog.html",
				scope: $scope,
				callback: populate
			});
		};

		function populate(data){
			$scope.model.value = "/"+ data;
		};
});


angular.module("umbraco").controller("uComponents.FolderPickerDialogController", 
	function($scope, dialogService){

		$scope.dialogEventHandler = $({});

		$scope.dialogEventHandler.bind("treeNodeSelect", function(ev, args){
			args.event.preventDefault();
			args.event.stopPropagation();
			$scope.submit(args.node.id);
		});
});