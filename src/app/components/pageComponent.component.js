module.exports = function(ngModule){
    let pageComponentCtrl = [function(){
        let $ctrl = this;
        $ctrl.$onInit = function(){
            $ctrl.title = "Welcome to the Main Component";
            $ctrl.showGreeterComponent = false;
            $ctrl.username = null;
        };
    }];
    let pageComponentCmpt = {
        controller: pageComponentCtrl,
        template: require('./pageComponent.component.html')
    };

    ngModule.component('nilaPageComponent', pageComponentCmpt);
};