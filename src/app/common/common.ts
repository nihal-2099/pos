export default class Common{



    public static icon(val:string) {

        let icon:any ={
            edit:'edit',
            view:'eye',
            delete:'trash-2'
        }

        return icon[val]

    }

    public static sideShow(){
    if( window.location?.pathname == '/layout/sales/sale'){
        return  true
    }  
    else{
        return false
    }

    }

}
