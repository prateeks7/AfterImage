import './styles/PageHead.css';
function PageHead(props) {
    return (
        <div className="col-12 justify-content-center p-5 row">
                <div className={props.children.split(' ')[1] == null ? "col-xxl-12 col-xl-12 col-md-12 col-sm-12" : "col-xxl-6 col-xl-6 col-md-12 col-sm-12"} >
                    <div className={props.children.split(' ')[1] == null ?  "d-flex justify-content-center" : "d-flex justify-content-sm-center justify-content-md-center justify-content-xl-end justify-content-xxl-end" }>
                        <h1>
                            {props.children.split(' ')[0]}
                        </h1>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12" >
                    <div className="d-flex justify-content-sm-center justify-content-md-center justify-content-xl-start justify-content-xxl-start" >
                        <h1>
                            {props.children.split(' ')[1]}
                        </h1>
                    </div>
                </div>
        </div>
    );
}

export default PageHead;