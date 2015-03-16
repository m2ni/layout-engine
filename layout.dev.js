// javascript document

var layout = {

    info : new Object(),

    create : function(){

        getInfo();

        function getInfo(){
            layout.info.screenWidth = window.innerWidth;
            layout.info.isMobile = checkMobile();

                function checkMobile(){

                    var devices = new Array('BB10', 'BlackBerry', 'iOS', 'iPhone', 'iPod', 'Android', 'Windows CE', 'Windows Phone', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'HTC', 'Hwawei', 'Lumia');

                    for( var word in devices ){
                        if( navigator.userAgent.match( devices[word] ) != null ){
                            return true;
                            break;
                        }
                    }

                    return false;

                }
        }

        window.addEventListener('resize', getInfo);

    },

    // methods
    column : function(){
        var columns = document.querySelectorAll('.column');
        if( typeof columns === 'object' && columns.length != 0 ){
            console.log('a');
        }
    }

}
