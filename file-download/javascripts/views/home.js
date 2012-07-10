function HomeView() {

    this.init = function () {
        $("li").on("tap", function (evt) {
            var link = this.getAttribute("data-link");
            bc.device.navigateToView(link);
        });
    };

    this.refresh = function () {
        //
    };

}