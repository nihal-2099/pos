export default class Common{



    public static icon(val:string) {

        let icon:any ={
            edit:'edit',
            view:'eye'
        }

        return icon[val]
        
    }

}