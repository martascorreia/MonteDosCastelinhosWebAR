export const setOrientation = (type) => {
    const isMobile = navigator.userAgentData.mobile;
    if (!isMobile) return;

    if (type == "landscape") {
        screen.orientation.lock("landscape-primary")
            .then(function () {
            })
            .catch(function (error) {
            });
    } else {
        screen.orientation.lock("portrait-primary")
            .then(function () {
            })
            .catch(function (error) {
            });
    }
}