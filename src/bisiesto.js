function es_bisiesto(year){
    if(year % 400 == 0){
        return true;
    }else{
        return false;
    }
}

export default es_bisiesto;