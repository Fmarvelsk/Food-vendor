import WithCss from '../../styles/GraphLine.module.css'

const SavedAcc = (prop) =>{  
    const classes = WithCss
    return(<>
        <div className="merchant-header">
      <img src={prop.save.pay} width="35px" height="35px" alt="saved"/>
      <div className={classes.acc}>
        <span>{prop.save.name}</span>
      <span className={classes.pay}>{prop.save.method}</span>
      </div>
      </div>
      <hr/>
      </>
    
    )
}
export default SavedAcc