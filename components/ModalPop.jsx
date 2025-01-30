import "../componentsStyle/ModalPop.css"
export default function ModalPop({isVisable, errorMessage=null, nameUser}) {
    if (isVisable){
        return (
            <div className="bg-container">
                <div className={errorMessage ? "contentError" : "content"}>
                    {/* <h1>The form has been submitted successfully</h1> */}
                    <h1>{errorMessage != null ? (errorMessage) : (<> The form has been submitted successfully, <span className="span">{nameUser} 😊</span> </>)}</h1>
                </div>
            </div>
        )
    }else{
        return (<></>)
    }
} ;
