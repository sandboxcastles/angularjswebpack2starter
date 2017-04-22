module.exports = function(ngModule){
    var aboutThisCtrl = [function(){
        let $ctrl = this;
        $ctrl.page = {
            title: 'About This Page Component',
            message: 'This page was completed with only an extremely basic HTML template with angular components.'
        };
    }];
    var aboutThisCmpt = {
        bindings: {},
        template: require('./aboutThis.component.html'),
        controller: aboutThisCtrl
    };
    
    ngModule.component('nilaAboutThis', aboutThisCmpt);
};