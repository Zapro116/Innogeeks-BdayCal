const Date=(props)=>{
    const {date}= props;
    const month = date.getUTCMonth() + 1; //months from 1-12
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return(
        <h3 >
            <span>{month+"/"+day+"/"+year}</span>
        </h3>
    )
}

export default Date;