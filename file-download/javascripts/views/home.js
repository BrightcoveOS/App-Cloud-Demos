function HomeView() {

    // initialize this view
    this.init = function () {
    	// add tap handlers to the navigational buttons
        $("li").on("tap", function (evt) {
            var link = this.getAttribute("data-link");

            bc.device.navigateToView(link);
        });
    };

    // refresh this view when the user enters it
    this.refresh = function () {
        //
    };

}