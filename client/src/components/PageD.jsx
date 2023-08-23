import './styles/PageD.css';
function PageD(props) {
    return (
        <div className="col-sm-12 col-md-12 col-xl-12 col-xxl-6 p-3">
            <div className="p-3">
                <p className='pageD'>
                    {props.children}
                </p>
            </div>
        </div>
    );
}

export default PageD;